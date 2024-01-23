import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageData from "../../hooks/useMetaData";
import useWindowToTop from "../../hooks/useWindowToTop";
import SeoHeaderTitle from "../SeotitleHeader";

const InstitutionalTraining = () => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const location = useLocation();
  let url = location?.pathname?.split("/");
  const [pageData] = usePageData(url[2]);
  return (
    <>
      {pageData && <SeoHeaderTitle pageData={pageData} />}
      <h1 className="text-lg text-center">InstitutionalTraining</h1>
    </>
  );
};

export default InstitutionalTraining;
