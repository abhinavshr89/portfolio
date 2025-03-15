import Shopsphere from "../public/shopsphere.png";
import Planify from "../public/Planify.png";
import Chatty from "../public/chatty.png";
import saasOne from "../public/saas1.png";
import shoeStoreWebsite from "../public/shoestore.png";

const projectData = [
  {
    title: "Shopsphere",
    description:
      "An e-commerce platform for small businesses to sell their products online.",
    stack: ["React", "Express.js", "MongoDB", "Zustand", "Tailwind CSS"],
    image: Shopsphere,
    HostedLink: "https://ecommerce-website-yo0p.onrender.com/",
    GithubLink: "https://github.com/abhinavshr89/ecommerce_website",
  },
  {
    title: "Planify",
    description:
      "A task management application to help users organize their daily tasks.",
    stack: ["Next.js", "NeonDB", "Clerk", "Prisma", "Tailwind CSS"],
    image: Planify,
    GithubLink: "https://github.com/abhinavshr89/Planify",
    HostedLink: "https://project-management-system-pi.vercel.app/",
  },
  {
    title: "Chatty",
    description:
      "A real-time chat application to help users communicate with each other.",
    stack: [
      "React",
      "Express.js",
      "Socket.io",
      "Tailwind CSS",
      "MongoDB",
      "DaisyUI",
    ],
    image: Chatty,
    GithubLink: "https://github.com/abhinavshr89/chat_app",
    HostedLink: "https://chat-app-gzdl.onrender.com/login",
  },
  {
    title: "SAAS Landing Page",
    description: "A SAAS landing page for a fictional company",
    stack: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
    image: saasOne,
    GithubLink: "https://github.com/abhinavshr89/FrontEnd_W01",
    HostedLink: "https://front-end-w01.vercel.app/",
  },
  {
    title:"ShoeStore Website",
    description:"A website for a fictional shoe store",
    stack:["React","Tailwind CSS","Framer Motion","GSAP"],
    image:shoeStoreWebsite,
    GithubLink:"https://github.com/abhinavshr89/FrontEnd_W02",
    HostedLink:"https://front-end-w02.vercel.app/"
  }
];

export default projectData;
