import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBookOpen,
  FaWhatsapp,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export const navLinks = [
  {
    id: 1,
    text: "Inicio",
    href: "home",
  },
  {
    id: 2,
    text: "Proyectos",
    href: "projects",
  },
  {
    id: 3,
    text: "Habilidades",
    href: "services",
  },
  {
    id: 4,
    text: "Contacto",
    href: "contact",
  },
];

export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Turno App", value: "Turno App" },
  { id: 3, name: "Tmdb", value: "Tmdb" },
  { id: 4, name: "Ecommerce", value: "Ecommerce" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "Turno App",
    gitHub: "https://github.com/juan-ma526/webAPP-Reserva-de-turno",
  },
  {
    id: 2,
    image: project2,
    value: "Tmdb",
    gitHub: "https://github.com/juan-ma526/TMDB/tree/main/tmdb",
  },
  {
    id: 3,
    image: project3,
    value: "Ecommerce",
    gitHub: "https://github.com/juan-ma526/Ecommerce-Como-en-Casa",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Front-end",
    parraf: "Creacion de Simple-Page-Apps con React.js",
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    title: "Back-end",
    parraf: "Creacion de Back-end APIs con Express.js, JWT authentification",
  },
  {
    id: 3,
    icon: <FaDatabase />,
    title: "Bases de Datos",
    parraf:
      "Manejo de Base de datos Relacionales/Postgresql y No Relacionales/MongoDB. ",
  },
  {
    id: 4,
    icon: <FaBookOpen />,
    title: "Actualidad",
    parraf:
      "Actualmente estoy mejorando mis habilidades en back-end como en front-end, a su vez estoy capacitandome con cursos en Docker y terminando los dos ultimos niveles de Ingles",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    text: "+549 351 3958726",
    href: "https://wa.me/+5493513958726",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "El Carmen, Jujuy-Argentina",
  },
  {
    id: 3,
    icon: <GrMail />,
    text: "jmperez675@gmail.com",
    href: "mailto:jmperez675@gmail.com",
  },
];
