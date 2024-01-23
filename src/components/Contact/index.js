import React, { useEffect } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import contact from "../../assets/images/ContactUs_turacoz.jpg";
import ContactMobile from "../../assets/images/ContactMobile.jpg";
import location from "../../assets/images/location.png";
import icon from "../../assets/images/turacoz-icon.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import ContactForm from "../ContactForm";
import SeoHeaderTitle from "../SeotitleHeader";
import { useLocation } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const locate = useLocation();
  let url = locate?.pathname?.substring(1);
  const [pageData] = usePageData(url);
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={contact}
                alt="events"
                className="image-carousal relative object-cover hidden md:block"
              />
              <img
                src={ContactMobile}
                alt="events"
                className="w-full min-h-[280px] relative md:hidden block"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="text-[32px] md:text-[52px] lg:text-[72px] font-semibold">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col max-w-xs my-0 md:my-4 px-4 md:px-0 mx-auto w-full">
              <div className="flex flex-col justify-between py-8 px-12 text-center h-36 bg-[#f1f2f2]">
                <h3 className="text-[14px] md:text-[16px] font-semibold">
                  For Information on Services
                </h3>
                <a
                  className="font-normal no-underline text-[15px] text-[#941D20] cursor-pointer"
                  href="mailto:info@Blogpoint.com"
                >
                  info@Blogpoint.com
                </a>
              </div>
              <div className="flex flex-col py-8 px-12 text-center h-36  bg-[#941D20] text-white">
                <div className="text-[16px] font-semibold">Pooja Parashar</div>
                <div className="font-normal text-[13px] md:text-[15px]">
                  Director,
                  <br /> Marketing & Sales
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-xs my-0 md:my-4 px-4 md:px-0 mx-auto w-full ">
              <div className="flex flex-col justify-between py-8 px-12 text-center h-36 bg-[#f9f9f9]">
                <h3 className="text-[14px] md:text-[16px] font-semibold">
                  For Query on Training & Workshop
                </h3>
                <a
                  className="font-normal no-underline text-[15px] text-[#941D20] cursor-pointer"
                  href="mailto:trainings@Blogpoint.com"
                >
                  trainings@Blogpoint.com
                </a>
              </div>
              <div className="flex flex-col py-8 px-12 text-center h-36 bg-[#9E1B1E] text-white">
                <div className="text-[16px] font-semibold">Gursimran Alagh</div>
                <div className="font-normal text-[13px] md:text-[15px]">
                  Project Lead,
                  <br />
                  Learning & Development
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-xs my-0 md:my-4 px-4 md:px-0 mx-auto w-full ">
              <div className="flex flex-col justify-between py-8 px-12 text-center h-36 bg-[#f1f2f2]">
                <h3 className="text-[14px] md:text-[16px] font-semibold">
                  For Career Queries
                </h3>
                <a
                  className="font-normal no-underline text-[15px] text-[#941D20] cursor-pointer"
                  href="mailto:careers@Blogpoint.com"
                >
                  careers@Blogpoint.com
                </a>
              </div>
              <div className="flex flex-col py-8 px-12 text-center h-36 bg-[#941D20] text-white">
                <div className="text-[16px] font-semibold">Sapna Rajpoot</div>
                <div className="font-normal text-[13px] md:text-[15px]">
                  Senior HR Specialist
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-xs my-0 md:my-4 px-4 md:px-0 mx-auto w-full ">
              <div className="flex flex-col justify-between py-8 px-12 text-center h-36 bg-[#f9f9f9]">
                <h3 className="text-[14px] md:text-[16px] font-semibold">
                  For Partnering
                </h3>
                <a
                  className="font-normal no-underline text-[15px] text-[#941D20] cursor-pointer"
                  href="mailto:partners@Blogpoint.com"
                >
                  partners@Blogpoint.com
                </a>
              </div>
              <div className="flex flex-col py-8 px-12 text-center h-36 bg-[#9E1B1E] text-white">
                <div className="text-[16px] font-semibold">
                  Dr Namrata Singh
                </div>
                <div className="font-normal text-[13px] md:text-[15px]">
                  Founder at Turacoz & Director, Medical Services
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div className="container mx-auto">
              <h2 className="lg:text-[45px] md:text-[30px] text-[26px] mx-6 md:mx-0 pt-8 pb-16 font-semibold">
                Our Locations
              </h2>
              <div className="relative mx-6 md:mx-0">
                <img src={location} alt="conference" className="relative z-0" />
                <img
                  src={icon}
                  alt="turacoz-location"
                  className="absolute z-10 transition-transform duration-300 canada-icon w-6 hover:scale-125"
                  data-tooltip-id="canada"
                />
                <img
                  src={icon}
                  alt="turacoz-location"
                  className="absolute z-10 transition-transform duration-300 usa-icon w-6 hover:scale-125"
                  data-tooltip-id="usa"
                />
                <img
                  src={icon}
                  alt="turacoz-location"
                  className="absolute z-10 transition-transform duration-300 netherland w-6 hover:scale-125"
                  data-tooltip-id="netherland"
                />
                <img
                  src={icon}
                  alt="turacoz-location"
                  className="absolute z-10 transition-transform duration-300 india w-6 hover:scale-125"
                  data-tooltip-id="india"
                />
                <img
                  src={icon}
                  alt="turacoz-location"
                  className="absolute z-10 transition-transform duration-300 singapore w-6 hover:scale-125"
                  data-tooltip-id="singapore"
                />
                <ReactTooltip
                  id="canada"
                  className="shadow-lg transition-transform duration-300"
                  place="right"
                >
                  <strong> Canada Office </strong>
                  <br />
                  <br />
                  145 Traders Boulevard East, #20
                  <br />
                  Mississauga, ON L4Z 3L3
                </ReactTooltip>
                <ReactTooltip
                  id="usa"
                  className="shadow-lg transition-transform duration-300"
                  place="right"
                >
                  <strong>USA Office</strong>
                  <br />
                  <br />
                  28 Warwick Road, West Windsor,
                  <br />
                  NJ 08550
                </ReactTooltip>
                <ReactTooltip
                  id="netherland"
                  className="shadow-lg transition-transform duration-300"
                  place="right"
                >
                  <strong>Netherlands Office</strong>
                  <br />
                  <br />
                  Turacoz B.V.
                  <br />
                  Deeneplaat 15
                  <br />
                  3453 SB De Meern
                </ReactTooltip>
                <ReactTooltip
                  id="india"
                  className="shadow-lg transition-transform duration-300"
                  place="right"
                >
                  <strong>India Office</strong>
                  <br />
                  <br />
                  Unit no.991-992 9th floor Vegas Plot
                  <br />
                  no. 6 Sector 14 Dwarka, New Delhi
                  <br />
                  (110078)
                </ReactTooltip>
                <ReactTooltip
                  id="singapore"
                  className="shadow-lg transition-transform duration-300"
                  place="right"
                >
                  <strong>Singapore Office</strong>
                  <br />
                  <br />
                  30 Cecil Street,
                  <br />
                  #19-08 Prudential Tower,
                  <br />
                  Singapore 049712
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
