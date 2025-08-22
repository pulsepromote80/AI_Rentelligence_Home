import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Image";
import {toast} from "react-toastify";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid phone number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } 

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://rentelligence.live/api/Geography/addContactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

     if(response.status === 200) {
        toast.success("Query send successfully!");
      }

      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }
  };

  return (
    <div
      className="space-bottom overflow-hidden contact-area-1 position-relative z-index-common bg-white"
      id="contact-sec"
    >
      <div className="container">
        <div className="consulting-wrap1 bg-smoke">
          <div className="row align-items-center">
            <div className="col-xxl-6">
              <div className="page-img mb-0">
                <img src={Image.consultingthumb11} alt="img" />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="consulting-form-wrap1">
                <div className="title-area mb-20">
                  <h2 className="sec-title">Get In Touch!</h2>
                </div>
                <div className="contact-form-v1">
                  <form
                    className="contact-form ajax-contact"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      {["name", "email", "phone", "subject"].map(
                        (field, index) => (
                          <div
                            className="form-group style-border col-md-6"
                            key={field}
                          >
                            <input
                              type={
                                field === "email"
                                  ? "email"
                                  : field === "phone"
                                  ? "number"
                                  : "text"
                              }
                              className="form-control"
                              name={field}
                              value={formData[field]}
                              onChange={handleChange}
                              placeholder={
                                field.charAt(0).toUpperCase() +
                                field.slice(1).replace(/([A-Z])/g, " $1")
                              }
                            />
                            {errors[field] && (
                              <small className="text-danger">
                                {errors[field]}
                              </small>
                            )}
                            <i
                              className={`far fa-${
                                field === "name"
                                  ? "user"
                                  : field === "email"
                                  ? "envelope"
                                  : field === "phone"
                                  ? "phone"
                                  : "circle-info"
                              }`}
                            ></i>
                          </div>
                        )
                      )}
                      <div className="form-group style-border col-12">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Type your Message"
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </div>
                      <div className="form-btn col-12 cursor-pointer">
                        <button className="th-btn style5" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                    {message && (
                      <p className="form-messages mb-0 mt-3">{message}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
