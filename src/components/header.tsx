import Image from "next/image";
import logo from "../assets/logoFrigorita.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className=" bg-[#7b1113] text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src={logo}
            alt="Logo do Açougue Frigorita"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <a
          href="https://wa.me/5537998325221?text=Olá%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20carnes%20no%20Frigorita!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0 text-white"
        >
          <FaWhatsapp className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
