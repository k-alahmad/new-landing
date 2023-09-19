import React from "react";
import contact330 from "../../../../assets/images/home/330contact.webp";
import contactAmber from "../../../../assets/images/home/ambercontact.webp";
import RegisterForm from "../../../../components/Forms/RegisterForm";
const ContactUs = () => {
  return (
    <div className="pt-16 ">
      <div
        style={{
          background: "linear-gradient(290deg, #DDB26E -0%, #171534 50%)",
        }}
        className="rounded-md relative lg:grid lg:grid-cols-12"
      >
        <div className="text-white bg-contactLinesBg bg-cover bg-right-top flex flex-col p-14 col-span-5">
          <p className="font-medium text-med md:text-big ">
            Contact us, let us help you choose the right apartment for you
          </p>
          <div className="w-full lg:w-[90%] place-self-start mt-12">
            <RegisterForm />
          </div>
        </div>

        <div className="relative overflow-hidden col-span-7 max-lg:hidden">
          <div className="absolute grid grid-cols-2 gap-4 -rotate-[12deg] lg:-right-60 xl:-right-40 2xl:-right-16 -top-[40%]">
            <img
              src={contact330}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
            <img
              src={contactAmber}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
            <img
              src={contact330}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
            <img
              src={contactAmber}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
            <img
              src={contact330}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
            <img
              src={contactAmber}
              alt=""
              className="w-[400px] h-[400px] bg-white p-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
