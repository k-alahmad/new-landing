import React, { useRef, useState } from "react";
import { data } from "../../../../data/projectsData";
import Button from "../../../../components/UI/Button";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import bath from "../../../../assets/icons/bath.svg";
import bedroom from "../../../../assets/icons/bedroom.svg";
import squareft from "../../../../assets/icons/squareft.svg";
import Slider from "react-slick";
import { FaDollarSign } from "react-icons/fa";
const Properties = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  return (
    <div className="px-[5%]">
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
          width: width - (width * 10) / 100,
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
              <div key={index}>
                <div className="py-1 text-smaller w-full">
                  <p className="font-semibold text-[#DDB26E] text-bigger">
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                  <div className="grid grid-cols-4 gap-8 py-4">
                    <p>{item.location}</p>
                    <p>{item.handover}</p>
                    <p>{item.plan.name}</p>
                    <p>{item.startingPrice}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-12">
                  {item.propertes.map((i, idx) => {
                    return (
                      <div
                        key={idx}
                        className="w-full flex justify-center items-center"
                      >
                        <div className="w-[400px] drop-shadow-md rounded-md bg-[#FFF]">
                          <img
                            src={i.image}
                            className="h-[340px] rounded-t-md w-full"
                            alt=""
                          />
                          <div className="mx-5">
                            <div className="w-[190px] bg-[#DDB26E] flex gap-x-3 px-2 py-2 items-center rounded-md -translate-y-4">
                              <FaDollarSign />
                              {i.startingPrice}
                            </div>
                            <p className="font-semibold text-smaller">
                              {"Property Name"}
                            </p>
                            <p>{"Property small description"}</p>
                            <div className="h-[1px] bg-gray-300 my-2" />
                            <br />
                            <br />
                          </div>
                          <div className="bg-[#E7E7E7] px-3 py-2 flex justify-evenly items-center font-bold text-[18px] rounded-b-md">
                            <div className="flex flex-col items-center justify-center space-y-1">
                              <div className="flex gap-x-1 items-center">
                                <p>{i.bathsNumber} </p>
                                <img
                                  src={bath}
                                  className="w-[24px] h-[24px]"
                                  alt=""
                                />
                              </div>
                              <p className="font-normal text-[12px] text-gray-700">
                                Baths
                              </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-1">
                              <div className="flex gap-x-1 items-center">
                                <p>{i.bedroomNumber} </p>
                                <img
                                  src={bedroom}
                                  className="w-[24px] h-[24px]"
                                  alt=""
                                />
                              </div>
                              <p className="font-normal text-[12px] text-gray-700">
                                Rooms
                              </p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-1">
                              <div className="flex gap-x-1 items-center">
                                <p>{i.area} </p>
                                <img
                                  src={squareft}
                                  className="w-[24px] h-[24px]"
                                  alt=""
                                />
                              </div>
                              <p className="font-normal text-[12px] text-gray-700">
                                Square (Ft)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Properties;
