import { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const PrivacyContent = () => {
  useEffect(() => {
    init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="space bg-white" id="service-sec">
        <div
          className="service-bg-shape1-1 shape-mockup"
          data-bottom="0"
          data-left="50%"
        >
          <img src={Image.bgshape1} alt="img" />
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 text-center">
              <div className="shadow-title">Privacy Policy</div>
              <span className="sub-title text-anim" data-aos="fade-up">
                Privacy Policy
              </span>
            </div>
          </div>

          {/* --- Privacy Policy Card --- */}
          <div className="container my-5">
      <div className="card shadow p-4">
        <p><strong>Effective Date:</strong> 17 June, 2025</p>
        <p>Rentelligence values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.</p>

        <h4 className="mt-4">1. Information We Collect</h4>
        <ul>
          <li><strong>Wallet Address:</strong> To facilitate transactions.</li>
          <li><strong>Basic Profile Info:</strong> Name or email if you create a profile or contact us.</li>
          <li><strong>Usage Data:</strong> Interaction logs (non-personal), device type, browser info, etc.</li>
        </ul>

        <h4 className="mt-4">2. How We Use Your Information</h4>
        <ul>
          <li>Enable smart contract transactions.</li>
          <li>Offer platform features.</li>
          <li>Provide customer support.</li>
          <li>Improve security and user experience.</li>
        </ul>
        <p>We do not sell or share your personal data with third parties.</p>

        <h4 className="mt-4">3. Cookies & Tracking</h4>
        <ul>
          <li>Basic site functionality.</li>
          <li>Analytics (anonymized).</li>
        </ul>
        <p>You can disable cookies in your browser settings.</p>

        <h4 className="mt-4">4. Data Security</h4>
        <p>We use industry-standard security practices. However, blockchain transactions are public and irreversible—use caution when sharing wallet addresses or interacting with smart contracts.</p>

        <h4 className="mt-4">5. Decentralized Nature</h4>
        <ul>
          <li>Most data is stored on-chain and not controlled by us.</li>
          <li>You’re responsible for your wallet, keys, and public interactions.</li>
        </ul>

        <h4 className="mt-4">6. Third-Party Tools</h4>
        <p>We may integrate tools such as payment gateways, analytics, or decentralized storage. These providers have their own privacy policies.</p>

        <h4 className="mt-4">7. Your Rights</h4>
        <ul>
          <li>You may access, correct, or delete your optional profile info.</li>
          <li>Blockchain data (like transactions) cannot be deleted due to its immutable nature.</li>
        </ul>

        <h4 className="mt-4">8. Updates to This Policy</h4>
        <p>We may update this policy. You’ll be notified of any significant changes on our website or app.</p>

        <h4 className="mt-4">9. Contact Us</h4>
        <p>
          Email: <a href="mailto:support@rentelligence.ai">support@rentelligence.ai</a><br />
          Website: <a href="https://www.rentelligence.ai" target="_blank" rel="noopener noreferrer">www.rentelligence.ai</a>
        </p>
      </div>
    </div>
          {/* --- End Privacy Policy Card --- */}
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
