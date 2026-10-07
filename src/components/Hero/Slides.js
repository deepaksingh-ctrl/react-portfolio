import slideImage1 from '../../assets/hero-images/heroslide1.jpg';
import slideImage2 from '../../assets/hero-images/heroslide2.jpg';
import slideImage3 from '../../assets/hero-images/heroslide3.jpg';

const slides = [
  {
    id: 1,
    tag: "FRONTEND DEVELOPER",
    title: "Hi, I'm Deepak Singh",
    subtitle: "Building Seamless Web Experiences with React",
    description: "I specialize in architecting fast, accessible, and responsive user interfaces that transform complex ideas into modern digital realities.",
    background: slideImage1,
    primaryBtn: { text: "View My Work", link: "/projects" },
    secondaryBtn: { text: "Let's Talk", link: "/contact" }
  },
  {
    id: 2,
    tag: "REACT SPECIALIST",
    title: "Modern React & UI Engineering",
    subtitle: "High-Performance Single Page Applications",
    description: "Crafting scalable component systems, state management flows, and intuitive frontend experiences using modern React and Vite.",
    background: slideImage2,
    primaryBtn: { text: "Explore Projects", link: "/projects" },
    secondaryBtn: { text: "View Skills", link: "/skills" }
  },
  {
    id: 3,
    tag: "WORDPRESS EXPERT",
    title: "Custom WordPress Development",
    subtitle: "Tailor-Made Themes & High Core Web Vitals",
    description: "Developing bespoke WordPress themes, ACF custom blocks, and headless setups engineered for speed, SEO, and client ease of use.",
    background: slideImage3,
    primaryBtn: { text: "See Services", link: "/projects" },
    secondaryBtn: { text: "Get In Touch", link: "/contact" }
  }
];

export default slides;