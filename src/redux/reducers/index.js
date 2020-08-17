import { combineReducers } from "redux";

import Rifas from "./Rifa";
import Categorias from "./Categoria";
import Usuario from "./Usuario";
import CEP from "./CEP";

export default combineReducers({
  Rifas,
  Categorias,
  Usuario,
  CEP,
});
