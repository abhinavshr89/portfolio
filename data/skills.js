import PythonSVG from "../public/svg/python";
import ReactSVG from "../public/svg/react";
import JavaScriptSVG from "../public/svg/javascript";
import NextJsSVG from "../public/svg/nextJs";
import CplusplusSVG from "../public/svg/cplusplus";
import HTMLSVG from "../public/svg/htmlsvg";
import CSSSVG from "../public/svg/cssSVG";
import NodeJsSVG from "../public/svg/nodeSVG";
import ExpressSVG from "../public/svg/expressSVG";
import MongoDBSVG from "../public/svg/mongodbSVG";
import NeonDBSVG from "../public/svg/neondbSVG";
import GitSVG from "../public/svg/gitSVG";
import DockerSVG from "../public/svg/dockerSVG";
import PostmanSVG from "../public/svg/postmanSVG";

const frontendSkills = [
  {
    "title": "React",
    "icon": ReactSVG,
    "details": [
      "Built multiple projects using React",
      "Experience with hooks and state management"
    ]
  },
  {
    "title": "Next.js",
    "icon": NextJsSVG,
    "details": [
      "Developed SSR and SSG applications",
      "Experience with API routes and middleware"
    ]
  },
  {
    "title": "JavaScript",
    "icon": JavaScriptSVG,
    "details": [
      "Proficient in ES6+ JavaScript",
      "Worked with async/await and Promises"
    ]
  },
  {
    "title": "HTML",
    "icon": HTMLSVG,
    "details": [
      "Proficient in HTML5",
      "Experience with semantic HTML"
    ]
  },
  {
    "title": "CSS",
    "icon": CSSSVG,
    "details": [
      "Styled components, Tailwind CSS, and Flexbox/Grid"
    ]
  }
];

const backendSkills = [
  {
    "title": "Node.js",
    "icon": NodeJsSVG,
    "details": [
      "Built RESTful APIs with Express.js",
      "Experience with middleware and authentication"
    ]
  },
  {
    "title": "Express.js",
    "icon": ExpressSVG,
    "details": [
      "Developed scalable backend applications",
      "Familiar with CORS, JWT, and error handling"
    ]
  }
];

const databases = [
  {
    "title": "MongoDB",
    "icon": MongoDBSVG,
    "details": [
      "Experience with NoSQL databases",
      "Built full-stack applications using MongoDB"
    ]
  },
  {
    "title": "NeonDB",
    "icon": NeonDBSVG,
    "details": [
      "Worked with NeonDB for PostgreSQL solutions",
      "Experience in cloud-based database management"
    ]
  }
];

const languages = [
  {
    "title": "Python",
    "icon": PythonSVG,
    "details": [
      "Solved 300+ DSA questions in Python",
      "Experience with Python libraries like NumPy and Pandas"
    ]
  },
  {
    "title": "C++",
    "icon": CplusplusSVG,
    "details": [
      "Solved 800+ DSA questions in C++",
      "Strong understanding of STL and OOP"
    ]
  }
];

const tools = [
  {
    "title": "Git",
    "icon": GitSVG,
    "details": [
      "Experience with Git version control",
      "Familiar with GitHub and Git workflows"
    ]
  },
 
  {
    "title": "Postman",
    "icon": PostmanSVG,
    "details": [
      "Used Postman for API testing and documentation",
      "Experience with automated testing using Postman scripts"
    ]
  }
];

export { frontendSkills, backendSkills, databases, languages, tools };
