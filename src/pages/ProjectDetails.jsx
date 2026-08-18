import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectImages } from "../data/projectImages";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const images = getProjectImages(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (images.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <section className="min-h-screen bg-[#1E1410] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold capitalize mb-4">
          {projectId.replace("-", " ")}
        </h1>

        <p className="text-[#C7B299] mb-14">
          Explore our project gallery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-[#3A2A22] bg-[#2B1D17]"
            >
              <img
                src={image}
                alt={`${projectId} ${index + 1}`}
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;