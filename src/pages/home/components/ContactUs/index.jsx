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
          className="xl:h-[350px] xl:w-[350px]  2xl:h-[450px] 2xl:w-[450px] rounded-md"
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
        className="xl:h-[400px] 2xl:h-[500px] rounded-md relative"
      >
        <div className="text-white w-[40%] h-full flex p-7">
          <RegisterForm />
        </div>
        <RotatedCard image={contact330} customStyle={"right-[22%] top-3"} />
        <RotatedCard image={contactAmber} customStyle={"right-0 top-24"} />
      </div>
    </div>
  );
};

export default ContactUs;
