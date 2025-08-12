import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Hero() {
  const { services } = useGlobalContext();
  return (
    <>
      <section>
        <div className="container mx-auto md:px-6 px-4">
          <div className="service-hero bg-orange-500 my-5 text-white py-3 px-4">
            <h1 className="text-[30px] font-bold text-center">Our Services</h1>
            <p className="text-center">
              <span className="font-bold">
                We Don’t Just Take Pictures or Film Events — We Tell Stories
                That Last Forever
              </span>
              . At Sammaze's, we believe every moment has a story worth
              preserving. Whether it's the joy of a wedding, the energy of a
              live event, or the essence of a personal brand, we’re here to
              capture not just what happened, but how it felt. Blending
              creativity, technical skill, and a passion for real emotion, we
              create powerful images and cinematic films that reflect your
              vision and personality. From lifestyle photography to wedding
              videography, branded content to drone footage, our goal is to turn
              your moments into lasting memories. This isn’t just photography or
              videography — this is storytelling with heart. Let us help you
              bring your story to life, frame by frame.
            </p>
          </div>
          <div className="services">
            <div className="services-container grid md:grid-cols-2 gap-3">
              {services.map((service) => {
                return (
                  <div
                    className="service bg-white px-4 py-3 rounded-[15px]"
                    key={service.id}
                  >
                    <div className="icon bg-orange-400 text-white w-fit p-5 rounded-[10px]">
                      {service.icon}
                    </div>
                    <p className="service-title font-bold py-2 text-[30px] uppercase">
                      {service.title}
                    </p>
                    <div className="service-description">
                      {service.description}
                    </div>
                    <ul className="services-offered mt-2 mb-4">
                      {service.services.map((service, index) => {
                        return (
                          <div
                            className="listItem flex items-center gap-2 mb-1"
                            key={index}
                          >
                            <CircleCheckBig size={15} />
                            <li className="">{service}</li>
                          </div>
                        );
                      })}
                    </ul>
                    <Link
                      to="/contact"
                      className="bg-orange-400 text-white px-3 py-2 rounded-[8px]"
                    >
                      Book Us
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
