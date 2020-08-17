import React from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import Table from "components/Table/Table";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardAvatar from "components//Card/CardAvatar";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Loading from "components/Loading";

import RifaAction from "./action.rifa";
import Modal from "./ModalRifa";

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

export default function Rifa() {
  const { ListRifa = [], nwstate } = useSelector((state) => state.Rifas);
  const [lista, setLista] = React.useState(null);
  const [modal, setModal] = React.useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(RifaAction.getAllRifas());
  }, []);

  React.useEffect(() => {
    if (ListRifa.lista != undefined) {
      let arrayItens = [];
      ListRifa.lista.rifa.map((item) => {
        arrayItens.push([
          item.RIFA_ID,
          item.RIFA_PROD_NOME,
          item.RIFA_PROD_DESC,
          item.RIFA_CATEGORIA,
          <Button
            onClick={() => handleClickOpenModal(item.RIFA_ID)}
            color="info"
            size="sm"
          >
            Editar
          </Button>,
        ]);
      });
      setLista(arrayItens);
    }
  }, [ListRifa]);

  const handleClickOpenModal = (_id) => {
    setModal(
      <Modal
        open={true}
        modalSize={"sm"}
        param={_id}
        title={_id > 0 ? "Editar Rifa" : "Cadastrar Rifa"}
        onClose={
          <Button onClick={() => handleClickCloseModal()} color="default">
            Fechar
          </Button>
        }
        // itens={Itens(_id)}
        closeModal={() => handleClickCloseModal()}
      />
    );
  };

  const handleClickCloseModal = () => {
    setModal(null);
  };

  return (
    <div>
      {modal}
      <Loading active={nwstate === "FETCHING"} />
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Rifa</h4>
          <p className={classes.cardCategoryWhite}>
            Listagem, Cadastro e Edição
          </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}></GridItem>
            <GridItem xs={12} sm={12} md={2}></GridItem>
            <GridItem xs={12} sm={12} md={12}>
              {lista != null && (
                <Table
                  tableHeaderColor="primary"
                  tableHead={[
                    "Cód.",
                    "Produto",
                    "Descrição",
                    "Categoria",
                    <Button
                      onClick={() => handleClickOpenModal(0)}
                      color="info"
                      size="sm"
                    >
                      Cadastrar
                    </Button>,
                  ]}
                  tableData={lista}
                />
              )}
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
}
