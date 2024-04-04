import { InstagramImg, ShoppingImg, SpotfiyImg } from "../../public/assets";

interface CaseStudy {
  imgSrc: any;
  subtitle: string;
  description: string;
  websiteLink: string;
  codeLink: string;
  title: string;
  id: number;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "React Native",
    imgSrc: ShoppingImg,
    subtitle: "Shopping App",
    description:
      "An example of an app designed to appeal to high-end customers has been created with the purpose of showcasing skills.",
    websiteLink: "https://www.youtube.com/shorts/plJJEBWO48U",
    codeLink:
      "https://github.com/YieGin/Shopping-App-UI-With-React-Native-Redux-toolkit",
  },
  {
    id: 2,
    title: "React Native",
    imgSrc: SpotfiyImg,
    subtitle: "Spotfiy clone",
    description:
      "An example of an app designed to appeal to high-end customers has been created with the purpose of showcasing skills.",
    websiteLink: "https://www.youtube.com/watch?v=ChsdPLmG1U8&ab_channel=Yie",
    codeLink: "https://github.com/YieGin/Spotfiy_app",
  },
  {
    id: 3,
    title: "React Native",
    imgSrc: InstagramImg,
    subtitle: "Instagram clone",
    description:
      "An example of an app designed to appeal to high-end customers has been created with the purpose of showcasing skills.",
    websiteLink: "https://www.youtube.com/watch?v=XQID-UMXdmM&ab_channel=Yie",
    codeLink: "https://github.com/YieGin/Instagram_App",
  },
];

export default caseStudies;
