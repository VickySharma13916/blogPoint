import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import journalReview from "../../../assets/images/Addressing-Journal-Review-Comments.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const AddressJournalReviewComment = () => {
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
                src={journalReview}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-7xl w-full text-2xl md:w-2/3 font-semibold">
                  Addressing Journal Review Comments
                </h1>
                <h6 className="md:text-lg my-4 md:w-1/2 w-full">
                  Another painstaking and time-consuming step in publication
                  development is addressing the journal reviewers’ comments and
                  submitting the responses within the stipulated time frame.
                </h6>
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
          <div className="w-full relative">
            <div className="container mx-auto py-12">
              <h2 className="my-12 text-lg md:text-4xl border-l mx-6 md:mx-0 px-6 md:px-8 border-red-800 leading_rnr">
                We can coordinate with authors and other stakeholders on the
                publication project to help you prepare the response document
                along with marked and clear versions of the manuscript and
                submit to the journal.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressJournalReviewComment;
