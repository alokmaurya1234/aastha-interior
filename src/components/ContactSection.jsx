import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 py-24 bg-gradient-to-b from-[#1E1410] to-[#2B1D17]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#D6C2A8] mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2] leading-tight">
            Let’s Build Your Dream Interior
          </h2>

          <p className="text-[#C7B299] mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Get in touch for premium interior woodwork,
            modular kitchens, wardrobes, TV units,
            and luxury furniture solutions crafted
            with elegance and precision.
          </p>

        </div>

        {/* Contact Card */}
        <div className="bg-[#241711]/80 backdrop-blur-xl border border-[#3A2A22] rounded-3xl p-8 sm:p-12 shadow-2xl">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>

              <h3 className="text-3xl font-semibold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* Phone */}
                <a
                  href="tel:+919019474452"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-[#D6C2A8]/10 p-4 rounded-2xl group-hover:bg-[#D6C2A8] transition">
                    <FaPhoneAlt className="text-[#D6C2A8] group-hover:text-[#1E1410]" />
                  </div>

                  <span className="text-lg text-[#F8F5F2]">
                    +91 9019474452
                  </span>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aasthainterior@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-[#D6C2A8]/10 p-4 rounded-2xl group-hover:bg-[#D6C2A8] transition">
                    <MdEmail className="text-[#D6C2A8] group-hover:text-[#1E1410] text-xl" />
                  </div>

                  <span className="text-lg text-[#F8F5F2] break-all">
                    aasthainterior@gmail.com
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">

                  <div className="bg-[#D6C2A8]/10 p-4 rounded-2xl">
                    <FaMapMarkerAlt className="text-[#D6C2A8]" />
                  </div>

                  <span className="text-lg text-[#F8F5F2]">
                    Bangalore, India
                  </span>

                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center md:items-start">

              <h3 className="text-3xl font-semibold text-white mb-8">
                Follow Us
              </h3>

              <p className="text-[#C7B299] mb-8 leading-relaxed text-center md:text-left">
                Explore our latest interior projects,
                premium woodwork designs, and behind
                the scenes craftsmanship on social media.
              </p>

              {/* Social Icons */}
              <div className="flex gap-5">

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl"
                >
                  <FaInstagram />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl"
                >
                  <FaYoutube />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919019474452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;