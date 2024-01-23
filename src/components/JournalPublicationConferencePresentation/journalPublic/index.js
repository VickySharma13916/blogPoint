import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import publication from "../../../assets/images/Publications.jpg";
import evidence from "../../../assets/images/level-of-evidence.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const JournalPublic = () => {
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
                src={publication}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-20">
                <h1 className="text-2xl md:text-7xl w-full md:w-2/3 font-semibold">
                  Journal Publications
                </h1>
                <h2 className="md:text-lg my-4 md:w-3/5 w-full">
                  At Turacoz, we help authors and clients to develop different
                  kinds of publications including original research articles,
                  review articles, case studies, case reports as well as
                  systematic literature reviews. We also develop specialised
                  manuscripts like expert opinion papers, consensus guidelines,
                  position papers post an advisory board meeting.
                </h2>
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
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
                <h3 className="text-sm md:text-lg py-6 px-4">
                  We also develop plain language summaries for publications
                  (PLSP) or lay language summaries. Patient centric
                  communication is integrated in our publication process and
                  deliverables.
                </h3>
              </div>
            </div>
          </div>
          <div className=" w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full relative">
            <div className="container mx-auto py-4 md:py-8">
              <h2 className="md:text-4xl text-xl font-semibold text-center my-4 md:my-12">
                Turacoz Team Has Worked on All Types of Publication Documents in
                the “Level of Evidence” Pyramid.
              </h2>
              <img src={evidence} alt="evidence" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalPublic;
