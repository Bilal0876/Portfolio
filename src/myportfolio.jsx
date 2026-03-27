import { useState, useEffect, useRef } from "react";

const Tb = ({ c, t, tc = "#fff", r = 5 }) => <svg viewBox="0 0 26 26" width="26" height="26"><rect width="26" height="26" rx={r} fill={c} /><text x="13" y="18" textAnchor="middle" fontSize="9" fontWeight="800" fill={tc} fontFamily="system-ui,sans-serif">{t}</text></svg>;

const TReact = <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="12" cy="12" r="2.1" fill="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.1" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(120 12 12)" /></svg>;
const TTailwind = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.42 12 16.5 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.23 7.2 14.08 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.42 18 11.5 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.23 13.2 9.08 12 7 12z" fill="#38BDF8" /></svg>;
const TMUI = <Tb c="#007FFF" t="MUI" />;
const TShadcn = <Tb c="#09090B" t="ui" r={13} />;
const THTML = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M4 2l1.5 17L12 21l6.5-2L20 2zm3.5 5h9l-.3 3H8l.2 2h7.8l-.8 8L12 21l-3.2-.9L8.5 17H11l.2 1.2.8.2.8-.2.5-5.2H8.2L7.5 7z" fill="#E34F26" /></svg>;
const TVite = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M21.5 3L13 19.5 11 11 1.5 6.5z" fill="#BD34FE" /><path d="M13 19.5L11 11l10.5-8z" fill="#41D1FF" /></svg>;
const TNode = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 2L3 7v10l9 5 9-5V7z" fill="none" stroke="#5FA04E" strokeWidth="1.4" /><text x="12" y="15.5" textAnchor="middle" fontSize="5.5" fontWeight="800" fill="#5FA04E" fontFamily="system-ui">NODE</text></svg>;
const TExpress = <Tb c="#303030" t="Ex" />;
const TREST = <Tb c="#FF6C37" t="API" r={13} />;
const TFlask = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M9 3h6v7.5L19 19H5l4-8.5V3z" fill="none" stroke="#646464" strokeWidth="1.5" strokeLinejoin="round" /><path d="M8.5 16h7" stroke="#646464" strokeWidth="1" /></svg>;
const TPostgres = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-5l3 5H13zm-2 0l-3-5v5H11zm1-7a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#336791" /></svg>;
const TMySQL = <Tb c="#4479A1" t="SQL" />;
const TPrisma = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M3 21l9-19 9 19-9-5.5z" fill="#5A67D8" /></svg>;
const TSupabase = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M13 3L4 14h8l-1 7 9-11h-8l1-7z" fill="#3ECF8E" /></svg>;
const TNeon = <Tb c="#00E5A0" tc="#000" t="Neon" r={4} />;
const TGit = <svg viewBox="0 0 24 24" width="26" height="26" fill="#F05032"><path d="M23.5 11.5l-11-11a1.5 1.5 0 0 0-2.1 0L8.2 2.7 11 5.5a1.8 1.8 0 0 1 2.3 2.3l2.7 2.7a1.8 1.8 0 1 1-1 1l-2.5-2.5v6.3a1.8 1.8 0 1 1-2 0V8.9a1.8 1.8 0 0 1-1-2.4L6.8 3.8.5 10.1a1.5 1.5 0 0 0 0 2.1l11 11a1.5 1.5 0 0 0 2.1 0l10-10a1.5 1.5 0 0 0 0-2.1z" /></svg>;
const TPostman = <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="12" cy="12" r="10" fill="#FF6C37" /><path d="M18 12A6 6 0 1 1 9.5 6.8l-1.5 1.5A4 4 0 1 0 16 12h2z" fill="#fff" /></svg>;
const TSoapUI = <Tb c="#7B42BC" t="SOAP" />;
const TWhisper = <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="12" cy="12" r="10" fill="#7C3AED" opacity="0.2" /><path d="M7 10h10M7 13h7M7 16h5" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" /></svg>;
const TJS = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#F7DF1E" /><text x="13" y="18" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1a1a1a" fontFamily="system-ui">JS</text></svg>;
const TTS = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#3178C6" /><text x="13" y="18" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="system-ui">TS</text></svg>;
const TCSharp = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#239120" /><text x="12" y="18" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff" fontFamily="system-ui">C#</text></svg>;
const TPython = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 2c-2.5 0-4.5 1.1-4.5 3.5v2h9v1H5.5C3.6 8.5 2 10 2 13c0 2.5 1.3 4 3.5 4H7v-2.5C7 12 8.8 10.5 12 10.5s5 1.5 5 4V17h-9v1h10.5c2.2 0 3.5-1.8 3.5-4 0-2.5-1.5-4.5-3.5-4.5H16.5V12c0-2.5-1.8-4-4.5-4zm-1.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" /></svg>;

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
     all: [
          { icon: TReact, label: "React.js" }, { icon: TTailwind, label: "Tailwind CSS" },
          { icon: TMUI, label: "Material UI" }, { icon: TShadcn, label: "shadcn/ui" },
          { icon: THTML, label: "HTML5/CSS3" }, { icon: TVite, label: "Vite" },
          { icon: TNode, label: "Node.js" }, { icon: TExpress, label: "Express.js" },
          { icon: TREST, label: "REST APIs" }, { icon: TFlask, label: "Flask" },
          { icon: TPostgres, label: "PostgreSQL" }, { icon: TMySQL, label: "MySQL" },
          { icon: TPrisma, label: "Prisma ORM" }, { icon: TSupabase, label: "Supabase" },
          { icon: TGit, label: "Git/GitHub" }, { icon: TPostman, label: "Postman" },
          { icon: TSoapUI, label: "SoapUI" }, { icon: TNeon, label: "Neon" },
          { icon: TWhisper, label: "Faster-Whisper" }, { icon: TJS, label: "JavaScript" },
          { icon: TTS, label: "TypeScript" }, { icon: TCSharp, label: "C#" },
          { icon: TPython, label: "Python" },
     ],
     frontend: [
          { icon: TReact, label: "React.js" }, { icon: TTailwind, label: "Tailwind CSS" },
          { icon: TMUI, label: "Material UI" }, { icon: TShadcn, label: "shadcn/ui" },
          { icon: THTML, label: "HTML5/CSS3" }, { icon: TVite, label: "Vite" },
     ],
     backend: [
          { icon: TNode, label: "Node.js" }, { icon: TExpress, label: "Express.js" },
          { icon: TREST, label: "REST APIs" }, { icon: TFlask, label: "Flask" },
          { icon: TWhisper, label: "Pyannote" },
     ],
     database: [
          { icon: TPostgres, label: "PostgreSQL" }, { icon: TMySQL, label: "MySQL" },
          { icon: TPrisma, label: "Prisma ORM" }, { icon: TSupabase, label: "Supabase" },
          { icon: TNeon, label: "Neon" },
     ],
     tools: [
          { icon: TGit, label: "Git/GitHub" }, { icon: TPostman, label: "Postman" },
          { icon: TSoapUI, label: "SoapUI" }, { icon: TWhisper, label: "Faster-Whisper" },
     ],
     languages: [
          { icon: TJS, label: "JavaScript" }, { icon: TTS, label: "TypeScript" },
          { icon: TCSharp, label: "C#" }, { icon: TPython, label: "Python" },
     ],
};

