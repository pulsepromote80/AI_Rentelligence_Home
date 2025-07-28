import { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Image from "../Image";

const TermsContent = () => {
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
              <div className="shadow-title">Terms & Conditions</div>
              <span className="sub-title text-anim" data-aos="fade-up">
                Terms & Conditions
              </span>
            </div>
          </div>

          {/* --- Terms Card --- */}
          <div className="row justify-content-center mt-5" data-aos="fade-up">
            <div className="col-12 col-lg-10">
              <div className="card shadow-lg border-0">
                <div className="card-header bg-dark text-white">
                  <h4 className="mb-0">User Agreement</h4>
                </div>
                <div className="card-body p-4">
                  <p>
                    By accessing or using Rentelligence, you agree to be bound
                    by these Terms and Conditions. These terms govern your use
                    of our platform, services, content, and data.
                  </p>

                  <h5 className="mt-4">1. Service Usage</h5>
                  <p>
                    Users must not misuse our services or attempt to interfere
                    with the platform’s normal operations. AI Agents provided
                    on Rentelligence must be used lawfully and ethically.
                  </p>

                  <h5 className="mt-4">2. Intellectual Property</h5>
                  <p>
                    All trademarks, code, design assets, and AI models are the
                    property of Rentelligence unless otherwise stated. You may
                    not copy, modify, or reuse without explicit permission.
                  </p>

                  <h5 className="mt-4">3. AI Agent Licensing</h5>
                  <p>
                    Agents available on our platform may be rented, leased, or
                    owned under specific smart contract terms. Misuse or
                    unauthorized duplication of agents is strictly prohibited.
                  </p>

                  <h5 className="mt-4">4. Limitations of Liability</h5>
                  <p>
                    Rentelligence is not responsible for any direct or indirect
                    losses incurred through the use of AI agents or platform
                    services. Users are responsible for testing and validation.
                  </p>

                  <h5 className="mt-4">5. Termination</h5>
                  <p>
                    We reserve the right to terminate or suspend access for
                    users who violate these terms, without prior notice.
                  </p>

                  <h5 className="mt-4">6. Changes to Terms</h5>
                  <p>
                    Terms and conditions may be updated periodically. Continued
                    use of our platform implies acceptance of the revised terms.
                  </p>

                  <p className="mt-4">
                    For any clarifications, please contact us at:{" "}
                    <strong>support@rentelligence.ai</strong>
                  </p>
                </div>
                <div className="card-footer text-muted text-end">
                  Last updated: July 28, 2025
                </div>
              </div>
            </div>
          </div>
          {/* --- End of Terms Card --- */}
        </div>
      </section>
    </>
  );
};

export default TermsContent;
