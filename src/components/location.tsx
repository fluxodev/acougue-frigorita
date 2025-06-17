export default function Location() {
  return (
    <section className="text-gray-700 body-font relative bg-white">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4436.177752887568!2d-44.491450824002584!3d-20.38992135279659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0ddc386355655%3A0xff08f3e857abc5ae!2sA%C3%A7ougue%20Frigorita!5e1!3m2!1spt-BR!2sbr!4v1750122386658!5m2!1spt-BR!2sbr"
            style={{ backgroundColor: "#fff" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Unidade Itaguara:
              </h2>
              <p className="mt-1">
                R. Expedicionário João Batista dos Reis, 67 <br />
                Itaguara - MG
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Contatos:
              </h2>
              <p className="leading-relaxed">
                (31) 3184-1166 <br /> (37) 9832-5221
              </p>
            </div>
          </div>
        </div>

        <div
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-md"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h2 className="text-red-700 text-2xl mb-2 font-bold title-font text-center">
            Açougue Frigorita
          </h2>
          <p className="leading-relaxed text-gray-700 text-center px-6 mb-4 italic">
            Qualidade e tradição que você confia. Cortes nobres, atendimento
            especial e os melhores preços da região!
          </p>

          <div className="px-6 text-gray-800 text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-red-700">Horário de Funcionamento</h3>
              <p>
                2ª a 6ª das 7h às 19h <br />
                Sábado das 7h às 19h <br />
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-red-700">Endereço</h3>
              <p>
                R. Expedicionário João Batista dos Reis, 67 <br />
                Itaguara - MG
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-red-700">Telefone</h3>
              <p>(31) 3184-1166</p>
            </div>
            <div>
              <h3 className="font-semibold text-red-700">WhatsApp</h3>
              <p>(37) 9832-5221</p>
            </div>
          </div>

          <div className="mt-6 px-6">
            <p className="text-xs text-gray-500">
              Siga-nos nas redes sociais e fique por dentro das promoções exclusivas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
