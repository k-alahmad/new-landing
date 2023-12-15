export const systemSettings = {
	darkMode: false,
	colors: {
		light: {
			primary: "#161535",
			secondary: "white",
			third: "rgba(221, 178, 110, 1)",
			fourth: "rgba(111, 111, 111, 0.50)",
			fifth: "rgba(50, 50, 50, 1)",
		},
		dark: {
			primary: "",
			secondary: "",
			third: "",
			fourth: "",
			fifth: "",
		},
	},
};
//rgba(221, 178, 110, 1)
export default systemSettings.darkMode
	? systemSettings.colors.dark
	: systemSettings.colors.light; // this is for tailwind since it only works with export default (module)
