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
				/////////
				primary: "#AA8A3A",
				secondary: "#161535",
			},
			backgroundImage: {
				headerBg: "url(./src/assets/images/home/headerBg.png)",
			},
			backgroundColor: {
				redss:
					"radial-gradient(152.99% 768.95% at 126.35% 26.15%, #1A5F7A 0%, #57C5B6 27.72%, #159895 70.83%, #27E1C1 100%)",
			},
		},
	},
	plugins: [],
};
