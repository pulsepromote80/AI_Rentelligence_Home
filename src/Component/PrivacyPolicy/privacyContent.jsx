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
              <div className="shadow-title">Privacy & Policy</div>
              <span className="sub-title text-anim" data-aos="fade-up">
                Privacy & Policy
              </span>
            </div>
          </div>

          {/* --- Privacy Policy Card --- */}
          <div className="row justify-content-center mt-5" data-aos="fade-up">
            <div className="col-12 col-lg-10">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-dark text-white">
                  <h4 className="mb-0">Our Commitment to Your Privacy</h4>
                </div>
                <div className="card-body p-4">
                  <p>
                    At <strong>Rentelligence</strong>, your privacy is our priority. We are committed to maintaining the confidentiality, integrity, and security of any personal information you provide to us while using our decentralized AI/ML agent platform.
                  </p>

                  <h5 className="mt-4">1. Information We Collect</h5>
                  <p>
                    We may collect limited personal data such as email, wallet address, and usage logs to ensure platform functionality and enhance your experience. We do not collect unnecessary personal details.
                  </p>

                  <h5 className="mt-4">2. How We Use Your Data</h5>
                  <p>
                    Your data is used to operate and improve our platform, deliver AI agent services, and ensure legal compliance. We may also use aggregated data for analytics and system performance.
                  </p>

                  <h5 className="mt-4">3. Data Protection</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">🔒 All data is encrypted using industry-standard protocols.</li>
                    <li className="list-group-item">🚫 We do not sell or trade your personal data.</li>
                    <li className="list-group-item">📧 You control your communication preferences.</li>
                    <li className="list-group-item">🗑️ You can request data deletion at any time.</li>
                  </ul>

                  <h5 className="mt-4">4. Third-Party Access</h5>
                  <p>
                    We do not share your data with third parties unless required for legal compliance, security, or by your explicit consent (e.g., wallet integration services).
                  </p>

                  <h5 className="mt-4">5. Blockchain Data Notice</h5>
                  <p>
                    Due to the immutable nature of blockchain, certain actions (like smart contract interactions) may remain permanently recorded on-chain. While this data is public, we take all measures to minimize linking it to your identity.
                  </p>

                  <h5 className="mt-4">6. Policy Updates</h5>
                  <p>
                    We may update this policy to reflect changes in our practices or legal obligations. Continued use of Rentelligence signifies your agreement to these updates.
                  </p>

                  <p className="mt-4">
                    For questions or concerns, please contact us at:{" "}
                    <strong>privacy@rentelligence.ai</strong>
                  </p>
                </div>
                <div className="card-footer text-muted text-end">
                  Last updated: July 28, 2025
                </div>
              </div>
            </div>
          </div>
          {/* --- End Privacy Policy Card --- */}
        </div>
      </section>
    </>
  );
};

export default PrivacyContent;
