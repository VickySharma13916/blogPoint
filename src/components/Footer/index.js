import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import footer_image from "../../assets/images/footer_image.webp";
import { performGetFooter } from "../../redux/actionCreators/footerCreators";
import DisplayText from "../DisplayHtmlText";

const Footer = ({ getFooterData }) => {
  const [footerData, setFooterData] = useState([]);
  const fetchdata = async () => {
    const result = await getFooterData();
    if (result.status === 200) {
      setFooterData(result?.data);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {footerData && footerData.length > 0 ? (
        footerData?.map((footer) => {
          return (
            <div className="container mt-8 mx-auto" key={footer?._id}>
              <DisplayText htmlContent={footer?.footerDescription} />
            </div>
          );
        })
      ) : (
        <footer className="container mx-auto bg-white">
          <div className="flex flex-col md:flex-row justify-start  md:justify-between items-start md:items-center pt-12 mt-4">
            <div className="flex flex-col footer-text p-4">
              <div className="font-semibold mb-5">We’re social</div>
              <div className="flex gap-5">
                <span>
                  <Link to="https://www.linkedin.com/company/Blogpoint-healthcare-solutions/">
                    <FaLinkedinIn size={18} />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.facebook.com/Blogpointhealthcaresolutions/">
                    <FaFacebookF size={18} />
                  </Link>
                </span>
                <span>
                  <Link to="https://www.instagram.com/Blogpoint/">
                    <FaInstagram size={18} />
                  </Link>
                </span>
                <span>
                  <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FBlogpoint">
                    <FaTwitter size={18} />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <FaYoutube size={18} />
                  </Link>
                </span>
              </div>
            </div>
            <img
              src={footer_image}
              alt="Footer image"
              className="w-48 h-48 ml-3 md:ml-0"
            />
            <div className="flex flex-col items-start md:items-end p-4">
              <div className="md:text-xl leading-6 mb-5">
                Singapore | India | USA | Canada | Netherlands
              </div>
              <div className="text-red-900 text-xl font-semibold">
                <a href="mailto:info@Blogpoint.com" className="no-underline">
                  info@Blogpoint.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center my-0">
            <div className="text-red-900 md:text-sm md:font-medium text-xl font-semibold px-4 md:p-4">
              <Link to="https://Blogpoint.com/generic-privacy-policy/">
                Terms & Privacy Policy
              </Link>
            </div>
            <div className="md:text-sm md:font-medium text-lg font-semibold p-4">
              © 2023, Blogpoint ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getFooterData: (payload) => dispatch(performGetFooter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
