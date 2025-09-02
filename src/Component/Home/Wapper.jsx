import Flexibility from "./Flexibility";
// import Security from "./Security";
import StatsSection from "./StatsSection";
import DustParticles from "./DustParticles";
import Features from "./Features";
import Image from "../Image";
import CaseStudy from "./CaseStudy";
import Consulting from "./Consulting";
import Team from "./Team";
import Leading from "./Leading";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useRef, useState } from "react";
import { serviceData } from "../../constants/constant";
import RecentArticles from "./Articles";
import { Helmet } from 'react-helmet';

const Sectionfive = () => {
  const [hovered, setHovered] = useState(null);

  return (
    
    <section className="overflow-hidden space-bottom" id="service-sec">
      <div className="service-wrap2 bg-gray space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-8">
              <div className="title-area text-center mb-50">
                <span
                  className="sub-title2 justify-content-center mb-30 text-anim text-white"
                  data-aos="fade-up"
                >
                  Our Services

                </span>
                <h2
                  className="sec-title style2 text-anim2 text-white"
                  data-aos="fade-up"
                >
                  Explore, Rent, and Deploy Powerful AI Agents for Every Use Case
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="service-list-wrap" data-aos="fade-up">
                {serviceData.map((item, index) => (
                  <div
                    className={`service-card2 hover-item ${hovered === index ? "item-active" : ""
                      }`}
                    key={item.id}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="box-img">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="box-content">
                      <div className="box-number text-white">{`0${item.id}`}</div>
                      <h3 className="box-title text-white">
                        <a href="/">{item.title}</a>
                      </h3>
                      <p className="box-text">{item.desc}</p>
                    </div>
                    <a href="/" className="icon-btn style2">
                      <i className="fal fa-arrow-right"></i>
                    </a>
                  </div>
                ))}
              </div>
              <div className="btn-wrap justify-content-center mt-60">
                <a href="/" className="icon-btn style2">
                  <i className="fal fa-angle-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sectionthree = () => {
  return (
    <>
      <div
        className="overflow-hidden position-relative overflow-hidden" id="about-sec">
        <div className="container">
          <div className="row gx-100 gy-60 align-items-center">
            <div className="col-xxl-6 col-xl-6">
              <div className="img-box2" data-aos="fade-left">
                <div className="img1">
                  <img src={Image.aboutimgPNG} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6">
              <div className="about-wrap2">
                <div className="title-area mb-35">
                  <span
                    className="sub-title2 mb-30 text-anim text-white"
                    data-aos="fade-Up"
                  >
                    About Rentelligence

                  </span>
                  <h2
                    className="sec-title style2 text-anim2 text-white"
                    data-aos="fade-Up"
                  >
                    Shaping the future with decentralized AI agents.
                  </h2>
                </div>
                <p className="sec-text text-gray3 mb-25" aos-cue="fade-Up">
                  At Rentelligence, we envision a future where intelligent agents seamlessly power every aspect
of life and business — from automating DeFi strategies to transforming healthcare and
agriculture.
                </p>
                <div className="checklist style4" data-aos="fade-Up">
                  <ul>
                    <li>
                      <img src={Image.checkicon1} alt="img" />
                     Decentralized & community-led AI ecosystem
                    </li>
                    <li>
                      <img src={Image.checkicon1} alt="img" />
                     Scalable solutions for Web3, enterprises, and DAOs
                    </li>
                    <li>
                      <img src={Image.checkicon1} alt="img" />
                     Transparent, secure, and future-ready agent marketplace
                    </li>
                  </ul>
                </div>
                <div className="btn-wrap mt-50" data-aos="fade-Up">
                  <a href="/" className="th-btn style-border3">
                    Discover More
                    <i className="fas fa-arrow-right ms-2"></i>
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

const BrandSlider = () => {
  const brandImages = [
    Image.brand1,
    Image.brand2,
    Image.brand3,
    Image.brand4,
    Image.brand5,
    Image.brand6,
  ];

  const repeatedImages = Array.from({ length: 4 }, () => brandImages).flat();

  return (
    <div
      className="overflow-hidden brand-area-2 position-relative z-index-2"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container-fluid p-0">
        <div className="brand-wrap2 py-4 text-center">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={150}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            allowTouchMove={false}
            className="brand-swiper"
          >
            {repeatedImages.map((imgSrc, idx) => (
              <SwiperSlide
                key={idx}
                style={{ width: "auto", display: "flex", alignItems: "center" }}
              >
                <a href="/" className="brand-box">
                  <img
                    src={imgSrc}
                    alt={`Brand Logo ${idx + 1}`}
                    style={{
                      height: "30px",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                    }}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Wapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Rentelligence – Decentralized AI Agent Marketplace</title>
        <meta name="description" content="Discover Rentelligence - the world’s first decentralized AI/ML marketplace to rent, lease, or own intelligent agents tailored to your business needs." />
      </Helmet>
      <div id="hero" className="th-hero-wrapper hero-2">
        <div
          className="th-hero-bg hero-bg"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          style={{ backgroundImage: `url(${Image.herobg})` }}
        ></div>
        <div className="hero-inner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="hero-style2 text-center">
                  <div className="center-div">
                    <p>Rentelligence</p>
                  </div>
                  <h1
                    className="hero-title text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Empowering the Future with AI Agents — Rent, Lease, Own, and Evolve
                  </h1>
                  <p
                    className="hero-text"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Rentelligence is the world’s first decentralized AI/ML marketplace where intelligent agents can
                    be purchased, leased, or rented — unlocking limitless possibilities across industries,
                    metaverse, and Web3 ecosystems.
                  </p>
                  <div
                    className="btn-wrap justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <a href="https://app.rentelligence.ai/home/register" className="th-btn style2">
                      Get Started Now{" "}
                      <i className="far fa-long-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="hero-category-wrap"
            data-aos="zoom-out-up"
            data-aos-delay="100"
          >
            <div className="hero-category-bg">
              <DustParticles />
            </div>
          </div>
        </div>
      </div>

      <StatsSection />

      <Flexibility />

      <Features />

      {/* <Security /> */}

      <Sectionthree />

      <Sectionfive />

      <CaseStudy />

      <Consulting />

      {/* <Team /> */}
      <RecentArticles/>

      <Leading />

      <Testimonials />

      <Blog />
    </>
  );
};

export default Wapper;
