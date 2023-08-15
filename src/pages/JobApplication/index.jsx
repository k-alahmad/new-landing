import React from "react";
import GradientText from "../../components/UI/GradientText";
import JobForm from "./components/JobForm";
import Header from "./components/Header";
import JobInfo from "./components/JobInfo";
const JobApplication = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center xl:w-[1270px] my-12 ">
        <JobInfo />
        <JobForm />
      </div>
    </div>
  );
};

export default JobApplication;
