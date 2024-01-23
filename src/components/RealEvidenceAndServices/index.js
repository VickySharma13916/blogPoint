import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import realworld from "../../assets/images/Real-world-Evidence-Studies.png";
import rwe from "../../assets/images/rwe.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const RealWorldEvidenceAndClinicalTrailServices = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const items = [
    {
      value: "10",
      label: "End-To-End RWE Studies",
      icon: null,
    },
    {
      value: "5",
      label: "Therapeutic Areas Including Oncology",
      icon: null,
    },
    {
      value: "10",
      label: "Publications",
      icon: null,
    },
    {
      value: null,
      label: "In-House Statistician for SAP Development",
      icon: rwe,
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
                src={realworld}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-4/5 w-full text-2xl font-semibold">
                  Real-World Evidence & Clinical Trial Services
                </h1>
                <div className="md:text-lg my-4 xl:w-2/3 w-full">
                  While clinical trials continue to be the gold standard for
                  studying the safety and efficacy of a new treatment, in recent
                  years, drug makers, clinicians, and health insurance companies
                  have been increasingly turning to real-world data to answer
                  questions that may not be evaluated in clinical trials.
                </div>
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
              <div className="xl:w-3/5 md:w-4/5 px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-20 md:-bottom-24 z-20 right-0">
                <h3 className="md:text-lg text-sm py-6 md:px-4">
                  Real-world data can provide valuable information about a
                  treatment in routine clinical practice.
                </h3>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-100  absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full  relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full bg-gray-100  relative">
            <div className="container mx-auto py-4 md:py-12">
              <h3 className="my-8 mx-6 md:mx-0 md:my-12 md:text-2xl border-l px-8 border-red-800">
                At Turacoz, we help pharmaceutical companies with end-to-end
                support for conducting real-world studies.
              </h3>
              <div className="md:text-lg mx-6 md:mx-0">
                From protocol development to study report, data analysis and
                publications, our team is expert in handling this complex
                emerging document type.
              </div>
              <h2 className="my-12 md:text-2xl mx-6 md:mx-0 font-semibold">
                Our Experience
              </h2>
              <div className="flex flex-wrap gap-4 md:gap-0 mt-12 items-center mx-6 md:mx-0 justify-between py-10">
                {items &&
                  items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col  justify-center md:justify-start items-center md:items-start p-2 flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 h-40"
                    >
                      {item.value && (
                        <span className="text-6xl font-semibold text-red-800">
                          {item.value}
                        </span>
                      )}
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt="asset"
                          className="w-16 h-16"
                        />
                      )}
                      <span className="text-xl w-1/2 md:w-full text-center md:text-left my-2 md:pr-8">
                        {item.label}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealWorldEvidenceAndClinicalTrailServices;
