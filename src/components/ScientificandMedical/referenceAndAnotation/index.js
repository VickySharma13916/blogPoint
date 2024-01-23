import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RA1 from "../../../assets/images/ra1.png";
import RA2 from "../../../assets/images/ra2.png";
import RA3 from "../../../assets/images/ra3.png";
import RA4 from "../../../assets/images/ra4.png";
import RA5 from "../../../assets/images/ra5.png";
import RA6 from "../../../assets/images/ra6.png";
import RA7 from "../../../assets/images/ra7.png";
import RA8 from "../../../assets/images/ra8.png";
import medialInformation from "../../../assets/images/referenceandAnotation.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const ReferenceAndAnotation = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const strategyImage = [
    {
      image: RA1,
      text: "Help in processing the plan, tracking, author review, and approve submission documents.",
    },
    {
      image: RA2,
      text: "Secure viewing of complete submissions history.",
    },
    {
      image: RA3,
      text: "Streamlining end to end processes across commercial, medical, clinical, regulatory, quality, and safety.",
    },
    {
      image: RA4,
      text: "Gaining efficiency to streamline quality management for clinical trial (Operation & data) Success.",
    },
    {
      image: RA5,
      text: "Updating and maintaining platform to reduce complexity and increase business agility.",
    },
    {
      image: RA6,
      text: "Secure incorporation of all internal and external users with dynamic access control security model.",
    },
    {
      image: RA7,
      text: "Accelerated engagement with scientific leaders.",
    },
    {
      image: RA8,
      text: "Improving pharmacovigilance oversight to reduce the risk.",
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
                <h1 className="text-3xl md:text-6xl w-full md:w-1/2 font-semibold">
                  Referencing and Annotation
                </h1>
                <div className="md:text-lg my-4 md:w-3/5 w-full">
                  To give credibility to the content, proper referencing and
                  annotations are essential, and our team of professionals can
                  help you with:
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
          </div>
          <div className="container mx-auto my-12">
            <h2 className="md:text-4xl text-lg mx-6 md:mx-0 border-l border-red-800 px-8">
              Turacoz team has experience of working on veeva promomats and zinc
              platforms.
            </h2>
            <div className="md:text-xl py-4 md:py-8 mx-6 md:mx-0 ">
              Through veeva vault, a cloud-based content management unified
              platform, we offer our unique capability to manage end-to-end
              processes with related content, data, and their workflows.
            </div>
            <div className="flex flex-wrap my-12 mx-6 md:mx-0">
              {strategyImage &&
                strategyImage?.map((rowData, index) => {
                  return (
                    <div
                      className="flex flex-col gap-4 my-8 pb-4  px-8 sm:w-1/2 md:w-1/3 border-l border-red-800"
                      key={index}
                    >
                      <img
                        src={rowData.image}
                        alt="strategy"
                        className="w-20 h-20"
                      />
                      <h4 className="text-lg w-4/5">{rowData.text}</h4>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceAndAnotation;
