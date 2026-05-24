import { useParams } from "react-router-dom";

function ServiceDetails() {

  const { serviceId } = useParams();

  // Auto import all images from catalogue
  const images = import.meta.glob(
    "../assets/catalogue/**/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  // Filter only current service images
  const filteredImages = Object.entries(images)
    .filter(([path]) =>
      path.includes(`/catalogue/${serviceId}/`)
    )
    .map(([, image]) => image);

  return (
    <section className="min-h-screen bg-[#1E1410] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">

          <h1 className="text-5xl font-bold capitalize mb-4">
            {serviceId.replace("-", " ")}
          </h1>

          <p className="text-[#C7B299]">
            Premium interior craftsmanship gallery.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredImages.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-[#3A2A22] bg-[#2B1D17] group"
            >

              <img
                src={image}
                alt=""
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceDetails;