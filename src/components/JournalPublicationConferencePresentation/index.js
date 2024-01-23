import React, { useEffect } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import asrd from "../../assets/images/ajrd.png";
import conference from "../../assets/images/conference.png";
import content from "../../assets/images/content.png";
import grammer from "../../assets/images/grammer.png";
import journal from "../../assets/images/journal.png";
import scientific from "../../assets/images/journalPublication.png";
import jp from "../../assets/images/jp.png";
import pd from "../../assets/images/pd.png";
import plagarism from "../../assets/images/plagarism.png";
import ps from "../../assets/images/ps.png";
import reference from "../../assets/images/reference.png";
import review from "../../assets/images/review.png";
import rr from "../../assets/images/rr.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const JournalPublicationConferencePresentation = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);  
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const imageCard = [
    {
      image: jp,
      title: "Journal Publications",
      description:
        "At Turacoz, we help authors and clients to develop different",
      link: "/solutions/journal-publications-conference-presentation/journal-publications",
    },
    {
      image: jp,
      title: "Publication Planning",
      description: "The cornerstone of any publication is meticulous planning",
      link: "/solutions/journal-publications-conference-presentation/publication-planning",
    },
    {
      image: pd,
      title: "Publication Development",
      description:
        "Turacoz writing team can help you in end-to-end publication writing",
      link: "/solutions/journal-publications-conference-presentation/publication-development",
    },
    {
      image: ps,
      title: "Publication Support",
      description: "Our aim is to help you publish your research seamlessly",
      link: "/solutions/journal-publications-conference-presentation/publication-support",
    },
    {
      image: rr,
      title: "Reformatting and Resubmission",
      description:
        "The most disheartening moment in the realm of journal publications",
      link: "/solutions/journal-publications-conference-presentation/reformatting-and-resubmission",
    },
    {
      image: asrd,
      title: "Addressing Journal journal Comments",
      description: "Another pain-staking and time-onsuming step in publication",
      link: "/solutions/journal-publications-conference-presentation/addressing-journal-review-comments",
    },
    {
      image: conference,
      title: "Conference Activities",
      description: "Publications can also be targeted for presentations in",
      text1: "Pre-Conference Activities",
      text2: "Conference Coverage",
      text3: "Post-Congress Activities",
      link: "/solutions/journal-publications-conference-presentation/conference-activities",
    },
    {
      image: jp,
      title: "Systematic Literature Review and Targeted Literature Review",
      description: "Undertaking a review of the related literature assessment",
      link: "/solutions/journal-publications-conference-presentation/systematic-literature-review-and-targeted-literature-review",
    },
  ];
  const strategyImage = [
    {
      image: reference,
      title: "Referencing",
      text: "EndNote",
    },
    {
      image: plagarism,
      title: "Plagiarism-Check",
      text: "IThenticate",
    },
    {
      image: grammer,
      title: "Grammar and English Check",
      text: "Grammarly Advanced Version",
    },
    {
      image: review,
      title: "Publication Review",
      text: "Data Vision and PubSTRAT (Client-Enabled)",
    },
    {
      image: journal,
      title: "Journal Selection",
      text: "JANE",
    },
    {
      image: content,
      title: "Content Management",
      text: "Veeva Vault",
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
                src={scientific}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-2xl md:text-7xl w-full md:w-2/3 font-semibold">
                  Journal Publications & Conference Presentation
                </h1>
                <div className="md:text-lg my-4 md:w-3/5 w-full">
                  A publication in a peer-reviewed journal or conference
                  presentation in an international conference/medical meeting
                  validates the research/clinical trial and communicates science
                  with a larger scientific community.
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
          </div>
          <div className=" w-full relative">
            <div className="container mx-auto py-8">
              <div className="md:text-lg px-6 md:px-0 pt-4 md:pt-12 leading-6 md:leading-8">
                All scientific and medical publications developed by Turacoz
                writing team follow Good Publication Practices 3 (GPP3)
                guidelines as well as guidelines provided by International
                Committee of Medical Journal Editors (ICMJE), and Committee on
                Publication Ethics (COPE).
              </div>
              <div className="md:text-2xl ml-6 md:ml-0 border-l mt-10 border-red-800 px-8">
                Publications are developed in accordance to writing provided by
                the EQUATOR network guidelines (CONSORT, CARE, STROBE, PRISMA,
                etc.) for different study designs.
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="container mx-auto">
              <h2 className="md:text-4xl text-xl my-8 px-6 md:px-0 md:my-12">
                Publication-Specific Tools and Technologies Used at Turacoz
              </h2>
              <div className="flex flex-wrap my-12 mx-6 md:mx-0">
                {strategyImage &&
                  strategyImage?.map((rowData, index) => {
                    return (
                      <div
                        className="flex flex-col items-center my-8 pb-4 px-8 w-full sm:w-1/2 md:w-1/3"
                        key={index}
                      >
                        <div className="w-28 h-28 border border-black rounded-full p-6">
                          <img src={rowData.image} alt={rowData.title} />
                        </div>
                        <div className="h-4 text-center border border-black"></div>
                        <h3 className="text-lg w-4/5 bg-red-800 h-20 flex items-center px-4 justify-center rounded-2xl text-center text-white">
                          {rowData.title}
                        </h3>
                        <div className="h-4 text-center border border-black"></div>
                        <h4 className="text-lg text-center w-4/5">
                          {rowData.text}
                        </h4>
                      </div>
                    );
                  })}
              </div>
              <Link to="/contact-us">
                <div className="flex my-6 px-6 md:px-0 items-center connect-svg">
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
          <div className="bg-gray-100 w-full">
            <div className="container mx-auto py-12">
              <div className="flex flex-wrap gap-8 my-12 items-center mx-6 md:mx-0 justify-start">
                {imageCard &&
                  imageCard.map((rowData, index) => (
                    <div
                      key={index}
                      className="p-8 bg-white medical-card w-1/4"
                    >
                      <img
                        src={rowData.image}
                        alt={rowData.title}
                        className="w-16 h-16"
                      />
                      <Link to={rowData?.link}>
                        <h3 className="font-semibold cursor-pointer hover:text-red-800 text-lg py-4">
                          {rowData.title}
                        </h3>
                      </Link>
                      <div className="text-sm line-clamp-2">
                        {rowData.description}
                      </div>
                      <Link to={rowData?.link}>
                        <div className="text-red-800 cursor-pointer font-semibold my-4">
                          Read More
                        </div>
                      </Link>
                      {rowData?.text1 && (
                        <div className="text-red-800 hover:text-red-700 text-sm font-semibold flex my-4">
                          <RiArrowRightSFill color="#811619" size={22} />
                          {rowData?.text1}
                        </div>
                      )}
                      {rowData?.text2 && (
                        <div className="text-red-800 hover:text-red-700 text-sm font-semibold flex justify-start items-start my-4">
                          <RiArrowRightSFill color="#811619" size={22} />
                          {rowData?.text2}
                        </div>
                      )}
                      {rowData?.text3 && (
                        <div className="text-red-800 text-sm font-semibold flex justify-start items-start my-4">
                          <RiArrowRightSFill color="#811619" size={22} />
                          {rowData?.text3}
                        </div>
                      )}
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

export default JournalPublicationConferencePresentation;
