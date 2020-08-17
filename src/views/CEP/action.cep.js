import cepService from "../../services/cep";

export function getCep(cep) {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CEP" });

    try {
      const get = await cepService.getCep(cep);
      dispatch({ type: "FETCH_CEP_FULFILLED", payload: get.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_CEP_REJECTED", payload: error });
    }
  };
}

export default {
  getCep,
};
