import { HiChevronDown, HiChevronRight } from "react-icons/hi";

//   navLinks
export const navItems = [
  { name: "Categories", link: "#categories",icon:<HiChevronDown />,iconMobile:<HiChevronRight /> },
  { name: "Pages", link: "#pages",icon:<HiChevronDown/>,iconMobile:<HiChevronRight />},
  { name: "Contact Us", link: "/contact_us" },
  { name: "About Us", link: "/about_us" },
];

import profileImg from "../public/assets/profile.jpg"
export const profile = [
  { name: "behzad", src:profileImg,icon:<HiChevronDown/>},

];

//   topTags Maybe It's gonna be slider
export const topTags = [
  {
    id: 1,
    bg_image: "/public/assets/Food.png",
    tags: "#Food",
  },
  {
    id: 2,
    bg_image: "/public/assets/Animal.png",
    tags: "#Animal",
  },
  {
    id: 3,
    bg_image: "/public/assets/Car.png",
    tags: "#Car",
  },
  {
    id: 4,
    bg_image: "/public/assets/Sport.png",
    tags: "#Sport",
  },
  {
    id: 5,
    bg_image: "/public/assets/Music.png",
    tags: "#Music",
  },
  {
    id: 6,
    bg_image: "/public/assets/Technology",
    tags: "#Technology",
  },
  {
    id: 7,
    bg_image: "/public/assets/Abstract",
    tags: "#Abstract",
  },
  {
    id: 8,
    bg_image: "/public/assets/Nature",
    tags: "#Nature",
  },
];



export const slider = [
  {
    bg_image: "/",
    title: "Why I Stopped Using Multiple Monitor",
    explanation:
      "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like",
  },
];
export const singleContent = [
  {
    bg_image: "/",
    title: "How to Drive a Car Safely",
    explanation:
      "Ah, the joy of the open road—it’s a good feeling. But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry. While it’s true that accidents can happen to anybody, there are things you can do to drive safely and do your best to avoid them.",
  },
  {
    bg_image: "/",
    title: "How to Make Dance Music",
    explanation:
      "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.",
  },
];



export const postCards = [
  {
    img: "/",
    title: "How to Persuade Your Parents to Buy Fast Food",
    explanation:
      "Parents often don’t want to buy fast food. They may be worried that it’s too expensive, unhealthy, or not worth the effort and time.",
    profileImg: "/",
    header: "Jon Kantner",
    subhead: "May 10 , 2022",
  },
  {
    img: "/",
    title: "How we built the first real self-driving car",
    explanation:
      "Electric self-driving cars will save millions of lives and significantly accelerate the world’s transition to sustainable energy, but only when",
    profileImg: "/",
    header: "Mary",
    subhead: "July 14 , 2022",
  },
  {
    img: "/",
    title: "How to choose the right laptop for programming",
    explanation:
      "Choosing the right laptop for programming can be a tough process. It’s easy to get confused while researching the various options. There are many different laptop models out there, each with a different set of trade-offs",
    profileImg: "/",
    header: "Louis Hoebregts",
    subhead: "July 25 , 2022",
  },
  {
    img: "/",
    title: "Opening Day of Boating Season, Seattle WA",
    explanation:
      "Of course the Puget Sound is very watery, and where there is water, there are boats. Today is the Grand Opening of Boating Season when traffic gets stalled in the University District (UW) while the Montlake Bridge",
    profileImg: "/",
    header: "James",
    subhead: "August 18 , 2022",
  },
];


