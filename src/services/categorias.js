import axios from "axios";

export async function getAllCategorias() {
  return axios.get("http://sistemasmeraki-com-br.umbler.net/api/categoria");
}

export default {
  getAllCategorias,
};
