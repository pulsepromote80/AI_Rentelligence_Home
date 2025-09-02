import Banner from "./banner";
import Section1 from "./Section1";
import AdvancedTechnology from "./AdvancedTechnology";
import Certificate from "./Certificate";
import Team from "../Home/Team";
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <>
      <Helmet>
        <title>About Us – AI, Web3 and Blockchain Experts in Intelligent Automation</title>
        <meta name="description" content="At Rentelligence, our AI pioneers, blockchain engineers and Web3 innovators deliver decentralized intelligent automation to redefine how businesses deploy agents." />
      </Helmet>
      <Banner />
      <Section1 />
      <Team/>
      <Certificate />
      <AdvancedTechnology />
    </>
  );
};

export default Main;
