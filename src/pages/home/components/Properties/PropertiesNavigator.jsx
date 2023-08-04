import React from "react";
import { data } from "../../../../data/projectsData";
import Button from "../../../../components/UI/Button";
const PropertiesNavigator = ({ selected, setSelected, sliderRef }) => {
  return (
    <div className="flex justify-center gap-x-2 md:gap-x-12 items-center py-6">
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
  );
};

export default PropertiesNavigator;
