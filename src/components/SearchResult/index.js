import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { BACKEND_URL, BASE_URL, FRONTEND_URL } from "../../services/constant";
import DisplayText from "../DisplayHtmlText";

const SearchResult = ({ searchTerm, setSearchTerm, setShowSearch }) => {
  // Search Functionality
  const [searchBlogResult, setSearchBlogResult] = useState([]);
  const [searchCaseStudyResult, setSearchCaseStudyResult] = useState([]);
  const [searchWhitepaperResult, setSearchWhitepaperResult] = useState([]);
  const [searchNewsletterResult, setSearchNewsletterResult] = useState([]);
  const [searchCourseResult, setSearchCourseResult] = useState([]);
  const [searchWebinarResult, setSearchWebinarResult] = useState([]);
  const [searchWorkshopResult, setSearchWorkshopResult] = useState([]);
  const [searchAnnouncementResult, setSearchAnnouncementResult] = useState([]);
  const [searchServiceResult, setSearchServiceResult] = useState([]);
  const [searchEventConferenceResult, setSearchEventConferenceResult] =
    useState([]);
  const [searchWebinarConferenceResult, setSearchWebinarConferenceResult] =
    useState([]);

  const resultsRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [recentSearches, setRecentSearches] = useState([]);
  // Put Recent Search into search
  const handleClickRecentSearch = (item) => {
    setSearchTerm(item);
  };

  // Clear Recent Search Results in search
  const handleClearRecentSearch = (index) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      updatedSearches.splice(index, 1);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      return updatedSearches;
    });
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const storedRecentSearches = localStorage.getItem("recentSearches");
    if (storedRecentSearches) {
      setRecentSearches(JSON.parse(storedRecentSearches));
    }
  }, []);

  useEffect(() => {
    let delayDebounceFn;
    if (searchTerm) {
      delayDebounceFn = setTimeout(async () => {
        const result = await axios.get(
          BASE_URL + "searchResult?search=" + searchTerm
        );
        console.log(result);
        if (result.status === 200) {
          setShowSearch(true);
          setSearchBlogResult(result?.data?.data?.blogs);
          setSearchCaseStudyResult(result?.data?.data?.caseStudies);
          setSearchCourseResult(result?.data?.data?.courses);
          setSearchNewsletterResult(result?.data?.data?.newsletters);
          setSearchWebinarResult(result?.data?.data?.webinars);
          setSearchWhitepaperResult(result?.data?.data?.whitepapers);
          setSearchWorkshopResult(result?.data?.data?.workshops);
          setSearchAnnouncementResult(result?.data?.data?.announcements);
          setSearchServiceResult(result?.data?.data?.service);
          setSearchEventConferenceResult(result?.data?.data?.eventConferences);
          setSearchWebinarConferenceResult(
            result?.data?.data?.webinarConferences
          );
          setRecentSearches((prevSearches) => {
            const updatedSearches = [searchTerm, ...prevSearches?.slice(0, 2)];
            localStorage.setItem(
              "recentSearches",
              JSON.stringify(updatedSearches)
            );
            return updatedSearches;
          });
        }
      }, 300);
    } else {
      setShowSearch(false);
    }
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  return (
    <div
      className="h-[50vh] flex items-start sm:max-w-xl md:max-w-3xl lg:max-w-4xl flex-wrap gap-2 mt-2 bg-red-800 rounded-lg text-sm text-white overflow-auto p-4 shadow-xl"
      ref={resultsRef}
    >
      {searchBlogResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Blogs :</p>
          {searchBlogResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                item?.blogLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.blogImage
                    ? BACKEND_URL + item?.blogImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.blogTitle}
              />
              <p className="text-black truncate">{item?.blogTitle}</p>
            </Link>
          ))}
        </div>
      )}
      {searchCaseStudyResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">CaseStudies :</p>
          {searchCaseStudyResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "case-studies/" +
                item?.CaseStudiesLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.CaseStudiesImage
                    ? BACKEND_URL + item?.CaseStudiesImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.CaseStudiesTitle}
              />
              <p className="text-black truncate">{item?.CaseStudiesTitle}</p>
            </Link>
          ))}
        </div>
      )}
      {searchWhitepaperResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Whitepapers :</p>
          {searchWhitepaperResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "whitepapers/" +
                item?.whitepaperLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.whitepaperImage
                    ? BACKEND_URL + item?.whitepaperImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.whitepaperTitle}
              />
              <p className="text-black truncate">{item?.whitepaperTitle}</p>
            </Link>
          ))}
        </div>
      )}
      {searchNewsletterResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Newsletters :</p>
          {searchNewsletterResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "newsletter/" +
                item?.NewsletterLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.NewsletterImage
                    ? BACKEND_URL + item?.NewsletterImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.NewsletterTitle}
              />
              <p className="text-black truncate">{item?.NewsletterTitle}</p>
            </Link>
          ))}
        </div>
      )}
      {searchCourseResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Courses :</p>
          {searchCourseResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "training/courses/" +
                item?.coursesLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.courseImage
                    ? BACKEND_URL + item?.courseImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.courseName}
              />
              <p className="text-black truncate">{item?.courseName}</p>
            </Link>
          ))}
        </div>
      )}
      {searchWebinarResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Webinars :</p>
          {searchWebinarResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "training/webinars/" +
                item?.webinarLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.webinarImage
                    ? BACKEND_URL + item?.webinarImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.webinarName}
              />
              <p className="text-black truncate">{item?.webinarName}</p>
            </Link>
          ))}
        </div>
      )}
      {searchWorkshopResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Workshops :</p>
          {searchWorkshopResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "training/workshops/" +
                item?.workshopLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.workshopImage
                    ? BACKEND_URL + item?.workshopImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.workshopName}
              />
              <p className="text-black truncate">{item?.workshopName}</p>
            </Link>
          ))}
        </div>
      )}
      {searchAnnouncementResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">News and Anouncements :</p>
          {searchAnnouncementResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "news-media/" +
                item?.announcementLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.announcementImage
                    ? BACKEND_URL + item?.announcementImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.announcementTitle}
              />
              <p className="text-black truncate">{item?.announcementTitle}</p>
            </Link>
          ))}
        </div>
      )}
      {searchEventConferenceResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Conference Events :</p>
          {searchEventConferenceResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "events/conference/" +
                item?.eventConferenceLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.eventConferenceImage
                    ? BACKEND_URL + item?.eventConferenceImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.EventConferenceTitle}
              />
              <p className="text-black truncate">
                {item?.EventConferenceTitle}
              </p>
            </Link>
          ))}
        </div>
      )}
      {searchWebinarConferenceResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Conference Webinars :</p>
          {searchWebinarConferenceResult?.slice(0, 5)?.map((item) => (
            <Link
              to={
                FRONTEND_URL +
                "events/webinar/" +
                item?.webinarConferenceLink?.toLowerCase()?.replace(/\s+/g, "-")
              }
              className="flex items-center gap-3 rounded-lg p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  item?.webinarConferenceImage
                    ? BACKEND_URL + item?.webinarConferenceImage
                    : "https://via.placeholder.com/120"
                }
                alt={item?.webinarConferenceTitle}
              />
              <p className="text-black truncate">
                {item?.webinarConferenceTitle}
              </p>
            </Link>
          ))}
        </div>
      )}
      {searchServiceResult?.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full">
          <p className="font-semibold text-lg">Services :</p>
          {searchServiceResult?.slice(0, 5)?.map((item) => (
            <Link
              to={item?.serviceLink}
              className="flex flex-col gap-3 rounded-lg text-black h-40 overflow-y-scroll p-2 w-full cursor-pointer bg-[#FAF1F1]"
              key={item?._id}
            >
              <div className="text-black flex justify-between font-semibold">
                {item?.serviceName}
              </div>
              <DisplayText htmlContent={item?.serviceDescription} />
            </Link>
          ))}
        </div>
      )}
      {searchBlogResult?.length === 0 &&
        searchCaseStudyResult?.length === 0 &&
        searchWhitepaperResult?.length === 0 &&
        searchNewsletterResult?.length === 0 &&
        searchCourseResult?.length === 0 &&
        searchAnnouncementResult?.length === 0 &&
        searchServiceResult?.length === 0 &&
        searchWebinarConferenceResult?.length === 0 &&
        searchEventConferenceResult?.length === 0 &&
        searchWebinarResult?.length === 0 &&
        searchWorkshopResult?.length === 0 && (
          <div>
            <p className="font-semibold text-lg text-center">
              No results found
            </p>
          </div>
        )}
      <div className="mt-4 w-full">
        <p className=" font-semibold text-lg">Recent Searches</p>
        <div className="flex flex-col gap-3 mt-4">
          {recentSearches?.map((item, index) => (
            <div
              className="flex gap-3 w-full flex-row justify-between items-center"
              key={index}
            >
              <div className="flex gap-3 flex-row justify-between items-center">
                <MdOutlineAccessTime size={20} />
                <span
                  className="truncate text-white"
                  onClick={() => handleClickRecentSearch(item)}
                >
                  {item?.slice(0, 38)}
                </span>
              </div>
              <RxCross2
                size={20}
                onClick={() => handleClearRecentSearch(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
