import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Component/Image";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <footer className="footer-wrapper footer-layout1">
        <div
          className="shape-mockup footer-bg-shape1-1"
          data-left="50%"
          data-bottom="-50%"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={Image.footerbgshape2} alt="img" />
        </div>

        <div className="container">
          <div className="footer-top">
            <div className="shadow-text text-lg-center" data-aos="slide-up" >
              Let’s Talk
            </div>
            <div className="row gy-30 justify-content-lg-around  " style={{marginTop:"10px"}}>
              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-location-info">
                  <p className="box-title">Location</p>
                  <h4 className="box-text">
                   44 Whitfield Road, London, England, E6 1AS
                  </h4>
                </div>
              </div>

              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-phone-info">
                  <p className="box-title">Phone Call</p>
                  <h4 className="box-text">
                    <a href="tel:7123 45XXXX">+44 7123 45XXXX</a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-mail-info">
                  <p className="box-title">Email Address</p>
                  <h4 className="box-text">
                    <a href="mailto:help24/7.info@rentelligence.com">
                      info@rentelligence.ai
                    </a>
                  </h4>
                  {/* <h4 className="box-text">
                    <a href="mailto:info@rentelligence.com">
                      info@rentelligence.com
                    </a>
                  </h4> */}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="widget-area">
              <div className="row justify-content-between">
                <div className="col-md-3" data-aos="fade-up">
                  <div className="widget footer-widget">
                    <div className="th-widget-contact">
                      <h3 className="widget_title">Get In Touch</h3>
                      <p className="footer-text mb-4">
                        44 Whitfield Road, London, England, E6 1AS
                      </p>
                      <div className="th-social style10">
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                         <a href="#" target="_blank">
                          <i className="fa-brands fa-telegram"></i>
                        </a>
                        {/* <a href="/">
                          <i className="fab fa-youtube"></i>
                        </a> */}
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Useful Links</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/main">About Us</a>
                        </li>
                        <li>
                          <a href="/service">Services</a>
                        </li>
                        <li>
                          <a href="/Category">Category</a>
                        </li>
                        <li>
                          <a href="/Contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Company</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="#why-choose-us">Why Choose Us</a>
                        </li>
                        <li>
                          <a href="#futurescope">Future Scope</a>
                        </li>
                        <li>
                          <a href="#ourprofessionals">Our Team</a>
                        </li>
                        <li>
                          <a href="#contact-sec"> Certificate</a>
                        </li>
                        <li>
                          <a href="#ourclient">Testimonials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3" data-aos="fade-up">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Our Service</h3>
                    <div className="menu-all-pages-container">
                      <ul className="menu">
                        <li>
                          <a href="#service-sec">AI Agent Development</a>
                        </li>
                        <li>
                          <a href="#service-sec">Blockchain Data Analytics</a>
                        </li>
                        <li>
                          <a href="#service-sec">Adaptive Machine Learning</a>
                        </li>
                        <li>
                          <a href="#service-sec">AI Strategy & Consulting</a>
                        </li>
                        <li>
                          <a href="#service-sec">Process Automation Agents</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrap bg-gray">
          <div className="container">
            <div className="row gy-2">
              <div className="col-lg-6" data-aos="slide-up">
                <p className="copyright-text">
                  © 2025<a href="https://rentelligence.ai/"> Rentelligence.</a> All rights reserved.
                </p>
              </div>
              <div
                className="col-lg-6 text-center text-lg-end"
                data-aos="slide-up"
              >
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="/Privacypolicy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/Contact">Contact</a>
                    </li>
                    <li>
                      <a href="/TermsCondition">Terms and Conditions.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: 307.919,
            }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Footer;
