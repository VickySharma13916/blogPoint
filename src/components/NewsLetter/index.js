import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import useWindowToTop from "../../hooks/useWindowToTop";
import useWindowUrl from "../../hooks/useWindowUrl";
import { BACKEND_URL, BASE_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import PopUpForm from "../PopupForm";
import Loading from "../Loading";

const NewsLetter = () => {
  const location = useLocation();
  let url = location.pathname.split("/");
  const id = url[2];
  const [data, setData] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [currentURL, setCurrentURL] = useState("");

  const fetchCaseStudiesDetail = async () => {
    const result = await axios.get(`${BASE_URL}newsletter/${id}`);
    if (result.status === 200) {
      setData(result?.data);
      setIsFetch(false);
    }
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
    setCurrentURL(window?.location?.href);
  }, []);

  useEffect(() => {
    useWindowToTop();
  }, []);

  useEffect(() => {
    fetchCaseStudiesDetail();
  }, [isFetch]);
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
                  {data?.metaTitle ? data?.metaTitle : "Newsletter"}
                </title>
                {data?.metaDescription && (
                  <meta name="description" content={data?.metaDescription} />
                )}
                <link rel="canonical" href={currentURL} />
                {data?.NewsletterTags && (
                  <meta name="keywords" content={data?.NewsletterTags} />
                )}
                {data?.NewsletterAuthor && (
                  <meta name="author" content={data?.NewsletterAuthor} />
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
                {data?.NewsletterImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.NewsletterImage}
                  />
                )}
                <meta property="og:url" content={currentURL} />
                <meta property="og:type" content="Newsletter" />
                <meta name="twitter:site" content="@Blogpoint" />
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
                {data?.NewsletterImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.NewsletterImage}
                  />
                )}
              </Helmet>
              <div>
                <div className="container mx-auto px-6 xl:px-0">
                  <h1 className="md:text-5xl text-2xl my-6 md:my-12 font-semibold">
                    {data?.NewsletterTitle}
                  </h1>
                  <div className="my-4 md:text-lg text-gray-500">
                    by
                    {data?.authorLink ? (
                      <span className="cursor-pointer">
                        <Link to={data?.authorLink}>
                          {data?.NewsletterAuthor}
                        </Link>
                      </span>
                    ) : (
                      <span>{data?.NewsletterAuthor}</span>
                    )}{" "}
                    | {formattedDate} | {data?.NewsletterCategory?.join(", ")}
                  </div>
                  <img
                    src={BACKEND_URL + data?.NewsletterImage}
                    alt={data?.NewsletterTitle}
                  />
                  <div className="my-12 md:text-lg">
                    <DisplayText htmlContent={data?.NewsletterDescription} />
                  </div>
                  <div className="my-8 flex justify-end md:text-lg cursor-pointer">
                    {data?.NewsletterTags?.split(",")?.map((tag, index) => (
                      <div
                        key={index}
                        className="pr-2 text-blue-500 hover:text-blue-700"
                        onClick={() => handleClick(tag)}
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                  {data?.NewsletterFile && (
                    <div
                      className="bg-green-700 w-32 my-4 cursor-pointer text-white font-semibold text-xl px-3 py-1"
                      onClick={() =>
                        window.open(
                          BACKEND_URL + data?.NewsletterFile,
                          "_blank"
                        )
                      }
                    >
                      Download
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NewsLetter;
