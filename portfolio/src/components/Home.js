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
            Martin Perez
          </div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4 fullStack">
            FullStackDeveloper
          </h2>
          <p className="opacity-80 text-[1.0rem]">
            Estudie Ing. en computación 3 años en la FCEFyN de Córdoba, ahí
            conocí la programación y decidí dedicarme a ella. En septiembre 2022
            participe en un Bootcamp de Plataforma 5. Trabaje realizando una
            practica profesional por 3 meses para la empresa Cruce, en
            colaboración con otros compañeros haciendo pair programming con
            ellos, lo que fortaleció mis habilidades blandas, como la
            comunicación y el trabajo en equipo. En dicha experiencia laboral
            realizamos una app de turnos con seguimiento de ellos y metas
            semanales a cumplir para la empresa. También cree un ecommerce y una
            app de películas. Al terminar el Bootcamp, eh estado mejorando mis
            habilidades técnicas, en CSS, SASS, REDUX, NEXTJS, TAILWIND CSS y
            BOOSTRAP. Soy una persona activa y apasionada por mejorar
            constantemente mis habilidades y aprender nuevas herramientas.
            Además, disfruto trabajar en equipo y enfrentar desafíos que me
            permitan encontrar soluciones a los problemas. Confío en mis
            habilidades como desarrollador y estoy comprometido con el
            crecimiento profesional continuo. Estoy entusiasmado por contribuir
            con mi experiencia y conocimientos en un entorno dinámico donde
            pueda seguir expandiendo mis capacidades técnicas.
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
              <FaGithubSquare className=" hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-martin-perez-2ba243246/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className=" hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
