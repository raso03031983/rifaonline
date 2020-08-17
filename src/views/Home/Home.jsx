import React from "react";
import { useDispatch, useSelector } from "react-redux";
// react plugin for creating charts
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button";
import Loading from "components/Loading";

import imgDefault from "assets/img/faces/default.jpg";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import RifaAction from "../Rifa/action.rifa";
import CategoriaAction from "../Categoria/action.categoria";
import Util from "../../Utils/Util";

import Modal from "./Modal";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const { ListRifa = [], nwstate } = useSelector((state) => state.Rifas);
  const { ListCategoria = [] } = useSelector((state) => state.Categorias);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modal, setModal] = React.useState(null);
  const [formData, setFormData] = React.useState({
    RIFA_CATEGORIA: "0",
  });
  const [lista, setLista] = React.useState(null);

  React.useEffect(() => {
    dispatch(RifaAction.getAllRifas());
    dispatch(CategoriaAction.getAllCategorias());
  }, []);

  React.useEffect(() => {
    if (ListRifa.lista != undefined) {
      setLista(ListRifa.lista.rifa);
    }
  }, [ListRifa]);

  // function getNumeros(id) {
  //   var num = ListRifa.lista.numeros.filter((item) => item.RIFA_NUM_ID == id);
  //   return num;
  // }

  const handleClickOpenModal = (_id) => {
    dispatch(RifaAction.getNumRifa(_id));
    setModal(
      <Modal
        open={true}
        modalSize={"xg"}
        param={_id}
        // numeros={getNumeros(_id)}
        title={"Rifa N° "}
        onClose={
          <Button onClick={() => handleClickCloseModal()} color="default">
            Fechar
          </Button>
        }
        closeModal={() => handleClickCloseModal()}
      />
    );
  };

  const handleClickCloseModal = () => {
    setModal(null);
    dispatch(RifaAction.getAllRifas());
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

    filterByCategory(val);
  };

  function filterByCategory(param) {
    if (param == 0) {
      setLista(ListRifa.lista.rifa);
    } else {
      let newLista = ListRifa.lista.rifa.filter(
        (item) => item.RIFA_CATEGORIA == param
      );
      setLista(newLista);
    }
  }

  return (
    <>
      <Loading active={nwstate === "FETCHING"} />
      {modal}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.RIFA_CATEGORIA}
              onChange={handleChange("RIFA_CATEGORIA")}
            >
              <MenuItem value="0">Todas as Categorias</MenuItem>
              {ListCategoria.map((item) => (
                <MenuItem value={item.categoria}>{item.categoria}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </GridItem>

        {lista != null &&
          lista.map((item) => (
            <GridItem xs={12} sm={12} md={3}>
              <Card>
                <img
                  src={item.rifa_imagem == null ? imgDefault : item.rifa_imagem}
                  alt="..."
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>{item.RIFA_PROD_NOME}</h4>
                  <p className={classes.cardCategory}>{item.RIFA_PROD_DESC}</p>
                  <p className={classes.cardCategory}>
                    Sorteio {Util.formatDatePTBR(item.RIFA_DT_SORTEIO)}
                  </p>
                </CardBody>
                <CardFooter>
                  <div
                    className={classes.stats}
                    onClick={() => handleClickOpenModal(item.RIFA_ID)}
                  >
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} />{" "}
                      ABRIR RIFA
                    </span>{" "}
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </>
  );
}
