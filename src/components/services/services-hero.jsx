import { Link } from "react-router-dom";
import { CircleCheckBig, Info } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

export default function Hero() {
  const { services, rateData, bookingTerms } = useGlobalContext();
  const [showRates, setShowRates] = useState(false);

  const getServiceRates = (serviceTitle) => {
    const title = serviceTitle.toLowerCase();
    if (title.includes("photography") || title.includes("portrait")) {
      return rateData.photography;
    } else if (
      title.includes("content creator") ||
      title.includes("cinematography")
    ) {
      return rateData.contentCreator;
    } else if (title.includes("wedding")) {
      return rateData.wedding;
    } else if (title.includes("real estate") || title.includes("property")) {
      return rateData.realEstate;
    } else if (title.includes("club") || title.includes("event")) {
      return rateData.clubEvents;
    }
    return null;
  };
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
          <div className="mb-6 text-center">
            <button
              className="text-white bg-orange-400 px-4 py-2 rounded-[10px] hover:bg-orange-500 cursor-pointer"
              onClick={() => setShowRates(!showRates)}
            >
              {showRates ? "Hide Rates" : "View Our Rates"}
            </button>
          </div>

          {/* Rates Section */}
          {showRates && (
            <div className="rates-section mb-8 animate-fade-in">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 shadow-lg">
                <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                  Our Competitive Rates
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(rateData).map(([key, category]) => (
                    <div
                      key={key}
                      className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-xl text-gray-800 mb-4 border-b border-orange-200 pb-2">
                        {category.title}
                      </h3>
                      <div className="space-y-3">
                        {category.rates.map((rate, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-gray-600 text-sm">
                              {rate.name}
                            </span>
                            <span className="font-bold text-orange-600 text-lg">
                              {rate.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Terms */}
                <div className="mt-6 bg-blue-50 p-5 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2 text-lg">
                    <Info size={20} />
                    Booking Terms & Payment
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {bookingTerms.map((term, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CircleCheckBig
                          size={16}
                          className="text-blue-600 mt-1 flex-shrink-0"
                        />
                        <span className="text-blue-700">{term}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Note */}
                <div className="mt-4 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <p className="text-yellow-800">
                    <span className="font-bold">Note:</span> These rates apply
                    to standard shoots. For model, musical, estate, and creative
                    concept shoots, please contact us for additional rates.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="services">
            <div className="services-container grid md:grid-cols-2 gap-3">
              {services.map((service) => {
                const serviceRates = getServiceRates(service.title);
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

                    {serviceRates && (
                      <div className="service-rates bg-orange-50 p-4 rounded-lg mb-4 border border-orange-100 mt-3">
                        <h4 className="font-semibold text-orange-700 mb-3">
                          Starting Rates:
                        </h4>
                        <div className="space-y-2">
                          {serviceRates.rates.slice(0, 2).map((rate, index) => (
                            <div
                              key={index}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-600">{rate.name}</span>
                              <span className="font-bold text-orange-600">
                                {rate.price}
                              </span>
                            </div>
                          ))}
                          {serviceRates.rates.length > 2 && (
                            <p className="text-sm text-orange-600 font-medium">
                              +{serviceRates.rates.length - 2} more options
                              available
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    <ul className="services-offered mt-2 mb-4">
                      {service.services.map((service, index) => {
                        return (
                          <div
                            className="listItem flex items-center gap-2 mb-1"
                            key={index}
                          >
                            <CircleCheckBig
                              size={15}
                              className="text-orange-500"
                            />
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
