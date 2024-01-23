import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import caseStudy from "../../../assets/images/Branding-and-Rebranding-Activities.png";
import caseStudy1 from "../../../assets/images/Omnichannel-Promotional-Solutions-1.png";
import chalange from "../../../assets/images/chalange.png";
import information from "../../../assets/images/information.png";
import lifecycle from "../../../assets/images/lifecycle.png";
import mcsImage from "../../../assets/images/mcs-image.png";
import text from "../../../assets/images/text.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const MedicalCommunicationStrategy = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);
  const strategyImage = [
    {
      image: lifecycle,
      text: "Stage of the Product in the Product Life Cycle",
    },
    {
      image: chalange,
      text: "Challenges Faced by the Sponsor/Manufacturer",
    },
    {
      image: text,
      text: "Feedback From the Field Force, Medical Affairs Team, Healthcare Professionals, Patients/Consumers",
    },
    {
      image: information,
      text: "Information Required by Policy Makers, Insurance/Reimbursement, and Regulatory Agencies",
    },
  ];
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background1"></div>
              <img
                src={mcsImage}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left px-6 py-10 md:p-20">
                <h1 className="text-2xl md:text-6xl w-full md:w-1/2 font-semibold">
                  Medical Communication Strategy
                </h1>
                <h3 className="md:text-lg my-4 md:w-3/5 w-full">
                  Developing a fool proof medical communications strategy is of
                  paramount importance especially for thorough understanding of
                  the product, collating with the science/evidence behind it,
                  and disseminating this information to all the stakeholders
                  involved.
                </h3>
                <Link to="/contact-us">
                  <div className="flex mb-4 items-center connect-svg1">
                    <div className="text-lg font-semibold">Let's Connect</div>
                    <div className="w-20 h-12 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 73 48"
                      >
                        <circle
                          className="st0"
                          transform="rotate(-90 40 40)"
                          cx="55"
                          cy="45"
                          r="22.2"
                        ></circle>
                        <line
                          className="st1"
                          x1="1.4"
                          y1="23.6"
                          x2="44.1"
                          y2="23.6"
                        ></line>
                        <polygon
                          className="st2"
                          points="42.6 28.6 51.2 23.6 42.6 18.6 "
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <h2 className="text-2xl md:text-5xl mx-6 md:mx-0 py-8 font-semibold">
              The Scientific and Medical Communications Strategy Depends Upon
            </h2>
            <div className="flex flex-wrap my-12 mx-6 md:mx-0">
              {strategyImage &&
                strategyImage?.map((rowData, index) => {
                  return (
                    <div
                      className="flex gap-4 py-4 w-full md:w-1/2"
                      key={index}
                    >
                      <img
                        src={rowData.image}
                        alt="strategy"
                        className="md:w-20 w-16 h-16 md:h-20"
                      />
                      <div className="flex flex-col">
                        <span className="border border-red-800 md:w-40 w-20 my-2"></span>
                        <div className="md:text-lg break-words w-10/12 md:w-4/5">
                          {rowData.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-gray-100 w-full">
            <div className="container mx-auto">
              <div className="flex pt-12">
                <ul className="list-outside mb-12 flex flex-col md:flex-row mx-6 md:mx-0 justify-between gap-12">
                  <li className="list-none md:text-lg relative ml-10 w-4/5 md:w-2/5">
                    <span className="width-span absolute top-3 -left-8"></span>
                    This requires an in-depth landscape assessment and market
                    research of the product and the competitors to identify the
                    key objectives of the scientific communication plan.
                  </li>
                  <li className="list-none ml-10 md:text-lg relative w-4/5 md:w-2/5">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Once the objectives are finalized, an appropriate
                    communications strategy is developed to sensitize the
                    markets, create brands, and build up an advocacy around the
                    product.
                  </li>
                </ul>
              </div>
              <div className="flex md:flex-row flex-col justify-between pb-12">
                <div className="md:text-2xl my-4 w-full px-6 md:px-0 md:w-2/5">
                  The objectives should address short-term communication plans
                  and long-term behavioral goals.
                </div>
                <div className="flex justify-start items-start  md:w-1/2 w-full px-6 md:px-0">
                  <div className="flex mb-4 items-center connect-svg">
                    <Link to="/contact-us">
                      <div className="text-lg font-semibold">Let's Connect</div>
                    </Link>
                    <Link to="/contact-us">
                      <div className="w-20 h-12 ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 73 48"
                        >
                          <circle
                            className="st0"
                            transform="rotate(-90 40 40)"
                            cx="55"
                            cy="45"
                            r="22.2"
                          ></circle>
                          <line
                            className="st1"
                            x1="1.4"
                            y1="23.6"
                            x2="44.1"
                            y2="23.6"
                          ></line>
                          <polygon
                            className="st2"
                            points="42.6 28.6 51.2 23.6 42.6 18.6 "
                          ></polygon>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-12 relative mx-auto">
            <div className="text-2xl md:text-5xl mx-6 md:mx-0 font-semibold relative">
              Branding and Rebranding Activities
            </div>
            <div className="md:text-lg my-8 w-full px-6 md:px-0 md:w-4/5 relative">
              Blogpoint works with a vision to bond your product with HCPs and
              patients personally. It is crucial to take your message
              effectively to key opinion leaders, healthcare professionals, and
              patients in order to create wider brand awareness, acceptance, and
              improved healthcare.
            </div>
            <Link to="/resources">
              <div className="flex mb-12 px-6 md:px-0 items-center connect-svg">
                <div className="text-lg font-semibold">Case Studies</div>
                <div className="w-20 h-12 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 48">
                    <circle
                      className="st0"
                      transform="rotate(-90 40 40)"
                      cx="55"
                      cy="45"
                      r="22.2"
                    ></circle>
                    <line
                      className="st1"
                      x1="1.4"
                      y1="23.6"
                      x2="44.1"
                      y2="23.6"
                    ></line>
                    <polygon
                      className="st2"
                      points="42.6 28.6 51.2 23.6 42.6 18.6 "
                    ></polygon>
                  </svg>
                </div>
              </div>
            </Link>
            <div className="relative z-0">
              <div className="absolute image-background1"></div>
              <img
                src={caseStudy}
                alt="case-study"
                className="relative md:h-auto w-full h-80"
              />
            </div>
            <div className="absolute z-10 top-2/3 px-6 md:px-16 bottom-0 left-0 right-0">
              <div className="md:text-lg text-white w-full md:w-1/2">
                Blogpoint can create digital/non-digital engagement deliverables,
                and business as well as marketing plan for brands through
                audience-specific tailor-made content.
              </div>
              <Link to="/contact-us">
                <div className="flex my-8 items-center connect-svg1">
                  <div className="text-lg text-white font-semibold">
                    Let's Connect
                  </div>
                  <div className="w-20 h-12 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 48">
                      <circle
                        className="st0"
                        transform="rotate(-90 40 40)"
                        cx="55"
                        cy="45"
                        r="22.2"
                      ></circle>
                      <line
                        className="st1"
                        x1="1.4"
                        y1="23.6"
                        x2="44.1"
                        y2="23.6"
                      ></line>
                      <polygon
                        className="st2"
                        points="42.6 28.6 51.2 23.6 42.6 18.6 "
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 w-full">
            <div className="container py-12 mx-auto">
              <div className="text-2xl md:text-5xl mx-6 md:mx-0 font-semibold">
                Omnichannel Promotional Solutions
              </div>
              <div className="md:text-lg mx-6 md:mx-0 my-12 md:pr-10">
                The crux of a successful healthcare network is accessibility of
                scientific data. Evolving with current scenario, we at Blogpoint
                understand the need to shift from multichannel to an omnichannel
                mode of medical marketing, providing all possible cross-channel
                disciplines and enabling both clinical and non-clinical
                stakeholders to access information from anywhere.
              </div>
            </div>
            <div className="container mx-auto relative">
              <div className="relative z-0">
                <div className="absolute image-background1"></div>
                <img
                  src={caseStudy1}
                  alt="case-study"
                  className="relative z-0 w-full h-96 md:h-auto"
                />
              </div>
              <div className="absolute z-10 bottom-0 top-0 p-6 md:px-20 lg:px-20 left-0 right-0">
                <div className="w-full md:w-4/5 lg:w-1/2 md:my-8 md:text-lg text-sm text-white">
                  With the right kind of strategic partnership, Blogpoint can aid
                  you in providing better design thinking, digital analytics,
                  and integration of required technology, keeping in mind both
                  digital and physical environments, to strike the right
                  information to the right stakeholders. This in turn helps in
                  improved revenue, patient care, quality of product, and
                  customer satisfaction.
                </div>
                <Link to="/contact-us">
                  <div className="flex mb-4 items-center connect-svg1">
                    <div className="text-lg text-white font-semibold">
                      Let's Connect
                    </div>
                    <div className="w-20 h-12 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 73 48"
                      >
                        <circle
                          className="st0"
                          transform="rotate(-90 40 40)"
                          cx="55"
                          cy="45"
                          r="22.2"
                        ></circle>
                        <line
                          className="st1"
                          x1="1.4"
                          y1="23.6"
                          x2="44.1"
                          y2="23.6"
                        ></line>
                        <polygon
                          className="st2"
                          points="42.6 28.6 51.2 23.6 42.6 18.6 "
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative flex md:flex-row flex-col my-12 z-0">
                <h4 className="md:w-1/2 w-full px-6 md:px-0 text-xl md:text-2xl">
                  In a Nutshell, We Offer To:
                </h4>
                <ul className="list-outside md:w-1/2 w-full mb-12 flex flex-col justify-between gap-12 mt-8 md:mt-0 px-6 md:px-0">
                  <li className="list-none md:text-lg md:w-full w-4/5 relative ml-8 md:ml-0">
                    <span className="width-span absolute top-3 -left-8"></span>
                    This requires an in-depth landscape assessment and market
                    research of the product and the competitors to identify the
                    key objectives of the scientific communication plan.
                  </li>
                  <li className="list-none md:text-lg md:w-full w-4/5 relative ml-8 md:ml-0">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Once the objectives are finalized, an appropriate
                    communications strategy is developed to sensitize the
                    markets, create brands, and build up an advocacy around the
                    product.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalCommunicationStrategy;
