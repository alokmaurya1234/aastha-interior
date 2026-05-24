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
      className="px-6 sm:px-10 py-24 bg-[#1E1410]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[5px] text-[#D6C2A8] mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8F5F2] leading-tight">
            Let’s Build Your Dream Interior
          </h2>

          <p className="text-[#C7B299] mt-6 text-lg leading-relaxed">
            Get in touch for premium interior woodwork,
            modular kitchens, wardrobes, TV units,
            and luxury furniture solutions crafted
            with elegance and precision.
          </p>

        </div>

        {/* Contact Card */}
        <div className="mt-14 bg-[#2B1D17] border border-[#4A342A] rounded-[32px] p-8 sm:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Left Side */}
            <div>

              <h3 className="text-3xl font-semibold text-white mb-10">
                Contact Information
              </h3>

              <div className="space-y-7">

                {/* Phone */}
                <a
                  href="tel:+919019474452"
                  className="flex items-center gap-5 group"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center group-hover:bg-[#D6C2A8] transition duration-300">

                    <FaPhoneAlt className="text-[#D6C2A8] group-hover:text-[#1E1410] text-xl" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[2px] text-[#C7B299]">
                      Phone
                    </p>

                    <p className="text-xl text-white">
                      +91 9019474452
                    </p>

                  </div>

                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=interiorveerji@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center group-hover:bg-[#D6C2A8] transition duration-300">

                    <MdEmail className="text-[#D6C2A8] group-hover:text-[#1E1410] text-2xl" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[2px] text-[#C7B299]">
                      Email
                    </p>

                    <p className="text-xl text-white break-all">
                      interiorveerji@gmail.com
                    </p>

                  </div>

                </a>

                {/* Location */}
                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center">

                    <FaMapMarkerAlt className="text-[#D6C2A8] text-xl" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[2px] text-[#C7B299]">
                      Location
                    </p>

                    <p className="text-xl text-white">
                      Bangalore, India
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right Side */}
            <div>

              <h3 className="text-3xl font-semibold text-white mb-8">
                Follow Us
              </h3>

              <p className="text-[#C7B299] mb-10 leading-relaxed text-lg">
                Explore our latest interior projects,
                premium woodwork designs, and behind
                the scenes craftsmanship on social media.
              </p>

              {/* Social Icons */}
              <div className="flex gap-5">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aasthainteriorbengaluru_5553/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl hover:scale-110"
                >
                  <FaInstagram />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@aasthainteriorbengaluru5543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl hover:scale-110"
                >
                  <FaYoutube />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919019474452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-2xl bg-[#D6C2A8]/10 flex items-center justify-center text-[#D6C2A8] hover:bg-[#D6C2A8] hover:text-[#1E1410] transition duration-300 text-2xl hover:scale-110"
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