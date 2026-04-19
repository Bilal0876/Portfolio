import { useState, useEffect, useRef } from "react";

/* ─── TECH ICONS ─────────────────────────────────────────────────────────── */
const Tb = ({ c, t, tc = "#fff", r = 5 }) => <svg viewBox="0 0 26 26" width="26" height="26"><rect width="26" height="26" rx={r} fill={c} stroke="#111" strokeWidth="1.5" /><text x="13" y="18" textAnchor="middle" fontSize="9" fontWeight="800" fill={tc} fontFamily="system-ui,sans-serif">{t}</text></svg>;

const TReact = <svg viewBox="0 0 24 24" width="26" height="26"><circle cx="12" cy="12" r="2.1" fill="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" /></svg>;
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
const TJS = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#F7DF1E" stroke="#111" strokeWidth="1.5" /><text x="13" y="18" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1a1a1a" fontFamily="system-ui">JS</text></svg>;
const TTS = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#3178C6" stroke="#111" strokeWidth="1.5" /><text x="13" y="18" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" fontFamily="system-ui">TS</text></svg>;
const TCSharp = <svg viewBox="0 0 24 24" width="26" height="26"><rect width="24" height="24" rx={4} fill="#239120" stroke="#111" strokeWidth="1.5" /><text x="12" y="18" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#fff" fontFamily="system-ui">C#</text></svg>;
const TPython = <svg viewBox="0 0 24 24" width="26" height="26"><path d="M12 2c-2.5 0-4.5 1.1-4.5 3.5v2h9v1H5.5C3.6 8.5 2 10 2 13c0 2.5 1.3 4 3.5 4H7v-2.5C7 12 8.8 10.5 12 10.5s5 1.5 5 4V17h-9v1h10.5c2.2 0 3.5-1.8 3.5-4 0-2.5-1.5-4.5-3.5-4.5H16.5V12c0-2.5-1.8-4-4.5-4zm-1.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" /></svg>;

