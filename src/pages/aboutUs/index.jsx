import React from "react";
import kasra from "../../assets/images/aboutus/kasra.webp";
import maryam from "../../assets/images/aboutus/maryam.webp";
import dubai from "../../assets/images/aboutus/dubai.webp";
import GradientText from "../../components/UI/GradientText";
import aboutIcon from "../../assets/icons/about.svg";
import teamWorkIcon from "../../assets/icons/teamWork.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import facesIcon from "../../assets/icons/faces.svg";
import developmentIcon from "../../assets/icons/development.svg";
import Logo from "../../assets/logos/black-logo.svg";

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
        <p className="text-tiny">
          {/* {text} */}
          Lorem ipsum dolor sit amet . The graphic and typographic operators
          know this well, in reality all the professions dealing with the
          universe of communication have a stable relationship Lorem ipsum dolor
          sit amet . The graphic and typographic operators know this well, in
          reality all the professions dealing with the universe of communication
        </p>
      </div>
    );
  };

  return (
    <div className="mt-">
      <div className="xl:h-[500px] 2xl:h-[600px] flex justify-center items-center bg-headerBg bg-secondary bg-no-repeat bg-cover bg-center">
        <GradientText
          text={"Get To Know Us Closely And What We Excel At"}
          customStyle={
            "text-center text-big 2xl:text-bigger font-bold text-primary w-[50%]"
          }
        />
      </div>
      <div className="grid grid-cols-12 gap-7  mt-20">
        <div className="col-span-5 w-[80%] relative place-self-center">
          <div
            style={{
              background: "rgba(111, 111, 111, 0.24)",
            }}
            className="h-[140px] w-[140px] rounded-md rounded-tr-full backdrop-blur-[15px] absolute -right-[10%] -top-[10%]"
          />
          <img src={dubai} alt="" className="h-[600px] rounded-md" />
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
          <p className="text-bigger font-bold"> Mission</p>
          <p>
            Lorem ipsum dolor sit amet . The graphic and typographic operators
            know this well, in reality all the professions dealing with the
            universe of communication have a stable relationship Lorem ipsum
            dolor sit amet . The graphic and typographic operators know this
            well, in reality all the professions dealing with the universe of
            communication
          </p>
          <div className="grid grid-cols-2 gap-7">
            <MissionCard title={"Team Work"} icon={teamWorkIcon} />
            <MissionCard title={"Projects"} icon={projectsIcon} />
            <MissionCard title={"Development"} icon={developmentIcon} />
            <MissionCard title={"Projects"} icon={facesIcon} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-7  mt-20">
        <div className="col-span-6 w-[80%] relative place-self-center space-y-4">
          <p className="text-bigger font-bold"> Vision</p>
          <p className="text-small">
            We work with a clear and thoughtful vision to achieve what we aspire
            to
          </p>
          <ul className="list-disc ml-7 space-y-10 marker:text-primary list-outside">
            <li>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication{" "}
            </li>
            <li>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship Lorem ipsum
              dolor sit amet . The graphic and typographic operators know this
              well, in reality all the professions dealing with the universe of
              communication{" "}
            </li>
          </ul>
        </div>
        <div className="col-span-6 w-[80%] place-items-center space-y-7 relative">
          <div
            className="h-[630px] w-[390px] flex-shrink-0 rounded-lg backdrop-blur-[15px] absolute right-8 top-[7%] flex flex-col justify-between items-center px-10 py-16"
            style={{
              background:
                "linear-gradient(225deg, rgba(98, 98, 98, 0.24) 0%, rgba(98, 98, 98, 0.03) 100%)",
            }}
          >
            <p className="text-white text-small font-semibold">
              There is a new way to search for a house
            </p>

            <img src={Logo} alt="" />
          </div>
          <img src={dubai} className="h-[320px] w-full rounded-md" alt="" />
          <img src={dubai} className="h-[320px] w-[40%] rounded-md" alt="" />
          <img src={dubai} className="h-[320px] w-full rounded-md" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutUs;
