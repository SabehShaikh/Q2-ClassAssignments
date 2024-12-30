import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import SectionFour from "@/components/SectionFour";
import SectionOne from "@/components/SectionOne";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import Sponsers from "@/components/Sponsers";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Plan />
      <Sponsers />
      <Clients />
    </div>
  );
}
