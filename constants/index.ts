/** @format */

import { TExperience } from "@/app/experiences/types";
import { Project } from "@/app/projects/types";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blogs",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

export const ProfilePicPath = "/assets/Profilepic.webp";
export const ProfilePic2Path = "/assets/Profilepic2.webp";

export const Bio = `Hello there! I am a highly skilled computer engineering professional with expertise in various programming languages such as C, C++, Flutter, Dart, React, HTML, CSS, and JavaScript. I am a quick learner and always eager to take on new challenges that help me further expand my skillset. In my free time, I love to indulge in my hobbies of cycling and reading novels and comics. My passion for technology and innovation drives me to continuously learn and stay up-to-date with the latest trends in the industry. With my strong work ethic and exceptional problem-solving skills, I am confident in my ability to contribute to any project I am a part of. Thank you for taking the time to read my bio, and I look forward to potentially working with you!`;

export const contacts = [
  {
    name: "Facebook",
    logo: "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2s8L3RpdGxlPjxwYXRoIGQ9Ik05LjEwMSAyMy42OTF2LTcuOThINi42Mjd2LTMuNjY3aDIuNDc0di0xLjU4YzAtNC4wODUgMS44NDgtNS45NzggNS44NTgtNS45NzguNDAxIDAgLjk1NS4wNDIgMS40NjguMTAzYTguNjggOC42OCAwIDAgMSAxLjE0MS4xOTV2My4zMjVhOC42MjMgOC42MjMgMCAwIDAtLjY1My0uMDM2IDI2LjgwNSAyNi44MDUgMCAwIDAtLjczMy0uMDA5Yy0uNzA3IDAtMS4yNTkuMDk2LTEuNjc1LjMwOWExLjY4NiAxLjY4NiAwIDAgMC0uNjc5LjYyMmMtLjI1OC40Mi0uMzc0Ljk5NS0uMzc0IDEuNzUydjEuMjk3aDMuOTE5bC0uMzg2IDIuMTAzLS4yODcgMS41NjRoLTMuMjQ2djguMjQ1QzE5LjM5NiAyMy4yMzggMjQgMTguMTc5IDI0IDEyLjA0NGMwLTYuNjI3LTUuMzczLTEyLTEyLTEycy0xMiA1LjM3My0xMiAxMmMwIDUuNjI4IDMuODc0IDEwLjM1IDkuMTAxIDExLjY0N1oiLz48L3N2Zz4=",
    links: "https://www.facebook.com/prashant.manandhar.88/",
  },
  {
    name: "GitHub",
    logo: "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+",
    links: "https://github.com/Eemayas",
  },
  {
    name: "Twitter",
    logo: "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+WDwvdGl0bGU+PHBhdGggZD0iTTE4LjkwMSAxLjE1M2gzLjY4bC04LjA0IDkuMTlMMjQgMjIuODQ2aC03LjQwNmwtNS44LTcuNTg0LTYuNjM4IDcuNTg0SC40NzRsOC42LTkuODNMMCAxLjE1NGg3LjU5NGw1LjI0MyA2LjkzMlpNMTcuNjEgMjAuNjQ0aDIuMDM5TDYuNDg2IDMuMjRINC4yOThaIi8+PC9zdmc+",
    links: "https://twitter.com/PrashantManand8",
  },
  {
    name: "LinkedIn",
    logo: "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW48L3RpdGxlPjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIvPjwvc3ZnPg==",
    links: "https://www.linkedin.com/in/prashant-manandhar-461917246/",
  },
  {
    name: "Instagram",
    logo: "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtPC90aXRsZT48cGF0aCBkPSJNNy4wMzAxLjA4NGMtMS4yNzY4LjA2MDItMi4xNDg3LjI2NC0yLjkxMS41NjM0LS43ODg4LjMwNzUtMS40NTc1LjcyLTIuMTIyOCAxLjM4NzctLjY2NTIuNjY3Ny0xLjA3NSAxLjMzNjgtMS4zODAyIDIuMTI3LS4yOTU0Ljc2MzgtLjQ5NTYgMS42MzY1LS41NTIgMi45MTQtLjA1NjQgMS4yNzc1LS4wNjg5IDEuNjg4Mi0uMDYyNiA0Ljk0Ny4wMDYyIDMuMjU4Ni4wMjA2IDMuNjY3MS4wODI1IDQuOTQ3My4wNjEgMS4yNzY1LjI2NCAyLjE0ODIuNTYzNSAyLjkxMDcuMzA4Ljc4ODkuNzIgMS40NTczIDEuMzg4IDIuMTIyOC42Njc5LjY2NTUgMS4zMzY1IDEuMDc0MyAyLjEyODUgMS4zOC43NjMyLjI5NSAxLjYzNjEuNDk2MSAyLjkxMzQuNTUyIDEuMjc3My4wNTYgMS42ODg0LjA2OSA0Ljk0NjIuMDYyNyAzLjI1NzgtLjAwNjIgMy42NjgtLjAyMDcgNC45NDc4LS4wODE0IDEuMjgtLjA2MDcgMi4xNDctLjI2NTIgMi45MDk4LS41NjMzLjc4ODktLjMwODYgMS40NTc4LS43MiAyLjEyMjgtMS4zODgxLjY2NS0uNjY4MiAxLjA3NDUtMS4zMzc4IDEuMzc5NS0yLjEyODQuMjk1Ny0uNzYzMi40OTY2LTEuNjM2LjU1Mi0yLjkxMjQuMDU2LTEuMjgwOS4wNjkyLTEuNjg5OC4wNjMtNC45NDgtLjAwNjMtMy4yNTgzLS4wMjEtMy42NjY4LS4wODE3LTQuOTQ2NS0uMDYwNy0xLjI3OTctLjI2NC0yLjE0ODctLjU2MzMtMi45MTE3LS4zMDg0LS43ODg5LS43Mi0xLjQ1NjgtMS4zODc2LTIuMTIyOEMyMS4yOTgyIDEuMzMgMjAuNjI4LjkyMDggMTkuODM3OC42MTY1IDE5LjA3NC4zMjEgMTguMjAxNy4xMTk3IDE2LjkyNDQuMDY0NSAxNS42NDcxLjAwOTMgMTUuMjM2LS4wMDUgMTEuOTc3LjAwMTQgOC43MTguMDA3NiA4LjMxLjAyMTUgNy4wMzAxLjA4MzltLjE0MDIgMjEuNjkzMmMtMS4xNy0uMDUwOS0xLjgwNTMtLjI0NTMtMi4yMjg3LS40MDgtLjU2MDYtLjIxNi0uOTYtLjQ3NzEtMS4zODE5LS44OTUtLjQyMi0uNDE3OC0uNjgxMS0uODE4Ni0uOS0xLjM3OC0uMTY0NC0uNDIzNC0uMzYyNC0xLjA1OC0uNDE3MS0yLjIyOC0uMDU5NS0xLjI2NDUtLjA3Mi0xLjY0NDItLjA3OS00Ljg0OC0uMDA3LTMuMjAzNy4wMDUzLTMuNTgzLjA2MDctNC44NDguMDUtMS4xNjkuMjQ1Ni0xLjgwNS40MDgtMi4yMjgyLjIxNi0uNTYxMy40NzYyLS45Ni44OTUtMS4zODE2LjQxODgtLjQyMTcuODE4NC0uNjgxNCAxLjM3ODMtLjkwMDMuNDIzLS4xNjUxIDEuMDU3NS0uMzYxNCAyLjIyNy0uNDE3MSAxLjI2NTUtLjA2IDEuNjQ0Ny0uMDcyIDQuODQ4LS4wNzkgMy4yMDMzLS4wMDcgMy41ODM1LjAwNSA0Ljg0OTUuMDYwOCAxLjE2OS4wNTA4IDEuODA1My4yNDQ1IDIuMjI4LjQwOC41NjA4LjIxNi45Ni40NzU0IDEuMzgxNi44OTUuNDIxNy40MTk0LjY4MTYuODE3Ni45MDA1IDEuMzc4Ny4xNjUzLjQyMTcuMzYxNyAxLjA1Ni40MTY5IDIuMjI2My4wNjAyIDEuMjY1NS4wNzM5IDEuNjQ1LjA3OTYgNC44NDguMDA1OCAzLjIwMy0uMDA1NSAzLjU4MzQtLjA2MSA0Ljg0OC0uMDUxIDEuMTctLjI0NSAxLjgwNTUtLjQwOCAyLjIyOTQtLjIxNi41NjA0LS40NzYzLjk2LS44OTU0IDEuMzgxNC0uNDE5LjQyMTUtLjgxODEuNjgxMS0xLjM3ODMuOS0uNDIyNC4xNjQ5LTEuMDU3Ny4zNjE3LTIuMjI2Mi40MTc0LTEuMjY1Ni4wNTk1LTEuNjQ0OC4wNzItNC44NDkzLjA3OS0zLjIwNDUuMDA3LTMuNTgyNS0uMDA2LTQuODQ4LS4wNjA4TTE2Ljk1MyA1LjU4NjRBMS40NCAxLjQ0IDAgMSAwIDE4LjM5IDQuMTQ0YTEuNDQgMS40NCAwIDAgMC0xLjQzNyAxLjQ0MjRNNS44Mzg1IDEyLjAxMmMuMDA2NyAzLjQwMzIgMi43NzA2IDYuMTU1NyA2LjE3MyA2LjE0OTMgMy40MDI2LS4wMDY1IDYuMTU3LTIuNzcwMSA2LjE1MDYtNi4xNzMzLS4wMDY1LTMuNDAzMi0yLjc3MS02LjE1NjUtNi4xNzQtNi4xNDk4LTMuNDAzLjAwNjctNi4xNTYgMi43NzEtNi4xNDk2IDYuMTczOE04IDEyLjAwNzdhNCA0IDAgMSAxIDQuMDA4IDMuOTkyMUEzLjk5OTYgMy45OTk2IDAgMCAxIDggMTIuMDA3NyIvPjwvc3ZnPg==",
    links: "https://www.instagram.com/prashant__manandhar/",
  },
];

export const bioCardServices = [
  {
    title: "Web Developer",
    icon: "/assets/bioCard/Web.webp",
  },
  {
    title: "Flutter Developer",
    icon: "/assets/bioCard/flutter.webp",
  },
];

export const personalDetails = [
  {
    title: "Phone Number",
    detail: "+977 9860440088",
  },
  {
    title: "Email Address",
    detail: "prashantmanandhar2002@gmail.com",
  },
  {
    title: "Address",
    detail: "Banepa 7, Kavre Nepal",
  },
];

export const technologies = [
  {
    name: "Flutter",
    icon: "/assets/skills/Flutter.webp",
  },
  {
    name: "C",
    icon: "/assets/skills/C.webp",
  },
  {
    name: "C++",
    icon: "/assets/skills/C++.webp",
  },

  {
    name: "HTML 5",
    icon: "/assets/skills/HTML.webp",
  },
  {
    name: "CSS 3",
    icon: "/assets/skills/CSS.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/skills/Tailwind.webp",
  },
  {
    name: "JavaScript",
    icon: "/assets/skills/JS.webp",
  },
  {
    name: "TypeScript",
    icon: "/assets/skills/TS.webp",
  },
  {
    name: "React",
    icon: "/assets/skills/React.webp",
  },
  {
    name: "Next JS",
    icon: "/assets/skills/NextJS.webp",
  },

  {
    name: "Node JS",
    icon: "/assets/skills/Node.webp",
  },
  // {
  //   name: "Three JS",
  //   icon: "/assets/skills/ThreeJS.webp",
  // },
  {
    name: "MongoDB",
    icon: "/assets/skills/MongoDB.webp",
  },
  {
    name: "My SQL",
    icon: "/assets/skills/SQL.webp",
  },
  {
    name: "Python",
    icon: "/assets/skills/Python.webp",
  },
  {
    name: "Git",
    icon: "/assets/skills/Git.webp",
  },
  {
    name: "Figma",
    icon: "/assets/skills/Figma.webp",
  },
];

export const experiencess: TExperience[] = [
  {
    title: "React.js Developer",
    company_name: "Omnecal Pvt. Ltd.",
    iconSrc: "/assets/experiences/OmnecalPvtLtd.webp",
    iconBg: "#383E56",
    date: "February 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Develop the duration selection with the Nepali Calender",
      "Integrate the realtime graph of various information obatined form the websocket through backend",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export const projects: Project[] = [
  {
    name: "README Crafter",
    description:
      "An automated README file generator that analyzes project codebases and leverages language models like LLaMA to create structured documentation.",
    tags: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Python",
      "TensorFlow",
      "Flask",
      "Ollama",
      "LLaMA 3.1",
    ],
    image: "/assets/projects/README Crafter.webp",
    source_code_link: "https://github.com/Eemayas/README-Crafter",
  },
  {
    name: "CommentSense",
    description:
      "An NLP-based tool that classifies YouTube comment sentiments using machine learning and provides a React-based interface for moderation.",
    tags: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Python",
      "TensorFlow",
      "Flask",
      "NLP",
    ],
    image: "/assets/projects/CommentSense.webp",
    source_code_link: "https://github.com/Eemayas/CommentSense",
  },
  {
    name: "Daraz Scraper",
    description:
      "A web scraper that extracts product information from Daraz for price and availability tracking, with scheduled scraping and real-time monitoring.",
    tags: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Python",
      "BeautifulSoup",
      "Selenium",
      "pandas",
      "requests",
    ],
    image: "/assets/projects/Daraz Scraper.webp",
    source_code_link: "https://github.com/Eemayas/Daraz_Scraper",
  },
  {
    name: "Donor Link",
    description:
      "A full-stack demand forecasting solution for blood supply chains using neural networks, with a Next.js front end for visualizing demand trends.",
    tags: [
      "Next.js",
      "Flask",
      "Python",
      "TypeScript",
      "scikit-learn",
      "Keras",
      "Pandas",
      "NumPy",
    ],
    image: "/assets/projects/DonorLink.png",
    source_code_link: "https://github.com/Eemayas/Donor_Link",
  },
  {
    name: "Project Hub",
    description:
      "A project management platform with a responsive UI, structured database, RESTful APIs, and enhanced user experience through feedback-based improvements.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    image: "/assets/projects/Project_Hub.webp",
    source_code_link: "https://github.com/Eemayas/Project-Hub",
  },
  {
    name: "GO_GO_Nihongo",
    description:
      "A tool that applies Optical Character Recognition (OCR) to extract Japanese text from images, translate it into English, and reintegrate the translated text while maintaining layout integrity.",
    tags: [
      "EasyOCR",
      "MangaOCR",
      "HuggingFace",
      "TensorFlow",
      "Python",
      "Streamlit",
    ],
    image: "/assets/projects/GO_GO_Nihongo.webp",
    source_code_link: "https://github.com/Eemayas/GO_GO_Nihongo",
  },
  {
    name: "NepSense",
    description:
      "A Nepali language NLP tool for detecting offensive content and sentiment analysis, designed with a Streamlit interface for accessibility.",
    tags: ["Python", "TensorFlow", "Streamlit", "Google Colab", "NLP"],
    image: "/assets/projects/NepSense.webp",
    source_code_link: "https://github.com/Eemayas/NepSense",
  },
  {
    name: "Image Watermarking using SVD",
    description:
      "A web app that utilizes Singular Value Decomposition (SVD) for watermark insertion and extraction, ensuring robust and secure image watermarking.",
    tags: ["Streamlit", "Python", "NumPy", "SVD", "Image Processing"],
    image: "/assets/projects/Image Watermarking using SVD.webp",
    source_code_link: "https://watermarking-image-svd.streamlit.app/",
  },
  {
    name: "Remind Wallet",
    description:
      "An innovative expense-tracking and budget management tool that helps users monitor financial activity and achieve savings goals.",
    tags: ["Flutter", "Firebase", "Dart"],
    image: "/assets/projects/RemindWallet.svg",
    source_code_link: "https://github.com/Eemayas/Remind-Wallet",
  },
  {
    name: "Smart Kagaj",
    description:
      "A secure digital document management system with encryption, contract signing, and export functionality.",
    tags: ["Flutter", "Firebase", "Dart"],
    image: "/assets/projects/Smart Kagaj.webp",
    source_code_link: "https://github.com/Eemayas/Smart-Kagaj",
  },
  {
    name: "Meal Up",
    description:
      "A meal-planning app that enhances user experiences with food preparation and integrates third-party APIs for recipes and nutrition.",
    tags: ["Flutter", "Firebase", "Dart"],
    image: "/assets/projects/Meal_up.webp",
    source_code_link: "https://github.com/Eemayas/Meal-Up",
  },
  {
    name: "Fourier Series Wave Circles Animation",
    description:
      "A graphical simulation demonstrating Fourier series using animated circles to form waveforms dynamically.",
    tags: ["C++", "CMake", "OpenGL"],
    image: "/assets/projects/Fourier Series Wave Circles Animation.webp",
    source_code_link:
      "https://github.com/Eemayas/Fourier-Series-Wave-Circles-Animation-Graphics-Project",
  },
  {
    name: "Car Race Game",
    description:
      "An engaging car racing game with dynamic gameplay, user-friendly controls, and real-time scoring features.",
    tags: ["C++"],
    image: "/assets/projects/Car_race_game.webp",
    source_code_link: "https://github.com/Eemayas/Car-Race-Game",
  },
];
//
// export {
//   services,
//   technologies,
//   experiences,
//   testimonials,
//   projects,
//   contacts,
// };
