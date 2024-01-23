import React from "react";
import turacoz from "../../assets/images/turacoz-icon.png";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={turacoz} alt="Loading..." />
    </div>
  );
};

export default Loading;
