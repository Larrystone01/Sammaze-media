import { Asterisk } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { useState } from "react";

export default function ContactMe() {
  const { services } = useGlobalContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    eventLocation: "",
    expectedDuration: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleServiceType = (service) => {
    setFormData((prev) => ({
      ...prev,
      service,
    }));
  };

  return (
    <>
      <section>
        <div className="container mx-auto md:px-6 px-4">
          <div className="booking-container text-black">
            <h1 className="text-[30px] text-center">Book Your Session</h1>
            <p className="text-center">
              Ready to capture your special moments? Fill out the form below and
              we'll get back to you within 24 hours to confirm your booking
            </p>
            <form className="booking-field bg-gray-400 text-white p-4">
              <h1 className="text-[20px] border-b mb-4">
                Personal Information
              </h1>
              <div>
                <div className="form-content grid md:grid-cols-2 gap-4">
                  <div className="first-name w-full">
                    <label
                      htmlFor="firstName"
                      className="flex gap-1 items-center"
                    >
                      First Name <Asterisk size={12} color="red" />
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-1"
                    />
                  </div>
                  <div className="last-name">
                    <label
                      htmlFor="lastName"
                      className="flex gap-1 items-center"
                    >
                      Last Name
                      <Asterisk size={12} color="red" />
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-1"
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-1"
                    />
                  </div>
                  <div className="phone">
                    <label htmlFor="phone" className="flex gap-1 items-center">
                      Phone Number
                      <Asterisk size={12} color="red" />
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-1"
                    />
                  </div>
                </div>
              </div>
              <div className="selection-field">
                <h1 className="text-[20px] border-b my-4 pb-4 flex gap-1 items-center">
                  Select Services <Asterisk size={12} color="red" />
                </h1>
                <div className="services-selection grid md:grid-cols-3 gap-5">
                  {services.map((service) => {
                    return (
                      <div
                        className={`service text-black px-4 py-3 rounded-[10px] cursor-pointer ${
                          formData.service === service
                            ? "bg-orange-400 text-white"
                            : "bg-white"
                        }`}
                        key={service.id}
                        onClick={() => handleServiceType(service)}
                      >
                        <h1 className="font-bold text-[20px]">
                          {service.title}
                        </h1>
                        <p>{service.services[2]}</p>
                        <p
                          className={`w-fit px-3 rounded-[5px] py-1 text-white select-none ${
                            formData.service === service
                              ? "bg-gradient-to-l from-white to-black"
                              : "bg-orange-400"
                          }`}
                        >
                          Custom Price
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="Event-details">
                <h1 className="text-[20px] border-b my-4">Event Details </h1>
                <div className="event-details-input md:grid md:grid-cols-2 gap-5 flex flex-col">
                  <div className="preferred-date">
                    <label
                      htmlFor="preferredDate"
                      className="flex gap-1 items-center"
                    >
                      Preferred Date <Asterisk size={12} color="red" />
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="border border-gray-200 cursor-pointer px-2 py-1 rounded-[5px] outline-none w-full"
                    />
                  </div>
                  <div className="preferred-time">
                    <label htmlFor="preferredTime">Preferred Start Time</label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-1"
                    />
                  </div>
                  <div className="Event Location">
                    <label
                      htmlFor="eventLocation"
                      className="flex gap-1 items-center"
                    >
                      Event Location <Asterisk size={12} color="red" />
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleInputChange}
                      required
                      placeholder="E.g Bokku Mart Alimosho, Lagos State"
                      id=""
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-1"
                    />
                  </div>
                  <div className="expected-duration">
                    <label
                      htmlFor="expectedDuration"
                      className="flex gap-1 items-center"
                    >
                      Expected Duration <Asterisk size={12} color="red" />
                    </label>
                    <select
                      name="expectedDuration"
                      required
                      value={formData.expectedDuration}
                      onChange={handleInputChange}
                      className="text-white w-full border rounded-[5px] outline-none px-2 py-1.5 border-gray-200 cursor-pointer bg-gray-400"
                    >
                      <option value="Select Duration">Select Duration</option>
                      <option value="1-2 hours">1-2 hours</option>
                      <option value="3-4 hours">3-4 hours</option>
                      <option value="5-6 hours">5-6 hours</option>
                      <option value="8+ hours (full day)">
                        8+ hours (full day)
                      </option>
                    </select>
                  </div>
                  <div className="preferred-time col-span-2">
                    <label htmlFor="numOfSubject">
                      Number of Guests/Subjects
                    </label>
                    <input
                      type="number"
                      name="numOfSubject"
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-1"
                    />
                  </div>
                </div>
                <div className="additional-info">
                  <h1 className="text-[20px] border-b my-4">
                    Additional Information{" "}
                  </h1>
                  <div className="detail w-full">
                    <h3>Tell us about your vision</h3>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border w-full px-3 py-3 placeholder:text-white"
                      placeholder="Describe your style, preferences, special requests, or any important details we should know about your event...."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full my-8 bg-orange-700 py-3 rounded-[15px] hover:bg-orange-600 cursor-pointer"
              >
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
