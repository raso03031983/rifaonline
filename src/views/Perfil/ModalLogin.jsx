// tamanhos do modal xs,sm,md,lg,xl

import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/**********************/
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// core components
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";

import { AuthContext } from "../../context/auth";
import UsuarioAction from "./action.usuario";

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

function Modal(props) {
  const { usuario = {}, nwstate } = useSelector((state) => state.Usuario);
  const { signed, Login } = useContext(AuthContext);
  const [formData, setFormData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usuario.length != undefined) {
      if (usuario[0].USUA_LOGIN != formData.usuario) {
        toast.warning("Login Invalido");
      } else if (usuario[0].USUA_SENHA != formData.senha) {
        toast.warning("Senha Invalida");
      } else {
        localStorage.setItem("login", usuario[0].USUA_LOGIN);
        localStorage.setItem("idUser", usuario[0].USUA_ID);
        localStorage.setItem("nome", usuario[0].USUA_NOME);
        localStorage.setItem("logado", true);
        dispatch(UsuarioAction.resetUsuario());
        window.location.href = "/admin/home";
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

  const handleLogin = () => {
    dispatch(UsuarioAction.getUsuario(formData.usuario));
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
                  labelText="Usuário"
                  id="usuario"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "usuario",
                    value: formData.usuario,
                    type: "text",
                    onChange: handleChange("usuario"),
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Senha"
                  id="senha"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "senha",
                    value: formData.senha,
                    type: "password",
                    onChange: handleChange("senha"),
                  }}
                />
              </GridItem>
            </GridContainer>
          </form>
        </DialogContent>
        <DialogActions>
          {props.onClose}
          <Button onClick={() => handleLogin()} color="info">
            Acessar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