const PROJECTS = [
     {
          cat: ["fullstack", "backend"],
          emoji: <svg viewBox="0 0 24 24" width="64" height="64" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-1-2.52-2.34-2.87V5.41h-1.92v1.39c-1.38.29-2.6 1.15-2.6 2.68 0 1.96 1.71 2.62 3.65 3.11 1.83.45 2.45 1.05 2.45 1.84 0 1.09-1 1.63-2.14 1.63-1.45 0-2.26-.8-2.34-1.93H8.72c.1 1.78 1.41 3.03 2.64 3.42v1.44h1.92v-1.42c1.47-.3 2.72-1.28 2.72-2.94 0-2.22-1.94-2.86-3.69-3.3z" fill="#a5b4fc" /></svg>,
          bg: "from-indigo-950 to-slate-950",
          tags: ["React", "Node.js", "PostgreSQL", "Prisma", "JWT"],
          title: "Split Sync",
          desc: "Collaborative expense settlement app with a greedy algorithm that minimises total transactions. MVC architecture with JWT + HttpOnly cookies for enterprise-grade security. Deployed on Vercel, Render & Neon.",
          gh: "https://github.com/Bilal0876/SplitSync-Group-Expense-Management",
          live: "https://split-sync-group-expense-tracker.vercel.app",
     },
     {
          cat: ["fullstack", "ai"],
          emoji: <svg viewBox="0 0 24 24" width="64" height="64" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zm0 14c-4.97 0-9-1.34-9-3v8c0 1.66 4.03 3 9 3s9-1.34 9-3v-8c0 1.66-4.03 3-9 3z" fill="#6ee7b7" /></svg>,
          bg: "from-emerald-950 to-slate-950",
          tags: ["React", "WebSockets", "Faster-Whisper", "Pyannote", "Supabase"],
          title: "AI Judicial Transcription Platform",
          desc: "Real-time multilingual courtroom transcription with speaker diarization. Role-based access for judges, admins & stenographers. Automated PDF export and approval workflows.",
          gh: "https://github.com/Bilal0876/ai-powered-courtroom-management-and-transcription",
          live: "#",
     },
     {
          cat: ["backend", "ai"],
          emoji: <svg viewBox="0 0 24 24" width="64" height="64" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#c4b5fd" /></svg>,
          bg: "from-violet-950 to-slate-950",
          tags: ["Python", "Flask", "Opus MT"],
          title: "Web-Based Language Translator",
          desc: "Multilingual translation web app powered by Opus MT neural machine translation models. Clean Flask interface enabling text translation across multiple languages.",
          gh: "https://github.com/Bilal0876/language-translator-using-opusmt",
          live: null,
     },
];

