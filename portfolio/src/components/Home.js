import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8 ">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={Logo}
            alt="Logo-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gray-300 sm:text-[1.25rem] mb-4">
            FullStack Developer
          </div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Martin Perez
          </h2>
          <p className="opacity-80 text-[1.0rem]">
            Termine el bootcamp de Plataforma 5,+800 hs cursadas para poder
            desarrollar habilidades blandas y tecnicas. A nivel tecnico adquiri
            habilidades en NodeJS, Express, Sequelize, Mongodb, React,React
            Context, Redux, Sass. Aprendi a utilizar metodologias ágiles, como
            SCRUM. Durante la primera etapa estudie y trabajé haciendo pair
            programming en Plataforma 5, y en las ultimas semanas utilicé los
            conocimientos adquiridos para realizar una TMDB de una web para
            visualizar peliculas. Tambien junto a 4 compañeros de trabajo
            pudimos armar un Ecommerce para venta de platos de comida, aplicando
            todo lo aprendido, y afianzando mas las habilidades blandas para la
            comunicacion. En la ultima etapa junto a 3 compañeros realizamos una
            practica profesional para la empresa Cruce, en la cual se realizo un
            aplicacion para la reserva de turnos, creacion de usuarios,
            sucursales, y el manejo de las mismas.
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href="CV_JuanMartinPerez.pdf"
              download="CV_JuanMartinPerez.pdf"
              className="hover:bg-white hover:text-black bg-stone-900 text-white py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Descarga CV
            </a>
            <a
              href="mailto:jmperez675@gmail.com"
              className="hover:bg-white hover:text-black bg-stone-900 text-white py-2 px-4 border-[2px] border-solid border-grey text-[0.9rem] rounded-[2.2rem] shadow-md"
            >
              Contacto
            </a>
          </div>
          <div className="flex mt-4 gap-4 text-black text-[2.1rem]">
            <a
              href="https://github.com/juan-ma526"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-martin-perez-2ba243246/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
