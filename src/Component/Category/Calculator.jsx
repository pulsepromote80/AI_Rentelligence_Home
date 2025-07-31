import React, { useEffect } from "react";
import Image from "../Image";
import Aos from "aos";
import "aos/dist/aos.css";

const Calculator = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>
        {`
        .img-anim {
          display: none;
        } 
      `}
      </style>

      <section className="why-sec3 overflow-hidden space">
        <div className="container-fluid p-0">
          <div className="why-wrap3">
            <div className="why-box3-1" id= "why-choose-us">
              <div
                className="img1"
                style={{ backgroundImage: `url(${Image.whythumbshape3}) ` }}
              >
                <img src={Image.whythumbshape1} alt="img" />
              </div>
              <div
                className="img2"
                style={{ backgroundImage: `url(${Image.whythumbshape3}) ` }}
              >
                <img src={Image.whythumbshape2} alt="img" />
              </div>
            </div>
            <div
              className="why-wrap-content"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="why-content">
                <div className="title-area">
                  <span
                    className="sub-title2 text-gradient text-uppercase mb-30 opecity"
                    data-aos="fade-up"
                  >
                    Why Choose Us
                  </span>
                  <h2
                    className="sec-title style2 fw-bold text-uppercase text-anim2 text-white"
                    data-aos="fade-up"
                  >
                   Empowering Businesses with Cutting-Edge AI Agents to Drive Innovation

                  </h2>
                  <p data-aos="fade-up" className="text-white-50">
                    At Rentelligence, we don’t just offer technology — we empower your business with intelligent,
decentralized AI Agents designed to transform how you operate, make decisions, and engage
with customers.
                  </p>
                </div>

                <div className="why-feature-wrap3">
                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">EXPERTISE</h4>
                    <p className="box-text text-white-50">
                     We build AI agents for industries, delivering impactful solutions.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Customization</h4>
                    <p className="box-text text-white-50">
                     We build custom AI agents to solve your challenges and align with your business goals.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Innovation</h4>
                    <p className="box-text text-white-50">
                     Stay ahead with evolving AI agents built on the latest in ML, blockchain, and Web3.
                    </p>
                  </div>

                  <div className="why-feature-card" data-aos="fade-up">
                    <h4 className="box-title text-white">Scalability</h4>
                    <p className="box-text text-white-50">
                      Our AI agents scale with your growth, offering flexibility, resilience, and lasting value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
