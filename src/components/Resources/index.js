import axios from "axios";
import React, { useEffect, useState } from "react";
import reverse from "../../assets/images/resource.png";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import { BASE_URL } from "../../services/constant";
import BlogTab from "../BlogTab";
import CaseStudyTab from "../CaseStudyTab";
import NewsletterForm from "../NewsletterForm";
import NewsletterTab from "../NewsletterTab";
import SeoHeaderTitle from "../SeotitleHeader";
import WhitepaperTab from "../WhitepaperTab";
import { useLocation } from "react-router-dom";

const Resources = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const locate = useLocation();
  let url = locate?.pathname?.substring(1);
  const [pageData] = usePageData(url);
  const [activeTab, setActiveTab] = useState("Blogs");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [newsletterbox, setNewsletterbox] = useState(null);
  const storedEmail = localStorage.getItem("newsletterSubscriptionEmail");
  const [isFetch, setIsFetch] = useState(false);
  const fetchData = async () => {
    const result = await axios.get(`${BASE_URL}userDetail`);
    if (result.status === 200) {
      setNewsletterbox(result?.data?.docs?.data);
      setIsFetch(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [isFetch]);
  const isEmailMatch = newsletterbox?.some(
    (item) => item?.email === storedEmail
  );
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <div>
        <div className="relative">
          <div className="xl:ml-28 relative z-10">
            <div className="border-0 relative active:border-0">
              <div className="absolute image-background2"></div>
              <img
                src={reverse}
                alt="events"
                className="image-carousal relative object-cover"
              />
              <div className="flex flex-col text-white absolute top-1/4 bottom-0 right-0 left-0 z-10 text-left p-10 md:p-20">
                <h1 className="md:text-7xl text-3xl font-semibold">
                  Resources
                </h1>
              </div>
            </div>
          </div>
          <div className=" bg-gray-100">
            <div className="mb-4 pt-6 md:pt-12 border border-gray-100 ">
              <ul
                className="flex flex-wrap justify-center -mb-px text-lg bg-slate-100 font-semibold text-center"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li
                  className={`py-2 px-8 cursor-pointer ${
                    activeTab === "Blogs"
                      ? " text-black  border-b-4 border-b-red-800"
                      : " bg-slate-100 text-gray-500 border-b-2 hover:border-gray-300 "
                  }`}
                  onClick={() => handleTabClick("Blogs")}
                >
                  Blogs
                </li>
                <li
                  className={`py-2 px-8 cursor-pointer ${
                    activeTab === "case-studies"
                      ? " text-black border-b-4 border-b-red-800"
                      : " bg-slate-100 text-gray-500 border-b-2 hover:border-gray-300 "
                  }`}
                  onClick={() => handleTabClick("case-studies")}
                >
                  Case Studies
                </li>
                <li
                  className={`py-2 px-8 cursor-pointer ${
                    activeTab === "Newsletters"
                      ? "te text-black border-b-4 border-b-red-800"
                      : " bg-slate-100 text-gray-500 border-b-2 hover:border-gray-300 "
                  }`}
                  onClick={() => handleTabClick("Newsletters")}
                >
                  Newsletters
                </li>
                <li
                  className={`py-2 px-8 cursor-pointer ${
                    activeTab === "Whitepapers"
                      ? " text-black border-b-4 border-b-red-800"
                      : " bg-slate-100 text-gray-500 border-b-2 hover:border-gray-300 "
                  }`}
                  onClick={() => handleTabClick("Whitepapers")}
                >
                  Whitepapers
                </li>
              </ul>
            </div>
            <div id="myTabContent" className="container mx-auto">
              {activeTab === "Blogs" && <BlogTab />}
              {activeTab === "case-studies" && <CaseStudyTab />}
              {activeTab === "Newsletters" && (
                <>
                  {isEmailMatch ? (
                    <NewsletterTab />
                  ) : (
                    <NewsletterForm setIsFetch={setIsFetch} />
                  )}
                </>
              )}
              {activeTab === "Whitepapers" && <WhitepaperTab />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
