import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import medialInformation from "../../../assets/images/medialInformation.png";
import miback from "../../../assets/images/mi-back1.png";
import mibackground from "../../../assets/images/mi-background.png";
import M1 from "../../../assets/images/mi1.png";
import M2 from "../../../assets/images/mi2.png";
import M3 from "../../../assets/images/mi3.png";
import M4 from "../../../assets/images/mi4.png";
import miback2 from "../../../assets/images/miback2.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const MedicalInformation = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const strategyImage = [
    {
      image: M1,
      text: "Standard Response Document/Global Response Document",
    },
    {
      image: M2,
      text: "Custom Response and Content Management",
    },
    {
      image: M3,
      text: "Response Document Maintenance",
    },
    {
      image: M4,
      text: "Literature News",
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
                src={medialInformation}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-6xl text-2xl font-semibold">
                  Medical Information
                </h1>
                <div className="text-lg my-4 md:w-3/5 w-full">
                  As a marketing authorization holder, the enquiries that you
                  receive throughout the product life cycle require timely and
                  evidence-based responses
                </div>
                <Link to="/contact-us">
                  <div className="flex mb-4 mt-10 items-center connect-svg1">
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
            <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <div className="md:text-lg text-sm py-6 px-4">
                Our medical information specialists provide scientifically
                balanced, non-promotional, evidence-based factual responses to
                the unsolicited enquiries from healthcare professionals
                (External customers) pertaining to prescription and safety of
                drug products throughout their life cycle.
              </div>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="py-12"></div>
            <h2 className="md:text-5xl text-lg md:w-4/5 mx-auto text-center py-8">
              Types of Response Documents That Our Team Have Created Till Now
            </h2>
            <div className="flex flex-wrap items-start mx-6 md:mx-0 justify-between py-10">
              {strategyImage &&
                strategyImage?.map((rowData, index) => {
                  return (
                    <div
                      className="flex flex-row md:flex-col items-center p-2 flex-none w-full sm:w-1/4 gap-4 md:w-1/6"
                      key={index}
                    >
                      <img
                        src={rowData.image}
                        alt="strategy"
                        className="md:w-20 md:h-20 w-16 h-16"
                      />
                      <div className="flex w-full">
                        <h4 className="text-lg md:w-4/5 mx-auto text-center">
                          {rowData.text}
                        </h4>
                      </div>
                    </div>
                  );
                })}
            </div>
            <h2 className="md:text-5xl text-2xl w-full md:w-4/5 mx-auto text-center py-8">
              Common Features of Response Documents
            </h2>
            <img
              src={mibackground}
              alt="MedicalInformation"
              className="hidden md:block"
            />
            <img
              src={miback2}
              alt="MedicalInformation"
              className="block md:hidden h-80 mx-6 md:mx-0"
            />
          </div>
          <div className="bg-gray-200 w-full">
            <div className="container py-12 relative mx-auto">
              <h2 className="md:text-5xl text-xl px-6 md:px-0 w-full md:w-3/5">
                Claim Substantiation and Science Consulting
              </h2>
              <div className="md:text-lg mx-6 md:mx-0  py-12">
                Claims for a regulated product are the promise to the user for
                its performance, safety, and use. As with all communication
                about a product, the claim statements can be found in many
                different documents and communications.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full  px-6 md:px-0">
            <div className="container relative mx-auto">
              <img
                src={miback}
                alt="case-study"
                className="relative z-0 md:h-auto h-80 w-full"
              />
              <div className="absolute image-background12"></div>
              <div className="absolute z-10 px-4 md:px-16 bottom-0 left-0 right-0 medical_image">
                <div className="md:text-lg text-white w-full md:w-1/2">
                  Right from the product label to product brochure, or an
                  advertisement or company’s website, or science dossiers,
                  claims can be found everywhere.
                </div>
                <Link to="/contact-us">
                  <div className="flex my-8 items-center connect-svg1">
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
            </div>
          </div>
          <div className="bg-gray-200 w-full">
            <div className="container relative mx-auto">
              <div className="relative py-8">
                <h4 className="md:text-2xl mx-6 md:mx-0 px-8 border-l border-red-800">
                  At Turacoz, we have a dedicated team working on this
                  deliverable type.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalInformation;
