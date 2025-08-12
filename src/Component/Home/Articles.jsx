import React, { useRef, useState, useEffect } from "react";
import Image from "../../Component/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const RecentArticles = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Create refs for navigation buttons
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const articles = [
    {
      id: 1,
      URL: "https://m.in.investing.com/news/stock-market-news/1-humanoid-robot-at-5hour-can-do-the-work-of-2-humans-at-25hour-ms-4953990?ampMode=1",
      author: "Author Vahid Karaahmetovic",
      date: "08 Aug 2025",
      title:
        "1 humanoid robot at $5/hour can do the work of 2 humans at $25/hour",
      excerpt:
        "Investing.com -- Morgan Stanley (NYSE:MS) estimates that a single humanoid robot costing $5 per hour could match the productivity of two human workers earning $25 per hour, creating an economic value of roughly $200,000 per unit over its working life.",
      content:
        "Full article content about POS systems and their potential would go here. This would include several paragraphs explaining how businesses can leverage their POS systems for inventory management, customer relationship management, and business analytics.",
      image: Image.articles1,
      imageAlt: "Modern POS system in a retail store",
    },
    {
      id: 2,
      URL: "https://80000hours.org/2025/01/how-quickly-could-robots-scale-up/",
      author: "By Benjamin Todd",
      date: "21 Jan 2025",
      title: "How quickly could robots scale up?",
      excerpt:
        "Today’s humanoid robots cost about $100,000,1 with perhaps 10,000 units produced annually. But manufacturing costs tend to plummet with scale:",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.articles3,
      imageAlt: "Padlock icon representing security",
    },
    {
      id: 3,
      URL: "https://www.widemoatresearch.com/wide-moat-daily/humanoid-robots-for-0-40-an-hour/amp/",
      author: "RoboLabor Advantage",
      date: "20 Jan 2025",
      title: "Humanoid Robots for $0.40 an Hour",
      excerpt:
        "It’s not just you. It’s really hard to keep track of everything tech these days. First, there was ChatGPT. Then, seemingly overnight, there was DeepSeek, quantum computing, new kinds of nuclear reactors, and a $500 billion Stargate project announced by the White House. Now, we can add humanoid robots.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.articles4,
      imageAlt: "Padlock icon representing security",
    },
    {
      id: 4,
      URL: "https://oodaloop.com/briefs/technology/1-humanoid-robot-at-5-hour-can-do-the-work-of-2-humans-at-25-hour/",
      author: "Humanoid ROI Advantage",
      date: "2 Aug 2024",
      title:
        "1 humanoid robot at $5/hour can do the work of 2 humans at $25/hour",
      excerpt:
        "Morgan Stanley estimates that a single humanoid robot costing $5 per hour could match the productivity of two human workers earning $25 per hour, creating an economic value of roughly $200,000 per unit over its working life.",
      content:
        "This article would discuss strategies for integrating online and offline sales channels, including inventory synchronization, unified customer profiles, and omnichannel marketing approaches.",
      image: Image.blogimg2,
      imageAlt: "Laptop showing an online store next to a physical store",
    },
    {
      id: 5,
      URL: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-future-of-work-is-agentic",
      author: "Agentic Work Era",
      date: "03 Jun 2025",
      title:
        "The future of work is agentic",
      excerpt:
        "The digital workforce is happening. Here’s what it may look like when humans are working side by side with AI agents—and how to prepare now for this surprisingly near-term eventuality.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.articles5,
      imageAlt: "Padlock icon representing security",
    },
    {
      id: 6,
      URL: "https://towardsdatascience.com/how-i-built-a-business-automating-workflows-with-ai-agents/",
      author: "Samir Saci",
      date: "06 May 2025",
      title:
        "How I Built Business-Automating Workflows with AI Agents",
      excerpt:
        "How I make money helping businesses boost their productivity and cut costs by automating supply chain analytics workflows using n8n.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.articles6,
      imageAlt: "Padlock icon representing security",
    },
     {
      id: 7,
      URL: "https://govinsider.asia/intl-en/article/ai-agents-set-to-transform-hr-and-financial-operations-for-public-sector",
      author: "By Workday",
      date: "02 Jan 2025",
      title:
        "AI agents set to transform HR and financial operations for public sector",
      excerpt:
        "Speakers at the Workday Elevate event highlighted how AI will revolutionise government by streamlining processes, drive analytics-based decisions and improve service delivery.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.blogimg2,
      imageAlt: "Padlock icon representing security",
    },
     {
      id: 8,
      URL: "https://www.livescience.com/technology/artificial-intelligence/just-2-hours-is-all-it-takes-for-ai-agents-to-replicate-your-personality-with-85-percent-accuracy",
      author: "By Owen Hughes ",
      date: "4 Jan 2025",
      title:
        "Just 2 hours is all it takes for AI agents to replicate your personality with 85% accuracy",
      excerpt:
        "A two-hour conversation with an artificial intelligence (AI) model is all it takes to make an accurate replica of someone's personality, researchers have discovered.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.blogimg3,
      imageAlt: "Padlock icon representing security",
    },
     {
      id: 9,
      URL: "https://www.hr-brew.com/stories/2025/03/10/what-the-heck-is-an-ai-agent-and-how-will-it-impact-hr",
      author: "By Adam DeRose",
      date: "11 Mar 2025",
      title:
        "What the heck is an AI agent and how will it impact HR?",
      excerpt:
        "The world of agents is already diverse: Travel agents help us plan dream vacations. Insurance agents (sometimes) test our patience and our faith in humanity.",
      content:
        "Detailed discussion about POS security features, PCI compliance, encryption standards, and best practices for protecting customer payment information and business data.",
      image: Image.blogimg1,
      imageAlt: "Padlock icon representing security",
    },
  ];

  const handleReadMore = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Navigation button handlers
  const handlePrevClick = () => {
    if (swiper && !isBeginning) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper && !isEnd) {
      swiper.slideNext();
    }
  };

  return (
    <section className="recent-articles bg-dark text-light py-5" id="articles">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="col-xxl-7 col-xl-8">
            <div className="title-area mb-50 ">
              <span
                className="sub-title2 mb-30 text-anim text-white aos-init aos-animate"
                data-aos="fade-up"
              >
                multiple type robots
              </span>
              <p
                className="sec-title text-anim2 text-white new-font-size aos-init aos-animate"
                data-aos="fade-up"
              >
                From industrial giants to friendly helpers, robots are
                everywhere! Explore the fascinating world of robotics with this
                guide to different robot types. Discover their uses,
                applications, and the future of automation!
              </p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="col-auto">
            <div className="d-flex gap-2">
              <button
                ref={navigationPrevRef}
                className={`articles-swiper-button-prev ${
                  isBeginning ? "swiper-button-disabled" : ""
                }`}
                onClick={handlePrevClick}
                disabled={isBeginning}
              >
                <FiChevronLeft
                  size={24}
                  color={isBeginning ? "#999" : "#333"}
                />
              </button>
              <button
                ref={navigationNextRef}
                className={`articles-swiper-button-next ${
                  isEnd ? "swiper-button-disabled" : ""
                }`}
                onClick={handleNextClick}
                disabled={isEnd}
              >
                <FiChevronRight size={24} color={isEnd ? "#999" : "#333"} />
              </button>
            </div>
          </div>
        </div>
        {/* Swiper Slider */}
        <div className="position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <div
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                  style={{
                    border: "5px solid #ffffff",
                    padding: "20px",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  <div className="blog-card style2">
                    <div className="blog-img new-hieght-img">
                      <a href="/">
                        <img alt="blog" src={article.image} />
                      </a>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-white">{article.author}</span>
                      {/* <small className="text-white">{article.date}</small> */}
                    </div>

                    <hr></hr>

                    <div className="blog-content">
                      <h3 className="box-title title-truncate">
                        <a href={article.URL} target="_blank">{article.title}</a>
                      </h3>
                      <p
                        className="sec-title text-anim2 text-white new-font-size aos-init aos-animate excerpt-truncate"
                        data-aos="fade-up"
                      >
                        {article.excerpt}
                      </p>

                      <a
                        href={article.URL}
                        target="_blank"
                        className="th-btn style-border3 w-100"
                      >
                        Read More{" "}
                        <i className="far fa-long-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card h-100 bg-secondary border-0 d-none">
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.imageAlt}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div
                    className="card-body"
                    style={{ background: "rgb(45 28 86)" }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-info">{article.author}</span>
                      <small className="text-light">{article.date}</small>
                    </div>
                    <h3 className="h5 card-title text-light">
                      {article.title}
                    </h3>
                    <p className="card-text text-light">{article.excerpt}</p>
                  </div>
                  <div
                    className="card-footer  border-top-0"
                    style={{ background: "rgb(45 28 86)" }}
                  >
                    <button
                      //   onClick={() => handleReadMore(article)}
                      className="btn btn-outline-light btn-sm"
                    >
                      <a
                        href={article.URL}
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        Read More →
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          id="articleModal"
          tabIndex="-1"
          style={{
            display: showModal ? "block" : "none",
            backgroundColor: showModal ? "rgba(0,0,0,0.5)" : "transparent",
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-dark text-light border-secondary">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">{selectedArticle.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-info">{selectedArticle.author}</span>
                  <small className="text-muted">{selectedArticle.date}</small>
                </div>
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.imageAlt}
                  className="img-fluid rounded mb-3"
                />
                <p>{selectedArticle.content}</p>
                <p>
                  Additional content would continue here with more details about
                  the topic...
                </p>
              </div>
              <div className="modal-footer border-secondary">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecentArticles;
