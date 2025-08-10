import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navClasses = ({ isActive }) =>
    `md:px-2 px-1 rounded-[10px] hover:bg-orange-400 ${
      isActive ? "bg-orange-400" : ""
    }`;

  const [isOpen, setIsOpen] = useState(false);
  const Location = useLocation();
  // const handlehamburger = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    setIsOpen(false);
  }, [Location]);

  return (
    <>
      <header className="bg-black text-white py-4 relative overflow-hidden">
        <nav>
          <div className="container mx-auto md:px-6 px-4">
            <div className="nav-container flex justify-between items-center">
              <div className="w-[40px] h-[40px] flex-1/3 min-w-0">
                <img
                  src="/images-videos/logo.png"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </div>
              <button
                className="md:hidden cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </button>

              <div
                className={`${
                  isOpen
                    ? "translate-x-0 duration-1000 ease-in py-4 px-4"
                    : "translate-x-full duration-1000 ease-out"
                } navlinks-button flex-2/3 flex md:flex-row md:justify-between md:static top-0 right-0 overflow-hidden fixed w-[100%] md:translate-x-0 bg-black h-full flex-col z-50`}
              >
                <button
                  className="cursor-pointer self-end md:hidden block"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </button>

                <div
                  className={`${
                    isOpen ? "flex-col" : ""
                  } navlinks flex gap-4 items-center text-[14px] md:flex-row flex-col`}
                >
                  {navlinks.map((navlink) => {
                    return (
                      <NavLink
                        to={navlink.path}
                        key={navlink.id}
                        className={navClasses}
                      >
                        {navlink.title}
                      </NavLink>
                    );
                  })}
                </div>
                <Link
                  to={"/contact"}
                  className={`text-[14px] md:self-end self-center md:bg-orange-400 px-3 rounded-[5px] hover:bg-orange-300 hover:duration-300 hover:ease-in-out mt-4 md:mt-0`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

const navlinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
  { id: 4, title: "Services", path: "/services" },
];
