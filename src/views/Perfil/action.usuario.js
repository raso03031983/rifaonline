import UsuarioService from "../../services/usuario";

export function getUsuario(param) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USUARIO" });
    try {
      const getItens = await UsuarioService.getUsuario(param);

      dispatch({
        type: "FETCH_USUARIO_FULFILLED",
        payload: getItens.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_USUARIO_REJECTED", payload: error });
    }
  };
}

export function postUsuario(param) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_USUARIO_SAVE" });
    try {
      const getItens = await UsuarioService.postUsuario(param);
      dispatch({
        type: "FETCH_USUARIO_SAVE_FULFILLED",
        payload: getItens.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_USUARIO_SAVE_REJECTED", payload: error });
    }
  };
}

export function resetUsuario() {
  return async (dispatch) => {
    dispatch({ type: "RESET" });
  };
}

export default {
  getUsuario,
  postUsuario,
  resetUsuario,
};
