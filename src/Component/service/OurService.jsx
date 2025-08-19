import { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const OurService = () => {
  useEffect(() => {
    init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <>
      <section className="space bg-white" id="service-sec">
        <div
          className="service-bg-shape1-1 shape-mockup"
          data-bottom="0"
          data-left="50%"
        >
          <img src={Image.bgshape1} alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-8 col-md-10">
              <div className="title-area text-center">
                <div className="shadow-title" style={{color:"#daebed94"}}>Services</div>
                <span className="sub-title text-anim" data-aos="fade-up">
                  OUR SERVICES
                </span>
                <h2 className="sec-title text-anim2" data-aos="fade-up">
                  Intelligent Innovations: Tailored AI Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <img src={Image.serviceicon1} alt="icon" />
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Agent Development</a>
                </h3>
                <p className="box-text">
                  Deploy custom decentralized AI agents tailored for Web3 and metaverse use.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon2} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Blockchain Data Analytics
</a>
                </h3>
                <p className="box-text">
                  Turn on-chain data into real-time, predictive business insights.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon3} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Adaptive Machine Learning</a>
                </h3>
                <p className="box-text">
                  Create evolving models that boost accuracy across decentralized apps.

                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon4} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Strategy & Consulting</a>
                </h3>
                <p className="box-text">
                  Expert guidance on AI adoption, model selection, and ecosystem alignment.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon5} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">Process Automation Agents</a>
                </h3>
                <p className="box-text">
                 Automate tasks and workflows with intelligent, cost-saving agents.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon6} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI for Education & Research</a>
                </h3>
                <p className="box-text">
                  Use AI tutors and research agents to personalize learning and accelerate discovery.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <div className="color-masking">
                      <img src={Image.serviceicon7} alt="icon" />
                    </div>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI-Powered Cybersecurity</a>
                </h3>
                <p className="box-text">
              Secure systems with AI agents detecting threats, boosting security, ensuring compliance.
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-md-6" data-aos="fade-up">
              <div className="service-card">
                <div className="box-icon">
                  <div className="color-masking">
                    <img src={Image.serviceicon8} alt="icon" />
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="/">AI Innovation Labs
</a>
                </h3>
                <p className="box-text">
                 Collaborating with teams to prototype AI and drive innovation in decentralized networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
