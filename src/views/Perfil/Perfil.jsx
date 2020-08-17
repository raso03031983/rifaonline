import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardAvatar from "components//Card/CardAvatar";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

import UsuarioAction from "./action.usuario";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

const logado = localStorage.getItem("logado");
const login = localStorage.getItem("login");

export default function UserProfile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { usuario = {}, nwstate } = useSelector((state) => state.Usuario);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    dispatch(UsuarioAction.getUsuario(login));
  }, []);

  useEffect(() => {
    if (usuario.length != undefined) {
      setFormData({
        USUA_LOGIN:
          usuario[0].USUA_LOGIN == undefined ? "" : usuario[0].USUA_LOGIN,
        USUA_NOME:
          usuario[0].USUA_NOME == undefined ? "" : usuario[0].USUA_NOME,
        USUA_CEP: usuario[0].USUA_CEP == undefined ? "" : usuario[0].USUA_CEP,
        USUA_UF: usuario[0].USUA_UF == undefined ? "" : usuario[0].USUA_UF,
        USUA_CIDADE:
          usuario[0].USUA_CIDADE == undefined ? "" : usuario[0].USUA_CIDADE,
        USUA_BAIRRO:
          usuario[0].USUA_BAIRRO == undefined ? "" : usuario[0].USUA_BAIRRO,
        USUA_ENDERECO:
          usuario[0].USUA_ENDERECO == undefined ? "" : usuario[0].USUA_ENDERECO,
      });
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

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Perfil </h4>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Login"
                    id="USUA_LOGIN"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_LOGIN",
                      value: formData.USUA_LOGIN,
                      type: "text",
                      onChange: handleChange("USUA_LOGIN"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nome Completo"
                    id="nome"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_NOME",
                      value: formData.USUA_NOME,
                      type: "text",
                      onChange: handleChange("USUA_NOME"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="Endereço"
                    id="USUA_ENDERECO"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_ENDERECO",
                      value: formData.USUA_ENDERECO,
                      type: "text",
                      onChange: handleChange("USUA_ENDERECO"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={4} sm={4} md={4}>
                  <CustomInput
                    labelText="Bairro"
                    id="USUA_BAIRRO"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_BAIRRO",
                      value: formData.USUA_BAIRRO,
                      type: "text",
                      onChange: handleChange("USUA_BAIRRO"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cidade"
                    id="USUA_CIDADE"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_CIDADE",
                      value: formData.USUA_CIDADE,
                      type: "text",
                      onChange: handleChange("USUA_CIDADE"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="UF"
                    id="USUA_UF"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_UF",
                      value: formData.USUA_UF,
                      type: "text",
                      onChange: handleChange("USUA_UF"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Cep"
                    id="USUA_CEP"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      name: "USUA_CEP",
                      value: formData.USUA_CEP,
                      type: "text",
                      onChange: handleChange("USUA_CEP"),
                      disabled: "true",
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info">Editar</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
