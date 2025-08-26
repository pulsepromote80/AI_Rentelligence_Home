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
    <div>
      <div className="career-bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="elementor-widget-container">
                <h2
                  class="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                  data-aos="fade-up"
                >
                  Why Build Your Career at Rentelligence?
                </h2>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div class="tcgelements-button btn-selector-type-button btn-text-selector-type-button  tcgelements-responsive-break-line">
                    <span class="tcgelements-button-content-wrapper">
                      <span class="tcgelements-button-text">
                        <span>1.</span> Innovative Environment{" "}
                      </span>
                    </span>
                    <img
                      decoding="async"
                      width="40"
                      height="40"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/star6-1.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <b className="heading-career-card">
                      Innovate. Disrupt. Lead the Future
                    </b>
                    <p className="sub-heading-career-card">
                      Be part of a team of visionaries and innovators driving
                      the AI revolution. At Rentelligence, you’ll work with
                      cutting-edge technologies that redefine automation, AI
                      leasing, and digital transformation. Shape the future with
                      us.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div class="tcgelements-button btn-selector-type-button btn-text-selector-type-button  tcgelements-responsive-break-line">
                    <span class="tcgelements-button-content-wrapper">
                      <span class="tcgelements-button-text">
                        <span>2.</span> Collaborative Culture
                      </span>
                    </span>
                    <img
                      decoding="async"
                      width="40"
                      height="40"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/star6-1.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <b className="heading-career-card">
                      Together, We Achieve More.
                    </b>
                    <p className="sub-heading-career-card">
                      We believe in the power of teamwork and inclusivity. At
                      Rentelligence, your ideas are valued, and collaboration
                      flows across every level. Here, we build together, learn
                      together, and succeed together.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div class="tcgelements-button btn-selector-type-button btn-text-selector-type-button  tcgelements-responsive-break-line">
                    <span class="tcgelements-button-content-wrapper">
                      <span class="tcgelements-button-text">
                        <span>3.</span> Professional Growth
                      </span>
                    </span>
                    <img
                      decoding="async"
                      width="40"
                      height="40"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/star6-1.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <b className="heading-career-card">
                      Your Growth = Our Mission
                    </b>
                    <p className="sub-heading-career-card">
                      Your growth matters to us. We provide learning
                      opportunities, skill development programs, and career
                      paths that help you become a leader in AI, blockchain, and
                      financial technology. Elevate your career while innovating
                      for the future.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div class="tcgelements-button btn-selector-type-button btn-text-selector-type-button  tcgelements-responsive-break-line">
                    <span class="tcgelements-button-content-wrapper">
                      <span class="tcgelements-button-text">
                        <span>4.</span> Global Impact
                      </span>
                    </span>
                    <img
                      decoding="async"
                      width="40"
                      height="40"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/star6-1.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <b className="heading-career-card">
                      Your Work. Global Influence.
                    </b>
                    <p className="sub-heading-career-card">
                      Join a mission that spans the globe. At Rentelligence,
                      you’ll be part of an ecosystem that transforms how
                      businesses and individuals leverage AI. Your work will
                      have a worldwide impact, empowering people everywhere to
                      thrive in the era of automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="new-bg-career">
        <div className="container">
          <div className="row"> 
              <div class="col-xl-auto">
                <h1
                  class="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate text-color-chng"
                  data-aos="fade-left"
                >
                  Current Openings at Rentelligence
                </h1>
              </div>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <div className="new-card-design">
                    <img
                      decoding="async"
                      width="50"
                      height="50"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/ser6-1.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <div className="heading-career-section-2">
                      <span>1.</span> AI/ML Developer
                    </div>
                    <div className="sub-heading-career-section-2">
                      <ul>
                        <li>
                          <b>Location : </b>
                          Remote / Hybrid
                        </li>
                        <li>
                          <b>Role Overview : </b>
                          Design, develop, and optimize AI agents and machine
                          learning models for automation and intelligent
                          decision-making.
                        </li>
                        <li>
                          <b>Requirements: </b>
                          Strong knowledge of Python, TensorFlow, PyTorch
                          Experience in AI/ML model deployment Problem-solving
                          mindset and innovation-driven approach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="new-card-design">
                    <img
                      decoding="async"
                      width="50"
                      height="50"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/ser6-2.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <div className="heading-career-section-2">
                      <span>1.</span> Blockchain Developer
                    </div>
                    <div className="sub-heading-career-section-2">
                      <ul>
                        <li>
                          <b>Location : </b>
                          Remote / Hybrid
                        </li>
                        <li>
                          <b>Role Overview : </b>
                          Build and maintain blockchain-based systems for agent
                          ownership, leasing, and NFT integration.
                        </li>
                        <li>
                          <b>Requirements: </b>
                          Expertise in Solidity, smart contracts, and
                          decentralized applications Knowledge of Web3
                          frameworks Understanding of NFTs and tokenomics
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div className="new-card-design">
                    <img
                      decoding="async"
                      width="50"
                      height="50"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/ser6-3.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <div className="heading-career-section-2">
                      <span>1.</span> Marketing & Growth Specialist
                    </div>
                    <div className="sub-heading-career-section-2">
                      <ul>
                        <li>
                          <b>Location : </b>
                          Remote
                        </li>
                        <li>
                          <b>Role Overview : </b>
                          Drive brand awareness and user acquisition for
                          Rentelligence globally.
                        </li>
                        <li>
                          <b>Requirements: </b>
                          Digital marketing experience (SEO, PPC, social media)
                          Strong communication and creative thinking Experience
                          with tech or fintech products is a plus
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-3">
                  <div className="new-card-design">
                    <img
                      decoding="async"
                      width="50"
                      height="50"
                      src="https://binos.themescamp.com/business-growth/wp-content/uploads/sites/7/2025/04/ser6-4.svg"
                      class="attachment-full size-full wp-image-36"
                      alt=""
                    ></img>
                    <div className="heading-career-section-2">
                      <span>1.</span> Customer Success Executive
                    </div>
                    <div className="sub-heading-career-section-2">
                      <ul>
                        <li>
                          <b>Location : </b>
                          Remote{" "}
                        </li>
                        <li>
                          <b>Role Overview : </b>
                          Provide top-notch support and engagement to clients,
                          ensuring a seamless AI leasing experience.
                        </li>
                        <li>
                          <b>Requirements: </b>
                          Excellent communication and problem-solving skills
                          Ability to understand AI-driven solutions Prior
                          experience in customer service
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> 
          </div>
        </div>
      </div>

      <div className=" mb-10 mt-10 ">
        <div className="new-bg-career new-img-after-and-before">
          <div className="card-body container shadow-lg rounded  bg-black p-3">
             <div class="elementor-widget-container">
                <h2
                  class="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                  data-aos="fade-up"
                >
              Apply for a Career
                </h2>
                 <p className="text-white">
              Fill out the form below to apply for an open position.
            </p>
              </div> 
           

            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label text-white">Full Name</label>
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
                  <label className="form-label text-white">Email</label>
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
                  <label className="form-label text-white">Mobile</label>
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
                  <label className="form-label text-white">Experience</label>
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
                  <label className="form-label text-white">Position</label>
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
                <label className="form-label text-white">Remark </label>
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
<div class="header-button"><a href="#" class="th-btn style2">Submit Application 
  <i class="far fa-long-arrow-right ms-2"></i></a></div>
 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
