import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FacilitiesProvided from "../../assets/images/Facilities-Provided.png";
import regulatory from "../../assets/images/regulatory-writing-banner.png";
import regulatoryimg from "../../assets/images/regulatory-writing-side-image.jpg";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const RegulatoryWriting = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background1"></div>
              <img
                src={regulatory}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-2/3 w-full text-2xl font-semibold">
                  Regulatory Writing
                </h1>
                <div className="md:text-lg my-4 xl:w-2/3 w-full">
                  Wondering about the drug you are going to have, whether it is
                  safe? How many stages it has gone through to finally reach
                  you? Answers to all these questions come to you through a
                  regulatory writer.
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
            <div className="container px-6 xl:px-0 mx-auto py-12">
              <h2 className="md:my-12 my-8 text-2xl md:text-4xl font-semibold">
                What is Regulatory Writing?
              </h2>
              <div className="my-8 md:my-12 md:text-xl leading-6 md:leading-10">
                Regulatory writing is a specialized field that involves
                development of preclinical and clinical research procedures
                compiled from clinical trials, safety reports, and other
                documents that will help in keeping submission ready documents
                for the target audience. It is a branch of medical writing
                wherein the medical writer or the regulatory clinical medical
                writer focuses on the documents that need submission to the
                regulatory authorities at various stages of a trial or study.
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="relative mx-6 md:mx-0 xl:absolute flex xl:flex-row flex-col justify-end right-0 top-0">
              <img
                src={regulatoryimg}
                alt="regulatory-image"
                className="xl:w-4/5 h-96 md:px-6 md:h-1/2 w-full"
              />
            </div>
            <div className="container px-6 xl:px-0 my-0 md:my-12 py-8 mx-auto relative">
              <div className="md:text-lg xl:w-2/3">
                To launch a new drug on the market, a lot of pre-work is
                required accompanied by a few obstacles that come on the way
                before it reaches the target audience. During the journey of
                drug development, many preclinical and clinical works are
                required to just ensure the safety and efficacy of the drug
                before it is launched and utilized by the consumer. Simply doing
                this preclinical and clinical work in drug development will not
                ensure the authority to launch the medicine. Like every research
                done is not completed without communicating its findings to the
                scientific fraternity, similarly the drug development cycle is
                incomplete till the developer, manufacturer and researcher
                communicate about their results to the authorities and register
                their drug to the governing bodies around the world.
              </div>
              <div className="md:text-lg xl:w-2/3 pt-8">
                The drug development process needs effective planning and
                strategy before it is ready for launch in the market, including
                expectations of the target audience (Patient or the physician).
                It must go through a thorough evaluation process and then
                finally to the consumer. All the write-ups should be very
                precise, must go through a specific process, and in the provided
                formats. The role of regulatory writer broadens here who must
                focus on the documents that are required to be submitted to the
                regulatory authorities at various stages of a clinical trial.
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="container mt-8 px-6 md:mt-16 mx-auto">
              <h2 className="pt-12 text-2xl md:text-4xl font-semibold">
                Research and Regulatory Writing
              </h2>
              <h3 className="my-12 text-lg md:text-2xl leading-6 md:leading-10">
                Regulatory writing is an integral part of clinical research. The
                essential research work done can be utilized in any clinical or
                drug development process to improve global health. It can
                enhance understanding of health and diseases, and their
                management and can improve medical procedures that can benefit
                the entire society.
              </h3>
              <div className="my-12 md:text-lg">
                Students along with their guide, clinicians, and academic
                scientists must realize the importance of publishing their
                research which is not only an ethical and a moral obligation but
                also a due culmination of the research process. These are the
                backbone of any medical college, hospital, or university. These
                publications are helpful for the development of new drugs, which
                can be further communicated to the global regulatory bodies by
                filing these in a regulatory department of any healthcare
                industry. Some clinicians and academic scientists cannot be
                available to write or submit their research work. The other
                reasons for not publishing may be inadequate data analysis
                support, lack of awareness of current reporting guidelines and
                publication practices, or even inadequate technical writing
                expertise. All these factors result in a poor quality of writing
                and can have possibilities of high rejection from established
                peer-reviewed journals or regulatory authorities. Turacoz
                provides support to develop these regulatory writing documents
                and helps in submission of the applications and ready documents
                for regulatory approval.
              </div>
              <h2 className="my-12 text-2xl md:text-4xl font-semibold">
                Facilities Provided at Turacoz
              </h2>
              <div className="flex md:flex-row flex-col pb-12 justify-between gap-8">
                <img
                  src={FacilitiesProvided}
                  alt="Facilities-Provided"
                  className="md:w-1/2 w-full"
                />
                <div className="md:text-lg w-full leading-8 md:w-1/2">
                  Turacoz provides support in the development of various
                  regulatory documents such as dossier preparation, product
                  registration for local and export purposes, investigator’s
                  brochure, summary of product characteristics (SmPCs),
                  protocols, case report forms, informed consent forms, clinical
                  summaries, safety narratives, etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegulatoryWriting;
