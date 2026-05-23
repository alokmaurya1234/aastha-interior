import { useEffect, useState } from "react";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >

      <div className="flex justify-between items-center px-5 sm:px-8 py-5">

        {/* Company Name */}
        <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap text-[#F8F5F2]">
          Aastha Interior
        </h1>

        {/* Only Services */}
        <button
          onClick={() => scrollToSection("services")}
          className="text-white font-bold text-base sm:text-lg hover:text-[#D6C2A8] transition"
        >
          Services
        </button>

      </div>

    </nav>
  );
}

export default Navbar;