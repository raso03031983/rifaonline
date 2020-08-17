import CategoriaService from "../../services/categorias";

export function getAllCategorias() {
  return async (dispatch) => {
    dispatch({ type: "FETCH_LISTA_CATEGORIA" });
    try {
      const getItens = await CategoriaService.getAllCategorias();
      dispatch({
        type: "FETCH_LISTA_CATEGORIA_FULFILLED",
        payload: getItens.data,
      });
    } catch (error) {
      dispatch({ type: "FETCH_LISTA_CATEGORIA_REJECTED", payload: error });
    }
  };
}

export default {
  getAllCategorias,
};
