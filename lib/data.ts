import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  {
    lang: 'Html',
    knowledge: 95,
  },
  {
    lang: 'CSS',
    knowledge: 95
  },
  {
    lang: 'React Js',
    knowledge: 90
  },
  {
    lang: 'Next Js',
    knowledge: 90
  },
  {
    lang: 'Redux',
    knowledge: 85
  },
  {
    lang: 'Prisma',
    knowledge: 88
  },
  {
    lang: 'Node Js',
    knowledge: 90
  },
  {
    lang: 'MongoDB',
    knowledge: 85
  }
];

export const experiencesData = [
  {
    title: "IMI Studio",
    location: "El monte, CA",
    description:
      "Working as a junior graphic designer assisting senior graphic designer finishing tasks.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Bachelor of Fine Arts ",
    location: "Pomona, CA",
    description:
      "Finished four years of graphic design studies.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Senior Graphic Designer/Web Developer",
    location: "Los Angeles, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;
