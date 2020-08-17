import RifaService from "../../services/rifas";

export function getAllRifas() {
  return async (dispatch) => {
    dispatch({ type: "FETCH_LISTA_RIFA" });
    try {
      const getItens = await RifaService.getAllRifas();
      dispatch({ type: "FETCH_LISTA_RIFA_FULFILLED", payload: getItens.data });
    } catch (error) {
      dispatch({ type: "FETCH_LISTA_RIFA_REJECTED", payload: error });
    }
  };
}

export function getRifa(id) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_RIFA" });
    try {
      const getIten = await RifaService.getRifa(id);
      dispatch({ type: "FETCH_RIFA_FULFILLED", payload: getIten.data });
    } catch (error) {
      dispatch({ type: "FETCH_RIFA_REJECTED", payload: error });
    }
  };
}

export function getNumRifa(id) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_NUM_RIFA" });
    try {
      const getIten = await RifaService.getNumRifa(id);

      dispatch({ type: "FETCH_NUM_RIFA_FULFILLED", payload: getIten.data });
    } catch (error) {
      dispatch({ type: "FETCH_NUM_RIFA_REJECTED", payload: error });
    }
  };
}

export function putRifa(idRifa, idUsuario, nr) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_RIFA_UPDATE" });
    try {
      const getIten = await RifaService.putRifa(idRifa, idUsuario, nr);

      dispatch({ type: "FETCH_RIFA_UPDATE_FULFILLED", payload: getIten.data });
    } catch (error) {
      dispatch({ type: "FETCH_RIFA_UPDATE_REJECTED", payload: error });
    }
  };
}

export function postRifa(param) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_RIFA_SAVE" });
    try {
      const getIten = await RifaService.postRifa(param);

      console.log(getIten);

      dispatch({ type: "FETCH_RIFA_SAVE_FULFILLED", payload: getIten.data });
    } catch (error) {
      dispatch({ type: "FETCH_RIFA_SAVE_REJECTED", payload: error });
    }
  };
}

export default {
  getAllRifas,
  getRifa,
  postRifa,
  putRifa,
  getNumRifa,
};
