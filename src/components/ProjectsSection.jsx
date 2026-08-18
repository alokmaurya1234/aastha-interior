import { Link } from "react-router-dom";
import project1 from "../assets/projects/Darsharhalli/2.jpeg";
import project2 from "../assets/projects/Ca-office/1.jpeg";
import project3 from "../assets/project3.webp";

function ProjectsSection() {
  const projects = [
    {
      id: "Darsharhalli",
      title: "Luxury Home Interior",
      description:
        "Elegant wooden wardrobe and modern bedroom setup with premium finishing.",
      image: project1,
      hasGallery: true,
    },
    {
      id: "Ca-office",
      title: "Modern Office Design",
      description:
        "Stylish wall-mounted TV unit with storage cabinets and decorative panels.",
      image: project2,
      hasGallery: true,
    },
    {
      id: "modular-kitchen",
      title: "Modular Kitchen Setup",
      description:
        "Custom modular kitchen crafted with durable materials and modern aesthetics.",
      image: project3,
      hasGallery: false,
    },
  ];

  return (
    <section
      id="projects"
      className="px-5 sm:px-8 py-20 sm:py-24 bg-[#1E1410]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-16">
          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D6C2A8] mb-3 text-sm">
            Our Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2]">
            Featured Projects
          </h2>

          <p className="text-[#C7B299] mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore some of our premium interior woodwork projects crafted with
            modern design and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2B1D17] rounded-3xl overflow-hidden border border-[#3A2A22] hover:border-[#D6C2A8] transition duration-300 group"
            >
              <div className="overflow-hidden h-72 sm:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-[#F8F5F2]">
                  {project.title}
                </h3>

                <p className="text-[#C7B299] mt-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6">
                  {project.hasGallery ? (
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-3 border border-[#C7B299] px-5 py-3 rounded-xl text-[#C7B299] hover:bg-[#C7B299] hover:text-[#1E1410] transition duration-300"
                    >
                      View Project
                      <span>→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-3 border border-[#5A463A] px-5 py-3 rounded-xl text-[#806F63] cursor-not-allowed">
                      Gallery Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;