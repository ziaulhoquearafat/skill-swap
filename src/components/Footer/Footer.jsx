import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ebf6ee] text-[#333] py-14 border-t border-[#dce9df]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl alegreya-font font-bold mb-3 text-[#28807e]">
            SKILL<span className="text-[#ec5951]">SWAP</span>
          </h2>
          <p className="text-sm text-[#666]">
            Empowering learners through collaboration. Connect, share, and grow
            your skills with others.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="font-semibold text-[#28807e] mb-3">Contact Info</h6>
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-[#555]">
              <FaEnvelope className="text-[#ec5951]" /> support@skillswap.com
            </p>
            <p className="flex items-center gap-2 text-[#555]">
              <FaPhoneAlt className="text-[#ec5951]" /> +880 1234 567890
            </p>
            <p className="flex items-center gap-2 text-[#555]">
              <FaLocationArrow className="text-[#ec5951]" /> Chittagong,
              Bangladesh
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h6 className="font-semibold text-[#28807e] mb-3">Follow Us</h6>
          <div className="flex gap-4 text-2xl text-[#28807e]">
            <a href="#" className="hover:text-[#ec5951] transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#ec5951] transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#ec5951] transition-all">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Legal / Policy */}
        <div>
          <h6 className="font-semibold text-[#28807e] mb-3">Legal & Policy</h6>
          <a className="block text-[#555] hover:text-[#ec5951] transition-all">
            Privacy Policy
          </a>
          <a className="block text-[#555] hover:text-[#ec5951] transition-all">
            Terms & Conditions
          </a>
          <a className="block text-[#555] hover:text-[#ec5951] transition-all">
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-[#dce9df] text-center pt-5 text-sm text-[#9f9f9f]">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#28807e] font-semibold">SKILLSWAP</span> — All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
