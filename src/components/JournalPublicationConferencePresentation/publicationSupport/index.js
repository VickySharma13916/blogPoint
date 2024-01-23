import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PublicationSup from "../../../assets/images/PublicationSupport.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const PublicationSupport = () => {
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
                src={PublicationSup}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left  p-10 md:p-20">
                <h1 className="md:text-7xl w-full text-2xl md:w-2/3 font-semibold">
                  Publication Support
                </h1>
                <h3 className="md:text-lg text-sm my-4 md:w-3/5 w-full">
                  Our aim is to help you publish your research seamlessly. Be it
                  editorial services or refining the first draft written by the
                  client/author or another agency/writer or submission support
                  or addressing journal review comments, we provide support to
                  all these publication-related activities.
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
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-32 md:-bottom-24 z-20 right-0">
                <div className="text-sm md:text-lg py-6 md:px-4">
                  We also proofread and provide english editing certificate for
                  article written by non-native english-speaking authors as
                  required by most journals these days. One of the challenges
                  encountered by authors is writing a good cover letter and
                  prepare the manuscript ready for submission.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-100 absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full bg-gray-100 relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full bg-gray-100 relative">
            <div className="container mx-auto pb-12">
              <h2 className="md:text-xl px-6 md:px-0 leading-5 md:leading-8">
                We help authors not just by writing a good covering letter to
                the journal but also getting the conflicts of interest forms
                from all authors, preparing the title page of the manuscript,
                preparing figures and tables as per journal requirements, and
                formatting the manuscript as per journal guidelines. From
                creating ORCID ID for authors and creating accounts of
                corresponding author in the journal website to following up with
                journal for their decision, and completing the prepublishing
                formalities.
              </h2>
              <h6 className="my-12 mx-6 md:mx-0 md:text-2xl border-l px-8 border-red-800">
                Blogpoint has helped several international clients and their
                authors in these administrative activities as well.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationSupport;
