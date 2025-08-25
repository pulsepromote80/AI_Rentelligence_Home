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
        const response = await fetch("https://rentelligence.live/api/Geography/getAllCareerType", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

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

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (!mobileRegex.test(formData.mobile))
      newErrors.mobile = "Invalid Mobile number.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.careerName.trim()) newErrors.careerName = "Position is required.";
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
      const response = await fetch("https://rentelligence.live/api/Geography/addContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


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
                <select name="subject" className="form-select" value={formData.subject} onChange={handleChange}>
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
                <select name="careerName" className="form-select" value={formData.careerName} onChange={handleChange}>
                  <option value="">Select Position</option>
                  {careerTypes?.data?.map((type, index) => (
                    <option key={index} value={type.Id}>{type.Name}</option>
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
    </div>
  );
};

export default CareerForm;
