import React from "react";
import { useRouteError } from "react-router-dom";
import turacoz from "../../assets/images/turacoz-icon.png";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={turacoz} alt="Loading..." />
      <div className="flex mt-12 flex-col justify-center items-center h-full text-red-600 text-lg">
        <div>Oops Something went wrong!!!!!</div>
        <div className="err">{err.data}</div>
      </div>
    </div>
  );
};

export default Error;
