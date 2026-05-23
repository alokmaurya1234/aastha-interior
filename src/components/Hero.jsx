import heroImage from "../assets/hero.webp";

function Hero() {

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center"
    >

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Interior"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 max-w-6xl mx-auto">

        {/* Small Heading */}
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D6C2A8] mb-4 text-xs sm:text-sm">
          Luxury Interior Woodwork
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
          Elegant Wooden Interiors Crafted With Precision
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-[#E7D7C6] max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Custom wardrobes, TV units, modular kitchens,
          premium furniture, and modern wooden interiors
          designed to elevate your living spaces.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">

          {/* Projects Button */}
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto bg-[#D6C2A8] text-[#1E1410] px-8 py-4 rounded-xl font-semibold hover:bg-[#c5ae90] hover:scale-105 transition duration-300"
          >
            View Projects
          </button>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto border border-[#D6C2A8] text-[#D6C2A8] px-8 py-4 rounded-xl hover:bg-[#D6C2A8] hover:text-[#1E1410] hover:scale-105 transition duration-300"
          >
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;