import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { btns, projects } from "../data";

const Projects = () => {
  const [filterImages, setFilterImages] = useState(null);

  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter((project) => {
      return project.value === btnType;
    });
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };

  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Mis Proyectos</h2>
        <div className="w-14 h-[3px] rounded-sm bg-white"></div>
      </div>
      <div className="flex flex-wrap gap-8">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3">
          {filterImages &&
            filterImages.map((filterImage) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  key={filterImage.id}
                >
                  <motion.img
                    className="border-[2px] border-solid border-black"
                    src={filterImage.image}
                    alt="Imagen Proyecto"
                  />
                  <div className="flex mt-4 gap-4 justify-center">
                    <a
                      href={filterImage.gitHub}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-purple-800 hover:text-white bg-white text-black py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
                    >
                      Github
                    </a>
                    {filterImage.web && (
                      <a
                        href={filterImage.web}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-purple-800 hover:text-white bg-white text-black py-2 px-4 border-[2px] border-solid border-blue text-[0.9rem] rounded-[2.2rem] shadow-md"
                      >
                        Web
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
