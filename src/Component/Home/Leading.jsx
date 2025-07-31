import React, { useState } from "react";
import Image from "../../Component/Image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Leading = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div className="why-sec-2 overflow-hidden" ref={ref}>
        <div className="why-wrap2 space-top bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xxl-4">
                <div className="title-area">
                  <span
                    className="sub-title2 mb-30 text-anim text-white"
                    data-aos="fade-up"
                  >
                    Leading the AI Revolution
                  </span>
                  <h2
                    className="sec-title style2 text-anim2 text-white"
                    data-aos="fade-up"
                  >
                    Discover the Future of AI Innovation
                  </h2>
                </div>

                <div className="why-card-wrap2">
                  <div className="why-card" data-aos="fade-up">
                    <div className="box-details">
                      <h4 className="box-title">Visionary AI Technology</h4>
                      <p className="box-text">
                        Empowering businesses and individuals to unlock limitless potential with intelligent,
                        decentralized agents.
                      </p>
                    </div>
                  </div>

                  <div className="why-card" data-aos="fade-up">
                    <div className="box-details">
                      <h4 className="box-title">AI for Everyone</h4>
                      <p className="box-text">
                        Making advanced AI accessible, flexible, and customizable for every user and every
                        industry
                      </p>
                    </div>
                  </div>

                  <div className="why-card" data-aos="fade-up">
                    <div className="box-details">
                      <h4 className="box-title">Mission-Driven AI Solutions</h4>
                      <p className="box-text">
                        Transforming ideas into intelligent realities through secure, scalable, and blockchainpowered AI systems.
                      </p>
                    </div>
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
                          RentelliGence- AI AND AUTOMATION •
                         •
                        </textPath>
                      </text>
                    </svg>

                    <a href="/" className="circle-center-btn">
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="why-counter-wrap-2">
                  <div className="box-icon">
                    <img src={Image.Leadingwhyicon1} alt="icon" />
                  </div>
                  <div className="why-counter-content">
                    <h4 className="box-title text-white">
                      Innovate Faster with Our Agent AI Marketplace
                    </h4>
                    <p className="box-text text-gray3">
                      From advanced autonomous agents to real-time adaptive tools, Rentelligence delivers cuttingedge, decentralized AI solutions. Our platform enables you to integrate AI seamlessly, automate
                      complex processes, and create intelligent experiences across Web3, metaverse, and real-world
                      applications.
                    </p>
                  </div>
                  <div className="why-counter-card">
                    <h2 className="box-number text-white">
                      {inView ? (
                        <CountUp
                          start={0}
                          end={25}
                          duration={5}
                          delay={0}
                          className="counter-number"
                        />
                      ) : (
                        0
                      )}
                      <span className="counter-marker">+</span>
                    </h2>
                    <h4 className="counter-text text-white">
                      AI expertise.
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-xxl-8 text-xxl-end text-center img-anim">
                <div className="why-img-box2" data-aos="fade-up">
                  <div className="img1">
                    <img src={Image.Leadingwhythumbimg} alt="main visual" />
                  </div>
                  <div className="img2 jump">
                    <img src={Image.Leadingwhythumbimg2} alt="overlay visual" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leading;
