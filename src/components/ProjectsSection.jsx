import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

function ProjectsSection() {

  const projects = [
    {
      id: 1,
      title: "Luxury Bedroom Interior",
      description:
        "Elegant wooden wardrobe and modern bedroom setup with premium finishing.",
      image: project1,
    },

    {
      id: 2,
      title: "Modern TV Unit Design",
      description:
        "Stylish wall-mounted TV unit with storage cabinets and decorative panels.",
      image: project2,
    },

    {
      id: 3,
      title: "Modular Kitchen Setup",
      description:
        "Custom modular kitchen crafted with durable materials and modern aesthetics.",
      image: project3,
    },
  ];

  return (
    <section
      id="projects"
      className="px-5 sm:px-8 py-20 sm:py-24 bg-[#1E1410]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D6C2A8] mb-3 text-sm">
            Our Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2]">
            Featured Projects
          </h2>

          <p className="text-[#C7B299] mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore some of our premium interior woodwork
            projects crafted with modern design and
            attention to detail.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-[#2B1D17] rounded-3xl overflow-hidden border border-[#3A2A22] hover:border-[#D6C2A8] transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden h-72 sm:h-80">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">

                <h3 className="text-2xl font-semibold text-[#F8F5F2]">
                  {project.title}
                </h3>

                <p className="text-[#C7B299] mt-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <button className="mt-6 border border-[#D6C2A8] text-[#D6C2A8] px-5 py-3 rounded-xl hover:bg-[#D6C2A8] hover:text-[#1E1410] hover:scale-105 transition duration-300">
                  View Project
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectsSection;