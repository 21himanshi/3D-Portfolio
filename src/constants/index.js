import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Adobexd,
    solidity,
    python,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developement",
      icon: mobile,
    },
    {
      title: "Database Management System",
      icon: creator,
    },
    {
      title: "UI Developement",
      icon: web,
    },
    {
      title: "Business Planning",
      icon: creator,
    },
    {
      title: "Data Analysis",
      icon: web,
    },
    {
      title: "Operating Systems",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe XD",
      icon: Adobexd,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: mysql,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "ISKCON",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - December 2022",
      points: [
        "Developing and maintaining web applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Writing test cases and implementing manual testing to check the smooth functionality of the application ",
      ],
    },
    {
      title: "Software Developer",
      company_name: "VPRP Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design for the smooth functionality of the supply chain management of the company",
        "Learning and enhancing the ERP System to increase the work efficiency",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },

  ];
  
  const testimonials = [
    
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Nakul Maheshwari",
      designation: "Founder",
      company: "Guiding Bee",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Connect",
      description:
        "A mobile application to bring together the youth, for both social and professional connect through communication, profile building and online campaigns .",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "NFT Marketplace",
      description:
        "A blockchain and Ethereum based Web application that enables users to search, buy and sell Non-Fungible tokens and their entities using Crytocurrency. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };