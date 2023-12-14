import projectOneHeader from "../assets/images/ghaf-header.webp";
import projectTwoHeader from "../assets/images/acres.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import coinIcon from "../assets/icons/coin.svg";
export const projectsData = [
	{
		id: 1,
		ProjectName: { en: "Tilal Al Ghaf", ar: "تلال الغاف" },
		HeaderTitle: {
			en: "Ultra Luxury Villa at Tillal Al Ghaf",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		HeaderImage: projectOneHeader,
		InfoTitle: {
			en: "Ultra Luxury Villa at Tillal Al Ghaf",
			ar: "فلل فاخرة جدا من تلال الغاف",
		},
		InfoSubTitle: {
			en: "Enjoy panoramic views of the pristine Lagoon AL Ghaf as you indulge in a truly luxurious lifestyle",
			ar: "استمتع بإطلالات بانورامية على بحيرة الغاف البكر بينما تنغمس في أسلوب حياة فاخر حقًا",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED24.6M", ar: "AED24.6M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Hessa Street", ar: "شارع حصة" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
		],
		Nearby: [
			{
				Duration: "Next To",
				Place: { en: "Butterfly Garnden", ar: "" },
				Image: "",
			},
			{ Duration: "15 Min", Place: { en: "Dubai Marina", ar: "" }, Image: "" },
			{
				Duration: "10 Min",
				Place: { en: "Dubai Hills Mall", ar: "" },
				Image: "",
			},
			{ Duration: "29 Min", Place: { en: "DXB Airport", ar: "" }, Image: "" },
			{
				Duration: "20 Min",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: "",
			},
			{
				Duration: "15    Min",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: "",
			},
		],
		Video: "",
	},
	{
		id: 2,
		ProjectName: { en: "Acres", ar: "Acres" },
		HeaderTitle: {
			en: "The Acres, every step inside brings you closer to the outdoors.",
			ar: "نص عربي للمشروع الثاني أي شي",
		},
		HeaderImage: projectTwoHeader,
		InfoTitle: { en: "Acres Project Main Title", ar: "عنوان المشروع الثاني" },
		InfoSubTitle: {
			en: "Acres Project Description",
			ar: "شرح مبسط عن المشروع الثاني ",
		},
		InfoData: [
			{
				Icon: coinIcon,
				Title: { en: "AED24.6M", ar: "AED24.6M" },
				SubTitle: { en: "Starting Price", ar: "بأسعار تبدأ من" },
			},
			{
				Icon: locationIcon,
				Title: { en: "Hessa Street", ar: "شارع حصة" },
				SubTitle: { en: "Location", ar: "الموقع" },
			},
		],
		Nearby: [
			{
				Duration: "Next To",
				Place: { en: "Butterfly Garnden", ar: "" },
				Image: "",
			},
			{ Duration: "15 Min", Place: { en: "Dubai Marina", ar: "" }, Image: "" },
			{
				Duration: "10 Min",
				Place: { en: "Dubai Hills Mall", ar: "" },
				Image: "",
			},
			{ Duration: "29 Min", Place: { en: "DXB Airport", ar: "" }, Image: "" },
			{
				Duration: "20 Min",
				Place: { en: "Dubai Downtown", ar: "" },
				Image: "",
			},
			{
				Duration: "15    Min",
				Place: { en: "Mall of Emirates", ar: "" },
				Image: "",
			},
		],
		Video: "",
	},
];
