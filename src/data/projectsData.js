import pic330 from "../assets/images/home/330.webp";
import picJlt from "../assets/images/home/jlt.webp";
import picAmber from "../assets/images/home/amber.webp";
import studio from "../assets/images/properties/sobha/studio.webp";
import JLTstudio from "../assets/images/properties/jlt/studio.webp";
import Amberstudio from "../assets/images/properties/amber/studio.webp";
import oneBR from "../assets/images/properties/sobha/onebr.webp";
import JLToneBR from "../assets/images/properties/jlt/onebr.webp";
import AmberoneBR from "../assets/images/properties/amber/onebr.webp";
import twoBR from "../assets/images/properties/sobha/twobr.webp";
import JLTtwoBR from "../assets/images/properties/jlt/twobr.webp";
import AmbertwoBR from "../assets/images/properties/amber/twobr.webp";
import JLTthreeBR from "../assets/images/properties/jlt/threebr.webp";
// import threeBR from "../assets/images/properties/3BR.webp";
export const data = [
	{
		name: "330riverside",
		image: pic330,
		title: "Unveil A Soul-Stirring Experience",
		description:
			"As You Surrender To The Enchanting Call Of The Water In Your Vicinity",
		plan: {
			name: "Post-handover",
			onBooking: "20%",
			duringConstruction: "60%",
			onHandover: "20%",
		},
		startingPrice: "1.2M AED",
		url: "https://330riverside.avarealestate.ae/en",
		location: "Nad Al Sheba 1",
		handover: "Q4 2026",
		propertes: [
			{
				name: "1.5 Bedroom ",
				smallDescription: "With Store room, Powder Room, and Balcony",
				startingPrice: "AED 1.57M",
				area: "639.16",
				bedroomNumber: "1.5",
				bathsNumber: "1",
				image: studio,
			},
			{
				name: "1 Bedroom",
				smallDescription: "With Balcony",
				startingPrice: "AED 1.5M",
				area: "748.84",
				bedroomNumber: "1",
				bathsNumber: "1",
				image: oneBR,
			},
			{
				name: "2 Bedroom",
				smallDescription: "With Balcony",
				startingPrice: "AED 2.35M",
				area: "1054",
				bedroomNumber: "2",
				bathsNumber: "1",
				image: twoBR,
			},
		],
	},
	{
		name: "JLT Project",
		image: picJlt,
		title: "Ready to Move Luxury Apartment",
		description:
			"Residents can wake up to the serene views of the water every morning. With a flexible post-handover payment plan option available, owning your dream home",
		plan: {
			name: "2 Years Post-handover",
			onBooking: "20%",
			onHandover: "30%",
			postHandover: "50%",
		},
		startingPrice: "1.5M AED",
		url: "https://jltproject.avarealestate.ae/",
		location: "JLT",
		handover: "Q3 2023",
		propertes: [
			{
				name: "One Bedroom",
				smallDescription: "",
				startingPrice: "1.5M",
				area: "861",
				bedroomNumber: "1",
				bathsNumber: "1",
				image: JLToneBR,
			},
			{
				name: "Two Bedroom",
				smallDescription: "",
				startingPrice: "2.13M",
				area: "1292",
				bedroomNumber: "2",
				bathsNumber: "1",
				image: JLTtwoBR,
			},
			{
				name: "Three Bedroom",
				smallDescription: "",
				startingPrice: "4.6M",
				area: "2218",
				bedroomNumber: "3",
				bathsNumber: "1",
				image: JLTthreeBR,
			},
		],
	},
	{
		name: "Amber",
		image: picAmber,
		title: "Living In Your Dream Home Isn't Far Away!",
		description: "Move In Next Year.",
		plan: {
			name: "Handover plan",
			onBooking: "20%",
			duringConstruction: "50%",
			onHandover: "30%",
		},
		startingPrice: "598K AED",
		url: "https://amber.avarealestate.ae/",
		location: "JVC",
		handover: "Q4 2024",
		propertes: [
			{
				name: "Studio",
				smallDescription: "",
				startingPrice: "598K",
				area: "458.43",
				bedroomNumber: "Std",
				bathsNumber: "1",
				image: Amberstudio,
			},
			{
				name: "One Bedroom",
				smallDescription: "",
				startingPrice: "790K",
				area: "682.75",
				bedroomNumber: "1",
				bathsNumber: "1",
				image: AmberoneBR,
			},
			{
				name: "Two Bedroom",
				smallDescription: "",
				startingPrice: "1.6M",
				area: "1175.74",
				bedroomNumber: "2",
				bathsNumber: "1",
				image: AmbertwoBR,
			},
		],
	},
	{
		name: "ELBURS Tower",
		image: picAmber,
		title: "Up to five years payment plan",
		description: "With only a 10% down payment and 1% monthly installment",
		plan: {
			name: "Post-Handover for 2 Years",
			onBooking: "10%",
			duringConstruction: "60%",
			postHandover: "30%",
		},
		startingPrice: "550K AED",
		url: "https://www.instagram.com/reel/CvewXO1PyIE/?igshid=MzRlODBiNWFlZA==",
		location: "JVT",
		handover: "January 2026",
		propertes: [
			{
				name: "Studio",
				smallDescription: "Luxurious studio",
				startingPrice: "550K",
				area: "375",
				bedroomNumber: "Std",
				bathsNumber: "1",
				image: Amberstudio,
			},
			{
				name: "One Bedroom",
				smallDescription: "",
				startingPrice: "850K",
				area: "649.39",
				bedroomNumber: "1",
				bathsNumber: "1",
				image: AmberoneBR,
			},
			{
				name: "Two Bedrooms",
				smallDescription: "",
				startingPrice: "1.2M",
				area: "970",
				bedroomNumber: "2",
				bathsNumber: "1",
				image: AmbertwoBR,
			},
		],
	},
];
