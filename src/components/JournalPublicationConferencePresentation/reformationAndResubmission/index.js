import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import reformation from "../../../assets/images/Reformatting-and-Resubmission.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const ReformationAndReformatting = () => {
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
                src={reformation}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-7xl w-full text-2xl md:w-2/3 font-semibold">
                  Reformatting and Resubmission
                </h1>
                <h2 className="md:text-lg my-4 md:w-1/2 w-full">
                  The most disheartening moment in the realm of journal
                  publications is facing journal rejections.
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
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-32 md:-bottom-24 z-20 right-0">
                <div className="text-sm md:text-lg py-6 md:px-4">
                  While as authors, this decision may demotivate you
                  extensively. We, at Turacoz, are experts in analyzing the
                  reasons for rejection and can help you to take appropriate
                  actions – identification of right target journal or critically
                  evaluating the publication contents and revising it adequately
                  so that it is accepted without any further rejection.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full  absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full  relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full  relative">
            <div className="container mx-auto pb-12">
              <div className="md:text-2xl px-6 md:px-0 leading-5 md:leading-8">
                The importance of timely publishing is critical, and our USP is
                speedy reformatting and resubmission to any journal.
              </div>
              <h2 className="my-12 md:text-4xl text-xl mx-6 md:mx-0 border-l px-8 border-red-800 leading_rnr">
                If all relevant information is available with us, we can
                complete the reformatting and resubmission is less than 24
                hours.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReformationAndReformatting;
