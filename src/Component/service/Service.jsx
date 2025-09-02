import Banner from "./banner";
import OurService from "./OurService";
import OurServices from "./OurServices";
import Faq from "../Category/faq";
import { Helmet } from 'react-helmet';
const Service = () => {
  return (
    <>
      <Helmet>
        <title>Rentelligence – AI Agents, Blockchain Analytics and Automation</title>
        <meta name="description" content="Rentelligence delivers AI agent development, blockchain analytics, adaptive ML, and process automation—plus expert AI strategy and consulting." />
      </Helmet>
      <Banner />
      <OurService />
      <OurServices />
      <Faq />
    </>
  );
};

export default Service;
