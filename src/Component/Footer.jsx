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
            <div className="shadow-text text-lg-center" data-aos="slide-up">
              Let’s Talk
            </div>
            <div className="row gy-30 justify-content-lg-around">
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
                    <a href="tel:6624073460">+6624073460</a>
                  </h4>
                </div>
              </div>

              <div className="col-lg-auto" data-aos="slide-up">
                <div className="contact-info-card contact-mail-info">
                  <p className="box-title">Email Address</p>
                  <h4 className="box-text">
                    <a href="mailto:help24/7.info@rentelligence.com">
                      help24/7.info@rentelligence.com
                    </a>
                  </h4>
                  <h4 className="box-text">
                    <a href="mailto:info@rentelligence.com">
                      info@rentelligence.com
                    </a>
                  </h4>
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
                        <a href="https://www.facebook.com/sharer.php?" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://twitter.com/intent/tweet/?text=Hello" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                         <a href="https://telegram.me/share/url?" target="_blank">
                          <i class="fa-brands fa-telegram"></i>
                        </a>
                        {/* <a href="/">
                          <i className="fab fa-youtube"></i>
                        </a> */}
                        <a href="/">
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
                          <a href="/main">What we Offer</a>
                        </li>
                        <li>
                          <a href="#futurescope">Future Scope</a>
                        </li>
                        <li>
                          <a href="#blog-sec">Latest Posts</a>
                        </li>
                        <li>
                          <a href="#ourclient">Our Clients</a>
                        </li>
                        <li>
                          <a href="#ourprofessionals">Our Professionals</a>
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
                          <a href="/service">Robotic Automation</a>
                        </li>
                        <li>
                          <a href="/service">Education & Science</a>
                        </li>
                        <li>
                          <a href="/service">Machine Learning</a>
                        </li>
                        <li>
                          <a href="/service">Predictive Analysis</a>
                        </li>
                        <li>
                          <a href="/service">Data Security</a>
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
                  Copyright 2025 <a href="/">Rentelli Gence.</a> All Rights
                  Reserved.
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
                      <a href="/">Contact</a>
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
