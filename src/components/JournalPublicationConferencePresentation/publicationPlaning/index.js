import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PublicationPlanning from "../../../assets/images/Publication-Planning.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const Publicationplanning = () => {
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
                src={PublicationPlanning}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-3xl md:text-7xl w-full md:w-2/3 font-semibold">
                  Publication Planning
                </h1>
                <h3 className="md:text-lg my-4 md:w-3/5 w-full">
                  The cornerstone of any publication is meticulous planning to
                  ensure that the key messages of the study reach the right
                  target audience at the right time. Publication planning
                  involves what, where, and when to publish your research.
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
          <div className=" w-full bg-slate-100 absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-slate-100 w-full relative">
            <div className="container mx-auto py-12">
              <div className="flex flex-col md:flex-row justify-between pt-8">
                <h2 className="md:text-2xl px-6 md:px-0 text-xl w-full md:w-1/3">
                  Key Components of a Good Publication Plan Are:
                </h2>
                <ul className="list-outside flex-col mt-8 md:mt-0 mb-6 md:mb-12 w-full md:w-3/5 gap-2 flex justify-between">
                  <li className="list-none md:text-lg w-4/5 relative ml-12 md:pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    Study the competitive landscape and gap analysis.
                  </li>
                  <li className="list-none md:text-lg w-4/5 relative ml-12 md:pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    Assess clinical development plan and finalize key scientific
                    message.
                  </li>
                  <li className="list-none md:text-lg w-4/5 relative ml-12 md:pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    Identify the target journal and congress for
                    publication/presentation.
                  </li>
                  <li className="list-none md:text-lg w-4/5 relative ml-12 md:pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    Develop and implement the publication plan as per timelines.
                  </li>
                  <li className="list-none md:text-lg w-4/5 relative ml-12 md:pl-4">
                    <span className="width-spaning absolute top-4 md:top-1/2 -left-8"></span>
                    Align and coordinate with various stakeholders.
                  </li>
                </ul>
              </div>
              <h2 className="md:text-4xl px-6 md:px-0 text-lg font-semibold my-12">
                Turacoz can help you in any of these activities toward
                developing a publication plan.
              </h2>
              <h3 className="md:text-2xl mx-6 md:mx-0 border-l border-red-800 md:px-8 px-4">
                At Turacoz, we also help to develop and maintain your
                publication plan via PubSTRAT or any other client-specific
                publication planning tools.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publicationplanning;
