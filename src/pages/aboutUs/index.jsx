import React from "react";
import GradientText from "../../components/UI/GradientText";
import aboutIcon from "../../assets/icons/about.svg";
import Logo from "../../assets/logos/black-logo.svg";
import { data } from "../../data/aboutUsData";
const AboutUs = () => {
  const MissionCard = ({ title, text, icon }) => {
    return (
      <div className="w-[90%] space-y-4">
        <div className="flex justify-start items-center gap-x-2">
          <div
            style={{
              background:
                "linear-gradient(120.27deg, rgba(111, 111, 111, 0.24), 60%, rgba(22, 21, 53, 1) 100%)",
            }}
            className="p-3 rounded-xl shadow-md"
          >
            <img src={icon} alt="icon" />
          </div>
          <p className="font-semibold text-small">{title}</p>
        </div>
        <p className="text-tiny">{text}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="h-[380px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] flex justify-center items-center bg-headerBg bg-secondary bg-no-repeat bg-cover bg-center">
        <GradientText
          text={data.headerTitle}
          customStyle={
            "text-center text-big 2xl:text-bigger font-bold text-primary w-[90%] md:w-[50%]"
          }
        />
      </div>
      <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:grid md:grid-cols-12 gap-7 mt-20 max-md:px-[5%] ">
        <div className="col-span-5 w-[] md:w-[90%] 2xl:w-[80%] relative place-self-center">
          <div
            style={{
              background: "rgba(111, 111, 111, 0.24)",
            }}
            className="h-[140px] w-[140px] rounded-md rounded-tr-full backdrop-blur-[15px] absolute -right-[10%] -top-[10%]"
          />
          <img
            src={data.mission.image}
            alt=""
            className="h-[600px] rounded-md"
          />
          <div
            style={{
              background:
                "linear-gradient(225deg, rgba(98, 98, 98, 0.24) 0%, rgba(98, 98, 98, 0.03) 100%)",
            }}
            className=" h-[200px] w-[80%] backdrop-blur-[15px] absolute z-20 -bottom-[10%] left-[10%] flex justify-evenly items-center rounded-md"
          >
            <div className="text-small text-white font-semibold ">
              <p>Our goal is to provide</p>
              <p>best offers for homes in Dubai</p>
            </div>
            <div className="w-[60px] h-[60px] bg-primary rounded-md -translate-y-24 flex justify-center items-center">
              <img src={aboutIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-7 space-y-4">
          <p className="text-bigger font-bold"> {data.mission.title} </p>
          <p>{data.mission.description}</p>
          <div className="grid grid-cols-2 gap-7">
            {data.mission.items.map((item, index) => {
              return (
                <MissionCard
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  text={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:grid md:grid-cols-12 gap-7 mt-20 max-md:px-[5%] ">
        <div className="col-span-6 md:w-[80%] relative place-self-center space-y-4">
          <p className="text-bigger font-bold"> {data.vision.title} </p>
          <p className="text-small">{data.vision.description}</p>
          <ul className="list-disc ml-7 space-y-14 marker:text-primary list-outside pt-12">
            {data.vision.items.map((item, index) => {
              return <li key={index}>{item.text}</li>;
            })}
          </ul>
        </div>
        <div className="col-span-6 md:w-[80%] place-items-center space-y-7 relative">
          <div
            className="h-[550px] lg:h-[630px] md:max-xl:w-[240px] w-[390px] flex-shrink-0 rounded-lg backdrop-blur-[15px] absolute md:max-xl:right-0 right-8 top-[4%] lg:top-[7%] flex flex-col justify-between items-center px-10 py-16"
            style={{
              background:
                "linear-gradient(225deg, rgba(98, 98, 98, 0.24) 0%, rgba(98, 98, 98, 0.03) 100%)",
            }}
          >
            <p className="text-white text-small font-semibold">
              There is a new way to search for a house
            </p>

            <img src={Logo} alt="" className="h-[135px] w-[185px]" />
          </div>
          <img
            src={data.vision.imageOne}
            className="h-[250px] lg:h-[320px] w-full rounded-md"
            alt=""
          />
          <img
            src={data.vision.imageTwo}
            className="h-[250px] lg:h-[320px] w-[40%] rounded-md"
            alt=""
          />
          <img
            src={data.vision.imageThree}
            className="h-[250px] lg:h-[320px] w-full rounded-md"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutUs;
