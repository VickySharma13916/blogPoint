import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskGroup from "../../assets/images/MaskGroup.png";
import QC from "../../assets/images/QC.png";
import qc1 from "../../assets/images/qc1.png";
import qc2 from "../../assets/images/qc2.png";
import qc3 from "../../assets/images/qc3.png";
import qc4 from "../../assets/images/qc4.png";
import qc5 from "../../assets/images/qc5.png";
import qc6 from "../../assets/images/qc6.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const QCReviewEditing = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);

  const strategyImage = [
    {
      image: qc1,
      text: "To enhance the quality and efficiency of the final deliverables.",
    },
    {
      image: qc2,
      text: "Reduce the risk of too many errors.",
    },
    {
      image: qc3,
      text: "Gain customer loyalty.",
    },
    {
      image: qc4,
      text: "Maintain consistency by following the same information, methods, and skills in a consistent manner. Ensure the document’s content, style, and format are of high quality..",
    },
    {
      image: qc5,
      text: "Revise the written material to improve readability and suitability.",
    },
    {
      image: qc6,
      text: "Ensure that the text is free of grammatical and factual errors.",
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
                src={QC}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/4 xl:top-0 bottom-0 right-0 left-0 z-10 text-left p-6 md:p-10 xl:p-20">
                <h1 className="xl:text-7xl md:text-4xl xl:w-2/3 w-full text-2xl font-semibold">
                  Quality Control And Copy-Editing
                </h1>
                <div className="md:text-lg my-4 xl:w-2/3 w-full">
                  In the field of medical communications, quality control (QC)
                  is critical for making sure that every version is of the
                  highest quality.
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
            <div className="container mx-auto pt-12">
              <h2 className="my-12 mx-6 xl:mx-0 text-5xl font-semibold">
                Objective
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-between gap-8 mx-6 xl:mx-0">
                {strategyImage &&
                  strategyImage?.map((rowData, index) => {
                    return (
                      <div
                        className="flex flex-col  justify-center md:justify-start items-center  gap-4 md:items-start p-2 flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 border-b border-gray-400"
                        key={index}
                      >
                        <img
                          src={rowData.image}
                          alt="strategy"
                          className="w-16 h-16"
                        />
                        <h3>{rowData.text}</h3>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100">
            <div className="container mt-16 mx-auto">
              <h2 className="pt-12 text-xl md:text-5xl mx-6 xl:mx-0 font-semibold">
                Tools of the QC Check
              </h2>
              <div className="my-12 mx-6 xl:mx-0 md:text-lg">
                To ensure that the quality of the document after the review is
                consistent, a QC checklist is available, which is a valuable
                tool. In addition, the document template, style guide (covering
                text styles, punctuations, abbreviations, capitalization,
                number, and date formats, etc.), source documents (data tables,
                protocol, protocol summary, statistical analysis plan, clinical
                study reports, depending on the type of document to be
                reviewed), authoring instructions, a standard operating
                procedure for QC, and much more is in place for the checks.
              </div>
              <div className="flex md:flex-row flex-col px-6 xl:px-0 pt-12">
                <ul className="list-outside flex-col mb-12 md:w-3/5 w-full gap-2 flex justify-between">
                  <li className="list-none md:text-lg md:w-4/5 relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Formatting is an important part of QC that includes styles,
                    page layout, pagination, headers, and footers.
                  </li>
                  <li className="list-none md:text-lg md:w-4/5 relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    General: grammar check, spellings, abbreviations, table of
                    contents.
                  </li>
                </ul>
                <ul className="list-outside flex-col mb-12 md:w-3/5 w-full gap-2 flex justify-between">
                  <li className="list-none md:text-lg md:w-4/5 relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Consistency includes synopsis, summary, and conclusions
                    versus the main body of the document, tabular data in the
                    text.
                  </li>
                  <li className="list-none md:text-lg md:w-4/5 relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    References: correct citations, format in-text citations, and
                    reference list.
                  </li>
                </ul>
                <ul className="list-outside flex-col gap-2 mb-12 md:w-3/5 w-full flex justify-between">
                  <li className="list-none text-lg md:w-4/5 relative ml-10">
                    <span className="width-span absolute top-3 -left-8"></span>
                    Tables are properly formatted, and the layout is checked.
                    Consistency in style of tables throughout the document,
                    clarity of presentation, caption style, cross-references,
                    sources are correctly cited, and content is matched to the
                    source.
                  </li>
                </ul>
              </div>
              <h2 className="md:my-12 my-4 md:text-5xl text-2xl font-semibold mx-6 xl:mx-0">
                Copy-Editing
              </h2>
              <div className="md:text-lg my-4 mx-6 xl:mx-0 md:my-12">
                The main aim of copy-editing is to remove obstacles between the
                reader and what the author wants to convey and solve the
                problems before a manuscript/book/any document goes to the
                typesetter. Computer software are, nowadays, becoming useful
                tools for authors; however, they cannot read for sense,
                repetition, or uncertainty. The software cannot pick factual
                errors or incorrect information. Thus, copy-editing is the
                process of revising the already written material to improve
                readability and suitability and ensuring that the text is free
                of grammatical and factual errors.
              </div>
              <div className="flex flex-col px-6 xl:px-0 md:flex-row pb-12 justify-between gap-8">
                <div className="md:text-lg leading-8 md:w-1/2">
                  It comprises mechanical editing that includes sentence-level
                  stylistic and line editing and substantive editing that
                  includes rewriting the sentences for clarity, complex tables
                  and figures with wrong data, unstructured passages,
                  inaccurately constructed sentences, and subject-verb
                  disagreements. The copyeditor is the reader’s advocate and the
                  author’s ambassador (Butcher’s Copy-editing by Judith Butcher,
                  Caroline Drake, and Maureen Leach).
                </div>
                <img
                  src={MaskGroup}
                  alt="Facilities-Provided"
                  className="md:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QCReviewEditing;
