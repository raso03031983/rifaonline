import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/**********************/
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircleChecked from "@material-ui/icons/CheckBoxOutlined";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button";
import ModalLogin from "../Perfil/ModalLogin";
import Loading from "components/Loading";

import RifaAction from "../Rifa/action.rifa";

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

const logado = localStorage.getItem("logado");

function Modal(props) {
  const { rifa = {}, ListNumRifa = [], nwstate } = useSelector(
    (state) => state.Rifas
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({});
  const [lista, setLista] = React.useState(null);
  const [modal, setModal] = React.useState(null);
  let guardaIten = [];

  React.useEffect(() => {
    dispatch(RifaAction.getRifa(props.param));
  }, []);

  React.useEffect(() => {
    if (rifa.length > 0) {
      setFormData({
        ...formData,
        titulo: rifa[0].RIFA_PROD_NOME,
      });
    }
  }, [rifa]);

  React.useEffect(() => {
    let itens = [];
    if (ListNumRifa.length > 0) {
      Object.entries(ListNumRifa[0]).forEach(([key, value]) => {
        itens.push({ key: value });
      });

      setLista(itens.slice(2));
    }
  }, [ListNumRifa]);

  const handleCB = (numRifa) => {
    let verifaGuardaItens = guardaIten.some((item) => item.nr == numRifa);

    if (verifaGuardaItens == false) {
      const iten = {
        idRifa: props.param,
        idUsuario: localStorage.getItem("idUser"),
        nr: numRifa,
      };
      guardaIten.push(iten);
    } else {
      guardaIten = guardaIten.filter((item) => item.nr != numRifa);
    }
  };

  const handleClickOpenModal = () => {
    setModal(
      <ModalLogin
        open={true}
        modalSize={"xs"}
        title={"Login"}
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
  };

  const handleGravar = () => {
    guardaIten.map((item) =>
      dispatch(RifaAction.putRifa(item.idRifa, item.idUsuario, item.nr))
    );
    props.closeModal();
  };

  return (
    <>
      <Loading active={nwstate === "FETCHING"} />
      <ToastContainer />
      {modal}
      <Dialog
        open={props.open}
        onClose={false}
        aria-labelledby="form-dialog-title"
        fullWidth="true"
        maxWidth={props.modalSize}
      >
        <DialogTitle id="customized-dialog-title">
          {props.title} {props.param} {formData.titulo}
        </DialogTitle>
        <DialogContent>
          <form>
            {rifa.length > 0 && (
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {lista != undefined &&
                    lista.map((item, index) =>
                      item.key == null ? (
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              onChange={() => handleCB(index + 1)}
                              disabled={item.key == null ? false : true}
                              // checkedIcon={
                              //   item.key == null ? false : <CircleChecked />
                              // }
                              // icon={<CircleChecked />}
                              //checked={item.key == null ? false : true}
                            />
                          }
                          label={index + 1}
                        />
                      ) : (
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              onChange={() => handleCB(index + 1)}
                              disabled={item.key == null ? false : true}
                              checkedIcon={<CircleChecked />}
                              icon={<CircleChecked />}
                            />
                          }
                          label={index + 1}
                        />
                      )
                    )}
                </GridItem>
              </GridContainer>
            )}
          </form>
        </DialogContent>
        {logado == "true" && (
          <DialogActions>
            {props.onClose}
            <Button onClick={() => handleGravar()} color="info">
              Gravar Números
            </Button>
          </DialogActions>
        )}
        {logado != "true" && (
          <DialogActions>
            {props.onClose}
            <Button onClick={() => handleClickOpenModal()} color="info">
              Fazer o Login
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
