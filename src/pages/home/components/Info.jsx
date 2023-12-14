import React from "react";
import { projectsData } from "../../../data/projectsData";
import { useTranslation } from "react-i18next";
const Info = ({ selectedProject }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <div className="w-[80vw]">
        <p className="font-semibold text-med sm:text-big">
          {projectsData[selectedProject].InfoTitle[i18n.language]}
        </p>
        <p className="text-smaller">
          {projectsData[selectedProject].InfoSubTitle[i18n.language]}
        </p>
        <div className="flex max-sm:flex-col sm:gap-x-6 mt-4 max-sm:space-y-2">
          {projectsData[selectedProject].InfoData.map((item, index) => {
            return (
              <div className="flex items-center gap-x-1" key={index}>
                <img src={item.Icon} alt={item.Title} className="h-10 w-10" />
                <div className="space-y-">
                  <p className="font-bold text-smaller">
                    {item.Title[i18n.language]}
                  </p>
                  <p className="text-tiny">{item.SubTitle[i18n.language]} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
