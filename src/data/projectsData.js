import projectOneHeader from "../assets/images/ghaf-header.webp";
import locationIcon from "../assets/icons/location-icon.svg";
import coinIcon from "../assets/icons/coin.svg";
import DubaiVideo from "../assets/videos/dubai.mp4";
export const projectsData = [
  {
    id: 1,
    ProjectName: { en: "Tilal Al Ghaf", ar: "" },
    HeaderTitle: { en: "Ultra Luxury Villa at Tillal Al Ghaf", ar: "" },
    HeaderImage: projectOneHeader,
    InfoTitle: { en: "Ultra Luxury Villa at Tillal Al Ghaf", ar: "" },
    InfoSubTitle: {
      en: "Enjoy panoramic views of the pristine Lagoon AL Ghaf as you indulge in a truly luxurios lifestyle",
      ar: "",
    },
    InfoData: [
      {
        Icon: coinIcon,
        Title: { en: "AED24.6M", ar: "" },
        SubTitle: { en: "startingPrice", ar: "" },
      },
      {
        Icon: locationIcon,
        Title: { en: "Hessa Street", ar: "" },
        SubTitle: { en: "Location", ar: "" },
      },
    ],
    Nearby: [
      {
        Duration: "Next To",
        Place: { en: "Butterfly Garnden", ar: "" },
        Image: projectOneHeader,
      },
      {
        Duration: "15 Min",
        Place: { en: "Dubai Marina", ar: "" },
        Image: projectOneHeader,
      },
      {
        Duration: "10 Min",
        Place: { en: "Dubai Hills Mall", ar: "" },
        Image: projectOneHeader,
      },
      {
        Duration: "29 Min",
        Place: { en: "DXB Airport", ar: "" },
        Image: projectOneHeader,
      },
      {
        Duration: "20 Min",
        Place: { en: "Dubai Downtown", ar: "" },
        Image: projectOneHeader,
      },
      {
        Duration: "15    Min",
        Place: { en: "Mall of Emirates", ar: "" },
        Image: projectOneHeader,
      },
    ],
    Video: DubaiVideo,
  },
  {
    id: 2,
    ProjectName: { en: "Acres", ar: "" },
    HeaderTitle: { en: "", ar: "" },
    HeaderImage: "",
    InfoTitle: { en: "", ar: "" },
    InfoSubTitle: { en: "", ar: "" },
    InfoData: [
      { Icon: "", Title: { en: "", ar: "" }, SubTitle: { en: "", ar: "" } },
      { Icon: "", Title: { en: "", ar: "" }, SubTitle: { en: "", ar: "" } },
      { Icon: "", Title: { en: "", ar: "" }, SubTitle: { en: "", ar: "" } },
    ],
    Nearby: [
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
      { Duration: "", Place: { en: "", ar: "" }, Image: "" },
    ],
    Video: DubaiVideo,
  },
];
