import Image from "next/image";
import beefImage from "../assets/beef-image.png"
export default function Hero() {
  return (
    <section className="bg-white text-gray-900 dark:bg-white dark:text-gray-900 min-h-screen body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-red-700 leading-tight">
            Cortes Nobres, <br className="hidden lg:inline-block" /> Sabor Incomparável
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            No coração da sua mesa, carnes selecionadas com excelência. Entregamos qualidade, suculência e confiança direto do nosso açougue para sua família.
          </p>
          <div className="flex justify-center">
            <a target="_blank" href="https://www.instagram.com/stories/highlights/18041767115085644/" className="inline-flex text-white font-bold bg-[#7b1113] border-0 py-3 px-8 focus:outline-none hover:bg-red-700 rounded-full text-lg transition">
              Ver Ofertas
            </a>
            <a href="https://wa.me/5537998325221?text=Olá%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20carnes%20no%20Frigorita!" className="ml-4 inline-flex text-red-800 font-extrabold bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-red-200 rounded-full text-lg transition">
              Faça Seu Pedido
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-2xl shadow-lg"
            alt="Foto de uma carne do açougue Frigorita"
            src={beefImage}
          />
        </div>
      </div>
    </section>
  );
}
