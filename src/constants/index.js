import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  searchMd,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "2",
    title: "What we Offer",
    url: "#services",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#footer",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const netgrowthServices = [
  "Custom Solutions",
  "Drive Efficiency",
  "Enhance User Experience",
];

export const netgrowthServices2 = [
  "Enhanced Brand Awareness",
  "Targeted Advertising",
  "Multichannel Strategies",
];

export const benefits = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Our expertise in both software and digital marketing ensures seamless integration of your marketing efforts with your technical infrastructure, maximizing efficiency and effectiveness.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Scalable Services",
    text: "Whether you’re a small startup or an established enterprise, our scalable services grow with your business, ensuring continued support and success as you expand.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Cost-Effective Solutions",
    text: "We offer a range of services under one roof, reducing the need for multiple vendors and ensuring cost-effective solutions tailored to your business needs.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Enhanced Customer Engagement",
    text: "Our social media management services help you connect directly with your audience, building stronger relationships and trust through engaging content and timely interactions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Increased Brand Visibility",
    text: "Through targeted social media campaigns and optimized content strategies, we boost your brand's visibility, helping you reach a wider and more relevant audience.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Data-Driven Insights",
    text: "We combine software analytics with social media metrics to deliver deeper insights into customer behavior and campaign performance, driving informed decisions and better results.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "1",
    title: "TikTok",
    iconUrl: twitter,
    url: "https://tiktok.com/",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    title: "LinkedIn",
    iconUrl: telegram,
    url: "https://www.linkedin.com/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/",
  },
];
