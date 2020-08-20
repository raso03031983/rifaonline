import axios from "axios";

export async function getUsuario(param) {
  return axios.get(
    `https://sistemasmeraki-com-br.umbler.net/api/usuario/${param}`
  );
}

export async function postUsuario(param) {
  return axios.post(
    `https://sistemasmeraki-com-br.umbler.net/api/usuario/`,
    param
  );
}

export default {
  getUsuario,
  postUsuario,
};
