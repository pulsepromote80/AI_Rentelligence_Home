import Banner from "./banner";
import Section1 from "./Section1";
import Calculator from "./Calculator";
import Leading from "../Home/Leading";
import Faq from "./faq";
import { Helmet } from 'react-helmet';

const Category = () => {
  return (
    <>
      <Helmet>
        <title>Rentelligence – Visionary AI and Decentralized Intelligent Agents</title>
        <meta name="description" content="Explore Rentelligence’s visionary AI technology—empowering businesses and individuals with intelligent, decentralized agents to unlock limitless potential." />
      </Helmet>
      <Banner />
      <Section1 />
      <Leading />
      <Calculator />
      <Faq />
    </>
  );
};

export default Category;
