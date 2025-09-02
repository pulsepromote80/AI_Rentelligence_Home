import Section1 from "./Section1";
import QuickContact from "./QuickContact";
import GetInTouc from "./GetInTouc";
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Rentelligence – Contact London HQ, Email and Support Hours</title>
        <meta name="description" content="Get in touch with Rentelligence. Email info@rentelligence.ai, call +44 7909 033910 or visit our London office (Mon–Fri: 9 AM–5 PM)." />
      </Helmet>
      <Section1 />
      <QuickContact />
      <GetInTouc />
    </>
  );
};

export default Contact;
