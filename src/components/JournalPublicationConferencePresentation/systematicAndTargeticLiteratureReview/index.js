import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import literature from "../../../assets/images/Systematic-Literature.jpg";
import rw1 from "../../../assets/images/rw1.png";
import rw2 from "../../../assets/images/rw2.png";
import rw3 from "../../../assets/images/rw3.png";
import rw4 from "../../../assets/images/rw4.png";
import rw5 from "../../../assets/images/rw5.png";
import rw6 from "../../../assets/images/rw6.png";
import rw7 from "../../../assets/images/rw7.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const SystematiAndTargetedLiteratureReview = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const ActivityImage = [
    {
      image: rw1,
      text: "SLR Protocol Development",
    },
    {
      image: rw2,
      text: "Literature Search from Search Engines",
    },
    {
      image: rw3,
      text: "Search Strategy Development",
    },
    {
      image: rw4,
      text: "Gap Analysis",
    },
    {
      image: rw5,
      text: "SLR Report",
    },
    {
      image: rw6,
      text: "SLR Manuscript",
    },
    {
      image: rw7,
      text: "Meta-Analyses",
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
                src={literature}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-6xl md:text-4xl xl:w-4/5 w-full text-2xl font-semibold">
                  Systematic Literature Review and Targeted Literature Review
                </h1>
                <h3 className="md:text-lg my-4 xl:w-2/3 w-full">
                  Undertaking a review of the related literature assessment is
                  important in any therapeutic area. It helps to map and assess
                  the existing knowledge and gaps in specific issues which will
                  further develop the knowledge base.
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
              <div className="xl:w-3/5 md:w-4/5 px-4 md:px-10 py-4 md:py-8 xl:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-32 md:-bottom-24 z-20 right-0">
                <h6 className="md:text-lg text-sm md:px-4">
                  While targeted literature reviews are mostly narrative in
                  nature and tend to be descriptive where researchers can select
                  articles based on their point of view, a systematic review is
                  a specific type of review that uses rigorous and transparent
                  methods to summarize all the available evidence with little to
                  no bias.
                </h6>
              </div>
            </div>
          </div>
          <div className=" w-full  absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full  relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full  relative">
            <div className="container mx-auto py-8">
              <div className="flex md:flex-row flex-col justify-between">
                <h2 className="md:text-2xl text-xl w-full md:w-1/2 px-6 md:px-0">
                  The Main Characteristics of a Systematic Literature Review and
                  Its Associated Procedure, Meta-Analyses, Are:
                </h2>
                <ul className="list-outside flex-col mt-12 md:mt-0 mb-12 md:w-1/2 w-full px-6 md:px-0 flex gap-4 justify-between">
                  <li className="list-none md:text-lg  md:w-4/5 relative ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Clearly set the research question that the study would
                    answer.
                  </li>
                  <li className="list-none relative md:text-lg  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Have clearly stated objectives with an explicit and
                    reproducible method.
                  </li>
                  <li className="list-none relative  md:text-lg  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Develop a search string that includes all related studies
                    that would meet the eligibility criteria.
                  </li>
                  <li className="list-none relative  md:text-lg  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Assess the quality/validity of the selected studies (e.g.,
                    assessment of risk of bias and confidence in cumulative
                    estimates).
                  </li>
                  <li className="list-none relative  md:text-lg  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Systematically present and synthesize the extracted data
                    from the selected studies.
                  </li>
                  <li className="list-none relative md:text-lg  ml-12 pl-4">
                    <span className="width-spaning absolute top-1/4 -left-8"></span>
                    Publish the study findings for scientific purpose and
                    decision making.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="container mx-auto">
              <div className="md:text-xl pt-12 mx-6 md:mx-0">
                At Turacoz, we can help in developing both targeted literature
                reviews and systematic literature reviews.
              </div>
              <h2 className="md:text-2xl text-lg mx-6 md:mx-0 pt-12">
                We also undertake the following activities:
              </h2>
              <div className="flex flex-wrap my-8 justify-start items-start mx-6 md:mx-0">
                {ActivityImage &&
                  ActivityImage?.map((rowData, index) => {
                    return (
                      <div
                        className="flex flex-col p-2 flex-none w-full sm:w-1/2 md:w-1/4 justify-center items-center lg:w-1/4 xl:w-1/6 h-40"
                        key={index}
                      >
                        <img
                          src={rowData.image}
                          alt="strategy"
                          className="w-16 h-16"
                        />
                        <div className="flex">
                          <h3 className="w-40 mx-auto text-center">
                            {rowData.text}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <Link to="/contact-us">
                <div className="flex pb-12 px-6 md:px-0 items-center connect-svg">
                  <div className="text-lg font-semibold">Let's Connect</div>
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
        </div>
      </div>
    </>
  );
};

export default SystematiAndTargetedLiteratureReview;