/* Briefcase icon for internship */
const IcoBriefcase = ({ size = 22 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
     </svg>
);
/* Graduation cap icon for education */
const IcoGradCap = ({ size = 22 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
          <path d="M6 11.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
     </svg>
);
/* Wallet/money icon for Split Sync */
const IcoWallet = ({ size = 38 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
          <circle cx="16" cy="13" r="1.5" fill="#fff" stroke="none" />
     </svg>
);
/* Mic icon for transcription */
const IcoMic = ({ size = 38 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="2" width="6" height="11" rx="3" />
          <path d="M19 10a7 7 0 0 1-14 0" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="8" y1="22" x2="16" y2="22" />
     </svg>
);
/* Globe/translate icon */
const IcoGlobe = ({ size = 38 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
     </svg>
);
/* Medal icon for certs */
const IcoMedal = ({ size = 28 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="14" r="7" />
          <path d="M8.5 2.5l-2 4.5h11l-2-4.5" />
          <text x="12" y="18" textAnchor="middle" fontSize="7" fontWeight="900" fill="currentColor" stroke="none" fontFamily="system-ui">1st</text>
     </svg>
);
/* Git branch / version control */
const IcoGitBranch = ({ size = 28 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
     </svg>
);
/* Code icon for JS cert */
const IcoCode = ({ size = 28 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
     </svg>
);
/* Stack icon for fullstack cert */
const IcoStack = ({ size = 28 }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
          <polyline points="2 13.5 12 20 22 13.5" />
     </svg>
);

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
          color: "#FF6B6B", shadowColor: "#c94f4f",
          accent: "#FFE66D",
          icon: <IcoWallet />,
          tags: ["React", "Node.js", "PostgreSQL", "Prisma", "JWT"],
          title: "Split Sync",
          desc: "Collaborative expense settlement app with a greedy algorithm that minimises total transactions. MVC architecture with JWT + HttpOnly cookies.",
          gh: "https://github.com/Bilal0876/SplitSync-Group-Expense-Management",
          live: "https://split-sync-group-expense-tracker.vercel.app",
     },
     {
          cat: ["fullstack", "ai"],
          color: "#4ECDC4", shadowColor: "#2fa89f",
          accent: "#FFE66D",
          icon: <IcoMic />,
          tags: ["React", "WebSockets", "Faster-Whisper", "Pyannote", "Supabase"],
          title: "AI Judicial Transcription",
          desc: "Real-time multilingual courtroom transcription with speaker diarization. Role-based access for judges, admins & stenographers.",
          gh: "https://github.com/Bilal0876/ai-powered-courtroom-management-and-transcription",
          live: null,
     },
     {
          cat: ["backend", "ai"],
          color: "#A8E6CF", shadowColor: "#5db88d",
          accent: "#FF6B6B",
          icon: <IcoGlobe />,
          tags: ["Python", "Flask", "Opus MT"],
          title: "Language Translator",
          desc: "Multilingual translation web app powered by Opus MT neural machine translation models. Clean Flask interface enabling cross-language text translation.",
          gh: "https://github.com/Bilal0876/language-translator-using-opusmt",
          live: null,
     },
];

const TIMELINE = [
     {
          date: "Feb 2026 – Present", type: "Internship", color: "#FF6B6B",
          role: "Full Stack Development Intern", company: "Qubit Lab Inc.",
          icon: <IcoBriefcase />,
          points: [
               "Built responsive UI components with React, Tailwind CSS, and shadcn/ui.",
               "Implemented JWT authentication with HttpOnly cookies.",
               "Worked within an MVC-structured backend with controllers, models & middleware.",
               "Used Git with branching strategies in a collaborative team environment.",
          ],
     },
     {
          date: "2022 – Feb 2026", type: "Education", color: "#4ECDC4",
          role: "BS Computer Science", company: "University of Central Punjab, Lahore",
          icon: <IcoGradCap />,
          points: [
               "Major: Software Development — full-stack engineering & system design.",
               "Minor: ML/Deep Learning — neural networks, model training, AI integrations.",
               "Applied coursework to real-world deployed projects.",
          ],
     },
];

const IconGithub = ({ size = 16 }) => (
     <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
     </svg>
);
const IconLinkedin = ({ size = 16 }) => (
     <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
     </svg>
);
const IconMail = ({ size = 16 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
     </svg>
);
const IconExternal = ({ size = 13 }) => (
     <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
     </svg>
);

function useReveal() {
     const ref = useRef(null);
     const [visible, setVisible] = useState(false);
     useEffect(() => {
          const io = new IntersectionObserver(([e]) => {
               if (e.isIntersecting) { setVisible(true); io.disconnect(); }
          }, { threshold: 0.08 });
          if (ref.current) io.observe(ref.current);
          return () => io.disconnect();
     }, []);
     return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
     const [ref, visible] = useReveal();
     return (
          <div ref={ref} style={{ transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}
               className={visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}>
               {children}
          </div>
     );
}

/* Chunky cartoon button */
function CartoonBtn({ children, href, color = "#FFE66D", textColor = "#111", onClick, className = "" }) {
     const [pressed, setPressed] = useState(false);
     const El = href ? "a" : "button";
     return (
          <El href={href} target={href && href.startsWith("http") ? "_blank" : undefined} onClick={onClick}
               onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} onMouseLeave={() => setPressed(false)}
               className={`inline-flex items-center gap-2 font-black text-sm px-6 py-3 rounded-2xl border-[3px] border-black cursor-pointer select-none transition-transform ${className}`}
               style={{
                    background: color, color: textColor,
                    boxShadow: pressed ? "2px 2px 0 #111" : "5px 5px 0 #111",
                    transform: pressed ? "translate(3px,3px)" : "translate(0,0)",
                    fontFamily: "'Nunito', sans-serif",
               }}>
               {children}
          </El>
     );
}

/* Skill chip */
function SkillChip({ icon, label }) {
     const [hov, setHov] = useState(false);
     const colors = ["#FFE66D", "#FF6B6B", "#4ECDC4", "#A8E6CF", "#C7CEEA", "#FFDAC1"];
     const c = colors[label.charCodeAt(0) % colors.length];
     return (
          <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
               className="flex flex-col items-center gap-2 p-3 rounded-2xl border-[2.5px] border-black cursor-default select-none"
               style={{
                    background: hov ? c : "#fff",
                    boxShadow: hov ? "3px 3px 0 #111" : "4px 4px 0 #111",
                    transform: hov ? "translate(-1px,-2px)" : "translate(0,0)",
                    transition: "all 0.15s ease",
                    fontFamily: "'Nunito', sans-serif",
               }}>
               <span className="text-2xl">{icon}</span>
               <span className="text-[11px] font-black text-center leading-tight">{label}</span>
          </div>
     );
}

export default function Portfolio() {
     const [scrolled, setScrolled] = useState(false);
     const [mobileOpen, setMobileOpen] = useState(false);
     const [skillTab, setSkillTab] = useState("all");
     const [projFilter, setProjFilter] = useState("all");

     useEffect(() => {
          const onScroll = () => setScrolled(window.scrollY > 40);
          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
     }, []);

     const filteredProjects = PROJECTS.filter(p => projFilter === "all" || p.cat.includes(projFilter));

     return (
          <div className="min-h-screen overflow-x-hidden" style={{ background: "#FFFBF0", fontFamily: "'Nunito', sans-serif" }}>

               <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
        .font-fredoka { font-family: 'Fredoka One', cursive; }
        @keyframes wobble { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.5deg)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin-slow { to{transform:rotate(360deg)} }
        @keyframes bounce-in { 0%{transform:scale(0.6) rotate(-5deg);opacity:0} 70%{transform:scale(1.05) rotate(1deg)} 100%{transform:scale(1) rotate(0deg);opacity:1} }
        @keyframes slide-in-left { from{transform:translateX(-60px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes wiggle { 0%,100%{transform:rotate(0)} 25%{transform:rotate(-3deg)} 75%{transform:rotate(3deg)} }
        .wobble { animation: wobble 3s ease-in-out infinite; }
        .float { animation: float 3.5s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .bounce-in { animation: bounce-in 0.7s cubic-bezier(.36,.07,.19,.97) both; }
        .slide-in-left { animation: slide-in-left 0.5s ease both; }
        ::-webkit-scrollbar { width: 6px; } 
        ::-webkit-scrollbar-thumb { background: #FF6B6B; border-radius: 3px; }
        .star-deco { position:absolute; pointer-events:none; }
        .tag-pill { display:inline-flex; align-items:center; font-size:10px; font-weight:800; padding:3px 10px; border-radius:999px; border:2px solid #111; background:#FFE66D; color:#111; }
        .section-label { display:inline-block; font-size:11px; font-weight:900; letter-spacing:.15em; text-transform:uppercase; background:#111; color:#FFE66D; padding:4px 14px; border-radius:999px; margin-bottom:12px; }
        .cartoon-card { background:#fff; border:3px solid #111; border-radius:24px; box-shadow:6px 6px 0 #111; transition:box-shadow 0.15s,transform 0.15s; }
        .cartoon-card:hover { box-shadow:9px 9px 0 #111; transform:translate(-3px,-3px); }
        .nav-link { font-weight:800; font-size:14px; color:#111; text-decoration:none; position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:3px; background:#FF6B6B; border-radius:2px; transition:width .25s; }
        .nav-link:hover::after { width:100%; }
      `}</style>

               {/* Decorative background polka dots */}
               <div className="fixed inset-0 pointer-events-none z-0" style={{
                    backgroundImage: "radial-gradient(circle, #e0d8c8 1px, transparent 1px)",
                    backgroundSize: "32px 32px"
               }} />

               {/* NAV */}
               <nav className="fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300"
                    style={{
                         background: scrolled ? "rgba(255,251,240,0.92)" : "transparent",
                         backdropFilter: scrolled ? "blur(12px)" : "none",
                         borderBottom: scrolled ? "3px solid #111" : "none",
                    }}>
                    <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
                         <div className="font-fredoka text-2xl" style={{ color: "#111", letterSpacing: "0.02em" }}>
                              Bilal<span style={{ color: "#FF6B6B" }}>.</span>dev
                         </div>
                         <ul className="hidden md:flex items-center gap-7">
                              {NAV_LINKS.map(l => (
                                   <li key={l}><a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a></li>
                              ))}
                         </ul>
                         <div className="flex items-center gap-3">
                              <a href="https://github.com/Bilal0876" target="_blank"
                                   className="hidden md:flex w-9 h-9 rounded-xl border-2 border-black items-center justify-center bg-white"
                                   style={{ boxShadow: "3px 3px 0 #111" }}>
                                   <IconGithub size={16} />
                              </a>
                              <a href="https://linkedin.com/in/bilal-khadim-b2a359325/" target="_blank"
                                   className="hidden md:flex w-9 h-9 rounded-xl border-2 border-black items-center justify-center bg-white"
                                   style={{ boxShadow: "3px 3px 0 #111" }}>
                                   <IconLinkedin size={16} />
                              </a>
                              <button className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
                                   onClick={() => setMobileOpen(!mobileOpen)}>
                                   {[0, 1, 2].map(i => <span key={i} className="w-5 h-[2.5px] rounded bg-black block" />)}
                              </button>
                         </div>
                    </div>
               </nav>

               {mobileOpen && (
                    <div className="fixed inset-0 top-16 z-40 flex flex-col px-6 py-8 gap-1" style={{ background: "#FFFBF0", borderTop: "3px solid #111" }}>
                         {NAV_LINKS.map(l => (
                              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                                   className="text-base font-black py-3.5 border-b-2 border-black/20 text-black">
                                   {l}
                              </a>
                         ))}
                    </div>
               )}

               {/* ── HERO ─────────────────────────────────────────────── */}
               <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
                    {/* BG blobs */}
                    <div className="absolute top-20 right-8 w-72 h-72 rounded-full opacity-40 float" style={{ background: "#FFD93D", zIndex: 0 }} />
                    <div className="absolute bottom-24 left-4 w-48 h-48 rounded-full opacity-30" style={{ background: "#4ECDC4", zIndex: 0 }} />
                    <div className="absolute top-40 left-1/3 w-20 h-20 rounded-full opacity-20" style={{ background: "#FFE66D", zIndex: 0 }} />

                    {/* Stars */}
                    {[
                         { top: "65px", left: "46px", right: "auto", bottom: "auto", rotate: "rotate(0deg)" },
                         { top: "120px", left: "auto", right: "16px", bottom: "auto", rotate: "rotate(15deg)" },
                         { top: "80%", left: "63%", right: "auto", bottom: "80px", rotate: "rotate(-10deg)" },
                         { top: "52%", left: "auto", right: "48px", bottom: "auto", rotate: "rotate(20deg)" },
                    ].map(({ rotate, ...pos }, i) => (
                         <div key={i} className="star-deco" style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom, transform: rotate }}>
                              <div style={{ animationDelay: `${i * 0.4}s`, animation: `wiggle ${2 + i * 0.3}s ease-in-out infinite` }}>
                                   <svg width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 2l2.4 7H22l-6.2 4.5 2.4 7L12 16 5.8 20.5l2.4-7L2 9h7.6z" fill="#FFE66D" stroke="#111" strokeWidth="2" />
                                   </svg>
                              </div>
                         </div>
                    ))}

                    <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                              <div>
                                   {/* Speech bubble badge */}
                                   <div className="inline-block mb-6 bounce-in">
                                        <div className="relative inline-block px-5 py-2 border-[3px] border-black rounded-2xl bg-white font-black text-sm"
                                             style={{ boxShadow: "4px 4px 0 #111" }}>
                                             <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2 border border-black" />
                                             Available for hire
                                             <div className="absolute -bottom-3 left-6 w-4 h-4 bg-white border-b-[3px] border-r-[3px] border-black"
                                                  style={{ transform: "rotate(45deg)", zIndex: -1 }} />
                                        </div>
                                   </div>

                                   <h1 className="font-fredoka mb-2 leading-none slide-in-left"
                                        style={{ fontSize: "clamp(3rem,7vw,5.5rem)", color: "#111" }}>
                                        Bilal<br />
                                        <span style={{ color: "#FF6B6B", WebkitTextStroke: "2px #111" }}>Khadim</span>
                                   </h1>

                                   <div className="inline-block px-5 py-2 rounded-2xl border-[3px] border-black mb-6 font-black text-lg"
                                        style={{ background: "#FFE66D", boxShadow: "4px 4px 0 #111" }}>
                                        Full Stack Developer
                                   </div>

                                   <p className="font-bold text-base mb-8 max-w-md leading-relaxed" style={{ color: "#444" }}>
                                        Building seamless, scalable <strong style={{ color: "#FF6B6B" }}>web experiences</strong> — from pixel to protocol.
                                   </p>

                                   <div className="flex gap-3 flex-wrap">
                                        <CartoonBtn href="#projects" color="#FF6B6B" textColor="#fff">
                                             <IconGithub size={16} /> View Projects
                                        </CartoonBtn>
                                        <CartoonBtn href="#contact" color="#4ECDC4" textColor="#111">
                                             <IconMail size={16} /> Contact Me
                                        </CartoonBtn>
                                   </div>

                                   {/* Stats row */}
                                   <div className="flex gap-3 mt-8 flex-wrap">
                                        {[["3+", "Projects", "#FF6B6B"], ["1+", "Yrs Exp", "#4ECDC4"], ["15+", "Technologies", "#FFE66D"], ["3", "Certs", "#A8E6CF"]].map(([n, l, c]) => (
                                             <div key={l} className="text-center px-4 py-3 rounded-2xl border-[3px] border-black"
                                                  style={{ background: c, boxShadow: "4px 4px 0 #111", minWidth: 70 }}>
                                                  <div className="font-fredoka text-2xl" style={{ color: "#111" }}>{n}</div>
                                                  <div className="font-black text-[10px] uppercase tracking-widest text-black/60">{l}</div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Hero illustration */}
                              <div className="hidden md:flex justify-center items-center">
                                   <div className="relative">
                                        {/* Outer spinning ring */}
                                        <div className="spin-slow absolute -inset-8 rounded-full border-[3px] border-dashed border-black opacity-20" />
                                        {/* Main blob */}
                                        <div className="w-72 h-72 rounded-full border-[4px] border-black flex items-center justify-center float"
                                             style={{ background: "linear-gradient(135deg,#FFE66D 0%,#FF6B6B 100%)", boxShadow: "8px 8px 0 #111" }}>
                                             <svg viewBox="0 0 120 120" width="130" height="130" fill="none">
                                                  <rect x="10" y="25" width="100" height="65" rx="12" fill="#fff" stroke="#111" strokeWidth="4" />
                                                  <rect x="20" y="35" width="80" height="45" rx="8" fill="#4ECDC4" stroke="#111" strokeWidth="2.5" />
                                                  <path d="M28 48h64M28 56h45" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                                                  <path d="M5 98h110" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                                                  <path d="M38 90l-10 8M82 90l10 8" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
                                                  {/* Floating elements */}
                                                  <circle cx="95" cy="20" r="10" fill="#FF6B6B" stroke="#111" strokeWidth="2.5" />
                                                  <text x="95" y="25" textAnchor="middle" fontSize="10" fontWeight="900" fill="#fff" fontFamily="sans-serif">JS</text>
                                                  <circle cx="20" cy="108" r="8" fill="#FFE66D" stroke="#111" strokeWidth="2" />
                                                  <text x="20" y="112" textAnchor="middle" fontSize="7" fontWeight="900" fill="#111" fontFamily="sans-serif">TS</text>
                                             </svg>
                                        </div>
                                        {/* Decorative mini cards orbiting */}
                                        {[
                                             { label: "React", color: "#61DAFB", top: "-10px", left: "0px" },
                                             { label: "Node", color: "#5FA04E", bottom: "0px", right: "-10px" },
                                        ].map(({ label, color, ...pos }) => (
                                             <div key={label} className="absolute px-3 py-1 rounded-xl border-[2.5px] border-black font-black text-xs wobble"
                                                  style={{ background: color, boxShadow: "3px 3px 0 #111", ...pos }}>{label}</div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* ── ABOUT ─────────────────────────────────────────────── */}
               <section id="about" className="py-24 relative" style={{ background: "#FFF5E6" }}>
                    <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "repeating-linear-gradient(90deg,#111 0,#111 20px,transparent 20px,transparent 30px)" }} />
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                                   {/* Trait cards */}
                                   <div className="grid grid-cols-2 gap-4">
                                        {[
                                             { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A6.5 6.5 0 0 1 16 8.5c0 3.58-2.92 6.5-6.5 6.5A6.5 6.5 0 0 1 3 8.5 6.5 6.5 0 0 1 9.5 2z" /><path d="M21 21l-4.35-4.35" /><path d="M9.5 8.5h.01M12 6.5l-2.5 2 1 2.5" /></svg>, title: "Problem Solver", desc: "Greedy algorithms to settlement engines — elegant solutions first.", color: "#FFE66D" },

                                             { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, title: "Security-First", desc: "JWT, HttpOnly cookies, Helmet, rate limiting — security by default.", color: "#FF6B35" },

                                             { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>, title: "Fast Learner", desc: "From React to real-time WebSockets in one project cycle.", color: "#4ECDC4" },

                                             { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0-3-3.85" /></svg>, title: "Team Player", desc: "Git workflows, branching, and collaborative code review.", color: "#A8E6CF" },
                                        ].map(({ icon, title, desc, color }) => (
                                             <div key={title} className="cartoon-card p-5" style={{ background: color }}>
                                                  <div className="text-3xl mb-3">{icon}</div>
                                                  <h3 className="font-fredoka text-base mb-1">{title}</h3>
                                                  <p className="text-xs font-semibold leading-relaxed opacity-80">{desc}</p>
                                             </div>
                                        ))}
                                   </div>

                                   <div>
                                        <div className="section-label">About Me</div>
                                        <h2 className="font-fredoka mb-5" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#111" }}>
                                             Crafting <span style={{ color: "#FF6B6B" }}>full-stack</span> solutions that scale
                                        </h2>
                                        <p className="font-semibold text-sm mb-3 leading-relaxed text-black/70">
                                             I'm a <strong className="text-black">Full Stack Developer</strong> with hands-on experience in building web applications, integrating backend APIs, and deploying websites with authentication workflows.
                                        </p>
                                        <p className="font-semibold text-sm mb-3 leading-relaxed text-black/70">
                                             Currently interning at <strong className="text-black">Qubit Lab Inc.</strong>, I work on enterprise-level projects using React, MUI, and MVC-structured backends.
                                        </p>
                                        <p className="font-semibold text-sm leading-relaxed text-black/70">
                                             I also enjoy AI/ML integrations — evident in my judicial transcription platform using Faster-Whisper and Pyannote for real-time STT and speaker diarization.
                                        </p>
                                        <div className="flex gap-3 mt-7">
                                             {[
                                                  { icon: <IconGithub size={17} />, href: "https://github.com/Bilal0876", color: "#111", tc: "#fff" },
                                                  { icon: <IconLinkedin size={17} />, href: "https://linkedin.com/in/bilal-khadim-b2a359325/", color: "#0A66C2", tc: "#fff" },
                                                  { icon: <IconMail size={17} />, href: "mailto:m.bilal0876@gmail.com", color: "#FF6B6B", tc: "#fff" },
                                             ].map(({ icon, href, color, tc }, i) => (
                                                  <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                                                       className="w-11 h-11 rounded-xl border-[2.5px] border-black flex items-center justify-center transition-transform hover:-translate-y-1"
                                                       style={{ background: color, color: tc, boxShadow: "4px 4px 0 #111" }}>
                                                       {icon}
                                                  </a>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </Reveal>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: "repeating-linear-gradient(90deg,#111 0,#111 20px,transparent 20px,transparent 30px)" }} />
               </section>

               {/* ── SKILLS ─────────────────────────────────────────────── */}
               <section id="skills" className="py-24 relative" style={{ background: "#FFFBF0" }}>
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="section-label">Tech Stack</div>
                              <h2 className="font-fredoka mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#111" }}>
                                   Skills & <span style={{ color: "#4ECDC4" }}>Technologies</span>
                              </h2>
                              <p className="font-semibold text-sm text-black/60 mb-10 max-w-md">A curated set of tools I use to build fast, secure, and scalable applications.</p>
                         </Reveal>
                         <Reveal delay={100}>
                              {/* Tab pills */}
                              <div className="flex gap-2 flex-wrap mb-8">
                                   {["all", "frontend", "backend", "database", "tools", "languages"].map(tab => {
                                        const active = skillTab === tab;
                                        return (
                                             <button key={tab} onClick={() => setSkillTab(tab)}
                                                  className="px-4 py-2 rounded-2xl border-[2.5px] border-black font-black text-xs capitalize transition-all"
                                                  style={{
                                                       background: active ? "#111" : "#fff",
                                                       color: active ? "#FFE66D" : "#111",
                                                       boxShadow: active ? "3px 3px 0 #FF6B6B" : "3px 3px 0 #111",
                                                       transform: active ? "translate(-1px,-1px)" : "",
                                                  }}>
                                                  {tab}
                                             </button>
                                        );
                                   })}
                              </div>
                              <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))" }}>
                                   {SKILLS[skillTab].map(({ icon, label }) => <SkillChip key={label} icon={icon} label={label} />)}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* ── PROJECTS ─────────────────────────────────────────────── */}
               <section id="projects" className="py-24 relative" style={{ background: "#E8F8F5" }}>
                    <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: "repeating-linear-gradient(90deg,#4ECDC4 0,#4ECDC4 20px,transparent 20px,transparent 30px)" }} />
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="section-label" style={{ background: "#4ECDC4", color: "#111" }}>Work Showcase</div>
                              <h2 className="font-fredoka mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#111" }}>
                                   Featured <span style={{ color: "#FF6B6B" }}>Projects</span>
                              </h2>
                              <p className="font-semibold text-sm text-black/60 mb-10 max-w-md">A selection of projects spanning web apps, AI integrations, and backend systems.</p>
                         </Reveal>
                         <Reveal delay={80}>
                              <div className="flex gap-2 flex-wrap mb-8">
                                   {["all", "fullstack", "backend", "ai"].map(f => {
                                        const active = projFilter === f;
                                        const label = f === "ai" ? "AI / ML" : f.charAt(0).toUpperCase() + f.slice(1);
                                        return (
                                             <button key={f} onClick={() => setProjFilter(f)}
                                                  className="px-4 py-1.5 rounded-2xl border-[2.5px] border-black font-black text-xs transition-all"
                                                  style={{
                                                       background: active ? "#FF6B6B" : "#fff",
                                                       color: active ? "#fff" : "#111",
                                                       boxShadow: active ? "3px 3px 0 #c94f4f" : "3px 3px 0 #111",
                                                  }}>
                                                  {label}
                                             </button>
                                        );
                                   })}
                              </div>
                         </Reveal>
                         <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%), 1fr))" }}>
                              {filteredProjects.map((p, i) => (
                                   <Reveal key={p.title} delay={i * 80}>
                                        <div className="cartoon-card overflow-hidden flex flex-col h-full">
                                             {/* Card header */}
                                             <div className="h-44 flex items-center justify-center relative border-b-[3px] border-black"
                                                  style={{ background: p.color }}>
                                                  <span className="text-7xl" style={{ filter: "drop-shadow(3px 3px 0 rgba(0,0,0,0.3))" }}>{p.icon}</span>
                                                  {/* 3D accent shadow block */}
                                                  <div className="absolute bottom-0 left-0 right-0 h-3" style={{ background: p.shadowColor }} />
                                             </div>
                                             <div className="p-5 flex-1 flex flex-col" style={{ background: "#fff" }}>
                                                  <div className="flex gap-1.5 flex-wrap mb-3">
                                                       {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                                                  </div>
                                                  <h3 className="font-fredoka text-xl mb-2" style={{ color: "#111" }}>{p.title}</h3>
                                                  <p className="font-semibold text-xs leading-relaxed flex-1 mb-4 text-black/60">{p.desc}</p>
                                                  <div className="flex gap-2 flex-wrap">
                                                       <CartoonBtn href={p.gh} color="#111" textColor="#FFE66D" className="text-xs px-3 py-1.5">
                                                            <IconGithub size={13} /> GitHub
                                                       </CartoonBtn>
                                                       {p.live && (
                                                            <CartoonBtn href={p.live} color={p.color} textColor="#111" className="text-xs px-3 py-1.5">
                                                                 <IconExternal size={13} /> Live Demo
                                                            </CartoonBtn>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>
                                   </Reveal>
                              ))}
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[6px]" style={{ background: "repeating-linear-gradient(90deg,#4ECDC4 0,#4ECDC4 20px,transparent 20px,transparent 30px)" }} />
               </section>

               {/* ── EXPERIENCE ─────────────────────────────────────────────── */}
               <section id="experience" className="py-24" style={{ background: "#FFFBF0" }}>
                    <div className="max-w-6xl mx-auto px-6">
                         <Reveal>
                              <div className="section-label">Background</div>
                              <h2 className="font-fredoka mb-3" style={{ fontSize: "clamp(2rem,4vw,2.8rem)", color: "#111" }}>
                                   Experience & <span style={{ color: "#FF6B6B" }}>Education</span>
                              </h2>
                              <p className="font-semibold text-sm text-black/60 mb-14 max-w-md">Where I've been, what I've built, and how I've grown.</p>
                         </Reveal>
                         <div className="relative pl-8">
                              {/* Timeline spine */}
                              <div className="absolute left-3 top-0 bottom-0 w-[4px] rounded-full" style={{ background: "linear-gradient(to bottom, #FF6B6B, #4ECDC4)" }} />
                              {TIMELINE.map((item, i) => (
                                   <Reveal key={i} delay={i * 100}>
                                        <div className="relative mb-10">
                                             {/* Dot */}
                                             <div className="absolute -left-[22px] top-4 w-6 h-6 rounded-full border-[3px] border-black flex items-center justify-center text-sm"
                                                  style={{ background: item.color, boxShadow: "2px 2px 0 #111" }}>
                                                  {item.icon}
                                             </div>
                                             <div className="cartoon-card p-6 ml-2">
                                                  <div className="flex items-center gap-2 flex-wrap mb-2">
                                                       <span className="tag-pill" style={{ background: item.color }}>{item.date}</span>
                                                       <span className="tag-pill" style={{ background: "#4ECDC4" }}>{item.type}</span>
                                                  </div>
                                                  <h3 className="font-fredoka text-lg mb-1">{item.role}</h3>
                                                  <p className="font-black text-sm mb-4" style={{ color: "#FF6B6B" }}>{item.company}</p>
                                                  <ul className="flex flex-col gap-2">
                                                       {item.points.map((pt, j) => (
                                                            <li key={j} className="font-semibold text-xs flex gap-2 items-start leading-relaxed text-black/70">
                                                                 <span style={{ color: item.color }} className="mt-0.5 flex-shrink-0 text-base">▸</span> {pt}
                                                            </li>
                                                       ))}
                                                  </ul>
                                             </div>
                                        </div>
                                   </Reveal>
                              ))}
                         </div>

                         {/* Certs */}
                         <Reveal delay={100}>
                              <div className="mt-16">
                                   <div className="section-label" style={{ background: "#FFE66D", color: "#111" }}>Credentials</div>
                                   <h2 className="font-fredoka mb-8" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#111" }}>
                                        Course <span style={{ color: "#4ECDC4" }}>Certifications</span>
                                   </h2>
                                   <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
                                        {[
                                             { icon: <IcoStack size={28} />, title: "The Full Stack", org: "Meta" },
                                             { icon: <IcoGitBranch size={28} />, title: "Version Control", org: "Meta" },
                                             { icon: <IcoCode size={28} />, title: "Programming with JavaScript", org: "Meta" },
                                        ].map(c => (
                                             <div key={c.title} className="cartoon-card p-5 flex items-center gap-4" style={{ background: "#fff" }}>
                                                  <span className="text-3xl">{c.icon}</span>
                                                  <div>
                                                       <h4 className="font-black text-sm mb-0.5">{c.title}</h4>
                                                       <p className="text-xs font-bold text-black/50">{c.org}</p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* ── CONTACT ─────────────────────────────────────────────── */}
               <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#FF6B6B" }}>
                    {/* Decorative */}
                    <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30" style={{ background: "#FFE66D", border: "4px solid #111" }} />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-20" style={{ background: "#fff", border: "4px solid #111" }} />

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                         <Reveal>
                              <div className="section-label" style={{ background: "#FFE66D", color: "#111" }}>Get In Touch</div>
                              <h2 className="font-fredoka mb-3" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#fff", WebkitTextStroke: "2px #111" }}>
                                   Let's Connect!
                              </h2>
                              <p className="font-black text-base text-white/80 mb-12 max-w-md">
                                   Have a project in mind or want to chat about opportunities? I'd love to hear from you.
                              </p>
                         </Reveal>
                         <Reveal delay={100}>
                              <div className="flex flex-wrap gap-4">
                                   <a href="mailto:m.bilal0876@gmail.com"
                                        className="flex items-center gap-4 px-8 py-5 rounded-2xl border-[3px] border-black transition-transform hover:-translate-y-1"
                                        style={{ background: "#fff", boxShadow: "6px 6px 0 #111" }}>
                                        <IconMail size={26} />
                                        <div>
                                             <div className="font-black text-[10px] uppercase tracking-widest text-black/50 mb-0.5">Email</div>
                                             <div className="font-black text-base">m.bilal0876@gmail.com</div>
                                        </div>
                                   </a>
                                   {[
                                        { icon: <IconLinkedin size={28} />, href: "https://linkedin.com/in/bilal-khadim-b2a359325/", label: "LinkedIn" },
                                        { icon: <IconGithub size={28} />, href: "https://github.com/Bilal0876", label: "GitHub" },
                                   ].map(({ icon, href, label }) => (
                                        <a key={label} href={href} target="_blank"
                                             className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl border-[3px] border-black transition-transform hover:-translate-y-1"
                                             style={{ background: "#fff", boxShadow: "5px 5px 0 #111" }}>
                                             {icon}
                                             <span className="font-black text-[9px] mt-1">{label}</span>
                                        </a>
                                   ))}
                              </div>
                         </Reveal>
                    </div>
               </section>

               {/* FOOTER */}
               <footer className="py-10 px-6 border-t-[3px] border-black" style={{ background: "#111" }}>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                         <div className="font-fredoka text-xl" style={{ color: "#FFE66D" }}>Bilal<span style={{ color: "#FF6B6B" }}>.</span>dev</div>
                         <p className="font-black text-xs text-white/40">© 2026 Muhammad Bilal Khadim</p>
                         <div className="flex gap-3">
                              {[
                                   { icon: <IconMail size={18} />, href: "mailto:m.bilal0876@gmail.com" },
                                   { icon: <IconLinkedin size={18} />, href: "https://linkedin.com/in/bilal-khadim-b2a359325/" },
                                   { icon: <IconGithub size={18} />, href: "https://github.com/Bilal0876" },
                              ].map(({ icon, href }, i) => (
                                   <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                                        className="w-9 h-9 rounded-xl border-2 border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors">
                                        {icon}
                                   </a>
                              ))}
                         </div>
                    </div>
               </footer>
          </div>
     );
}