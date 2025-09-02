import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Wapper from "./Component/Home/Wapper";
import "./assets/css/style.css";
import "./assets/css/app.min.css";
import "./assets/css/fontawesome.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Component/About/Main";
import Contact from "./Component/Contact/Contact";
import Service from "./Component/service/Service";
import Category from "./Component/Category/Category";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Component/TermsAndCondition/TermsCondition";
import RecentArticles from "./Component/Home/Articles";
import Career from "./Component/Carrer/Career";

function App() {
 
  return (
    <>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Wapper />} />
          <Route path="/about-us" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/category" element={<Category />} />
          <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/RecentArticles" element={<RecentArticles />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
