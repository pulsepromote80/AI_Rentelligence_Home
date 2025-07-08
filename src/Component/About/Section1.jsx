import Image from "../Image";

const Section1 = () => {
  return (
    <>
      <div className="overflow-hidden space bg-white" id="about-sec">
        <div className="container">
          <div className="row gy-60 gx-80 align-items-start">
            <div className="col-xxl-6">
              <div className="img-box4" data-aos="slide-left">
                <div className="img1">
                  <img src={Image.normalaboutthumb1} alt="About" />
                </div>
                <div className="img2 movingX">
                  <img src={Image.normalaboutthumb2} alt="img" />
                </div>

                <div className="circle-tag" data-aos="fade-up">
                  <svg viewBox="0 0 100 100" className="circle-svg">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50
                   m -35, 0
                   a 35,35 0 1,1 70,0
                   a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#circlePath" startOffset="0%">
                        Rentelli Gence- AI AND AUTOMATION INTEGRATION •
                      </textPath>
                    </text>
                  </svg>

                  <a href="/" className="circle-center-btn">
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </a>
                </div>
                <div className="img3">
                  <div className="shadow-text">Robor</div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="about-wrap4">
                <div className="title-area mb-30">
                  <span
                    className="sub-title style2 before-none text-anim"
                    data-aos="slide-left"
                    data-aos-delay="200"
                  >
                    About Rentelligence
                  </span>
                  <h2
                    className="sec-title mb-0 text-anim2 text-white"
                    data-aos="slide-left"
                    data-aos-delay="300"
                  >
                    Pioneering the Future of Intelligent Business with Decentralized AI Agents

                  </h2>
                  <p className="mt-15" data-aos="slide-up" data-aos-delay="400">
                    At Rentelligence, we go beyond traditional AI solutions. We start by deeply understanding your
                    operational needs, growth challenges, and digital transformation goals.
                  </p>
                </div>

                <div className="about-feature-card-wrap">
                  <div className="about-feature-card" data-aos="slide-up">
                    <div className="box-icon">
                      <div className="color-masking">
                        <div
                          className="feature-icon"
                          style={{
                            backgroundImage: `url(${Image.aboutfeatureicon1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100px", // Customize as needed
                            height: "100px", // Customize as needed
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4 className="box-title text-white">
                        100% Client Satisfaction
                      </h4>
                      <p className="box-text">
                        We’re powered by a global team of AI developers, blockchain architects, and data scientists—
                        all focused on delivering secure, scalable, and smart outcomes for every client.
                      </p>
                    </div>
                  </div>

                  <div
                    className="about-feature-card"
                    data-aos="slide-up"
                    data-aos-delay="300"
                  >
                    <div className="box-icon">
                      <div className="color-masking">
                        <div
                          className="feature-icon"
                          style={{
                            backgroundImage: `url(${Image.aboutfeatureicon2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100px", // Customize as needed
                            height: "100px", // Customize as needed
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="media-body">
                      <h4 className="box-title text-white">
                        Quality-Driven Innovation

                      </h4>
                      <p className="box-text">
                        Every agent is tested, refined, and audited using advanced AI tools and smart contract
protocols to ensure top-tier performance, transparency, and security.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="btn-wrap mt-40" data-aos="slide-up">
                  <a className="th-btn" href="/">
                    More About Us{" "}
                    <i className="far fa-long-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
