import React, { useRef, useState } from "react";
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
    return (
      <div
        className={`p-[2px] m-1 drop-shadow-2xl ${
          selected == id ? "border-primary" : "border-secondary"
        } border-white border-2 rounded-full transition-all duration-500`}
        onClick={() => {
          setSelected(id);
          sliderRef1.current.slickGoTo(id);
          sliderRef2.current.slickGoTo(id);
        }}
      >
        <div className="bg-[#161535]/60 h-9 w-9 rounded-full text-white flex justify-center items-center font-bold text-smaller cursor-pointer">
          {id + 1}
        </div>
      </div>
    );
  };
  return (
    <div className="md:grid md:grid-cols-12 gap-0 xl:h-[500px] 2xl:h-[600px] relative">
      <div className="col-span-7 bg-headerBg text-white bg-[#161535] bg-center bg-no-repeat bg-cover max-md:pt-24">
        <Slider
          ref={sliderRef1}
          touchMove={false}
          dots={false}
          arrows={false}
          autoplay
          autoplaySpeed={5000}
          infinite={true}
          className="md:mt-[15%] xl:mt-[12%] 2xl:mt-[15%] ml-[3%] md:ml-[5%] 2xl:ml-[10%]"
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
                className="flex flex-col justify-center items-center space-y-4 xl:space-y-7 max-md:py-4 py-2"
                key={index}
              >
                <p className="text-med xl:text-[38px] 2xl:text-big font-medium">
                  {item.title}
                </p>
                <p className="w-[70%] text-[14px] lg:text-[18px] font-light text-gray-300">
                  {item.description}
                </p>
                <div className="flex gap-x-12">
                  <div className="flex gap-x-3 items-center">
                    <img src={wallet} alt="" />
                    <div>
                      <p className="text-smaller lg:text-small">
                        {item.plan.name}
                      </p>
                      <p className="text-[14px] text-gray-300">Payment Plan</p>
                    </div>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <img src={coin} alt="" />
                    <div>
                      <p className="text-smaller lg:text-small">
                        {item.startingPrice}
                      </p>
                      <p className="text-[14px] text-gray-300">
                        Starting Price
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  bgColor={"bg-primary"}
                  text={"More Details"}
                  borderRadius={6}
                  textColor={"text-white"}
                  customStyle={"text-tiny ml-2"}
                  w={"200px"}
                  h={"50px"}
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
                className="w-full h-[350px] md:h-[420px] xl:h-[500px] 2xl:h-[600px]"
                alt=""
              />
            );
          })}
        </Slider>
      </div>
      <div className="space-y-9 max-md:grid max-md:grid-cols-3 max-md:place-items-center max-md:gap-x-4 absolute top-[52%] sm:top-[47%] right-[2%] md:top-[30%] md:right-[39%] lg:right-[39.6%] xl:right-[39.5%] 2xl:right-[40.3%]">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full h-full self-end">
              <Dot id={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
