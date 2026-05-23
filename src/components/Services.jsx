import tvUnit from "../assets/services/tv-unit.webp";
import kitchen from "../assets/services/kitchen.webp";
import wardrobe from "../assets/services/wardrobe.webp";
import bedroom from "../assets/services/bedroom.webp";
import storage from "../assets/services/storage.webp";
import furniture from "../assets/services/furniture.webp";

function Services() {

  const services = [
    {
      title: "TV Unit Design",
      image: tvUnit,
    },

    {
      title: "Modular Kitchen",
      image: kitchen,
    },

    {
      title: "Custom Wardrobes",
      image: wardrobe,
    },

    {
      title: "Bedroom Interiors",
      image: bedroom,
    },

    {
      title: "Wooden Storage",
      image: storage,
    },

    {
      title: "Luxury Furniture",
      image: furniture,
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

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D6C2A8] mb-3 text-sm">
            What We Do
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2]">
            Our Services
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[#2B1D17] rounded-3xl overflow-hidden border border-[#3A2A22] hover:border-[#D6C2A8] transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden h-64">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                <h3 className="text-2xl font-semibold text-[#F8F5F2]">
                  {service.title}
                </h3>

                <p className="text-[#C7B299] mt-4 leading-relaxed text-sm sm:text-base">
                  Premium quality interior woodwork crafted
                  with modern designs and elegant finishing.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;