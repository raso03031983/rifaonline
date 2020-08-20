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
    path: "/admin/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/admin/perfil",
    name: "Perfil",
    icon: UserIcon,
    component: Perfil,
    layout: "/admin",
  },
  {
    path: "/admin/rifa",
    name: "Rifa",
    icon: Dashboard,
    component: Rifa,
    layout: "/admin",
  },
  {
    path: "/admin/pagamento",
    name: "Formas de Pagamento",
    icon: HomeIcon,
    component: Pagamento,
    layout: "/admin",
  },
  {
    path: "/admin/regras",
    name: "Regras",
    icon: HomeIcon,
    component: Regras,
    layout: "/admin",
  },
];

const dashboardRoutes2 = [
  {
    path: "/admin/home",
    name: "Home",
    icon: HomeIcon,
    component: Home,
    layout: "/admin",
  },
  {
    path: "/admin/pagamento",
    name: "Formas de Pagamento",
    icon: HomeIcon,
    component: Pagamento,
    layout: "/admin",
  },
  {
    path: "/admin/regras",
    name: "Regras",
    icon: HomeIcon,
    component: Regras,
    layout: "/admin",
  },
];

const dash = logado == "true" ? dashboardRoutes : dashboardRoutes2;

export default dash;
