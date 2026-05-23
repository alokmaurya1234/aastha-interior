import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "919019474452";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}

export default WhatsAppButton;