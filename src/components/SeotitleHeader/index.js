import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BACKEND_URL } from "../../services/constant";

const SeoHeaderTitle = ({ pageData }) => {
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);
  const { metaDescription, metaTitle, metaKeywords, metaImage } =
    pageData || {};
  return (
    <Helmet>
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      {metaImage && (
        <meta property="og:image" content={BACKEND_URL + metaImage} />
      )}
      <link rel="canonical" href={currentURL} />
      <meta property="og:url" content={currentURL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@turacoz" />
      <meta property="twitter:card" content="summary_large_image" />
      {metaTitle && <meta name="twitter:title" content={metaTitle} />}
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {metaImage && (
        <meta name="twitter:image" content={BACKEND_URL + metaImage} />
      )}
    </Helmet>
  );
};

export default SeoHeaderTitle;
