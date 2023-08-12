import React from "react";
import { data } from "../../../../data/projectsData";
import Button from "../../../../components/UI/Button";
import { MdArrowForward } from "react-icons/md";
const PropertiesNavigator = ({ selected, setSelected, sliderRef }) => {
  return (
    <div className="md:grid md:grid-cols-12 py-6">
      <div className="col-span-7 flex justify-start gap-x-2 sm:gap-x-6 md:gap-x-4 lg:gap-x-12 items-center">
        {data.map((item, index) => {
          return (
            <Button
              text={item.name}
              bgColor={index == selected ? "bg-secondary" : "bg-primary"}
              borderRadius={6}
              key={index}
              customStyle={"text-white text-tiny md:text-smaller"}
              w={"150px"}
              h={"60px"}
              onClick={() => {
                setSelected(index);
                sliderRef.current.slickGoTo(index);
              }}
            />
          );
        })}
      </div>
      <div className="col-span-5 flex max-md:justify-center md:justify-end items-center">
        <Button
          text={data[selected].name}
          borderRadius={6}
          icon={<MdArrowForward className="text-med text-secondary" />}
          customStyle={"text-tiny md:text-smaller !border-2"}
          textColor={"text-secondary"}
          borderColor={"rgb(170 138 58)"}
          w={"280px"}
          h={"60px"}
          onClick={() => {
            window.open(data[selected].url, "_blank", "noopener,noreferrer");
          }}
        />
      </div>
    </div>
  );
};

export default PropertiesNavigator;
