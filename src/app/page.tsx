import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";
import Location from "@/components/location";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
