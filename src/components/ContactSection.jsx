function ContactSection() {
    return (
        <section
            id="contact"
            className="px-8 py-24 bg-[#2B1D17]"
        >

            <div className="mt-10 flex flex-col items-center gap-4 text-center">

                {/* Phone */}
                <a
                    href="tel:+919019474452"
                    className="flex items-center gap-3 text-white text-xl hover:text-[#D6C2A8] transition"
                >
                    <span>📞</span>
                    <span>+91 9019474452</span>
                </a>

                {/* Email */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aasthainterior@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white text-xl hover:text-[#D6C2A8] transition break-all justify-center"
                >
                    <span>✉️</span>
                    <span>aasthainterior@gmail.com</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-white text-xl">
                    <span>📍</span>
                    <span>Bangalore, India</span>
                </div>

            </div>
        </section>
    );
}

export default ContactSection;