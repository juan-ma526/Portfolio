import { services } from "../data";

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Habilidades</h2>
        <div className="w-14 h-[3px] bg-purple-400 rounded-sm"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg"
            >
              <div className="text-white text-[2rem]">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="opacity-80 mt-4 text-[0.9rem]">
                  {service.parraf}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
