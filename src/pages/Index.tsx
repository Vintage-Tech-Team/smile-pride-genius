import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Insurance from "@/components/Insurance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Reviews />
      <Insurance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
