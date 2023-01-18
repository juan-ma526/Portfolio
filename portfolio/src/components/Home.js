import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

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
        <div>
          <div className="text-gray-300 sm:text-[1.25rem] mb-4">
            FullStack Developer
          </div>
          <h2 className="text-[2rem] sm:text-[3rem] font-bold mb-4">
            Martin Perez
          </h2>
          <p className="opacity-80 text-[0.9rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            blandit tempus lacus, vel tempor orci pulvinar non. Proin
            ullamcorper risus sed blandit laoreet. Pellentesque malesuada lacus
            at posuere egestas. Suspendisse porttitor risus eu malesuada
            consectetur. Duis congue diam diam. Praesent rutrum velit diam,
            vitae laoreet erat suscipit in. Suspendisse a turpis lacinia,
            viverra elit ullamcorper, congue orci. Donec vulputate dui nec
            consectetur fringilla. Curabitur vulputate dui non nisl rutrum
            faucibus. Phasellus quis mauris finibus, mattis nisl eu, facilisis
            nulla. Suspendisse convallis orci eget lorem aliquam, vitae dapibus
            ex volutpat. In purus turpis, auctor ac dui ut, tincidunt fringilla
            leo. Donec non quam dignissim, sollicitudin neque sit amet, vehicula
            mi. Mauris lobortis quam nec lacus maximus, non ullamcorper urna
            sodales.
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
        </div>
      </div>
    </div>
  );
};

export default Home;
