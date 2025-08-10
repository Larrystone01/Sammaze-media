import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-black relative mt-40">
        <div
          className="absolute top-0 left-0 w-full h-32 bg-black"
          style={{
            clipPath: "polygon(0% 100%, 30% 60%, 50% 30%, 70% 60%, 100% 100%)",
            transform: "translateY(-100%)",
          }}
        ></div>
        <div className="container mx-auto md:px-6 px-4">
          <div className="footer-container py-15 flex flex-col gap-4 md:grid md:grid-cols-4">
            <div className="footer-logo text-white flex flex-col gap-7 md:justify-between">
              <img src="/images-videos/logo.png" alt="" className="w-[40px]" />
              <div className="social-icons flex gap-2">
                <a
                  href="http://www.instagram.com/sammazemedia?utm_source=ig_web_button_share_sheet&igsh=ZGRwbzIwb2kyZHZl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-blue-700" />
                </a>
                <a
                  href="http://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FYCHA7Q2JEPCOP1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacMtbr-BcRINecLAxyExuQpy0NU58HFjF6Blp9-BHc0nJoJYXiwTpYhDIEJXg_aem_uuyiOaJiKG8Z84ZoX3FGDg&e=AT240-9DliFdaX7XdbWmp5WH3TuYVJMoonwBqQgfdDuBxmXZLP-2BkFg0gLMm3IDLGqH3JXOhUpfi0rF49Fsu0QHLZTPoXRrjTUUGAw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500" />
                </a>
                <a
                  href="http://www.tiktok.com/@sammazephoto?_t=ZS-8ybVtJtqmIx&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="" />
                </a>
              </div>
            </div>
            <div className="pages text-white">
              <h1 className="text-red-700 font-bold mb-2">Pages</h1>
              <div className="links flex flex-col gap-1.5 text-[14px]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact us</Link>
              </div>
            </div>
            <div className="gallery-section text-white">
              <h1 className="text-red-700 font-bold mb-2">Gallery</h1>
              <div className="links flex flex-col gap-1.5 text-[14px]">
                <Link to="/">Wedding Photography</Link>
                <Link to="/about">Lifestyle Sessions</Link>
                <Link to="/pricing">Pre-Wedding Shoots</Link>
                <Link to="/contact">Contact us</Link>
              </div>
            </div>
            <div className="gallery-section text-white">
              <h1 className="text-red-700 font-bold mb-2">Contacts</h1>
              <div className="links flex flex-col gap-1.5 text-[14px]">
                <Link to="/">Mobile/Phone Number</Link>
                <Link to="/about">Email</Link>
                <Link to="/pricing">Offcie Address</Link>
                <Link to="/contact">Contact us</Link>
              </div>
            </div>
          </div>
          <div className="all-right border-t-1 border-t-gray-600">
            <p className="text-center text-[12px] text-white pt-5 pb-3">
              @2025. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
