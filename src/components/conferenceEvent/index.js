import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import useWindowToTop from "../../hooks/useWindowToTop";
import useWindowUrl from "../../hooks/useWindowUrl";
import { performGetEventConferenceById } from "../../redux/actionCreators/eventCreators";
import { BACKEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";
import Loading from "../Loading";

const EventConferencePost = ({ fetchEventConferenceList }) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location.pathname.split("/");
  const id = url[3];
  const [data, setData] = useState(null);
  const fetchCaseStudiesDetail = async () => {
    const result = await fetchEventConferenceList(id);
    if (result.status === 200) {
      setData(result?.data);
    }
  };

  useEffect(() => {
    fetchCaseStudiesDetail();
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
                <title>
                  {data?.metaTitle ? data?.metaTitle : "Event Conference"}
                </title>
                {data?.metaDescription && (
                  <meta name="description" content={data?.metaDescription} />
                )}
                <link rel="canonical" href={currentURL} />
                {data?.eventConferenceTags && (
                  <meta name="keywords" content={data?.eventConferenceTags} />
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
                {data?.eventConferenceImage && (
                  <meta
                    property="og:image"
                    content={BACKEND_URL + data?.eventConferenceImage}
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
                {data?.eventConferenceImage && (
                  <meta
                    name="twitter:image"
                    content={BACKEND_URL + data?.eventConferenceImage}
                  />
                )}
              </Helmet>
              <div>
                <div className="container mx-auto px-6 xl:px-0">
                  <h1 className="md:text-5xl text-2xl my-6 md:my-12 font-semibold">
                    {data?.eventConferenceTitle}
                  </h1>
                  <img
                    src={BACKEND_URL + data?.eventConferenceImage}
                    alt={data?.eventConferenceTitle}
                  />
                  <div className="my-12 md:text-lg">
                    <DisplayText
                      htmlContent={data?.eventConferenceDescription}
                    />
                  </div>
                  <div className="my-8 flex justify-end md:text-lg cursor-pointer">
                    {data?.eventConferenceTags
                      ?.split(",")
                      ?.map((tag, index) => (
                        <div
                          key={index}
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
  fetchEventConferenceList: (payload) =>
    dispatch(performGetEventConferenceById(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventConferencePost);
