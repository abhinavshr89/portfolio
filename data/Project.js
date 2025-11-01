import Shopsphere from "../public/shopsphere.png";
import Planify from "../public/Planify.png";
import Chatty from "../public/chatty.png";
import saasOne from "../public/saas1.png";
import shoeStoreWebsite from "../public/shoestore.png";

const projectData = [
  {
    "title": "JARVIS",
    "description": "Developed an intelligent voice assistant with speech-to-text using OpenAI Whisper and text-to-speech capabilities, enabling hands-free interaction with system commands and web services. Implemented an agentic workflow using LangGraph with persistent conversation memory via SQLite checkpointing, allowing contextual follow-up interactions. Integrated custom tools for automated tasks including YouTube search, Google search, screenshot capture, notepad control, and system volume management, powered by Ollama’s Llama 3.2 LLM.",
    "stack": ["Python", "LangChain", "LangGraph", "Ollama"],
    "image": "",
    "HostedLink": "https://www.youtube.com/watch?v=Dz0YlOejvrU",
    "GithubLink": "https://github.com/abhinavshr89/JARVIS"
  },
  {
    "title": "AskMyPdf",
    "description": "Built an interactive web application enabling users to upload and chat with PDF documents using AI-powered context retrieval. Implemented document chunking and semantic embedding generation via LangChain, stored efficiently in Convex for fast vector search. Developed a chat interface in Next.js that dynamically queries relevant document sections to provide contextual responses.",
    "stack": ["Next.js", "LangChain", "Convex", "Gemini 2.5 Flash", "Clerk"],
    "image": "/AskMyPdf.png",
    "HostedLink": "https://askmypdf.vercel.app",
    "GithubLink": "https://github.com/abhinavshr89/AskMyPdf"
  },
  {
    "title": "Skillmate AI",
    "description": "Built an AI-powered career platform for personalized resume, cover letter generation, and interview preparation using Next.js and Gemini AI. Created interactive resume and cover letter builders with real-time preview, AI suggestions, and PDF export. Developed AI-driven interview quizzes with performance tracking and visualizations via Recharts.",
    "stack": ["Next.js", "Gemini AI", "Clerk", "Prisma", "Tailwind CSS", "NeonDB"],
    "image":  "/AskMyPdf.png",
    "HostedLink": "https://skillmate-ai.vercel.app",
    "GithubLink": "https://github.com/abhinavshr89/SkillmateAI"
  },
 {
  "title": "Planify",
  "description": "Built a full-stack Kanban project management app with interactive boards, lists, and cards using Next.js and ShadCN UI. Added organization management with multi-project support and team invitations. Secured collaboration with role-based access control and authentication via Clerk. Implemented a scalable backend with Prisma ORM and serverless NeonDB.",
  "stack": ["Next.js", "ShadCN UI", "Clerk", "Prisma", "NeonDB"],
  "image": "",
  "HostedLink": "https://project-management-system-pi.vercel.app/",
  "GithubLink": "https://github.com/abhinavshr89/planify"
}

]


export default projectData;
