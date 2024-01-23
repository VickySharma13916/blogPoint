import React, { useEffect, useState } from "react";
import { performGetHeaderAddList } from "../../redux/actionCreators/headerAddCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../services/constant";

const HeaderAdvertise = ({ headerAdvertiselist }) => {
  const [HeaderAddData, setHeaderAddData] = useState([]);
  const fetchHeaderAddData = async () => {
    const result = await headerAdvertiselist();
    if (result.status === 200) {
      setHeaderAddData(result?.data?.docs?.data);
    }
  };

  useEffect(() => {
    fetchHeaderAddData();
  }, []);

  return (
    <>
      {HeaderAddData &&
        HeaderAddData?.map((item) => {
          return (
            <div className="container mx-auto flex justify-end" key={item?._id}>
              <Link to={item?.headerAddLink}>
                <img
                  src={BACKEND_URL + item?.headerAddImage}
                  alt="Header Advertise Image"
                />
              </Link>
            </div>
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  headerAdvertiselist: (payload) => dispatch(performGetHeaderAddList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdvertise);
