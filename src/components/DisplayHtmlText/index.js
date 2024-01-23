import DOMPurify from "dompurify";
import React, { useEffect, useRef } from "react";

const DisplayText = ({ htmlContent }) => {
  const contentRef = useRef(null);
  const convertHtmlToPlainText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  useEffect(() => {
    const sanitizedHTML = DOMPurify.sanitize(htmlContent);
    contentRef.current.innerHTML = sanitizedHTML;
    const preTags = contentRef.current.querySelectorAll("pre");
    preTags.forEach((preTag) => {
      const textContent = convertHtmlToPlainText(preTag.innerHTML);
      preTag.innerHTML = textContent;
      const divTag = document.createElement("div");
      divTag.innerHTML = preTag.innerHTML;
      preTag.parentNode.replaceChild(divTag, preTag);
    });
  }, [htmlContent]);

  return <div ref={contentRef}></div>;
};

export default DisplayText;
