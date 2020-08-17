import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import Auth from "./Auth";
import NoAuth from "./NoAuth";

function index() {
  const { signed } = useContext(AuthContext);

  return signed ? <Auth /> : <NoAuth />;
}

export default index;
