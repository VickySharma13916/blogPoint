import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import M1 from "../../../assets/images/me1.png";
import M2 from "../../../assets/images/me2.png";
import M3 from "../../../assets/images/me3.png";
import M4 from "../../../assets/images/me4.png";
import meback from "../../../assets/images/meback.png";
import Mec1 from "../../../assets/images/mec1.png";
import Mec2 from "../../../assets/images/mec2.png";
import Mec3 from "../../../assets/images/mec3.png";
import Mec4 from "../../../assets/images/mec4.png";
import Mec5 from "../../../assets/images/mec5.png";
import Mec6 from "../../../assets/images/mec6.png";
import medialEducation from "../../../assets/images/medicalEducation.png";
import medialEducation1 from "../../../assets/images/medicalEducation1.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const MedicalEducation = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const strategyImage = [
    {
      image: M1,
      text: "Scientific Slide Decks",
    },
    {
      image: M2,
      text: "Training Manuals",
    },
    {
      image: M3,
      text: "E-Learning Modules",
    },
    {
      image: M4,
      text: "Video Formats ",
    },
  ];
  const meccard = [
    {
      image: Mec1,
      title: "Needs Assessment",
    },
    {
      image: Mec2,
      title: "CME Plan Development",
    },
    {
      image: Mec3,
      title: "Trainer FCoordination",
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
                src={medialEducation}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left  p-10 md:p-20">
                <h1 className="md:text-7xl text-2xl w-full md:w-1/2 font-semibold">
                  Medical Education
                </h1>
                <div className="md:text-lg my-4 md:w-3/5 w-full">
                  Medical education of healthcare and industry professionals is
                  an integral part of any product development whether in the
                  development phase or marketing phase.
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
            <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-24 z-20 right-0">
              <div className="md:text-lg text-sm py-6 px-4">
                Regular trainings are required to develop or improve the
                knowledge of disease and product to ultimately improve the
                quality of public healthcare.
              </div>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="py-12"></div>
            <h2 className="md:text-5xl text-lg md:w-4/5 mx-auto text-center py-8">
              Target Audience
            </h2>
            <img src={medialEducation1} alt="MedicalInformation" />
            <h2 className="text-2xl md:text-5xl font-semibold md:w-4/5 w-full mx-auto text-center py-8 px-6 md:px-0">
              Medical Education Can Be Delivered As
            </h2>
            <div className="flex flex-wrap my-12 gap-8 mx-6 md:mx-0 justify-between">
              {strategyImage &&
                strategyImage?.map((rowData, index) => {
                  return (
                    <div
                      className="flex flex-col border p-4 border-slate-400 rounded-xl justify-center items-center gap-6 py-4 w-full sm:w-1/4 md:w-1/6"
                      key={index}
                    >
                      <img
                        src={rowData.image}
                        alt="strategy"
                        className="w-20 h-20"
                      />
                      <div className="flex">
                        <h3 className="text-lg w-4/5 mx-auto text-center">
                          {rowData.text}
                        </h3>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-gray-200 w-full">
            <div className="container py-12 relative mx-auto">
              <h2 className="md:text-5xl font-semibold text-2xl w-full md:w-4/5 mx-auto text-center py-8">
                Continuing Medical Education (CME) Accreditation Content
              </h2>
            </div>
          </div>
          <div className="bg-gray-200 w-full">
            <div className="container  relative mx-auto">
              <div className="relative mx-6 md:mx-0 z-0">
                <div className="absolute image-background1"></div>
                <img
                  src={meback}
                  alt="case-study"
                  className="relative z-0 md:h-auto h-80 w-full"
                />
              </div>
              <div className="absolute z-10 top-1/3 px-10 md:px-16 left-0 right-0">
                <div className="md:text-lg text-sm text-white w-full md:w-1/2">
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
              <div className="flex md:flex-row mx-6 md:mx-0 flex-col pt-12">
                <div className="text-xl md:text-3xl font-semibold md:font-normal md:w-2/5 w-full">
                  <h2>
                    Turacoz Team Provides the Following Services Under CME
                    Development and Accreditation:
                  </h2>
                </div>
                <ul className="list-outside mt-12 md:mt-0 mb-12 flex flex-col px-6 md:px-0 justify-between gap-6 md:gap-12">
                  <li className="list-none md:text-xl w-full md:w-4/5 relative ml-4 md:ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Content creation:
                    <div className="flex flex-wrap my-4 gap-8 justify-start md:justify-between">
                      {meccard &&
                        meccard?.map((rowData, index) => {
                          return (
                            <div
                              className="flex flex-col rounded-xl justify-center items-center py-4 "
                              key={index}
                            >
                              <img
                                src={rowData.image}
                                alt="strategy"
                                className="w-20 h-20"
                              />
                              <div className="flex">
                                <h6 className="text-lg w-4/5 mx-auto text-center">
                                  {rowData.title}
                                </h6>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </li>
                  <li className="list-none py-4 relative border-t border-b border-slate-400 text-xl md:ml-10">
                    <span className="width-span absolute top-6 md:top-1/2 left-0"></span>
                    <div className="flex justify-center pl-6 gap-4 items-start md:items-center">
                      <img src={Mec4} alt="strategy" className="w-20 h-20" />
                      <div className="text-sm md:text-xl">
                        Training deployment on learning management system (LMS)
                        And as online/offline workshops CME accreditation.
                      </div>
                    </div>
                  </li>
                  <li className="list-none py-4 relative  text-xl md:ml-10">
                    <span className="width-span absolute top-6 md:top-1/2 left-0"></span>
                    <div className="flex justify-center pl-6 gap-4 items-start md:items-center">
                      <img src={Mec5} alt="strategy" className="w-20 h-20" />
                      <div className="text-sm md:text-xl">
                        CME accreditation with medical societies and
                        associations.
                      </div>
                    </div>
                  </li>
                  <li className="list-none py-4 relative border-t border-b border-slate-400 text-xl md:ml-10">
                    <span className="width-span absolute top-6 md:top-1/2 left-0"></span>
                    <div className="flex justify-center pl-6 gap-4 items-start md:items-center">
                      <img src={Mec6} alt="strategy" className="w-20 h-20" />
                      <div className="text-sm md:text-xl">
                        Post CME communication with healthcare professionals and
                        internal stakeholders.
                      </div>
                    </div>
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
export default MedicalEducation;