const TIMELINE = [
     {
          date: "Feb 2026 - Present", type: "Internship",
          role: "Full Stack Development Intern", company: "Qubit Lab Inc.",
          points: [
               "Built responsive UI components with React, Tailwind CSS, and shadcn/ui for production web apps.",
               "Used MUI for enterprise-level UI; performed API testing with SoapUI on enterprise projects.",
               "Implemented JWT authentication with HttpOnly cookies to prevent XSS and session hijacking.",
               "Worked within an MVC-structured backend - controllers, models, services, and middleware.",
               "Used Git for version control with branching strategies in a collaborative team environment.",
          ],
     },
     {
          date: "2022 - Feb 2026", type: "Education",
          role: "BS Computer Science", company: "University of Central Punjab, Lahore",
          points: [
               "Major: Software Development - full-stack engineering, system design, and software architecture.",
               "Minor: ML/Deep Learning - neural networks, model training, and practical AI integrations.",
               "Applied coursework to real-world deployed projects including an AI judicial platform and expense manager.",
          ],
     },
];

const CERTS = [
     { icon: <svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="8" r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" /><path d="M8.5 13.5l-2 7 5.5-2.5 5.5 2.5-2-7" fill="#fbbf24" stroke="#d97706" strokeWidth="1" /></svg>, title: "The Full Stack", org: "Meta" },
     { icon: <svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="10" fill="none" stroke="#6366f1" strokeWidth="1.5" /><path d="M12 7v5l3 3" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" /></svg>, title: "Version Control", org: "Meta" },
     { icon: <svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="4" fill="#F7DF1E" /><text x="12" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1a1a1a" fontFamily="system-ui">JS</text></svg>, title: "Programming with JavaScript", org: "Meta" },
];

// Lucide-style SVG icons as components
const IconGithub = ({ size = 16 }) => (
     <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
     </svg>
);
const IconLinkedin = ({ size = 16 }) => (
     <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
     </svg>
);
const IconMail = ({ size = 16 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
     </svg>
);
const IconExternalLink = ({ size = 13 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
     </svg>
);
const IconSend = ({ size = 15 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
     </svg>
);
const IconChevronLeft = ({ size = 20 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
     </svg>
);
const IconChevronRight = ({ size = 20 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
     </svg>
);
const IconPhone = ({ size = 16 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.06-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" />
     </svg>
);

// Reveal hook
function useReveal() {
     const ref = useRef(null);
     const [visible, setVisible] = useState(false);
     useEffect(() => {
          const io = new IntersectionObserver(([e]) => {
               if (e.isIntersecting) { setVisible(true); io.disconnect(); }
          }, { threshold: 0.1 });
          if (ref.current) io.observe(ref.current);
          return () => io.disconnect();
     }, []);
     return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
     const [ref, visible] = useReveal();
     return (
          <div
               ref={ref}
               style={{ transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}
               className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
               {children}
          </div>
     );
}

export default function Portfolio() {
     const [dark, setDark] = useState(true);
     const [scrolled, setScrolled] = useState(false);
     const [mobileOpen, setMobileOpen] = useState(false);
     const [skillTab, setSkillTab] = useState("all");
     const [projFilter, setProjFilter] = useState("all");
     const [submitted, setSubmitted] = useState(false);
     const [mouse, setMouse] = useState({ x: -999, y: -999 });
     const [activeProjIndex, setActiveProjIndex] = useState(0);

     const projectSliderRef = useRef(null);
     const scrollProjects = (dir) => {
          if (projectSliderRef.current) {
               const scrollAmount = window.innerWidth * 0.85;
               projectSliderRef.current.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
          }
     };

     const handleProjScroll = (e) => {
          if (!e.target) return;
          const scrollLeft = e.target.scrollLeft;
          const cardWidth = window.innerWidth * 0.85;
          const newIndex = Math.round(scrollLeft / cardWidth);
          if (newIndex !== activeProjIndex) setActiveProjIndex(newIndex);
     };

     useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 40);
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
     }, []);

     useEffect(() => {
          const onMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
          window.addEventListener("mousemove", onMouse);
          return () => window.removeEventListener("mousemove", onMouse);
     }, []);

     const bg = dark ? "bg-[#090b10]" : "bg-[#f4f5f9]";
     const txt = dark ? "text-[#e8eaf0]" : "text-[#111827]";
     const surface = dark ? "bg-[#131520]" : "bg-white";
     const border = dark ? "border-white/[0.07]" : "border-black/[0.08]";
     const muted = dark ? "text-[#8b90a7]" : "text-[#4b5563]";
     const faint = dark ? "text-[#454860]" : "text-[#9ca3af]";

     function handleSubmit(e) {
          e.preventDefault();
          setSubmitted(true);
          e.target.reset();
          setTimeout(() => setSubmitted(false), 5000);
     }

     const filteredProjects = PROJECTS.filter(
          (p) => projFilter === "all" || p.cat.includes(projFilter)
     );

     return (
          <div className={`${bg} ${txt} min-h-screen overflow-x-hidden relative font-sans`}
               style={{ fontFamily: "'DM Sans', sans-serif" }}>

               {/* Google Fonts */}
               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        .font-clash { font-family: 'Clash Display', sans-serif; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes pulse-glow { 0%,100%{opacity:.35} 50%{opacity:.9} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        .float { animation: float 5s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 22s linear infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .anim-1 { animation: fadeUp 0.6s ease both; }
        .anim-2 { animation: fadeUp 0.6s 0.1s ease both; }
        .anim-3 { animation: fadeUp 0.6s 0.2s ease both; }
        .anim-4 { animation: fadeUp 0.6s 0.3s ease both; }
        .anim-5 { animation: fadeUp 0.6s 0.4s ease both; }
        .anim-6 { animation: fadeUp 0.6s 0.5s ease both; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 2px; }
      `}</style>

               {/* Cursor glow */}
               <div
                    className="fixed pointer-events-none z-[9999] w-72 h-72 rounded-full"
                    style={{
                         background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)",
                         left: mouse.x, top: mouse.y, transform: "translate(-50%,-50%)",
                         transition: "opacity 0.3s ease",
                    }}
               />

               {/* Mesh background blobs */}
               <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute w-[600px] h-[600px] rounded-full -top-32 -left-40"
                         style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)", animation: "pulse-glow 6s ease-in-out infinite" }} />
                    <div className="absolute w-[500px] h-[500px] rounded-full bottom-[5%] -right-24"
                         style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", animation: "pulse-glow 8s ease-in-out infinite reverse" }} />
               </div>

               {/* NAV */}
               <nav className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300
        ${scrolled ? (dark ? "bg-[#090b10]/85 border-b border-white/[0.07] backdrop-blur-xl" : "bg-[#f4f5f9]/85 border-b border-black/[0.08] backdrop-blur-xl") : ""}`}>
                    <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
                         <div className={`font-clash font-bold text-xl ${txt}`}>Bilal Khadim </div>

                         <ul className="hidden md:flex items-center gap-7">
                              {NAV_LINKS.map(l => (
                                   <li key={l}>
                                        <a href={`#${l.toLowerCase()}`}
                                             className={`text-sm font-medium ${muted} hover:text-indigo-400 transition-colors duration-200 relative group`}>
                                             {l}
                                             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-indigo-400 rounded group-hover:w-full transition-all duration-300" />
                                        </a>
                                   </li>
                              ))}
                         </ul>
                         <div className="flex items-center gap-3">
                              <div className="hidden md:flex items-center gap-3 mr-2 border-r border-gray-500/30 pr-4">
                                   <a href="https://github.com/Bilal0876" target="_blank" className={`${muted} hover:text-indigo-400 transition-colors`}>
                                        <IconGithub size={18} />
                                   </a>
                                   <a href="https://linkedin.com/in/bilal-khadim-b2a359325/" target="_blank" className={`${muted} hover:text-indigo-400 transition-colors`}>
                                        <IconLinkedin size={18} />
                                   </a>
                              </div>
                              <button
                                   onClick={() => setDark(!dark)}
                                   aria-label="Toggle theme"
                                   className="relative flex items-center w-[50px] h-[24px] rounded-full flex-shrink-0 transition-colors duration-300 focus:outline-none"
                                   style={{ background: dark ? "#4f46e5" : "#bfdbfe" }}>
                                   <svg className="absolute left-[5px] w-[12px] h-[12px]" viewBox="0 0 24 24" fill={dark ? "#c7d2fe" : "#f59e0b"}><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke={dark ? "#c7d2fe" : "#f59e0b"} strokeWidth="2" strokeLinecap="round" /></svg>
                                   <svg className="absolute right-[5px] w-[12px] h-[12px]" viewBox="0 0 24 24" fill={dark ? "#e0e7ff" : "#6366f1"}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                   <div className="absolute w-[18px] h-[18px] rounded-full shadow-md bg-white transition-transform duration-300" style={{ transform: dark ? "translateX(29px)" : "translateX(3px)" }} />
                              </button>
                              <button className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
                                   onClick={() => setMobileOpen(!mobileOpen)}>
                                   {[0, 1, 2].map(i => (
                                        <span key={i} className={`w-5 h-[2px] rounded ${dark ? "bg-[#e8eaf0]" : "bg-[#111827]"} block transition-all`} />
                                   ))}
                              </button>
                         </div>
                    </div>
               </nav>

               {/* Mobile menu */}
               {mobileOpen && (
                    <div className={`fixed inset-0 top-16 ${dark ? "bg-[#090b10]" : "bg-[#f4f5f9]"} z-40 flex flex-col px-6 py-8 gap-1`}>
                         {NAV_LINKS.map(l => (
                              <a key={l} href={`#${l.toLowerCase()}`}
                                   onClick={() => setMobileOpen(false)}
                                   className={`text-base font-medium ${muted} py-3.5 border-b ${border} hover:text-indigo-400 transition-colors`}>
                                   {l}
                              </a>
                         ))}
                    </div>
               )}

               {/* HERO */}
               <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 w-full">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                              <div>
                                   <div className={`inline-flex items-center gap-2 ${surface} border ${border} rounded-full px-4 py-1.5 text-xs font-medium ${muted} mb-6 anim-1`}>
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
                                        Full Stack Developer
                                   </div>
                                   <p className={`text-2xl sm:text-3xl font-medium mb-3 anim-3 ${dark ? "text-indigo-200" : "text-indigo-900"}`}>Building seamless, scalable <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">web experiences</span></p>
                                   <p className={`text-lg sm:text-xl font-light mb-10 anim-4 ${faint}`}>from pixel to protocol.</p>
                                   <div className="flex gap-3 flex-wrap anim-5">
                                        <a href="#projects"
                                             className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-indigo-500/50 transition-all duration-200">
                                             <IconGithub size={15} /> View Projects
                                        </a>
                                        <a href="#contact"
                                             className={`inline-flex items-center gap-2 border ${border} ${txt} px-6 py-3 rounded-full font-medium text-sm hover:border-indigo-400 hover:text-indigo-400 hover:-translate-y-0.5 transition-all duration-200`}>
                                             <IconMail size={15} /> Contact Me
                                        </a>
                                   </div>
                                   <div className="flex gap-3 mt-9 flex-wrap anim-6">
                                        {[["3+", "Projects"], ["1+", "Yrs Exp."], ["15+", "Technologies"], ["3", "Certs."]].map(([n, l]) => (
                                             <div key={l} className={`${surface} border ${border} rounded-xl px-4 py-3 text-center hover:border-indigo-400/40 transition-colors`}>
                                                  <div className="font-clash font-bold text-xl bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{n}</div>
                                                  <div className={`text-[10px] uppercase tracking-widest ${faint} mt-1`}>{l}</div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                              <div className="hidden md:flex justify-center anim-3">
                                   <div className="relative w-72 h-72">
                                        <div className="spin-slow absolute -inset-5 rounded-full border border-dashed border-indigo-400/25" style={{ borderDasharray: "6 4" }}>
                                             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                        </div>
                                        <div className={`w-72 h-72 rounded-full ${dark ? "bg-gradient-to-br from-[#1c1f2e] to-[#131520]" : "bg-gradient-to-br from-[#e8eaf0] to-white"} border ${border} flex items-center justify-center text-[8.5rem] float`}
                                             style={{ boxShadow: "inset 0 0 60px rgba(99,102,241,0.08)" }}>
                                             <svg viewBox="0 0 24 24" width="120" height="120" fill="none"><rect x="2" y="4" width="20" height="13" rx="2" fill="#6366f1" opacity="0.15" stroke="#6366f1" strokeWidth="1.2" /><rect x="4" y="6" width="16" height="9" rx="1" fill="#4f46e5" opacity="0.4" /><path d="M6 9h12M6 11.5h8" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" /><path d="M1 19h22" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 17l-2 2M16 17l2 2" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" /></svg>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* ABOUT */}
               <section id="about" className={`py-24 ${dark ? "bg-[#0d0f18]" : "bg-[#eceef5]"}`}>
                    <div className="max-w-6xl mx-auto px-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                              <Reveal>
                                   <div className="grid grid-cols-2 gap-3">
                                        {[
                                             [<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><circle cx="12" cy="12" r="9" stroke="#f59e0b" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" fill="#f59e0b" /><line x1="12" y1="3" x2="12" y2="6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" /><line x1="12" y1="18" x2="12" y2="21" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" /><line x1="3" y1="12" x2="6" y2="12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" /><line x1="18" y1="12" x2="21" y2="12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" /></svg>, "Problem Solver", "Greedy algorithms to settlement engines â€” elegant solutions first."],
                                             [<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><rect x="3" y="11" width="18" height="10" rx="2" stroke="#6366f1" strokeWidth="1.5" /><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="16" r="1.5" fill="#6366f1" /></svg>, "Security-First", "JWT, HttpOnly cookies, Helmet, rate limiting â€” security by default."],
                                             [<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M12 2L8 7H5l3.5 4-1.5 6 5-3 5 3-1.5-6L19 7h-3L12 2z" stroke="#ec4899" strokeWidth="1.4" fill="#ec4899" fillOpacity="0.15" /></svg>, "Fast Learner", "From React to real-time WebSockets in one project cycle."],
                                             [<svg viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="#10b981" strokeWidth="1.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" /></svg>, "Team Player", "Git workflows, branching, and collaborative code review."],
                                        ].map(([icon, title, desc]) => (
                                             <div key={title}
                                                  className={`${surface} border ${border} rounded-2xl p-6 relative overflow-hidden hover:border-indigo-400/30 hover:-translate-y-1 transition-all duration-300 group`}>
                                                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full"
                                                       style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10), transparent 70%)" }} />
                                                  <div className="text-3xl mb-3">{icon}</div>
                                                  <h3 className="font-clash font-semibold text-sm mb-1.5">{title}</h3>
                                                  <p className={`${muted} text-xs leading-relaxed`}>{desc}</p>
                                             </div>
                                        ))}
                                   </div>
                              </Reveal>
                              <Reveal delay={100}>
                                   <div className="uppercase tracking-[0.2em] text-xs font-bold text-indigo-400 mb-3">About Me</div>
                                   <h2 className="font-clash font-bold text-3xl mb-5">
                                        Crafting <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">full-stack</span> solutions that scale
                                   </h2>
                                   <p className={`${muted} text-sm mb-3 leading-relaxed`}>
                                        I'm a <span className="text-indigo-400 font-medium">Full Stack Developer</span> with hands on experience in building web applications, integrating backend APIs, and deploying websites with authentication workflows.
                                   </p>
                                   <p className={`${muted} text-sm mb-3 leading-relaxed`}>
                                        Currently interning at <span className="text-indigo-400 font-medium">Qubit Lab Inc.</span>, I work on enterprise-level projects using React, MUI, and MVC-structured backends - with a deep commitment to writing <span className="text-indigo-400 font-medium">clean, secure, maintainable code</span>.
                                   </p>
                                   <p className={`${muted} text-sm leading-relaxed`}>
                                        I also enjoy AI/ML integrations, evident in my judicial transcription platform using Faster-Whisper and Pyannote for real-time STT and speaker diarization.
                                   </p>
                                   <div className="flex gap-2.5 mt-7">
                                        {[
                                             [<IconGithub size={17} />, "https://github.com/Bilal0876", "GitHub"],
                                             [<IconLinkedin size={17} />, "https://linkedin.com/in/bilal-khadim-b2a359325/", "LinkedIn"],
                                             [<IconMail size={17} />, "mailto:m.bilal0876@gmail.com", "Email"],
                                        ].map(([icon, href, title]) => (
                                             <a key={title} href={href} target={title !== "Email" ? "_blank" : undefined}
                                                  className={`w-10 h-10 rounded-full ${surface} border ${border} flex items-center justify-center ${muted} hover:border-indigo-400 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition-all duration-200`}>
                                                  {icon}
                                             </a>
                                        ))}
                                   </div>
                              </Reveal>
                         </div>
                    </div>
               </section>

               {/* SKILLS */}
               <section id="skills" className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="uppercase tracking-[0.2em] text-xs font-bold text-indigo-400 mb-3">Tech Stack</div>
                              <h2 className="font-clash font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                                   Skills & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Technologies</span>
                              </h2>
                              <p className={`${muted} text-base max-w-lg mb-12`}>A curated set of tools I use to build fast, secure, and scalable applications.</p>
                         </Reveal>
                         <Reveal delay={100}>
                              <div className="flex gap-2 flex-wrap mb-9">
                                   {["all", "frontend", "backend", "database", "tools", "languages"].map(tab => (
                                        <button key={tab} onClick={() => setSkillTab(tab)}
                                             className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 capitalize
                    ${skillTab === tab
                                                       ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20"
                                                       : `${surface} border ${border} ${muted} hover:border-indigo-400 hover:text-indigo-400`}`}>
                                             {tab}
                                        </button>
                                   ))}
                              </div>
                              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}>
                                   {SKILLS[skillTab].map(({ icon, label }) => (
                                        <div key={label}
                                             className={`${surface} border ${border} rounded-xl p-4 flex flex-col items-center gap-2 text-center text-xs font-medium ${muted} hover:border-indigo-400/60 hover:text-current hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default`}
                                             style={{ boxShadow: "0 0 0 transparent" }}
                                             onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.12)"}
                                             onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 transparent"}>
                                             <span className="text-2xl">{icon}</span>
                                             {label}
                                        </div>
                                   ))}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* PROJECTS */}
               <section id="projects" className={`py-24 ${dark ? "bg-[#0d0f18]" : "bg-[#eceef5]"}`}>
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="uppercase tracking-[0.2em] text-xs font-bold text-emerald-400 mb-3">Work Showcase</div>
                              <h2 className="font-clash font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                                   Featured <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
                              </h2>
                              <p className={`${muted} text-base max-w-lg mb-12`}>A selection of projects spanning web apps, AI integrations, and backend systems.</p>
                         </Reveal>
                         <Reveal delay={100}>
                              <div className="flex items-center justify-between gap-4 mb-9">
                                   <div className="flex gap-2 flex-wrap">
                                        {["all", "fullstack", "backend", "ai"].map(f => (
                                             <button key={f} onClick={() => { setProjFilter(f); setActiveProjIndex(0); if (projectSliderRef.current) projectSliderRef.current.scrollTo({ left: 0 }); }}
                                                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize
                                                      ${projFilter === f
                                                            ? "bg-emerald-500 text-white"
                                                            : `${surface} border ${border} ${muted} hover:border-emerald-400 hover:text-emerald-400`}`}>
                                                  {f === "ai" ? "AI / ML" : f.charAt(0).toUpperCase() + f.slice(1)}
                                             </button>
                                        ))}
                                   </div>
                              </div>
                              <div className="relative group md:static">
                                   <div ref={projectSliderRef} onScroll={handleProjScroll} className="flex md:grid gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(310px, 100%), 1fr))" }}>
                                        {filteredProjects.map((p) => (
                                             <div key={p.title}
                                                  className={`w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-center ${surface} border ${border} rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-indigo-400/30 transition-all duration-300`}
                                                  style={{ boxShadow: "0 0 0 transparent" }}
                                                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.25)"}
                                                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 transparent"}>
                                                  <div className={`h-40 bg-gradient-to-br ${p.bg} flex items-center justify-center text-6xl relative`}>
                                                       <span className="relative z-10">{p.emoji}</span>
                                                  </div>
                                                  <div className="p-5 flex-1 flex flex-col">
                                                       <div className="flex gap-1.5 flex-wrap mb-3">
                                                            {p.tags.map(t => (
                                                                 <span key={t} className={`${dark ? "bg-[#1c1f2e]" : "bg-[#e4e6f0]"} border ${border} ${muted} text-[10px] px-2.5 py-0.5 rounded-full font-medium`}>{t}</span>
                                                            ))}
                                                       </div>
                                                       <h3 className="font-clash font-semibold text-base mb-2">{p.title}</h3>
                                                       <p className={`${muted} text-xs leading-relaxed flex-1 mb-5`}>{p.desc}</p>
                                                       <div className="flex gap-2 flex-wrap">
                                                            <a href={p.gh} target="_blank"
                                                                 className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg ${dark ? "bg-[#1c1f2e]" : "bg-[#e4e6f0]"} border ${border} ${muted} hover:border-current hover:text-current transition-all`}>
                                                                 <IconGithub size={13} /> GitHub
                                                            </a>
                                                            {p.live && (
                                                                 <a href={p.live}
                                                                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-85 transition-opacity">
                                                                      <IconExternalLink size={13} /> Live Demo
                                                                 </a>
                                                            )}
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                                   {/* Left Edge Button */}
                                   <button onClick={() => scrollProjects(-1)} aria-label="Scroll left" className={`md:hidden absolute -left-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${surface} backdrop-blur-md border ${border} shadow-lg text-indigo-400 opacity-90 hover:opacity-100 z-10 transition-all ${activeProjIndex === 0 ? 'hidden' : 'flex'}`}>
                                        <IconChevronLeft size={20} />
                                   </button>
                                   {/* Right Edge Button */}
                                   <button onClick={() => scrollProjects(1)} aria-label="Scroll right" className={`md:hidden absolute -right-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center ${surface} backdrop-blur-md border ${border} shadow-lg text-indigo-400 opacity-90 hover:opacity-100 z-10 transition-all ${activeProjIndex === filteredProjects.length - 1 ? 'hidden' : 'flex'}`}>
                                        <IconChevronRight size={20} />
                                   </button>
                              </div>
                              {/* Minimal Pagination Dots */}
                              <div className="md:hidden flex justify-center gap-2 mt-6">
                                   {filteredProjects.map((_, i) => (
                                        <button
                                             key={i}
                                             aria-label={`Go to slide ${i + 1}`}
                                             onClick={() => {
                                                  if (projectSliderRef.current) {
                                                       projectSliderRef.current.scrollTo({ left: i * (window.innerWidth * 0.85), behavior: 'smooth' });
                                                  }
                                             }}
                                             className={`h-1.5 rounded-full transition-all duration-300 ${i === activeProjIndex ? 'w-6 bg-emerald-400' : `w-1.5 ${surface} border ${border} ${muted}`}`}
                                        />
                                   ))}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* EXPERIENCE */}
               <section id="experience" className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="uppercase tracking-[0.2em] text-xs font-bold text-indigo-400 mb-3">Background</div>
                              <h2 className="font-clash font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                                   Experience & <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Education</span>
                              </h2>
                              <p className={`${muted} text-base max-w-lg mb-14`}>Where I've been, what I've built, and how I've grown.</p>
                         </Reveal>
                         <Reveal delay={100}>
                              <div className="relative pl-6 sm:pl-8">
                                   <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />
                                   {TIMELINE.map((item, i) => (
                                        <div key={i} className="relative mb-11 group">
                                             <div className="absolute -left-[24px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 border-2 border-[#090b10] shadow-[0_0_12px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />
                                             <div className={`${surface} border ${border} rounded-2xl p-6 ml-2 group-hover:border-indigo-400/30 group-hover:translate-x-1 transition-all duration-300`}>
                                                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                                                       <span className="text-[11px] font-semibold tracking-wider text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">{item.date}</span>
                                                       <span className="text-[11px] font-semibold tracking-wider text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">{item.type}</span>
                                                  </div>
                                                  <div className="font-clash font-semibold text-base mb-1">{item.role}</div>
                                                  <div className="text-indigo-400 font-medium text-sm mb-4">{item.company}</div>
                                                  <ul className="flex flex-col gap-2">
                                                       {item.points.map((pt, j) => (
                                                            <li key={j} className={`${muted} text-xs flex gap-2.5 items-start leading-relaxed`}>
                                                                 <span className="text-indigo-400 mt-0.5 flex-shrink-0">&#8227;</span> {pt}
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* CERTIFICATIONS */}
               <section id="certifications" className={`py-24 ${dark ? "bg-[#0d0f18]" : "bg-[#eceef5]"}`}>
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="uppercase tracking-[0.2em] text-xs font-bold text-indigo-400 mb-3">Credentials</div>
                              <h2 className="font-clash font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                                   Course <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Certifications</span>
                              </h2>
                              <p className={`${muted} text-base max-w-lg mb-12`}>Industry-recognised credentials from Meta's professional development track.</p>
                         </Reveal>
                         <Reveal delay={100}>
                              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
                                   {CERTS.map(c => (
                                        <div key={c.title}
                                             className={`${surface} border ${border} rounded-xl p-5 flex items-center gap-4 hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-200`}
                                             style={{ boxShadow: "0 0 0 transparent" }}
                                             onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.10)"}
                                             onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 transparent"}>
                                             <span className="text-3xl flex-shrink-0">{c.icon}</span>
                                             <div>
                                                  <h4 className="font-semibold text-sm mb-1">{c.title}</h4>
                                                  <p className={`${faint} text-xs`}>{c.org}</p>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* CONTACT */}
               <section id="contact" className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="uppercase tracking-[0.2em] text-xs font-bold text-indigo-400 mb-3">Get In Touch</div>
                              <h2 className="font-clash font-bold mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                                   Let's <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Connect</span>
                              </h2>
                              <p className={`${muted} text-base max-w-lg mb-14`}>Have a project in mind or want to chat about opportunities? I'd love to hear from you.</p>
                         </Reveal>
                         <div className="flex w-full mt-12 mb-4">
                              <div className="inline-flex flex-wrap items-center justify-start gap-6">
                                   <a href="mailto:m.bilal0876@gmail.com" className={`flex items-center gap-4 ${surface} border ${border} rounded-2xl px-8 py-5 hover:border-indigo-400 hover:-translate-y-1 transition-all group`}>
                                        <IconMail size={26} className={`${muted} group-hover:text-indigo-400 transition-colors flex-shrink-0`} />
                                        <div className="text-left">
                                             <div className={`text-[10px] uppercase tracking-widest ${faint} mb-0.5`}>Email</div>
                                             <div className={`${muted} text-[15px] font-medium group-hover:text-indigo-400 transition-colors`}>m.bilal0876@gmail.com</div>
                                        </div>
                                   </a>
                                   <a href="https://linkedin.com/in/bilal-khadim-b2a359325/" target="_blank" className={`flex items-center justify-center w-[76px] h-[76px] flex-shrink-0 ${surface} border ${border} rounded-2xl hover:border-indigo-400 hover:-translate-y-1 transition-all group`}>
                                        <IconLinkedin size={30} className={`${muted} group-hover:text-indigo-400 transition-colors`} />
                                   </a>
                                   <a href="https://github.com/Bilal0876" target="_blank" className={`flex items-center justify-center w-[76px] h-[76px] flex-shrink-0 ${surface} border ${border} rounded-2xl hover:border-indigo-400 hover:-translate-y-1 transition-all group`}>
                                        <IconGithub size={30} className={`${muted} group-hover:text-indigo-400 transition-colors`} />
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
               <footer className={`${dark ? "bg-[#0d0f18]" : "bg-[#eceef5]"} border-t ${border} py-12 px-6`}>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between flex-wrap gap-6 mb-8">
                         <div className={`font-clash font-bold text-xl ${txt}`}>Bilal Khadim</div>
                         <div className="flex items-center gap-5">
                              <a href="mailto:m.bilal0876@gmail.com" className={`${muted} hover:text-indigo-400 transition-colors`}><IconMail size={20} /></a>
                              <a href="https://linkedin.com/in/bilal-khadim-b2a359325/" target="_blank" className={`${muted} hover:text-indigo-400 transition-colors`}><IconLinkedin size={20} /></a>
                              <a href="https://github.com/Bilal0876" target="_blank" className={`${muted} hover:text-indigo-400 transition-colors`}><IconGithub size={20} /></a>
                         </div>
                    </div>
                    <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t ${border}`}>
                         <ul className="flex gap-6 flex-wrap justify-center">
                              {["Home", "About", "Skills", "Projects", "Experience"].map(l => (
                                   <li key={l}>
                                        <a href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
                                             className={`${faint} text-xs font-medium hover:text-indigo-400 transition-colors uppercase tracking-wider`}>{l}</a>
                                   </li>
                              ))}
                         </ul>
                         <p className={`${faint} text-xs text-center`}>&copy; 2026 Muhammad Bilal. Crafted with care in Lahore, Pakistan.</p>
                    </div>
               </footer>
          </div>
     );
}

