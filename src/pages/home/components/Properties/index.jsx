import React, { useRef, useState } from "react";
import { data } from "../../../../data/projectsData";
import Button from "../../../../components/UI/Button";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import Slider from "react-slick";
import { FaDollarSign } from "react-icons/fa";
const Properties = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
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
                sliderRef.current.slickGoTo(index);
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          width: width - (width * 12) / 100,
          maxWidth: "1920px",
        }}
      >
        <Slider
          ref={sliderRef}
          touchMove={false}
          slidesToShow={1}
          slidesToScroll={1}
          dots={false}
          arrows={false}
          infinite={false}
          autoplay={false}
        >
          {data.map((item, index) => {
            return (
              <>
                <div className="py-1 text-smaller w-full ">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.location}</p>
                  <p>{item.handover}</p>
                  <p>{item.plan}</p>
                  <p>{item.startingPrice}</p>
                </div>
                <div className="grid grid-cols-3">
                  {item.propertes.map((i, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-full flex justify-center items-center"
                      >
                        <div className="border-[1px] border-gray-950 w-[300px]">
                          <img src={i.image} className="h-[300px]" alt="" />
                          <div className="w-[200px] bg-[#DDB26E] flex gap-x-3 items-center rounded-md">
                            <FaDollarSign />
                            {i.startingPrice}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Properties;
