import Image from "next/image";
import image820 from "../assets/Image-820.png"
import equipe from "../assets/equipe-frigorita.png"
import carnesFrigorita from "../assets/carnes-frigorita.png"

export default function Gallery() {
  return (
    <section className="bg-white text-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-lg shadow-lg">
            <Image
              alt="Carnes Premium"
              className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
              src={image820}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-3xl text-[#7b1113] font-bold title-font mb-4">
                Cortes Premium de Qualidade
              </h2>
              <p className="leading-relaxed mb-3">
                Experimente os melhores cortes selecionados diretamente do frigorífico para a sua mesa.
              </p>
              <a
                href="https://www.instagram.com/stories/highlights/18041767115085644/"
                className="mt-3 text-[#7b1113] font-semibold inline-flex items-center hover:underline"
              >
                Ver mais cortes
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 py-16 px-6 relative rounded-lg shadow-md">
                <Image
                  alt="Promoções da Semana"
                  className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                  src={carnesFrigorita}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-[#7b1113] font-semibold mb-2">
                    Promoções da Semana
                  </h2>
                  <p className="leading-relaxed">
                    Aproveite os melhores preços em carnes fresquinhas. Só até sábado!
                  </p>
                  <a
                    href="https://www.instagram.com/stories/highlights/18041767115085644/"
                    className="mt-3 text-[#7b1113] font-semibold inline-flex items-center hover:underline"
                  >
                    Ver ofertas
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 py-16 px-6 relative rounded-lg shadow-md">
                <Image
                  alt="Atendimento Especializado"
                  className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                  src={equipe}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-[#7b1113] font-semibold mb-2">
                    Atendimento Especializado
                  </h2>
                  <p className="leading-relaxed">
                    Tire suas dúvidas, faça seu pedido ou escolha o corte ideal com nosso time.
                  </p>
                  <a
                    href="https://wa.me/5537998325221?text=Olá%2C%20gostaria%20de%20fazer%20um%20pedido%20ou%20tirar%20uma%20dúvida."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-[#7b1113] font-semibold inline-flex items-center hover:underline"
                  >
                    Falar no WhatsApp
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
