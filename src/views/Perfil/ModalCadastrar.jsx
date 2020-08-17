// tamanhos do modal xs,sm,md,lg,xl

import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/**********************/
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";

// core components
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";

import { AuthContext } from "../../context/auth";
import UsuarioAction from "./action.usuario";
import CEPAction from "../CEP/action.cep";

import Util from "../../Utils/Util";

const propTypes = {
  pageTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  errors: PropTypes.objectOf({}),
  initialData: PropTypes.objectOf({}),
};

const defaultProps = {
  //categorias: [],
  onSubmit: () => {},
  errors: {},
  initialData: {},
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Modal(props) {
  const classes = useStyles();
  const { signed, Login } = useContext(AuthContext);
  const { endereco = {} } = useSelector((state) => state.CEP);
  const { usuario = {}, nwstate } = useSelector((state) => state.Usuario);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);

  React.useEffect(() => {
    setFormData({
      ...formData,
      usua_uf: endereco.uf == undefined ? "" : endereco.uf,
      usua_cidade: endereco.localidade == undefined ? "" : endereco.localidade,
      usua_bairro: endereco.bairro == undefined ? "" : endereco.bairro,
      usua_endereco:
        endereco.logradouro == undefined ? "" : endereco.logradouro,
      usua_complemento:
        endereco.complemento == undefined ? "" : endereco.complemento,
    });
  }, [endereco]);

  React.useEffect(() => {
    if (usuario.length != undefined) {
      if (usuario.length > 0) {
        toast.warning("Login já Cadastrado !!");
        dispatch(UsuarioAction.resetUsuario());
      } else {
        dispatch(UsuarioAction.postUsuario(formData));
        toast.success("Cadastrado Realizado");
        props.closeModal();
      }
    }
  }, [usuario]);

  const handleChange = (name) => (event) => {
    let val = event;
    if (event.target) {
      const { value, checked, type } = event.target;
      val = type === "checkbox" ? checked : value;
    } else if (event.constructor.name == "Object") {
      //caso seja passado um objeto para o formdata o value sempre sera o da primeira posição
      val = event[Object.keys(event)[0]];
    }
    setFormData({ ...formData, [name]: val });
  };

  const handleCad = () => {
    if (
      formData.usua_login == undefined ||
      formData.usua_nome == undefined ||
      formData.usua_cep == undefined ||
      formData.usua_uf == undefined ||
      formData.usua_cidade == undefined ||
      formData.usua_bairro == undefined ||
      formData.usua_endereco == undefined ||
      formData.usua_senha == undefined
    ) {
      toast.warning("Todos os Campos são obrigatórios !!");
    } else {
      dispatch(UsuarioAction.getUsuario(formData.usua_login));
    }
  };

  const handleBuscaCEP = () => {
    if (formData.usua_cep != undefined) {
      dispatch(CEPAction.getCep(formData.usua_cep.replace("-", "")));
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog
        open={props.open}
        onClose={false}
        aria-labelledby="form-dialog-title"
        fullWidth="true"
        maxWidth={props.modalSize}
      >
        <DialogTitle id="customized-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Login"
                  id="usua_login"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_login",
                    value: formData.usua_login,
                    type: "text",
                    onChange: handleChange("usua_login"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Nome"
                  id="usua_nome"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_nome",
                    value: formData.usua_nome,
                    type: "text",
                    onChange: handleChange("usua_nome"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <CustomInput
                  labelText="CEP"
                  id="usua_cep"
                  formControlProps={{
                    fullWidth: true,
                    maxWidth: 8,
                  }}
                  inputProps={{
                    name: "usua_cep",
                    value: formData.usua_cep,
                    type: "text",
                    onChange: handleChange("usua_cep"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <br />
                <Button
                  onClick={() => handleBuscaCEP()}
                  color="warning"
                  size="sm"
                >
                  Busca CEP
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="UF"
                  id="usua_uf"
                  formControlProps={{
                    fullWidth: true,
                    maxWidth: 2,
                  }}
                  inputProps={{
                    name: "usua_uf",
                    value: formData.usua_uf,
                    type: "text",
                    onChange: handleChange("usua_uf"),
                    maxWidth: 2,
                    disabled: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Cidade"
                  id="usua_cidade"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_cidade",
                    value: formData.usua_cidade,
                    type: "text",
                    onChange: handleChange("usua_cidade"),
                    disabled: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Bairro"
                  id="usua_bairro"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_bairro",
                    value: formData.usua_bairro,
                    type: "text",
                    onChange: handleChange("usua_bairro"),
                    disabled: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Endereço"
                  id="usua_endereco"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_endereco",
                    value: formData.usua_endereco,
                    type: "text",
                    onChange: handleChange("usua_endereco"),
                    disabled: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Complemento"
                  id="usua_complemento"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_complemento",
                    value: formData.usua_complemento,
                    type: "text",
                    onChange: handleChange("usua_complemento"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Senha"
                  id="usua_senha"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usua_senha",
                    value: formData.usua_senha,
                    type: "password",
                    onChange: handleChange("usua_senha"),
                  }}
                />
              </GridItem>
            </GridContainer>
          </form>
        </DialogContent>
        <DialogActions>
          {props.onClose}
          <Button onClick={() => handleCad()} color="info">
            Gravar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
