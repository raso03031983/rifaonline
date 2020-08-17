import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

/**********************/
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CustomInput from "components/CustomInput/CustomInput";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";

import RifaAction from "./action.rifa";
import CategoriaAction from "../Categoria/action.categoria";

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
    // margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function Modal(props) {
  const classes = useStyles();
  const { rifa = {}, nwstate } = useSelector((state) => state.Rifas);
  const { ListCategoria = [] } = useSelector((state) => state.Categorias);
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({});
  const [lista, setLista] = React.useState([]);

  React.useEffect(() => {
    dispatch(RifaAction.getRifa(props.param));
  }, []);

  React.useEffect(() => {
    // console.log(formData);
  }, [formData]);

  React.useEffect(() => {
    if (rifa.length > 0) {
      setFormData({
        ...formData,
        RIFA_ID: rifa[0].RIFA_ID,
        RIFA_PROD_NOME: rifa[0].RIFA_PROD_NOME,
        RIFA_PROD_DESC: rifa[0].RIFA_PROD_DESC,
        RIFA_CATEGORIA: rifa[0].RIFA_CATEGORIA,
        RIFA_TOT_NUM: rifa[0].RIFA_TOT_NUM,
        RIFA_DT_SORTEIO: rifa[0].RIFA_DT_SORTEIO,
        RIFA_VENCEDOR_ID: rifa[0].RIFA_VENCEDOR_ID,
      });
    } else {
      setFormData({
        ...formData,
        RIFA_PROD_NOME: "",
        RIFA_PROD_DESC: "",
        RIFA_CATEGORIA: "",
        RIFA_TOT_NUM: "",
        RIFA_DT_SORTEIO: "",
        RIFA_VENCEDOR_ID: "",
      });
    }
  }, [rifa]);

  const handleAddUpdate = () => {
    if (
      formData.RIFA_PROD_NOME == "" ||
      formData.RIFA_PROD_DESC == "" ||
      formData.RIFA_CATEGORIA == "" ||
      formData.RIFA_TOT_NUM == "" ||
      formData.RIFA_DT_SORTEIO == ""
    ) {
      toast.warning("Todos os Campos são obrigatórios !!");
    } else {
      let dataFormat = Util.formatDate(formData.RIFA_DT_SORTEIO);

      setFormData({ ...formData, RIFA_DT_SORTEIO: dataFormat });

      if (props.param > 0) {
        dispatch(RifaAction.putRifa(formData));
        props.closeModal();
      } else {
        dispatch(RifaAction.postRifa(formData));
        props.closeModal();
      }
      dispatch(RifaAction.getAllRifas());
    }
  };

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
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Nome"
                id="RIFA_PROD_NOME"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  name: "RIFA_PROD_NOME",
                  value: formData.RIFA_PROD_NOME,
                  type: "text",
                  onChange: handleChange("RIFA_PROD_NOME"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Descrição"
                id="RIFA_PROD_DESC"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  name: "RIFA_PROD_DESC",
                  value: formData.RIFA_PROD_DESC,
                  type: "text",
                  onChange: handleChange("RIFA_PROD_DESC"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.RIFA_CATEGORIA}
                  onChange={handleChange("RIFA_CATEGORIA")}
                >
                  {ListCategoria.map((item) => (
                    <MenuItem value={item.categoria}>{item.categoria}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Quantidade"
                id="RIFA_TOT_NUM"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  name: "RIFA_TOT_NUM",
                  value: formData.RIFA_TOT_NUM,
                  type: "number",
                  onChange: handleChange("RIFA_TOT_NUM"),
                  maxWidth: 3,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Data Sorteio"
                id="RIFA_DT_SORTEIO"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  name: "RIFA_DT_SORTEIO",
                  value: formData.RIFA_DT_SORTEIO,
                  type: "date",
                  onChange: handleChange("RIFA_DT_SORTEIO"),
                }}
              />
            </GridItem>
            {props.param > 0 && (
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Vencedor"
                  id="RIFA_VENCEDOR_ID"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "RIFA_VENCEDOR_ID",
                    value: formData.RIFA_VENCEDOR_ID,
                    type: "text",
                    onChange: handleChange("RIFA_VENCEDOR_ID"),
                  }}
                />
              </GridItem>
            )}
          </form>
        </DialogContent>
        <DialogActions>
          {props.onClose}
          <Button onClick={() => handleAddUpdate()} color="info">
            {props.title}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
