import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <a href="/home">
          <SidebarItem Icon={FaHome} Text="Inicio" />
        </a>
        <SidebarItem Icon={FaChartBar} Text="Estadisticas" />
        <SidebarItem Icon={FaUserAlt} Text="Usuarios" />
        <SidebarItem Icon={FaEnvelope} Text="Correo" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />
        <SidebarItem Icon={FaIdCardAlt} Text="Empleados" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reportes" />
        <SidebarItem Icon={FaRegSun} Text="Configuraciones" />
      </Content>
    </Container>
  );
};

export default Sidebar;
