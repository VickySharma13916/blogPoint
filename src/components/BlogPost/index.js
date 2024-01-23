import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useWindowToTop from "../../hooks/useWindowToTop";
import useWindowUrl from "../../hooks/useWindowUrl";
import { performGetBlogById } from "../../redux/actionCreators/blogCreators";
import { BACKEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import Loading from "../Loading";

const BlogPost = ({ handlegetDetailById }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.substring(1);
  const [data, setData] = useState(null);
  const fetchBlogDetail = async () => {
    const result = await handlegetDetailById(url);
    if (result.status === 200) {
      setData(result?.data?.docs);
    }
  };
  useEffect(() => {
    fetchBlogDetail();
  }, []);
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

  const [currentURL, setCurrentURL] = useState("");
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
                <title>{data?.metaTitle ? data?.metaTitle : "Blogs"}</title>
                {data?.metaDescription && (
                  <meta name="description" content={data?.metaDescription} />
                )}
                <link rel="canonical" href={currentURL} />
                {data?.blogTags && (
                  <meta name="keywords" content={data?.blogTags} />
                )}
                {data?.blogAuthor && (
                  <meta name="author" content={data?.blogAuthor} />
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
                {data?.blogImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.blogImage}
                  />
                )}
                <meta property="og:url" content={currentURL} />
                <meta property="og:type" content="Blogs" />
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
                {data?.blogImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.blogImage}
                  />
                )}
              </Helmet>
              <div>
                <div className="container mx-auto px-6 xl:px-0">
                  <h1 className="md:text-5xl text-2xl my-6 md:my-12 font-semibold">
                    {data?.blogTitle}
                  </h1>
                  <div className="my-4 md:text-lg text-gray-500">
                    by{" "}
                    {data?.authorLink ? (
                      <span className="cursor-pointer">
                        <Link to={data?.authorLink}>{data?.blogAuthor}</Link>
                      </span>
                    ) : (
                      <span>{data?.blogAuthor}</span>
                    )}{" "}
                    | {formattedDate} | {data?.blogCategory?.join(", ")}
                  </div>
                  <img
                    src={BACKEND_URL + data?.blogImage}
                    alt={data?.blogTitle}
                  />
                  <div className="my-12 md:text-lg">
                    <DisplayText htmlContent={data?.blogDescription} />
                  </div>
                  <div className="my-8 flex justify-end md:text-lg cursor-pointer">
                    {data?.blogTags?.split(",")?.map((tag) => (
                      <div
                        className="pr-2 text-blue-500 hover:text-blue-700"
                        onClick={() => handleClick(tag)}
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handlegetDetailById: (payload) => dispatch(performGetBlogById(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
