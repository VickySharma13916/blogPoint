import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PublicationDevelopment from "../../../assets/images/Publication-development.jpg";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const PublicationDevelopement = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const items = [
    { value: "200", label: "Original Publications" },
    { value: "20", label: "Therapeutic Areas" },
    { value: "100", label: "Stand-Alone Resubmissions" },
    { value: "300", label: "Editorial Support" },
    { value: "30", label: "Trained Publication Writers" },
    { value: "50", label: "Satisfied Clients" },
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
                src={PublicationDevelopment}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-7xl w-full text-2xl md:w-2/3 font-semibold">
                  Publication Development
                </h1>
                <h3 className="md:text-lg text-sm my-4 md:w-3/5 w-full">
                  Blogpoint writing team can help you in end-to-end publication
                  writing, from target journal selection and presubmission
                  enquiries to author debarment checks, author invitations,
                  project kick-off calls, manuscript writing, addressing author
                  comments for manuscript drafts, revising the manuscripts as
                  per comments from different stakeholders and journal
                  submission.
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
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
                <div className="text-sm md:text-lg py-6 px-4">
                  We also have inhouse submission support specialist who assists
                  in preparing submission package and conducts mock submission
                  to understand journal requirements in detail.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-gray-100 absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full bg-gray-100 relative top-1/2 bottom-0 z-0 right-0 h-40"></div>
          <div className=" w-full bg-gray-100 relative">
            <div className="container mx-auto py-8">
              <h2 className="md:text-4xl text-xl px-6 md:px-0 font-semibold my-12">
                Our Capabilities
              </h2>
              <div className="flex flex-wrap items-center mx-6 md:mx-0 justify-start py-10">
                {items &&
                  items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-2 flex-none items-center md:items-start w-full h-40 sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/6"
                    >
                      <span className="text-5xl font-semibold text-red-800">
                        {item.value}
                      </span>
                      <h4 className="text-lg text-center md:text-left my-2 md:pr-8">
                        {item.label}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationDevelopement;
