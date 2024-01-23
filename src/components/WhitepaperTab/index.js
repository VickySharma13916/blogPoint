import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useWindowToTop from "../../hooks/useWindowToTop";
import { performGetWhitepaperList } from "../../redux/actionCreators/whitepaperCreators";
import { setCurrentPage } from "../../redux/actions/whitepaperActions";
import { BACKEND_URL } from "../../services/constant";
import Pagination from "../pagination";
import DisplayText from "../DisplayHtmlText";

const WhitepaperTab = ({
  fetchWhitepaperList,
  setCurrentPage,
  currentPage,
}) => {
  useEffect(() => {
    useWindowToTop();
  }, []);
  const [whitepaper, setWhitepaper] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const fetchWhitepaper = async () => {
    const result = await fetchWhitepaperList(`?pageNumber=${currentPage}`);
    if (result.status === 200) {
      const filtereData = result?.data?.docs?.data?.filter(
        (item) => item.status === true
      );
      setWhitepaper(filtereData);
      const limit = result?.data?.docs?.limit;
      const totalPages = result?.data?.docs?.totalDocs;
      const page = Math.floor(totalPages / limit);
      setTotalPages(page);
    }
  };

  useEffect(() => {
    fetchWhitepaper();
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=" text-gray-800 mt-4 py-4 ">
      <div className="flex flex-wrap items-center justify-center md:justify-around py-10">
        {whitepaper &&
          whitepaper?.map((row) => (
            <Link
              to={`/whitepapers/${row?.whitepaperLink
                ?.toLowerCase()
                ?.replace(/\s+/g, "-")}`}
              key={row._id}
            >
              <div className="card border-0 p-0 object-cover my-2 overflow-hidden flex flex-col">
                <img
                  src={BACKEND_URL + row.whitepaperImage}
                  alt={"Blog-releases"}
                  className="w-full h-52 rounded-t-lg"
                />
                <div className="flex bg-white h-full justify-between rounded-b-lg flex-col p-4">
                  <div className="text-lg font-semibold line-clamp-2 mt-6 hover:text-red-800">
                    {row.whitepaperTitle}
                  </div>
                  <div className="text-sm line-clamp-4">
                    <DisplayText htmlContent={row?.whitepaperDescription} />
                  </div>
                  <div className="flex mb-4 items-center connect-svg">
                    <div className="text-lg font-semibold">Read More</div>
                    <div className="w-20 h-12 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 73 48"
                      >
                        <circle
                          className="st0"
                          transform="rotate(-90 40 40)"
                          cx="55"
                          cy="45"
                          r="22.2"
                        ></circle>
                        <line
                          className="st1"
                          x1="1.4"
                          y1="23.6"
                          x2="44.1"
                          y2="23.6"
                        ></line>
                        <polygon
                          className="st2"
                          points="42.6 28.6 51.2 23.6 42.6 18.6 "
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        <Pagination
          pageNumber={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentPage: state.whitepaper.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWhitepaperList: (payload) => dispatch(performGetWhitepaperList(payload)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WhitepaperTab);
