import { FaGithub, FaLinkedin,FaJava  } from "react-icons/fa";
import { BiLogoPython, BiLogoGit } from "react-icons/bi";
import { SiTensorflow,SiKeras,SiPytorch   } from "react-icons/si";
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
      child: <BiLogoPython color="black" size={50} />,
      title: "Python",
      style: "",
      type: "Programming languages",
    },
    {
      id: 2,
      child: <img src="c.png"/>,
      title: "C",
      style: "",
      type: "Programming languages",
    },
    {
      id: 3,
      child: <FaJava  color="black" size={50} />,
      title: "Java",
      style: "",
      type: "Programming languages",
    },
    {
      id: 4,
      child: <SiTensorflow  color="black" size={50} />,
      title: "TensorFlow",
      style: "",
      type: "machine learning",
    },
    {
      id: 5,
      child: <SiKeras  color="black" size={50} />,
      title: "keras",
      style: "",
      type: "machine learning",
    },
    {
      id: 6,
      child: <SiPytorch className="text-primary"  size={50} />,
      title: "Pytorch",
      style: "",
      type: "machine learning",
    },
    {
      id: 7,
      child: <img src="sklearn.png"/>,
      title: "sklearn",
      style: "",
      type: "machine learning",
    },
    {
        id: 8,
        child: <BiLogoGit color="black" size={50} />,
        title: "Git & Github",
        style: "",
        type: "others",
      },
  ];

export const services = [
  {
    id: 1,
    src: "icons8-intelligence-artificielle-64.png",
    title: "Building machine learning models",
    description:
      "",
    style: "bg-four",
    textStyle : "text-second"
  },
  {
    id: 2,
    src: "icons8-analyse-de-la-croissance-financière-64.png",
    title: "Data Analysis and Visualization",
    description: "",
    style: "bg-primary",
    textStyle : "text-second"
  },
  {
    id: 3,
    src: "icons8-data-processing-66.png",
    title: "Data Preprocessing and Feature Engineering",
    description:
      "",
    style: "bg-four",
    textStyle : "text-second"
  },
  {
    id: 4,
    src: "icons8-bulletin-scolaire-50.png",
    title: "Model Evaluation",
    description: "",
    style: "bg-four",
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

