import axios from "axios";

export async function getAllCategorias() {
  return axios.get("https://sistemasmeraki-com-br.umbler.net/api/categoria");
}

export default {
  getAllCategorias,
};
