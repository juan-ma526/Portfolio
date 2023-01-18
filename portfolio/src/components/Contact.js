import { contacts } from "../data";

const Contact = () => {
  return (
    <div className="container mx-auto  px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contacto</h2>
        <div className="w-14 h-[3px] rounded-sm bg-purple-200"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-black text-xl">
                  {contact.id === 1 ? (
                    <a href={contact.href} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  ) : (
                    <a href={contact.href}>{icon}</a>
                  )}
                </div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        {/* <div className="mt-8 flex gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5 ">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-white p-2 text-[0.9rem]"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-5 ">
              <input
                type="text"
                className="outline-none bg-transparent border border-solid border-white p-2 text-[0.9rem]"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Mensaje....."
              className="outline-none bg-transparent border border-solid border-white resize-none text-[0.9rem] p-2 h-40 w-80"
            ></textarea>
            <div className="mt-2 text-end">
              <a
                href="mailto:jmperez675@gmail.com"
                className="text-[0.9rem] text-white"
              >
                Enviar Mensaje
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
