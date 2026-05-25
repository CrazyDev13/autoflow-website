import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import Thesis from "@/components/sections/Thesis";
import Products from "@/components/sections/Products";
import Technology from "@/components/sections/Technology";
import Roadmap from "@/components/sections/Roadmap";
import Numbers from "@/components/sections/Numbers";
import Company from "@/components/sections/Company";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Thesis />
      <Products />
      <Technology />
      <Roadmap />
      <Numbers />
      <Company />
      <FinalCTA />
      <Footer />
    </>
  );
}
