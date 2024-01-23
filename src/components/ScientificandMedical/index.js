import React, { useEffect } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import asset2 from "../../assets/images/Assets-02.png";
import asset3 from "../../assets/images/Assets-03.png";
import asset1 from "../../assets/images/Assets.png";
import medical1 from "../../assets/images/Medical-Icons.png";
import medical2 from "../../assets/images/Medical-Icons1.png";
import medical3 from "../../assets/images/Medical-Icons2.png";
import medical4 from "../../assets/images/Medical-Icons3.png";
import medical5 from "../../assets/images/Medical-Icons4.png";
import medical6 from "../../assets/images/Medical-Icons5.png";
import medicalBg from "../../assets/images/medical-bg.png";
import medical from "../../assets/images/medical1.png";
import quotes1 from "../../assets/images/quotes1.png";
import scientific from "../../assets/images/scientific.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const ScientificAndMedical = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  const imageCard = [
    {
      image: medical1,
      title: "Medical Communication Strategy",
      description:
        "Developing a fool proof medical communications strategy is of paramount importance especially for thorough understanding of the product",
      text1: "Branding and Rebranding",
      text2: "Omnichannel Promotional Solutions",
      link: "/solutions/scientific-and-medical-communication/medical-communication-strategy",
    },
    {
      image: medical2,
      title: "Patient-Centric Communication",
      description:
        "Patient-centred care establishes a partnership and bonding among patients, their families and caregivers, practitioners, as well as patient advocacy",
      text1: "Patient Lay Summaries for Publications (PLSPs)",
      text2: "Patient Education",
      link: "/solutions/scientific-and-medical-communication/patient-centric-communication",
    },
    {
      image: medical3,
      title: "Medical Information",
      description:
        "As a marketing authorization holder, the enquiries that you receive throughout the product life cycle require timely and evidence-based responses",
      text1: "Claim Substantiation and Science Consulting",
      link: "/solutions/scientific-and-medical-communication/medical-information",
    },
    {
      image: medical4,
      title: "Medical Education",
      description:
        "Medical education of healthcare and industry professionals is an integral part of any product development whether in the development ",
      link: "/solutions/scientific-and-medical-communication/medical-education",
    },
    {
      image: medical5,
      title: "Other Communications",
      description:
        "In this digital era, omnichannel communication is the answer to modern-day communication, given the easy availability and increased reach of ",
      text1: "Omnichannel Non-Promotional Communication",
      text2: "Peer to Peer Communication",
      link: "/solutions/scientific-and-medical-communication/other-communications",
    },
    {
      image: medical6,
      title: "Referencing and Annotation",
      description:
        "To give credibility to the content, proper referencing and annotations are essential, and our team of professionals can help you with ",
      link: "/solutions/scientific-and-medical-communication/referencing-and-annotation",
    },
  ];
  const items = [
    {
      value: "80",
      label: "Medical Writers",
      icon: null,
    },
    {
      value: "10",
      label: "Therapeutic Areas",
      icon: null,
    },
    {
      value: "10k",
      label: "Deliverables Done",
      icon: null,
    },
    {
      value: "10",
      label: "Graphic Designers",
      icon: null,
    },
    {
      value: "100",
      label: "Podcasts",
      icon: null,
    },
    {
      value: "1k",
      label: "Slide Decks",
      icon: null,
    },
    {
      value: null,
      label: "In House Audio-Video Expert",
      icon: asset1,
    },
    {
      value: null,
      label: "Digital Capabilities",
      icon: asset2,
    },
    {
      value: null,
      label: "In-House Web Developer",
      icon: asset3,
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
              <div className="flex flex-col text-white absolute top-0 bottom-0 right-0 left-0 z-10 text-left px-6 py-10 md:p-20">
                <h1 className="text-2xl md:text-6xl font-semibold">
                  Scientific and Medical Communication
                </h1>
                <h2 className="md:text-lg my-4 md:w-3/5 w-full">
                  A robust medical communication plan and deliverables are an
                  integral part of translating scientific and clinical evidence
                  to all stakeholders (patients and consumers, healthcare
                  providers, policy makers, advocacy experts, and payer
                  professionals).
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
            </div>
          </div>
          <div className="bg-gray-100 w-full absolute top-64 -z-10 right-0 h-80"></div>
          <div className="bg-gray-100 w-full relative">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-4xl w-full md:w-1/4 leading-10 pt-8 pb-10 px-6 md:px-0 font-semibold">
                Localization of Global Content
              </h2>
              <div className="flex flex-col">
                <div className="w-full md:w-4/5">
                  <div className="md:text-lg mx-6 md:mx-0 text-justify leading-8 mb-12">
                    We serve clients world over and understand that not
                    everybody speaks or is comfortable with the same language.
                    This is where the need for localization of content arises.
                    By localization, we do not just mean basic translations but
                    also making the content culturally relevant and easy to
                    understand for native audiences. So, we focus on getting the
                    context of the content right for the target audience and
                    also making them comfortable enough to ensure their reviews
                    and engagement on the same.
                  </div>
                </div>
                <ul className="list-outside mb-12 flex flex-col md:flex-row mx-6 md:mx-0 justify-between gap-12">
                  <li className="list-none md:text-lg relative ml-10 w-4/5 md:w-2/5">
                    <span className="width-span absolute top-3 -left-8"></span>
                    If you want your manuscripts and other documents to be
                    translated or adapted to meet the local culture, language
                    and standards. We can do that for you.
                  </li>
                  <li className="list-none ml-10 md:text-lg relative w-4/5 md:w-2/5">
                    <span className="width-span absolute top-3 -left-8"></span>
                    We provide localization of content from and to Malay,
                    Chinese, Arabic, European languages and more..
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold m-12 text-center">
                Medical Communication Integrates the 3 Important Limbs of EBM
              </h2>
              <img src={medical} alt="medical" className="w-fit" />
              <h2 className="md:text-5xl text-2xl text-center md:text-left font-semibold my-12 mx-6 md:mx-0">
                Our Experience
              </h2>
              <div className="flex flex-wrap items-center mx-6 md:mx-0 justify-start py-10">
                {items &&
                  items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center md:items-start p-2 flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                    >
                      {item.value && (
                        <h6 className="text-5xl font-semibold text-red-800">
                          {item.value}
                        </h6>
                      )}
                      {item.icon && (
                        <img src={item.icon} alt="asset" className="w-12" />
                      )}
                      <h6 className="text-lg my-2 md:pr-8">{item.label}</h6>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 w-full">
            <div className="container mx-auto pt-12 pb-8">
              <div className="md:w-3/5 md:text-lg w-full px-6 md:px-0">
                We can support you in the complete product life cycle, from the
                research and development to product launch and till the product
                is in the market.
              </div>
              <Link to="/contact-us">
                <div className="flex my-6 mx-6 md:mx-0 items-center connect-svg">
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
              <div className="flex flex-wrap gap-8 mt-12 items-center mx-6 md:mx-0 justify-center md:justify-start">
                {imageCard &&
                  imageCard.map((rowData, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white medical-card w-1/4"
                    >
                      <img src={rowData.image} alt={rowData.title} />
                      <Link to={rowData?.link}>
                        <h3 className="font-semibold cursor-pointer hover:text-red-800 text-lg py-2">
                          {rowData.title}
                        </h3>
                      </Link>
                      <div className="text-sm line-clamp-5">
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
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="bg-white w-full relative">
            <div className="h-96 w-full bg-gray-100 absolute z-0"></div>
            <div className="container mx-auto">
              <img
                src={medicalBg}
                alt="medical"
                className="object-none scientific_image relative"
              />
              <div className="absolute container w-4/5 flex flex-col md:flex-row justify-center md:justify-start md:items-start items-center gap-0 md:gap-8 mx-auto top-0 bottom-0 left-0 right-0 p-0 md:p-16 z-20">
                <img src={quotes1} alt="quotes" className="w-40 h-40" />
                <div className="flex flex-col">
                  <div className="md:text-xl text-white leading-10">
                    Not only is it important to ask questions and find the
                    answers, as a scientist I felt obligated to communicate with
                    the world what we were learning.
                  </div>
                  <div className="text-xl md:text-3xl text-white">
                    Stephen Hawking
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

export default ScientificAndMedical;
