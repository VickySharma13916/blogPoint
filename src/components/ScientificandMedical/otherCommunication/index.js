import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import otherback from "../../../assets/images/other-communications-back.png";
import otherback1 from "../../../assets/images/other-communications-back1.jpg";
import otherCommunication from "../../../assets/images/other-communications.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const OtherCommunication = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background1"></div>
              <img
                src={otherCommunication}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute justify-center top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-3xl md:text-6xl w-full md:w-1/2 font-semibold">
                  Other Communications
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="container py-12 relative mx-auto">
              <h2 className="md:text-5xl text-2xl font-semibold w-full md:py-12 px-6 md:px-0 md:w-4/5">
                Omnichannel Non-promotional Communication
              </h2>
            </div>
          </div>
          <div className="w-full">
            <div className="container relative mx-auto">
              <div className="relative z-0">
                <div className="absolute image-background1"></div>
                <img
                  src={otherback}
                  alt="case-study"
                  className="relative z-0 md:h-auto w-full h-96"
                />
              </div>
              <div className="absolute z-10 flex flex-col justify-center top-0 px-8 md:px-16 bottom-0 left-0 right-0">
                <div className="md:text-lg text-sm text-white w-full md:w-1/2">
                  In this digital era, omnichannel communication is the answer
                  to modern-day communication, given the easy availability and
                  increased reach of different social media platforms.
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
          <div className="w-full">
            <div className="container py-12 relative mx-auto">
              <div className="md:text-lg pr-10 px-6 md:px-0">
                Through these channels, Blogpoint can help you to quickly
                communicate the disease severity, treatment options available,
                latest therapeutic advances and news, patient experiences,
                regulatory approvals, changing guidelines, and results of your
                key clinical trials to health care professionals and other
                researchers in a non-biased manner.
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-full">
            <div className="container py-12 relative mx-auto">
              <h2 className="md:text-5xl text-2xl font-semibold w-full pt-4 md:pt-12 px-6 md:px-0 md:w-2/5">
                Peer-To-Peer Communication
              </h2>
              <div className="md:text-lg my-12 px-6 md:px-0">
                In this evolving space of medical communication, peer-to-peer
                communication is a Key to opening doors toward positive patient
                care.
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-full">
            <div className="container py-12 relative mx-auto">
              <div className="relative my-12 z-0">
                <div className="absolute image-background1"></div>
                <img
                  src={otherback1}
                  alt="case-study"
                  className="relative z-0 md:h-auto w-full h-80"
                />
              </div>
              <div className="absolute z-10 flex flex-col justify-center top-0 px-8 md:px-16 bottom-0 left-0 right-0">
                <div className="text-sm md:text-lg text-white w-full md:w-1/2">
                  Blogpoint comes into effect by providing means for convenient
                  communication between HCPs, pharmaceutical/biotech companies,
                  and stakeholders.
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
          <div className="bg-slate-100 w-full">
            <div className="container py-12 relative mx-auto">
              <h4 className="text-2xl pr-10 px-6 md:px-0">
                With a Brilliant Army of Writers and Designers, Blogpoint Can Aid
                You in Better Delivery of Your Clinical Development Through:
              </h4>
              <div className="flex md:flex-row mx-6 md:mx-0 flex-col pt-12">
                <ul className="list-outside flex-col mb-12 w-3/5 gap-2 flex justify-between">
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Webinars
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Stand-Alone Emailers
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Newsletter and Emailer Campaigns
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Symposium Invites and Summaries
                  </li>
                </ul>
                <ul className="list-outside flex-col mb-12 w-3/5 gap-2 flex justify-between">
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Online CMEs
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Kol Interviews
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Surveys
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Patient Education Material
                  </li>
                </ul>
                <ul className="list-outside flex-col gap-2 mb-12 w-3/5 flex justify-between">
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Research Snapshots
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Clinical Infographics
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Video Bites
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    FAQ Booklets
                  </li>
                  <li className="list-none md:text-xl md:w-4/5 w-full relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Leave Pieces and LBLs
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

export default OtherCommunication;
