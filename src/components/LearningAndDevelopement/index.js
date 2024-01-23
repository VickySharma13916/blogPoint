import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import learningDevelopment from "../../assets/images/learning&Development.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const LearningAndDevelopement = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const items = [
    "Keeping a profound understanding of concepts and quality learning at the core of our training activities, we focus on the overall career development of all our trainees.",
    "Our trainings are interactive and led by domain experts. They are conducted in the form of courses, workshops, and seminars, depending on requirements and the convenience of our audience.",
    "To ensure wide participation, we also hold virtual sessions (online mode) or face-to-face sessions in large groups. We impart knowledge on data collection methodology and basics of biostatistics and publication writing.",
    "We conduct customized training as well as corporate training to help organizations improve their processes and overall results with the help of a workforce that is now more skilled.",
  ];
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={learningDevelopment}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-8 md:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-1/2 w-full text-2xl font-semibold">
                  Learning and Development
                </h1>
                <div className="md:w-3/5 md:text-lg my-4 md:my-8">
                  In an age when the world is digitally connected, and
                  information can be shared with one another in just a few
                  seconds, one cannot just rely on their traditional education
                  to stay up to date.
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
            </div>
            <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
              <div className="md:text-lg text-sm py-6 md:px-4">
                To grow in their fields and be on top of the game, individuals
                need to keep challenging themselves every day and gathering
                knowledge to ensure bright prospects for themselves and the ones
                around them.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-gray-200 w-full relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className="bg-gray-200 w-full relative">
            <div className="container mx-auto">
              <div className="flex md:flex-row flex-col px-6 xl:px-0 justify-between pb-16 gap-12">
                <h2 className="md:text-2xl md:w-1/2 md:leading-10">
                  For healthcare professionals, it is essential to improve their
                  skills continuously and remain updated with recent
                  advancements. In addition, students from a science background
                  need to be groomed to meet industry standards.
                </h2>
                <h3 className="leading-8 md:w-1/2">
                  At Turacoz, we provide both -standardized and customized-
                  training to these students as well as doctors and medical
                  affairs professionals who are keen to develop their current
                  knowledge in clinical research. We also cater to the needs of
                  freshers interested in venturing into clinical research
                  domains or medical communications. We help them bridge the
                  current gaps through our trainings that are tailored as per
                  our target audience which includes field force and
                  pharmaceutical professionals on specific therapeutic areas,
                  indications, products, etc.
                </h3>
              </div>
              <div
                className="flex flex-col mx-6 xl:mx-0 md:flex-row justify-center md:justify-between 
              items-center md:items-start pb-16 md:gap-12"
              >
                {items &&
                  items?.map((item, index) => (
                    <ul
                      key={index}
                      className="list-outside mb-4 md:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    >
                      <li className="list-none relative leading-8 ml-8 md:ml-0">
                        <span className="width-spaning absolute top-3 -left-8"></span>
                        <h4>{item}</h4>
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningAndDevelopement;
