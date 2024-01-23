import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import clm1 from "../../assets/images/clm1.png";
import clm2 from "../../assets/images/clm2.png";
import clm3 from "../../assets/images/clm3.png";
import clm4 from "../../assets/images/clm4.png";
import clm5 from "../../assets/images/clm5.png";
import clm6 from "../../assets/images/clm6.png";
import clm7 from "../../assets/images/clm7.png";
import clm8 from "../../assets/images/clm8.png";
import clm9 from "../../assets/images/clm9.png";
import realworld from "../../assets/images/contentlab.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const ContentLabManagement = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const strategyImage = [
    {
      image: clm1,
      text: "Reduction in Review Cycle Time",
      percentage: "57%",
    },
    {
      image: clm2,
      text: "Reduction in Time Spent on Compliance Procedures",
      percentage: "25%",
    },
    {
      image: clm3,
      text: "Reduction in Time Spent in MLR/ PRC Meeting",
      percentage: "55%",
    },
    {
      image: clm4,
      percentage: "88%",
      text: "Reduction in Time Spent on Agencies Initiating and Uploading Jobs",
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
              <div className="flex flex-col text-white absolute top-1/4 xl:top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-1/2 w-full text-2xl font-semibold">
                  Content Lab Management
                </h1>
                <div className="md:text-lg my-4 md:w-2/3 w-full">
                  The life sciences industry is expanding rapidly which makes it
                  essential to develop and certify certain commercial materials
                  quickly.
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
              <div className="md:w-3/5 px-4 md:px-10 py-4 md:py-16 mx-6 md:mx-auto bg-red-800 text-white text-lg absolute -bottom-28 md:-bottom-24 z-20 right-0">
                <div className="md:text-lg text-sm py-6 md:px-4">
                  As the demand for commercial content rises, so do the
                  expectations for marketing team oversight, medical, legal, and
                  regulatory approvals, production costs, and faster
                  localization efforts. This demands a better strategy.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className=" w-full relative top-1/2 bottom-0 z-0 right-0 h-20"></div>
          <div className=" w-full relative">
            <div className="container mx-auto py-12">
              <div className="my-12 text-lg mx-6 xl:mx-0 border-l px-8 border-red-800">
                The continuously changing digital environment is bringing a
                notable change in commercial content management. Conventional
                methods that include various siloed systems or paper-based
                processes prolong the review and approval processes, which
                delays the release of the content for commercial usage. In this
                volatile environment, assets must be created and approved more
                quickly across channels and geographies.
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="container mx-auto">
              <h2 className="md:text-5xl text-3xl mx-6 xl:mx-0 font-semibold py-6 md:py-12">
                Veeva Vault Promomats
              </h2>
              <div className="md:text-lg mx-6 xl:mx-0">
                Veeva vault is a cloud-based content management platform for the
                life sciences sector.
              </div>
              <div className="py-6 md:py-12 mx-6 xl:mx-0 md:text-lg">
                Vault promomats automates the entire end-to-end process and
                provides better compliance and faster availability, from concept
                and strategy to the association of claims and reference
                documents, to medical, legal and regulatory (MLR) review, to
                piece distribution, and finally expiry and withdrawal.
              </div>
              <div className="py-6 md:py-12 mx-6 xl:mx-0 md:text-lg">
                A majority of vault promomats users have witnessed a six-month
                return on their investment and a considerable boost in their
                other content management KPIs:
              </div>
              <div className="flex flex-wrap my-8 justify-center md:justify-between items-start gap-4 mx-6 md:mx-0">
                {strategyImage &&
                  strategyImage?.map((rowData, index) => {
                    return (
                      <div
                        className="flex flex-col p-2 flex-none gap-4 w-full sm:w-1/2 md:w-1/4 justify-center md:items-start items-center lg:w-1/5 xl:w-1/5"
                        key={index}
                      >
                        <img
                          src={rowData.image}
                          alt="strategy"
                          className="w-10 h-10"
                        />
                        <div className="flex flex-col items-center md:items-start">
                          <div className="text-4xl text-red-800 font-semibold">
                            {rowData.percentage}
                          </div>
                          <div className="md:text-lg md:mr-8">
                            {rowData.text}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <h2 className="md:text-5xl text-3xl mx-6 xl:mx-0 font-semibold py-6 md:py-12">
                Overcoming the Challenges
              </h2>
              <div className="py-6 md:py-12 mx-6 xl:mx-0 md:text-lg">
                Content approval is a difficult and time-consuming task. To
                comply with regulatory standards and streamline the submission
                process, life science businesses are swiftly transitioning to
                electronic submission of commercial content. The need to
                successfully manage this entire activity entails a faster pace
                for the overall scientific endeavor.
              </div>
              <h2 className="md:text-5xl text-3xl mx-6 xl:mx-0 font-semibold py-6 md:py-12">
                How We Help?
              </h2>
              <div className="flex md:flex-row mx-6 xl:mx-0 flex-col gap-4">
                <div className="flex flex-col gap-12 w-full items-center bg-white p-16">
                  <img src={clm5} alt="client" className="w-20" />
                  <div className="text-center">
                    We offer our clients the expertise and experience in content
                    lab management in addition to assisting in the creation of
                    such content. We provide our clients with top-notch
                    subject-matter expertise for handling their content on
                    promomats.
                  </div>
                </div>
                <div className="flex flex-col gap-12 w-full bg-white items-center p-16">
                  <img src={clm6} alt="client" className="w-20" />
                  <div className="text-center">
                    Turacoz has been working on veeva vault promomats, assisting
                    our clients in managing commercial materials with ease, and
                    making the approval process smooth and quick across the
                    whole digital supply chain.
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row mx-6 xl:mx-0 flex-col gap-4 mt-4 pb-12">
                <div className="flex flex-col gap-8 w-full items-center bg-white p-12">
                  <img src={clm7} alt="client" className="w-20" />
                  <div className="text-center">
                    At turacoz, we have a solid structure in place that caters
                    to our client’s needs.
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full bg-white items-center p-12">
                  <img src={clm8} alt="client" className="w-20" />
                  <div className="text-center">
                    We have a remarkably effective team that focuses solely on
                    content lab management, enabling our clients to save
                    significant time and money.
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full bg-white items-center p-12">
                  <img src={clm9} alt="client" className="w-20" />
                  <div className="text-center">
                    In addition to assisting with uploads and annotations, we
                    also assist with content reviews and approval.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentLabManagement;
