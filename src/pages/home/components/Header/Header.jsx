import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { data } from "../../../../data/projectsData";
import wallet from "../../../../assets/icons/wallet.svg";
import coin from "../../../../assets/icons/coin.svg";
import Button from "../../../../components/UI/Button";
const Header = () => {
  const [selected, setSelected] = useState(0);
  const sliderRef1 = useRef();
  const sliderRef2 = useRef();
  const Dot = ({ id }) => {
    console.log(id);
    console.log(selected);
    return (
      <div
        className={`p-[2px] m-1 drop-shadow-2xl ${
          selected == id ? "border-[#AA8A3A]" : "border-white/80"
        } border-white border-2 rounded-full transition-all duration-500`}
        onClick={() => {
          setSelected(id);
          sliderRef1.current.slickGoTo(id);
          sliderRef2.current.slickGoTo(id);
        }}
      >
        <div className="bg-[#161535]/80 h-9 w-9 rounded-full text-white flex justify-center items-center font-bold text-smaller cursor-pointer">
          {id + 1}
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-12 gap-0 h-[600px] relative">
      <div className="col-span-7 bg-headerBg text-white bg-[#161535] bg-center bg-no-repeat bg-cover">
        <Slider
          ref={sliderRef1}
          touchMove={false}
          dots={false}
          arrows={false}
          autoplay
          autoplaySpeed={5000}
          infinite={true}
          className="mt-[15%] ml-[10%]"
          pauseOnHover={false}
          pauseOnFocus={false}
          beforeChange={(prev, next) => {
            setSelected(next);
            sliderRef2.current.slickGoTo(next);
          }}
        >
          {data.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center space-y-7"
                key={index}
              >
                <p className="text-big font-medium">{item.title} </p>
                <p className="w-[70%] text-[18px] font-light text-gray-300">
                  {item.description}
                </p>
                <div className="flex gap-x-12">
                  <div className="flex gap-x-3 items-center">
                    <img src={wallet} alt="" />
                    <div>
                      <p className="text-small">{item.plan} </p>
                      <p className="text-[14px] text-gray-300">Payment Plan</p>
                    </div>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <img src={coin} alt="" />
                    <div>
                      <p className="text-small">{item.startingPrice} </p>
                      <p className="text-[14px] text-gray-300">
                        Starting Price
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  bgColor={"bg-[#DDB26E]"}
                  text={"More Details"}
                  borderRadius={6}
                  textColor={"text-black"}
                  customStyle={"text-tiny ml-2"}
                  w={"200px"}
                  h={"55px"}
                  onClick={() => {
                    window.open(item.url, "_blank", "noopener,noreferrer");
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="col-span-5">
        <Slider
          ref={sliderRef2}
          touchMove={false}
          dots={false}
          arrows={false}
          autoplay
          autoplaySpeed={5000}
          infinite={true}
          vertical
          verticalSwiping={false}
          pauseOnHover={false}
          pauseOnFocus={false}
          className="w-full h-full"
        >
          {data.map((item, index) => {
            return (
              <img
                src={item.image}
                key={index}
                className="w-full h-[600px]"
                alt=""
              />
            );
          })}
        </Slider>
      </div>

      <div className="space-y-9 absolute top-[30%] right-[40.3%]">
        {data.map((item, index) => {
          return <Dot id={index} />;
        })}
      </div>
    </div>
  );
};

export default Header;
