import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import kol1 from "../../assets/images/kol1.png";
import kol2 from "../../assets/images/kol2.png";
import kol3 from "../../assets/images/kol3.png";
import realworld from "../../assets/images/kol_banner.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const EOLEngagement = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const supportItems = [
    {
      text: "End-to-end publication support.",
    },
    {
      text: "Minutes of meeting.",
    },
    {
      text: "Executive summary.",
    },
    {
      text: "Clinical practice guidelines.",
    },
    {
      text: "Consensus statements.",
    },
    {
      text: "Consensus recommendations.",
    },
    {
      text: "Position statement.",
    },
    {
      text: "Expert opinion.",
    },
  ];

  const preMeetingSupportItems = [
    {
      text: "KOL mapping and KOL coordination.",
    },
    {
      text: "Literature search.",
    },
    {
      text: "Conducting surveys.",
    },
    {
      text: "Preparing all meeting collaterals like banners, slide decks, emailers, reminders, etc.",
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
                <h1 className="xl:text-6xl md:text-4xl xl:w-2/3 w-full text-2xl font-semibold">
                  KOL Engagement & Advocacy Building
                </h1>
                <div className="md:text-lg my-4 xl:w-2/3 w-full">
                  Advisory board and medical conferences are platforms where
                  subject matter experts and key opinion leaders present their
                  study and research and can contribute a lot to the existing
                  scientific evidence in addition to the published literature.
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
              <div className="xl:w-3/5 md:w-4/5 px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
                <div className="md:text-lg text-sm py-6 md:px-4">
                  Covering these meetings can add the clinical experience to the
                  already existing literature and generate evidence to develop
                  clinical practice guidelines, consensus recommendations, and
                  ummaries of latest research and patient outcomes to be shared
                  with scientific fraternity.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full relative">
            <div className="container mx-auto py-12">
              <h2 className="my-6 md:my-12 mx-6 md:mx-0 md:text-2xl border-l px-8 border-red-800">
                We help streamline research in the right direction, create and
                present scientific knowledge according to the audience, and
                support critical decision-making during the whole process.
              </h2>
            </div>
          </div>
          <div className="w-full bg-gray-200">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-2xl mx-6 md:mx-0 font-semibold py-8 md:py-12">
                Our Services Include
              </h2>
              <div className="flex md:flex-row flex-col md:items-center justify-between">
                <div className="md:text-2xl text-xl w-full md:w-1/2">
                  <span className="flex px-6 md:px-0 items-center gap-4">
                    <span className="w-24 h-20 md:h-24 shadow-2xl border rounded-full p-4 bg-white">
                      <img src={kol1} alt="KOL" />
                    </span>
                    <h3 className="md:text-3xl text-xl w-full md:w-1/2 hover:text-red-800">
                      Pre-Meeting Support
                    </h3>
                  </span>
                </div>
                <ul className="list-outside flex-col mt-4 md:mt-0 md:w-1/2 flex gap-4 justify-between">
                  {preMeetingSupportItems &&
                    preMeetingSupportItems.map((item, index) => (
                      <li
                        key={index}
                        className="list-none md:text-lg w-4/5 relative ml-12 pl-4"
                      >
                        <span className="width-spaning absolute top-1/4 -left-8"></span>
                        {item.text}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex md:flex-row my-12 flex-col justify-between mb-16">
                <div className="md:text-2xl text-xl w-full md:w-1/2">
                  <span className="flex px-6 md:px-0 items-center gap-4">
                    <span className=" w-24 h-20 md:h-24 shadow-2xl border rounded-full p-4 bg-white">
                      <img src={kol2} alt="KOL" />
                    </span>
                    <h3 className="md:text-3xl text-xl w-full md:w-1/2 hover:text-red-800">
                      Meeting Support
                    </h3>
                  </span>
                </div>
                <ul className="list-outside pt-8 md:pt-0 flex-col mb-12 md:w-1/2 flex gap-4 justify-between">
                  <li className="list-none md:text-lg  md:w-4/5 relative ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Advisory board meeting management.
                  </li>
                </ul>
              </div>
              <div
                className="flex md:flex-row flex-col 
               justify-between pb-12"
              >
                <div className="md:text-2xl text-xl w-full md:w-1/2">
                  <span className="flex px-6 md:px-0 items-center gap-4">
                    <span className="w-24 h-20 md:h-24 shadow-2xl border rounded-full p-4 bg-white">
                      <img src={kol3} alt="KOL" />
                    </span>
                    <h3 className="text-xl md:text-3xl w-full md:w-1/2 hover:text-red-800">
                      Post-Meeting Support
                    </h3>
                  </span>
                </div>
                <ul className="list-outside flex-col mt-4 md:mt-0 md:w-1/2 flex gap-4 justify-between">
                  {supportItems &&
                    supportItems.map((item, index) => (
                      <li
                        key={index}
                        className="list-none text-lg w-4/5 relative ml-12 pl-4"
                      >
                        <span className="width-spaning absolute top-1/4 -left-8"></span>
                        {item.text}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EOLEngagement;
