import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import patientEmp from "../../../assets/images/Patient-Education.png";
import mcsImage from "../../../assets/images/mcs-image.png";
import patient from "../../../assets/images/patient.png";
import usePageData from "../../../hooks/useMetaData";
import useWindowToTop from "../../../hooks/useWindowToTop";
import SeoHeaderTitle from "../../SeotitleHeader";

const PatentCentricCommunication = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[3]);

  const items = [
    { value: "20", label: "Patient Information Booklets" },
    { value: "50", label: "FAQs" },
    { value: "50", label: "Slide Decks" },
    { value: "100", label: "Health Blogs" },
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
                src={mcsImage}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-6xl text-2xl w-full md:w-1/2 font-semibold">
                  Patient-Centric Communication
                </h1>
                <div className="md:text-lg my-4 md:w-3/5 w-full">
                  Patient-centred care establishes a partnership and bonding
                  among patients, their families and caregivers, practitioners,
                  as well as patient advocacy groups and ensures that all
                  healthcare decisions are aligned with patients’ needs and
                  preferences.
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
                The core concept of patient-centric communication is to
                understand the patient’s perspective considering his/her
                psychosocial and cultural manifestations. These communications
                make the patients’ voices to be heard and influence the medicine
                practices and guidelines.
              </div>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="py-8"></div>
            <div className="mx-6 md:mx-0 md:text-lg py-8">
              A well-written patient communication can improve the patient
              understanding for a disease area or treatment and helps him/her to
              better recall the information, enhance patient satisfaction, have
              a better treatment adherence, and ultimately improved patient
              outcomes.
            </div>
            <h2 className="md:text-3xl text-xl text-center md:text-left font-semibold">
              Our Experience
            </h2>
            <div className="flex flex-wrap items-start mx-6 md:mx-0 justify-between py-10">
              {items &&
                items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center md:items-start p-2 flex-none w-full sm:w-1/4 md:w-1/6"
                  >
                    <span className="text-6xl font-semibold text-red-800">
                      {item.value}
                    </span>
                    <h4 className="text-lg my-2 pr-0 md:pr-8">{item.label}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-gray-100 w-full">
            <div className="container mx-auto">
              <div className="flex flex-col pt-12">
                <h2 className="text-lg font-semibold md:font-normal mx-6 md:mx-0 md:text-4xl">
                  Plain Language Summaries of Publications
                </h2>
                <div className="md:text-lg mx-6 md:mx-0 my-12">
                  Plain language summary (PLS) is a more comprehensive writing
                  which is published as supplementary material and is peer
                  reviewed in the same way as the original article. It can be as
                  simple as a lay abstract to plain language summaries of
                  publications (PLSPs).
                </div>
              </div>
              <img
                src={patient}
                alt="case-study"
                className="md:h-auto h-96 px-6 md:px-0"
              />
              <div className="relative flex flex-col gap-8 md:gap-0 mx-6 md:mx-0 md:flex-row pb-12 z-0">
                <div className="md:w-1/2 text-xl md:text-2xl">
                  <div className="md:w-3/5 w-full">
                    These are peer-reviewed articles for journals which have DOI
                    of its own.
                  </div>
                </div>
                <div className="md:w-1/2 border-l border-red-800 px-12">
                  This can be published in a separate journal also and acts as a
                  short visually enriched article that summarizes the primary
                  publication.
                </div>
              </div>
            </div>
          </div>
          <div className="container py-12 relative mx-auto">
            <h2 className="text-2xl mx-6 md:mx-0 md:text-4xl">
              Patient Education
            </h2>
            <div className="md:text-lg my-12 mx-6 md:mx-0">
              Patients frequently use Google to know more about their disease,
              treatment, diagnostics options available as well as side effects.
              Patient education material should be easy to comprehend, convey
              the right message, and be visually appealing to entice people to
              read it.
            </div>
            <div className="relative image-background">
              <div className="absolute image-background2"></div>
              <img
                src={patientEmp}
                alt="case-study"
                className="md:h-auto w-full h-80"
              />
            </div>
            <div className="absolute z-10 top-3/5 md:top-1/2 pb-10 px-8 md:px-16 bottom-0 left-0 right-0">
              <div className="md:text-lg text-white md:w-1/2 w-full">
                This content also includes instruction manuals, user guides, and
                product monographs (Patient section) to convey the complete
                message.
              </div>
              <Link to="/contact-us">
                <div className="flex my-8 items-center connect-svg1">
                  <div className="text-lg text-white font-semibold">
                    Let's Connect
                  </div>
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

export default PatentCentricCommunication;
