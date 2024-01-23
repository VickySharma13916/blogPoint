import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import useWindowToTop from "../../hooks/useWindowToTop";
import useWindowUrl from "../../hooks/useWindowUrl";
import { BACKEND_URL, BASE_URL } from "../../services/constant";
import PopUpForm from "../PopupForm";
import DisplayText from "../DisplayHtmlText";
import Loading from "../Loading";

const CaseStudies = () => {
  const location = useLocation();
  let url = location.pathname.split("/");
  const id = url[2];
  const [data, setData] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [caseStudybox, setcaseStudybox] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentURL, setCurrentURL] = useState("");

  const fetchCaseStudiesDetail = async () => {
    const result = await axios.get(`${BASE_URL}caseStudies/${id}`);
    if (result.status === 200) {
      setData(result?.data);
      setcaseStudybox(result?.data?.CaseStudiesUserDetail);
      setIsFetch(false);
    }
  };

  const storedEmail = localStorage.getItem("caseStuidiesEmail");

  const isEmailMatch = caseStudybox?.some(
    (item) => item?.email === storedEmail
  );

  const handleShowPopup = () => {
    setShowPopup(true);
    const newData = {
      categoryId: data?._id,
      categoryName: "caseStudies",
      categoryData: data?.CaseStudiesFile,
      localStorageData: "caseStuidiesEmail",
    };
    setUserData(newData);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  const formatDate = (dateStr) => {
    const currentDate = new Date(dateStr);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[currentDate.getMonth()]
    } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  };
  const originalDateStr = data?.createdAt;
  const formattedDate = formatDate(originalDateStr);

  const handleClick = (tag) => {
    useWindowUrl(tag);
  };

  useEffect(() => {
    useWindowToTop();
  }, []);

  useEffect(() => {
    fetchCaseStudiesDetail();
  }, [isFetch]);

  useEffect(() => {
    setCurrentURL(window?.location?.href);
  }, []);
  return (
    <>
      {data === null ? (
        <Loading />
      ) : (
        <>
          {data && (
            <>
              <Helmet>
                <title>
                  {data?.metaTitle ? data?.metaTitle : "Casestudies"}
                </title>
                {data?.metaDescription && (
                  <meta name="description" content={data?.metaDescription} />
                )}
                <link rel="canonical" href={currentURL} />
                {data?.CaseStudiesTags && (
                  <meta name="keywords" content={data?.CaseStudiesTags} />
                )}
                {data?.CaseStudiesAuthor && (
                  <meta name="author" content={data?.CaseStudiesAuthor} />
                )}
                {data?.createdAt && (
                  <meta
                    property="article:published_time"
                    content={data?.createdAt}
                  />
                )}
                {data?.metaTitle && (
                  <meta property="og:title" content={data?.metaTitle} />
                )}
                {data?.metaDescription && (
                  <meta
                    property="og:description"
                    content={data?.metaDescription}
                  />
                )}
                {data?.CaseStudiesImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.CaseStudiesImage}
                  />
                )}
                <meta property="og:url" content={currentURL} />
                <meta property="og:type" content="casestudies" />
                <meta name="twitter:site" content="@turacoz" />
                <meta property="twitter:card" content="summary_large_image" />
                {data?.metaTitle && (
                  <meta name="twitter:title" content={data?.metaTitle} />
                )}
                {data?.metaDescription && (
                  <meta
                    name="twitter:description"
                    content={data?.metaDescription}
                  />
                )}
                {data?.CaseStudiesImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.CaseStudiesImage}
                  />
                )}
              </Helmet>
              <div>
                <div className="container mx-auto px-6 xl:px-0">
                  <h1 className="md:text-5xl text-2xl my-6 md:my-12 font-semibold">
                    {data?.CaseStudiesTitle}
                  </h1>
                  <div className="my-4 md:text-lg text-gray-500">
                    by
                    {data?.authorLink ? (
                      <span className="cursor-pointer">
                        <Link to={data?.authorLink}>
                          {data?.CaseStudiesAuthor}
                        </Link>
                      </span>
                    ) : (
                      <span>{data?.CaseStudiesAuthor}</span>
                    )}{" "}
                    | {formattedDate} | {data?.CaseStudiesCategory?.join(", ")}
                  </div>
                  <img
                    src={BACKEND_URL + data?.CaseStudiesImage}
                    alt={data?.CaseStudiesTitle}
                  />
                  <div className="my-12 md:text-lg">
                    <DisplayText htmlContent={data?.CaseStudiesDescription} />
                  </div>
                  <div className="my-8 flex justify-end md:text-lg cursor-pointer">
                    {data?.CaseStudiesTags?.split(",")?.map((tag, index) => (
                      <div
                        key={index}
                        className="pr-2 text-blue-500 hover:text-blue-700"
                        onClick={() => handleClick(tag)}
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                  {isEmailMatch ? (
                    data?.CaseStudiesFile && (
                      <div
                        className="my-4 bg-green-700 w-32 cursor-pointer text-white font-semibold text-xl px-3 py-1"
                        onClick={() =>
                          window.open(
                            BACKEND_URL + data?.CaseStudiesFile,
                            "_blank"
                          )
                        }
                      >
                        Download
                      </div>
                    )
                  ) : (
                    <div
                      className="my-4 bg-green-700 w-32 cursor-pointer text-white font-semibold text-xl px-3 py-1"
                      onClick={() => handleShowPopup()}
                    >
                      Download
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {showPopup && (
            <PopUpForm
              userData={userData}
              handleHidePopup={handleHidePopup}
              showPopup={showPopup}
              setIsFetch={setIsFetch}
            />
          )}
        </>
      )}
    </>
  );
};

export default CaseStudies;
