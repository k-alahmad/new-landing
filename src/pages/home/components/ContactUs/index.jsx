import React from "react";
import contact330 from "../../../../assets/images/home/330contact.webp";
import contactAmber from "../../../../assets/images/home/ambercontact.webp";
import RegisterForm from "../../../../components/Forms/RegisterForm";
const ContactUs = () => {
  const RotatedCard = ({ image, customStyle }) => {
    return (
      <div
        className={`p-1 rounded-md bg-white absolute ${customStyle} rotate-[-13.177deg]`}
      >
        <img
          src={image}
          className="h-[200px] w-[200px] sm:w-[300px] sm:h-[300px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] xl:h-[350px] xl:w-[350px] 2xl:h-[450px] 2xl:w-[450px] rounded-md"
          alt=""
        />
      </div>
    );
  };
  return (
    <div className="py-32 px-[5%]">
      <div
        style={{
          background: "linear-gradient(332deg, #DDB26E -0%, #171534 50%)",
        }}
        className="h-[720px] md:h-[400px]  2xl:h-[500px] rounded-md relative"
      >
        <div className="relative h-[270px] sm:h-[320px] md:hidden">
          <RotatedCard
            image={contact330}
            customStyle={" top-12 right-0 sm:right-12"}
          />
          <RotatedCard image={contactAmber} customStyle={"top-0 sm:left-12"} />
        </div>
        <div className="text-white md:w-[40%]  flex p-7">
          <RegisterForm />
        </div>
        <RotatedCard
          image={contact330}
          customStyle={"max-md:hidden md:right-[24%] xl:right-[22%] md:top-3"}
        />
        <RotatedCard
          image={contactAmber}
          customStyle={"max-md:hidden md:-right-[2%] xl:right-0 md:top-24"}
        />
      </div>
    </div>
  );
};

export default ContactUs;
