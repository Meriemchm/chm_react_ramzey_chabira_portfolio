import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Navlink = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 7,
      link: "skills",
    },
    {
      id: 3,
      link: "services",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/ramzi-chabira-055526248/",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/RamzeyChibana",
  },
  {
    id: 3,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:ramzichibana31@gmail.com",
  },
];

export const techs = [
    {
      id: 1,
      child: "html_1051277.png",
      title: "Python",
      style: " bg-gradient-to-r from-yellow-500 to-four",
      type: "Programming languages",
    },
    {
      id: 2,
      child: "css-3_732190.png",
      title: "C",
      style: " bg-gradient-to-r from-yellow-500 to-four",
      type: "Programming languages",
    },
    {
      id: 3,
      child: "js_5968292.png",
      title: "Java",
      style: " bg-gradient-to-r from-yellow-500 to-four",
      type: "Programming languages",
    },
    {
      id: 4,
      child: "photoshop.png",
      title: "TensorFlow",
      style: " bg-gradient-to-r from-yellow-500 to-four",
      type: "machine learning",
    },
    {
      id: 5,
      child: "logo192.png",
      title: "keras",
      style: " bg-gradient-to-r from-yellow-500 to-four",
      type: "machine learning",
    },
    {
      id: 6,
      child: "nodejs.png",
      title: "Pytorch",
      style: "",
      type: "machine learning",
    },
    {
      id: 7,
      child: "sass.png",
      title: "sklearn",
      style: "",
      type: "machine learning",
    },
  ];

export const services = [
  {
    id: 1,
    src: "",
    title: "Experience in building machine learning models",
    description:
      "",
    style: "border-second",
    textStyle : "text-second"
  },
  {
    id: 2,
    src: "",
    title: "Data Analysis and Visualization",
    description: "",
    style: "border-second",
    textStyle : "text-second"
  },
  {
    id: 3,
    src: "",
    title: "Data Preprocessing and Feature Engineering",
    description:
      "",
    style: "border-second",
    textStyle : "text-second"
  },
  {
    id: 4,
    src: "",
    title: "Model Evaluation",
    description: "",
    style: "border-second",
    textStyle : "text-second"
  },
];

export const projects = [
    {
      id: 1,
      src: "graph.png",
      title: "AmazonGNNProductClassification",
      description:
        "",
      hcode: "https://github.com/RamzeyChibana/AmazonGNNProductClassification",
      hdemo: "",
      pdf: "",
    },
    {
      id: 2,
      src: "Rs.png",
      title: "RecommanderSystems",
      description:
        "",
      hcode: "https://github.com/RamzeyChibana/RecommanderSystems",
      hdemo: "",
      pdf: "",
    },
  
    {
      id: 3,
      src: "Fire.png",
      title: "FireDetection",
      description:
        "",
      hcode: "https://github.com/RamzeyChibana/FireDetection",
      hdemo: "",
      pdf: "",
    },
    {
      id: 4,
      src: "ASL.png",
      title: "American-sign-language-recognition",
      description:
        "",
      hcode: "https://github.com/RamzeyChibana/American-sign-language-recognition",
      hdemo: "",
      pdf: "",
    },
  ];

export const formItem = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 4,
    name: "message",
    placeholder: "Message",
    categorie: "textarea",
  },
];


export const menuItemSolution = [
    {
      id: 1,
      path: "/TPE/PME",
      title: "TPE/PME",
      icon: "icons8-combo-chart-100.png",
    },
    {
      id: 2,
      path: "/CréateursEntreprise",
      title: "Créateurs d’entreprise",
      icon: "icons8-business-group-100.png",
    },
  
    {
      id: 3,
      path: "/RepreneursEntreprisese",
      title: "Repreneurs d’entreprise",
      icon: "repreneur-entreprise.png",
    },
  
    {
      id: 4,
      path: "/GrandsComptes",
      title: "Grands comptes",
      icon: "icons8-business-report-96.png",
    },
  ];
  
  export const ServiceSolution = [
    {
      id: 1,
      src: "advice-red.png",
      title: "Conseil en communication",
      description:
        "Avant de créer tout support de communication, j’essaye de penser à son impact. En communication, celui qui s’adapte et anticipe le mieux, obtient la meilleure des réputations.J'essaye toujours de trouver des solutions sur mesure et adaptées à vos besoins, budgets, et enjeux.... ",
      style: "border-primary",
      textStyle : "text-primary"
    },
    {
      id: 2,
      src: "creation-de-sites-web.png",
      title: "Conseil en communication digitale ",
      description:
        "Je pourrais créer pour vous des sites internet responsives, et des applications mobiles... Je saurai vous conseiller et réaliser des outils adaptés à vos projets...",
      style: "border-primary",
      textStyle : "text-primary"
    },
  ];