/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        huge: "87px",
        mobileHuge: "60px",
        bigger: "70px",
        big: "45px",
        med: "30px",
        small: "23px",
        smaller: "20px",
        tiny: "16px",
      },
      fontFamily: {
        REG: "LAMASANSREGULAR", //400(normal)
        MED: "LAMASANSMEDIUM", //500
        BOLD: "LAMASANSBOLD", //700
        EXBOLD: "LAMASANSEXTRABOLD", //800
      },
      colors: {
        white: "#FFFFFF",
        lightBlack: "#222222",
        grey: "#F0F0F0",
        offWhite: "#F1F1F1",
        lightGrey: "rgba(182, 182, 182, 1)",
        WhiteOP: "rgba(255, 255, 255, 0.5)",
        lightGreyOP: "rgba(182, 182, 182, 0.7)",
        gradiant:
          "linear-gradient(to right,rgba(21, 152, 149, 1) , rgba(39, 225, 193, 1)",
        darkBlue: "#231A36",
        sharpBlue: "#002B5B",
      },
      backgroundImage: {
        header:
          "radial-gradient(152.99% 768.95% at 126.35% 26.15%, #1A5F7A 0%, #57C5B6 27.72%, #159895 70.83%, #27E1C1 100%)",
        contactUs: "linear-gradient(86.03deg, #159895 -1.16%, #27E1C1 98.57%)",
        contactUsOP:
          "linear-gradient(86.03deg, rgba(21,152,149,0.2) -1.16%, rgba(39,225,193,0.2) 98.57%)",
        headerImage: "url(./assets/images/header.png)",
        whyUsImage: "url(./assets/images/whyUs.png)",
        ServicesBack: "url(./assets/images/ServicesBackpng.png)",

        ads: "url(./src/assets/images/ads.jpg)",
        Design: "url(./src/assets/images/Design.jpg)",
        stand: "url(./src/assets/images/stand.jpg)",
        gift: "url(./src/assets/images/gift.jpg)",
        code: "url(./src/assets/images/code.jpg)",
        billboard: "url(./src/assets/images/Billboard.jpg)",
        event: "url(./src/assets/images/event.jpg)",
        print: "url(./src/assets/images/print.jpg)",
      },
      backgroundColor: {
        redss:
          "radial-gradient(152.99% 768.95% at 126.35% 26.15%, #1A5F7A 0%, #57C5B6 27.72%, #159895 70.83%, #27E1C1 100%)",
      },
    },
  },
  plugins: [],
};
