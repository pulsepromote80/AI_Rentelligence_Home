import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "../../Component/Image";

const Testimonials = () => {
  return (
    <section className="testi-area-2 space-top overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-8">
            <div className="title-area text-center mb-50">
              <span
                className="sub-title2 justify-content-center mb-30 text-anim text-white"
                data-aos="fade-up">
                Testimonials
              </span>
              <h2
                className="sec-title style2 text-anim2 text-white"
                data-aos="fade-up">
                What Our Clients Say About Us?
              </h2>
            </div>
          </div>
        </div>

        <div className="testi-wrap2" data-aos="fade-up">
          <div className="testi-quote-icon">
            <img src={Image.testimonialquoteicon} alt="icon" />
          </div>

          <div className="slider-area">
            <Swiper
              modules={[Navigation, Pagination, EffectFade, A11y]}
              effect="fade"
              autoHeight={true}
              pagination={{ clickable: true, el: ".slider-pagination2" }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              className="testi-slider2"
            >
              {[1, 2, 1, 2].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="testi-card2">
                    <div className="box-thumb">
                      <img
                        src={
                          index % 2 === 0
                            ? Image.testimonialtestiimg1
                            : Image.testimonialtestiimg2
                        }
                        alt="testimonial"
                      />
                    </div>
                    <div className="box-content">
                      <p className="box-text">
                        {index % 2 === 0
                          ? "“Rentelligence has completely transformed how we integrate AI into our DAO operations. Leasing agents for predictive analytics saved us time and boosted our treasury performance significantly!”"
                          : "“The flexibility to rent AI agents for short-term projects is a game-changer. We scaled our NFT marketplace support almost overnight without massive upfront investment.”"}
                      </p>
                      <h3 className="box-title">
                        {index % 2 === 0 ? "— Aarav Mehta" : "— Lina Rodriguez,"}
                      </h3>
                      <p className="box-desig">
                        {index % 2 === 0 ? "DAO Strategy Lead" : "Web3 Retail Founder"}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="slider-pagination-wrap">
              <div className="slider-pagination2"></div>
              <div className="icon-box">
                <button className="swiper-button-prev-custom slider-arrow style-border3 default">
                  <i className="far fa-arrow-left"></i>
                </button>
                <button className="swiper-button-next-custom slider-arrow style-border3 default">
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
