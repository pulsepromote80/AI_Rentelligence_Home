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
          {/* <div className="row justify-content-center mt-5" data-aos="fade-up">
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
          </div> */}

          {/* --- End of Terms Card --- */}
          <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Rentelligence Platform Information</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-2"><strong>Effective Date:</strong></p>
              <p className="text-muted">17 June, 2025</p>
            </div>
            <div className="col-md-6">
              <p className="mb-2"><strong>Last Updated:</strong></p>
              <p className="text-muted">31 July, 2025</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <p className="mb-2"><strong>Platform Name:</strong></p>
              <p className="text-muted">
                Rentelligence (<a href="https://www.rentelligence.ai" target="_blank" rel="noopener noreferrer">www.rentelligence.ai</a>)
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-light">
          <small className="text-muted">Information current as of last updated date</small>
        </div>
      </div>
    </div>

          <div class="container my-5">
            <div class="mb-4 p-4 welcome-box rounded">
              <h2 class="h4">Welcome to Rentelligence</h2>
              <p>
                The world's first decentralized AI/ML marketplace for
                purchasing, leasing, or renting intelligent agents. Please read
                these Terms and Conditions ("Terms") carefully before accessing
                or using our Platform.
              </p>
              <p class="mb-0 fw-bold">
                By accessing or using Rentelligence, you agree to be bound by
                these Terms. If you do not agree, you may not access or use the
                Platform.
              </p>
            </div>

            <div class="accordion mb-5" id="termsAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. Definitions
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <dl class="row">
                      <dt class="col-sm-3 definition-term">Platform</dt>
                      <dd class="col-sm-9">
                        Refers to Rentelligence and its website, mobile app, or
                        any associated services.
                      </dd>

                      <dt class="col-sm-3 definition-term">User</dt>
                      <dd class="col-sm-9">
                        Refers to any person or entity who registers, accesses,
                        or uses the Platform.
                      </dd>

                      <dt class="col-sm-3 definition-term">AI Agent</dt>
                      <dd class="col-sm-9">
                        Refers to artificial intelligence/machine learning
                        models, bots, services, or digital products available
                        for purchase, lease, or rent.
                      </dd>

                      <dt class="col-sm-3 definition-term">Provider</dt>
                      <dd class="col-sm-9">
                        Refers to users who list or upload AI Agents to the
                        Platform.
                      </dd>

                      <dt class="col-sm-3 definition-term">Client</dt>
                      <dd class="col-sm-9">
                        Refers to users who purchase, lease, or rent AI Agents
                        from the Platform.
                      </dd>

                      <dt class="col-sm-3 definition-term">Smart Contract</dt>
                      <dd class="col-sm-9">
                        Refers to blockchain-based agreements that facilitate
                        transactions on the Platform.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. Eligibility
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <p>
                      You must be at least 18 years old or the age of majority
                      in your jurisdiction and capable of entering into legally
                      binding agreements. You also agree to comply with
                      applicable laws and regulations in your region.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. Platform Usage
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        Rentelligence provides a decentralized platform for
                        listing and acquiring AI Agents.
                      </li>
                      <li>
                        Transactions are facilitated via blockchain smart
                        contracts and may involve digital tokens or
                        cryptocurrencies.
                      </li>
                      <li>
                        Users are solely responsible for safeguarding their
                        wallets, private keys, and credentials.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Ownership & Licensing
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        Providers retain ownership of their AI Agents unless
                        explicitly transferred.
                      </li>
                      <li>
                        Clients are granted a license (as defined in each
                        transaction) to use the Agent for the intended period
                        and purpose.
                      </li>
                      <li>
                        Resale, redistribution, or modification of rented or
                        leased AI Agents is prohibited unless expressly
                        permitted by the Provider.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    5. User Conduct
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <p>You agree not to:</p>
                    <ul>
                      <li>
                        Use the Platform for illegal, fraudulent, or malicious
                        purposes.
                      </li>
                      <li>Upload malicious code or unauthorized data.</li>
                      <li>Violate intellectual property rights of others.</li>
                      <li>Misrepresent AI Agents or falsify reviews.</li>
                      <li>
                        Manipulate blockchain transactions to exploit the
                        system.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    6. Payment & Fees
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        Fees for transactions, including network (gas) fees,
                        will be clearly stated before confirmation.{" "}
                      </li>
                      <li>
                        Rentelligence may charge a platform fee or commission
                        for facilitating transactions.{" "}
                      </li>
                      <li>
                        All payments are final and processed via smart
                        contracts. Refunds are only applicable under specific
                        dispute resolutions.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    7. Decentralization Disclaimer
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <p>As a decentralized platform:</p>
                    <ul>
                      <li>
                        Rentelligence does not store AI Agents on centralized
                        servers.{" "}
                      </li>
                      <li>
                        Rentelligence has limited control over smart contracts
                        once deployed. .{" "}
                      </li>
                      <li>
                        Users must understand the risks of interacting with
                        decentralized technology and blockchain.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    8. Disclaimers 
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                  
                    <ul>
                      <li>
                        AI Agents are provided “as is” without warranties of any kind.{" "}
                      </li>
                      <li>
                        Rentelligence makes no guarantees regarding the accuracy, performance, or suitability of any AI Agent.{" "}
                      </li>
                      <li>
                      Users assume all risks associated with the use, output, or decision-making of AI Agents. .{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    9. Limitation of Liability 
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <p>To the maximum extent permitted by law, Rentelligence and its aAiliates shall not be liable for: </p>
                    <ul>
                      <li>
                        Any indirect, incidental, or consequential damages.{" "}
                      </li>
                      <li>
                        Loss of data, revenue, or reputation.{" "}
                      </li>
                      <li>
                       Errors, bugs, or failures in smart contracts or AI Agents.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    10. Intellectual Property 
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                   
                    <ul>
                      <li>
                        All Rentelligence branding, UI/UX designs, and
                        trademarks are owned by Rentelligence and may not be
                        used without written permission.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    11. Termination
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        We reserve the right to suspend or terminate your access
                        to the Platform without notice if you violate these
                        Terms or applicable laws.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    12. Governing Law
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        hese Terms shall be governed by and construed in
                        accordance with the laws of [Insert Jurisdiction].
                        Disputes may be resolved via arbitration or as otherwise
                        specified in a smart contract-based dispute mechanism.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    13. Amendments
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        We may revise these Terms at any time. Continued use of
                        the Platform following changes indicates your acceptance
                        of the updated Terms.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-top pt-4 mt-4">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="mb-1">Need help?</h5>
                  <p class="mb-0 text-muted">
                    Contact us at support@rentelligence.ai
                  </p>
                </div>
                <a href="https://rentelligence.ai" class="btn btn-primary">
                  Visit Rentelligence
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsContent;
