import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CareerForm = () => {
  const [careerTypes, setCareerTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    careerName: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCareerTypes = async () => {
      try {
        const response = await fetch(
          "https://rentelligence.live/api/Geography/getAllCareerType",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("response", response);
        if (response.ok) {
          const data = await response.json();
          setCareerTypes(data);
        } else {
          setMessage("Failed to fetch career types.");
        }
      } catch (error) {
        setMessage("Network error. Please try again later.");
      }
    };

    fetchCareerTypes();
  }, []);

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

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile number is required.";
    else if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Invalid Mobile number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.careerName.trim())
      newErrors.careerName = "Position is required.";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
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

      if (response.ok) {
        toast.success("Query Sended Successfully");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          careerName: "",
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
    <div className=" mb-10 ">
      <div className="card  rounded pt-4 pb-4 ">
        <div className="card-body container shadow-lg rounded ">
          <h2 className="text-center">Apply for a Career</h2>
          <p className="text-center text-muted">
            Fill out the form below to apply for an open position.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                {errors.mobile && (
                  <small className="text-danger">{errors.mobile}</small>
                )}
              </div>
              <div className="col-md-6">
                <label className="form-label">Experience</label>
                <select
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select Experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1 - 2 years">1 - 2 years</option>
                  <option value="3 - 5 years">3 - 5 years</option>
                  <option value="6 - 10 years">6 - 10 years</option>
                  <option value="10+ years">10+ years</option>
                </select>
                {errors.subject && (
                  <small className="text-danger">{errors.subject}</small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Position</label>
                <select
                  name="careerName"
                  className="form-select"
                  value={formData.careerName}
                  onChange={handleChange}
                >
                  <option value="">Select Position</option>
                  {careerTypes?.data?.map((type, index) => (
                    <option key={index} value={type.Id}>
                      {type.Name}
                    </option>
                  ))}
                </select>
                {errors.careerName && (
                  <small className="text-danger">{errors.careerName}</small>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Remark </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Personal Note "
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div class="row justify-content-center p-5">
          <div class="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
            <div class="title-area text-center">
              <div class="center-div">
                <p>Rentelligence</p>
              </div>
              <h2
                class="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                data-aos="fade-up"
              >
                Why Build Your Career at Rentelligence?
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">1. Innovative Environment</h6>
                <p className="career-sub-heading">
                  {" "}
                  Innovate. Disrupt. Lead the Future. Be part of a team of
                  visionaries and innovators driving the AI revolution. At
                  Rentelligence, you’ll work with cutting-edge technologies that
                  redefine automation, AI leasing, and digital transformation.
                  Shape the future with us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">1. Innovative Environment</h6>
                <p className="career-sub-heading">
                  {" "}
                  Innovate. Disrupt. Lead the Future. Be part of a team of
                  visionaries and innovators driving the AI revolution. At
                  Rentelligence, you’ll work with cutting-edge technologies that
                  redefine automation, AI leasing, and digital transformation.
                  Shape the future with us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">1. Innovative Environment</h6>
                <p className="career-sub-heading">
                  {" "}
                  Innovate. Disrupt. Lead the Future. Be part of a team of
                  visionaries and innovators driving the AI revolution. At
                  Rentelligence, you’ll work with cutting-edge technologies that
                  redefine automation, AI leasing, and digital transformation.
                  Shape the future with us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">1. Innovative Environment</h6>
                <p className="career-sub-heading">
                  {" "}
                  Innovate. Disrupt. Lead the Future. Be part of a team of
                  visionaries and innovators driving the AI revolution. At
                  Rentelligence, you’ll work with cutting-edge technologies that
                  redefine automation, AI leasing, and digital transformation.
                  Shape the future with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div class="row justify-content-center p-5">
          <div class="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
            <div class="title-area text-center">
              <div class="center-div">
                <p>Global Impact</p>
              </div>
              <h2
                class="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                data-aos="fade-up"
              >
                Your Work. Global Influence.
              </h2>
              <p>
                Join a mission that spans the globe. At Rentelligence, you’ll be
                part of an ecosystem that transforms how businesses and
                individuals leverage AI. Your work will have a worldwide impact,
                empowering people everywhere to thrive in the era of automation.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h4 className="career-heading">
                  Current Openings at Rentelligence
                </h4>
                <h6>AI/ML Developer</h6>
                <p className="career-sub-heading">
                  <b>*Location:*</b> Remote / Hybrid
                  <b> *Role Overview:* </b> Design, develop, and optimize AI
                  agents and machine learning models for automation and
                  intelligent decision-making.
                  <b> *Requirements:* </b>
                  <b>
                    * Strong knowledge of Python, TensorFlow, PyTorch *
                    Experience in AI/ML model deployment * Problem-solving
                    mindset and innovation-driven approach
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">2. Blockchain Developer</h6>
                <p className="career-sub-heading">
                  <b> *Location:* </b> Remote / Hybrid
                  <b> *Role Overview:*</b> Build and maintain blockchain-based
                  systems for agent ownership, leasing, and NFT integration.
                  <b>*Requirements:*</b>* Expertise in Solidity, smart
                  contracts, and decentralized applications * Knowledge of Web3
                  frameworks * Understanding of NFTs and tokenomics
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">
                  3. Marketing & Growth Specialist
                </h6>
                <p className="career-sub-heading">
                  <b> *Location:* </b> Remote
                  <b> *Role Overview:* </b> Drive brand awareness and user
                  acquisition for Rentelligence globally.
                  <b> *Requirements:* </b>
                  <b>
                    * Digital marketing experience (SEO, PPC, social media) *
                    Strong communication and creative thinking * Experience with
                    tech or fintech products is a plus
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="career-heading">
                  4. Customer Success Executive
                </h6>
                <p className="career-sub-heading">
                  <b>*Location:* </b> Remote
                  <b> *Role Overview:* </b> Provide top-notch support and
                  engagement to clients, ensuring a seamless AI leasing
                  experience.
                  <b> *Requirements:* </b>
                  <b>
                    * Excellent communication and problem-solving skills *
                    Ability to understand AI-driven solutions * Prior experience
                    in customer service
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
