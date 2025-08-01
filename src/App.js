import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Wapper from "./Component/Home/Wapper";
import "./assets/css/style.css";
import "./assets/css/app.min.css";
import "./assets/css/fontawesome.min.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Component/About/Main";
import Contact from "./Component/Contact/Contact";
import Service from "./Component/service/Service";
import Category from "./Component/Category/Category";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Component/TermsAndCondition/TermsCondition";

function App() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Wapper />} />
          <Route path="/main" element={<Main />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
