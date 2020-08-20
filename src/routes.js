import Dashboard from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/HomeOutlined";

// core components/views for Admin layout
import Home from "views/Home/Home";
import Perfil from "views/Perfil/Perfil";
import Rifa from "views/Rifa/Rifa";
import Regras from "views/Regras/Regras";
import Pagamento from "views/Pagamento/Pagamento";

const logado = localStorage.getItem("logado");

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/perfil",
    name: "Perfil",
    icon: UserIcon,
    component: Perfil,
    layout: "/admin",
  },
  {
    path: "/rifa",
    name: "Rifa",
    icon: Dashboard,
    component: Rifa,
    layout: "/admin",
  },
  {
    path: "/pagamento",
    name: "Formas de Pagamento",
    icon: HomeIcon,
    component: Pagamento,
    layout: "/admin",
  },
  {
    path: "/regras",
    name: "Regras",
    icon: HomeIcon,
    component: Regras,
    layout: "/admin",
  },
];

const dashboardRoutes2 = [
  {
    path: "/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/pagamento",
    name: "Formas de Pagamento",
    icon: HomeIcon,
    component: Pagamento,
    layout: "/admin",
  },
  {
    path: "/regras",
    name: "Regras",
    icon: HomeIcon,
    component: Regras,
    layout: "/admin",
  },
];

const dash = logado == "true" ? dashboardRoutes : dashboardRoutes2;

export default dash;
