import { Asterisk } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const { formData, setFormData, rateData, services } = useGlobalContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const navigate = useNavigate();

  const getServiceTitle = () => {
    return services.map((service) => service.title);
  };

  const titles = getServiceTitle();

  const findMatchingRates = (serviceTitle) => {
    const lowerTitle = serviceTitle.toLowerCase().split("");

    // Look through all keys in rateData
    for (const key in rateData) {
      const serviceObject = rateData[key];
      const serviceObjectTitleWords = serviceObject.title
        .toLowerCase()
        .split("");
      if (lowerTitle.every((word) => serviceObjectTitleWords.includes(word))) {
        return serviceObject.rates; // return the rates for the matched key
      }
    }

    return []; // no match found
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS credentials
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const TEMPLATE_ID2 = import.meta.env.VITE_TEMPLATE_ID2;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      // template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone_number: formData.phone,
        booking_details_service: formData.bookingDetails.service,
        booking_details_package: formData.bookingDetails.package,
        booking_details_price: formData.bookingDetails.price,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        event_location: formData.eventLocation,
        expected_duration: formData.expectedDuration,
        number_of_guests: formData.numOfSubject,
        message: formData.message,
        to_name: "Sammaze Media", // business name
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        { publicKey: PUBLIC_KEY }
      );

      if (result.status === 200) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID2, templateParams, {
          publicKey: PUBLIC_KEY,
        });
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          bookingDetails: { service: "", package: "", price: "" },
          preferredDate: "",
          preferredTime: "",
          eventLocation: "",
          expectedDuration: "",
          numOfSubject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus("");
        }, 3000);
        // navigate("/");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="flex justify-center items-center mx-auto">
        <div className="container mx-auto md:px-6 px-4">
          <div className="booking-container text-black md:max-w-[800px] flex flex-col mx-auto justify-center items-center">
            <h1 className="text-[30px] text-center">Book Your Session</h1>
            <p className="text-center mb-5 md:max-w-[700px]">
              Ready to capture your special moments? Fill out the form below and
              we'll get back to you within 24 hours to confirm your booking
            </p>

            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! Your booking request has been sent successfully.
                We'll get back to you within 24 hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Sorry, there was an error sending your request. Please try again
                or contact us directly.
              </div>
            )}
            <form
              className="booking-field bg-[#faf9f7] text-black p-4 rounded-[20px]"
              onSubmit={handleSubmit}
            >
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
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-2"
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
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-2"
                    />
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-2"
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-200 w-full rounded-[6px] outline-none mt-1 p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="selection-field">
                <h1 className="text-[20px] border-b my-4 flex gap-1 items-center">
                  Select Service <Asterisk size={12} color="red" />
                </h1>

                <div className="selections md:grid md:grid-cols-2 gap-5 space-y-4">
                  <div className="service">
                    <label htmlFor="phone" className="flex gap-1 items-center">
                      Service
                      <Asterisk size={12} color="red" />
                    </label>
                    <select
                      name="service"
                      id=""
                      value={formData.bookingDetails.service}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          bookingDetails: {
                            ...formData.bookingDetails,
                            service: e.target.value,
                          },
                        });
                      }}
                      className="border border-gray-200 cursor-pointer px-2 py-2 rounded-[5px] outline-none w-full"
                    >
                      <option value="">Select a service</option>
                      {titles.map((title) => {
                        return <option value={title}>{title}</option>;
                      })}
                    </select>
                  </div>
                  <div className="package">
                    <label htmlFor="phone" className="flex gap-1 items-center">
                      Package
                      <Asterisk size={12} color="red" />
                    </label>
                    <select
                      name="package"
                      id=""
                      onChange={(e) => {
                        const selectedPackage = findMatchingRates(
                          formData.bookingDetails.service
                        ).find((rate) => rate.name === e.target.value);
                        setFormData({
                          ...formData,
                          bookingDetails: {
                            ...formData.bookingDetails,
                            package: selectedPackage?.name || "",
                            price: selectedPackage?.price || "",
                          },
                        });
                      }}
                      value={formData.bookingDetails.package}
                      disabled={!formData.bookingDetails.service}
                      className="border border-gray-200 cursor-pointer px-2 py-2 rounded-[5px] outline-none w-full"
                    >
                      <option value="">Select a package</option>
                      {formData.bookingDetails.service &&
                        findMatchingRates(formData.bookingDetails.service).map(
                          (rate, index) => (
                            <option value={rate.name} key={index}>
                              {rate.name}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                  <div className="price">
                    <label htmlFor="phone" className="flex gap-1 items-center">
                      Price
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.bookingDetails.price || ""}
                      placeholder="Price"
                      className="border border-gray-200 cursor-pointer px-2 py-2 rounded-[5px] outline-none w-full"
                    />
                  </div>
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
                      className="border border-gray-200 cursor-pointer px-2 py-2 rounded-[5px] outline-none w-full"
                    />
                  </div>
                  <div className="preferred-time">
                    <label htmlFor="preferredTime">Preferred Start Time</label>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-2"
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
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-2"
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
                      className="text-black w-full border rounded-[5px] outline-none px-2 py-2.5 border-gray-200 cursor-pointer bg-gray-100"
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
                      value={formData.numOfSubject}
                      onChange={handleInputChange}
                      className="border border-gray-200 cursor-pointer px-2 rounded-[5px] outline-none w-full py-2"
                    />
                  </div>
                </div>
                <div className="additional-info">
                  <h1 className="text-[20px] border-b my-4">
                    Additional Information{" "}
                  </h1>
                  <div className="detail w-full">
                    <label>Tell us about your vision</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border border-gray-200 w-full px-3 py-3 md:placeholder:text-black outline-none rounded-[5px] min-h-[100px] placeholder:text-[12px]"
                      placeholder="Describe your style, preferences, special requests, or any important details we should know about your event...."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full my-8 py-3 rounded-[15px] cursor-pointer transition-colors text-white ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-orange-700 hover:bg-orange-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Request Booking"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
