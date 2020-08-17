import Dashboard from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/example/Dashboard/Dashboard.js";
import UserProfile from "views/example/UserProfile/UserProfile.js";
import TableList from "views/example/TableList/TableList.js";
import Typography from "views/example/Typography/Typography.js";
import Icons from "views/example/Icons/Icons.js";
import Maps from "views/example/Maps/Maps.js";
import NotificationsPage from "views/example/Notifications/Notifications.js";
import Home from "views/Home/Home";
import Perfil from "views/Perfil/Perfil";
import Rifa from "views/Rifa/Rifa";

export default function dashboardRoutes() {
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
      rtlName: "لوحة القيادة",
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
  ];
}
