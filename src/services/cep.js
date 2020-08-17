import axios from "axios";

export async function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}

export default {
  getCep,
};
