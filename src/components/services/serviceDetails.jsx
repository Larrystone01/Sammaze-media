import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

export default function ServiceListings() {
  const { services, rateData, formData, setFormData } = useGlobalContext();
  const [selectedPackage, setSelectedPackage] = useState({});
  const navigate = useNavigate();

  const location = useLocation();
  const isOnServicePage = location.pathname === "/services";

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

  const handlePackageSelect = (serviceTitle, packageData) => {
    console.log("📦 Package selected:", {
      serviceTitle,
      packageName: packageData.name,
      packagePrice: packageData.price,
      packageData,
    });

    const newPackage = {
      service: serviceTitle,
      package: packageData.name,
      price: packageData.price,
      packageData: packageData,
    };

    setSelectedPackage(newPackage);

    const newBookingDetails = {
      service: serviceTitle,
      package: packageData.name,
      price: packageData.price,
    };

    setFormData((currentFormData) => ({
      ...currentFormData,
      bookingDetails: newBookingDetails,
    }));

    // Save to sessionStorage immediately
    saveBookingDetails(newBookingDetails);
  };
  // Enhanced booking handler
  const handleBookUs = (service, directPackage = null) => {
    // const serviceType = service.title.toLowerCase().replace(/\s+/g, "-");
    let bookingUrl = `/booking`;
    const packageToBook = directPackage || selectedPackage;
    if (packageToBook) {
      const newBookingDetails = {
        service: service.title,
        package: packageToBook.package,
        price: packageToBook.price,
      };
      setFormData((currentFormData) => ({
        ...currentFormData,
        bookingDetails: newBookingDetails,
      }));
      saveBookingDetails(newBookingDetails);
    }

    navigate(bookingUrl);
  };

  const saveBookingDetails = (bookingDetails) => {
    sessionStorage.setItem("booking-details", JSON.stringify(bookingDetails));
  };

  // Get Booking Details and Selected Package from Session Storage on Component Mount
  useEffect(() => {
    const savedPackageDetails = sessionStorage.getItem("selected-package");
    if (savedPackageDetails) {
      setSelectedPackage(JSON.parse(savedPackageDetails));
    }
    const savedBooking = sessionStorage.getItem("booking-details");
    if (savedBooking) {
      setFormData((prev) => ({
        ...prev,
        bookingDetails: JSON.parse(savedBooking),
      }));
    }
  }, []);

  // Update Booking Details in Session Storage when formData.bookingDetails changes
  useEffect(() => {
    if (
      formData.bookingDetails &&
      Object.keys(formData.bookingDetails).length > 0
    ) {
      saveBookingDetails(formData.bookingDetails);
    }
  }, [formData.bookingDetails]);

  useEffect(() => {
    if (Object.keys(selectedPackage).length > 0) {
      sessionStorage.setItem(
        "selected-package",
        JSON.stringify(selectedPackage)
      );
    }
  }, [selectedPackage]);
  return (
    <>
      <div className={`services ${isOnServicePage ? "" : "mt-4 px-3"}`}>
        <div className="services-container grid md:grid-cols-2 gap-3">
          {services.map((service, serviceIndex) => {
            const serviceRates = getServiceRates(service.title);
            const isSelectedPackage =
              selectedPackage?.service === service.title;
            return (
              <div
                className="service bg-white px-4 py-3 rounded-[15px]"
                key={serviceIndex}
              >
                <div className="icon bg-orange-400 text-white w-fit p-5 rounded-[10px]">
                  {service.icon}
                </div>
                <p className="service-title font-bold py-2 text-[30px] uppercase">
                  {service.title}
                </p>
                <div className="service-description">{service.description}</div>

                {serviceRates && (
                  <div className="service-rates bg-orange-50 p-4 rounded-lg mb-4 border border-orange-100 mt-3">
                    <h4 className="font-semibold text-orange-700 mb-3">
                      Select Package:
                    </h4>
                    <div className="space-y-2">
                      {serviceRates.rates.map((rate, rateIndex) => {
                        const isSelected =
                          selectedPackage?.service === service.title &&
                          selectedPackage?.package === rate.name;
                        return (
                          <label
                            key={`${serviceIndex}-${rateIndex}-${rate.id}`}
                            className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-orange-200 border border-orange-300"
                                : "hover:bg-orange-100"
                            }`}
                            // onClick={() =>
                            //   handlePackageSelect(serviceIndex, rate)
                            // }
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`package-selection}`}
                                id=""
                                value={rate.id}
                                checked={isSelected}
                                onChange={() => {
                                  handlePackageSelect(service.title, rate);
                                }}
                              />
                              <span className="text-gray-600">{rate.name}</span>
                            </div>
                            <span className="font-bold text-orange-600">
                              {rate.price}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                    {isSelectedPackage && selectedPackage && (
                      <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
                        <p className="text-green-700 text-sm">
                          ✓ Selected: {selectedPackage.name} -{" "}
                          {selectedPackage.price}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <ul className="services-offered mt-2 mb-4">
                  {service.services.map((serviceItem, itemIndex) => {
                    return (
                      <li
                        className="listItem flex items-center gap-2 mb-1"
                        key={itemIndex}
                      >
                        <CircleCheckBig size={15} className="text-orange-500" />
                        {serviceItem}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => handleBookUs(service)}
                  className="bg-orange-400 flex gap-1 text-white px-3 py-2 rounded-[8px] cursor-pointer"
                >
                  Book Us
                  {isSelectedPackage && selectedPackage && (
                    <span>({selectedPackage.price})</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
