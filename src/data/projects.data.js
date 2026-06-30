import sigmaImg from "../assets/millipore-sigma-screenshot.png";
import abideImg from "../assets/abideAssay.png";
import gasTaxImg from "../assets/MOGasTaxBack.webp";
import scalerImg from "../assets/scaler-screenshot.png"
import jawImg from "../assets/jaw-screenshot.png"
import nightGlowImg from '../assets/night-glow-studio-screenshot.png'

const projects = [
  {
    title: "Night Glow Studio",
    tech: "Flutter/Dart",
    description:
      "A late-night corner of the internet for aimless, cozy exploring.",
    image: nightGlowImg,
    href: "https://nightglow.studio",
    alt: "Night Glow Studio screenshot"
  },
  {
    title: "Scaler",
    tech: "React/MUI",
    description:
      "A tool that helps musicians narrow down what key a song might be in.",
    image: scalerImg,
    href: "https://colleenkhm.github.io/scaler/",
    alt: "Scaler App screenshots"
  },
  {
    title: 'Just A Word',
    tech: 'Flutter/Dart',
    description: "A quick, no-frills word lookup utilizing the Free Dictionary API.",
    image: jawImg,
    href: 'http://www.just-a-word.com/',
    alt: 'Just A Word screenshot',
  },
  {
    title: "Sigma Aldrich",
    tech: "React/TypeScript/GraphQL",
    description:
      "Global e-commerce platform for one of the world's largest life science suppliers.",
    image: sigmaImg,
    href: "https://www.sigmaaldrich.com/US/en",
    alt: "Sigma Aldrich screenshot",
  },
  {
    title: "Abide Assay",
    tech: "React/UX Design/AWS",
    description:
      "An inventory search system for clinical cannabis data, built from the ground up.",
    image: abideImg,
    href: "https://www.abideassay.com",
    alt: "Abide Assay screenshot",
  },
  {
    title: "MO Gas Tax Back",
    tech: "React/Ionic/AWS",
    description:
      "Helps Missouri drivers claim gas tax refunds straight from a snapped receipt.",
    image: gasTaxImg,
    href: "https://apps.apple.com/us/app/mo-gas-tax-back/",
    alt: "MO Gas Tax Back screenshot",
  },
];

export default projects;
