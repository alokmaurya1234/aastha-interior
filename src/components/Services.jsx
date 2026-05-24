import { Link } from "react-router-dom";
import fallCeiling from "../assets/services/fall-ceiling.webp";
import mandir from "../assets/services/mandir.webp";
import tables from "../assets/services/tables.webp";
import tvUnit from "../assets/services/tv-unit.webp";
import kitchen from "../assets/services/kitchen.webp";
import wardrobe from "../assets/services/wardrobe.webp";
import bedroom from "../assets/services/bedroom.webp";
import furniture from "../assets/services/furniture.webp";

function Services() {

  const services = [
    {
      title: "TV Unit Design",
      image: tvUnit,
      slug: "tv-unit",
    },

    {
      title: "Modular Kitchen",
      image: kitchen,
      slug: "modular-kitchen",
    },

    {
      title: "Custom Wardrobes",
      image: wardrobe,
      slug: "wardrobes",
    },

    {
      title: "Bedroom Interiors",
      image: bedroom,
      slug: "bedroom",
    },

    {
      title: "Modern Arch Partition",
      image: furniture,
      slug: "furniture",
    },

    {
      title: "Luxury Fall Ceiling",
      image: fallCeiling,
      slug: "fall-ceiling",
    },

    {
      title: "Designer Mandir",
      image: mandir,
      slug: "mandir",
    },

    {
      title: "Designer Tables",
      image: tables,
      slug: "tables",
    },
  ];

  return (

    <section
      id="services"
      className="px-5 sm:px-8 py-20 sm:py-24 bg-[#1E1410]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">

          

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2]">
            Our Services
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="group"
            >

              <div
                className="bg-[#2B1D17] rounded-3xl overflow-hidden border border-[#3A2A22] hover:border-[#D6C2A8] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-500"
              >

                {/* Image */}
                <div className="overflow-hidden h-64">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">

                  <h3 className="text-2xl font-semibold text-[#F8F5F2] h-[72px]">
                    {service.title}
                  </h3>

                  <div className="mt-6 flex items-center gap-2 text-[#D6C2A8]">

                    <button className="mt-8 flex items-center gap-3 text-sm tracking-[2px] uppercase text-[#D6C2A8] group-hover:text-white transition">

                      <span className="relative">

                        View Catalogue

                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#D6C2A8] group-hover:w-full transition-all duration-300"></span>

                      </span>

                      <span className="group-hover:translate-x-2 transition duration-300">
                        →
                      </span>

                    </button>



                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;