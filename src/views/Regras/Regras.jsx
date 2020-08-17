import React, { useState, useContext } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import ModalLogin from "../../views/Perfil/ModalLogin";
import ModalCadastrar from "../../views/Perfil/ModalCadastrar";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center' }}>
        <h2>Regras</h2>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h5>
          1. Esse é um site de entretenimento. Não é uma plataforma de jogo. <br></br>
2. É proibido a compra de rifas por menores de 18 anos. <br></br>
3.  A rifa tem o valor de R$ 10,00. <br></br>
4. Os sorteios ocorrerão conforme as datas dos sorteios da Loteria Federal. <br></br>
5. A quantidade de números de cada rifa irá variar de acordo com o prêmio. <br></br>
6. Caso o item a ser sorteado não obtenha 70% (setenta por cento) de rifas vendidas passará para a semana seguinte até que tal quantidade mínima seja alcançada. <br></br>
7. A numeração vencedora saíra do 1 (primeiro) prêmio da Caixa Econômica Federal. Caso o número sorteado não tenha sido escolhido, a numeração vencedora irá para o 2 (segundo) prêmio da Loteria Federal e assim sucessivamente até o 5 (quinto) prêmio.  Na hipótese de todas as numerações vencedoras não serem escolhidas o prêmio passará para a semana seguinte. <br></br>
8. O prêmio será entregue em mãos ou via Correios. <br></br>
9. O número escolhido ficará reservado até a confirmação do pagamento. Caso a confirmação não seja feita em até 3 (três) dias úteis,o número ficará disponível novamente. <br></br>
10. O número poderá ser alterado até 48 (quarenta e oito) horas antes do sorteio. <br></br>
11.  Da premiação : <br></br>
         A) O prêmio será concedido ao participante que escolher a dezena final da milhar sorteada pela Loteria Federal,quando a numeração disponível for de 00 a 99. <br></br>
         B) O prêmio será concedido ao participante que escolher a centena final milhar sorteada pela Loteria Federal,quando a numeração disponível for de 000 a 999. <br></br>
        </h5>
      </div>
    </>
  );
}
