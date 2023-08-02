import React, { useState } from "react";
import { data } from "../../../../data/projectsData";
import Button from "../../../../components/UI/Button";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import Slider from "react-slick";
const Properties = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  return (
    <div className="px-[10%]">
      <div className="flex justify-center gap-x-12 items-center py-6">
        {data.map((item, index) => {
          return (
            <Button
              text={item.name}
              bgColor={index == selected ? "bg-[#D6B477]/50" : "bg-[#D6B477]"}
              borderRadius={6}
              key={index}
              w={"150px"}
              onClick={() => {
                setSelected(index);
              }}
            />
          );
        })}
      </div>
      <div className="py-1 text-smaller ">
        <p>{data[selected].title}</p>
        <p>{data[selected].description}</p>
        <p>{data[selected].location}</p>
        <p>{data[selected].handover}</p>
        <p>{data[selected].plan}</p>
        <p>{data[selected].startingPrice}</p>
      </div>
      <div
        style={{
          width: width - (width * 12) / 100,
          maxWidth: "1920px",
        }}
      >
        <Slider touchMove={false} slidesToShow={3} slidesToScroll={3}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Properties;
