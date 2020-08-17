import axios from "axios";

export async function getAllRifas() {
  return axios.get("http://sistemasmeraki-com-br.umbler.net/api/rifa");
}

export async function getNumRifa(idRifa) {
  return axios.get(
    `http://sistemasmeraki-com-br.umbler.net/api/rifanumeros/${idRifa}`
  );
}

export async function getRifa(id) {
  return axios.get(`http://sistemasmeraki-com-br.umbler.net/api/rifa/${id}`);
}

export async function putRifa(idRifa, idUsuario, nr) {
  return axios.put(
    `http://sistemasmeraki-com-br.umbler.net/api/rifa/${idRifa}/${idUsuario}/${nr}`
  );
}

export async function postRifa(param) {
  console.log(param);

  return axios.post(`http://sistemasmeraki-com-br.umbler.net/api/rifa`, param);
}

export default {
  getAllRifas,
  getRifa,
  putRifa,
  postRifa,
  getNumRifa,
};
