import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
   <div className="bg-[#1E1410] text-[#F8F5F2] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ProjectsSection />
      <WhatsAppButton />
      <ContactSection />
      <Footer />
      
    </div>
  );
}

export default Home;