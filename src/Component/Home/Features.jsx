import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section className=" overflow-hidden bg-grnt1" data-aos="fade-up" id="futurescope">
        <div className="container">
          <div className="title-area text-xl-start text-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-auto">
                <h1
                  className="sec-title text-anim2 text-gradient innovations-taxt aos-init aos-animate"
                  data-aos="fade-left"
                >
                  Future Scope & Industry <br></br>Use Cases
                </h1>
              </div>
              <div className="col-md d-none d-xl-block">
                <hr className="title-line bg-black3 mb-0" />
              </div>
              <div className="col-xl-5">
                <p
                  className="sec-title text-anim2 mb-0 chng-clr-fnt"
                  data-aos="fade-right"
                >
                  Unlock next-gen possibilities across industries with AI agents powered by Web3 and
                  blockchain.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center" data-aos="fade-up">
            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Web3 Retail & Customer Service </span>
                </div>
                <div className="card-sub-heading">
                  <span>Automate support, boost NFT sales, and manage decentralized stores with AI-driven chatbots
                    and virtual agents.</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Education & Training</span>
                </div>
                <div className="card-sub-heading">
                  <span>
                    Deliver personalized learning via AI tutors and metaverse classrooms with decentralized learner
                    profiles.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Healthcare & Diagnostics
                  </span>
                </div>
                <div className="card-sub-heading">
                  <span>
                    Enhance patient care with AI triage bots and scheduling agents using secure, decentralized
                    health data.

                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Logistics & Supply Chain</span>
                </div>
                <div className="card-sub-heading">
                  <span>Use autonomous agents and blockchain for real-time inventory tracking and supply chain
                    transparency.</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Education & Training
                  </span>
                </div>
                <div className="card-sub-heading">
                  <span>Personalized learning with AI tutors & metaverse classrooms using decentralized profiles.</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3" data-aos="fade-up">
              <div className="card-new-design">
                <div className="icon">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="6" y="6" width="10" height="10" rx="2" />
                      <rect x="32" y="6" width="10" height="10" rx="2" />
                      <rect x="19" y="32" width="10" height="10" rx="2" />
                      <path d="M16 11h6M26 11h6" />
                      <path d="M11 16v6l8 8M37 16v6l-8 8" />
                    </g>
                  </svg>
                </div>
                <div className="card-heading">
                  <span>Enterprise & DAO Operations</span>
                </div>
                <div className="card-sub-heading">
                  <span>
                    Empower DAOs with predictive insights, treasury automation, and AI-driven strategic support.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
