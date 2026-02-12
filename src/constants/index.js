const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 12, 2026",
    title: "Truth Galaxy - My YouTube Channel",
    image: "/images/blog1.png",
    link: "https://www.youtube.com/@Truth-Galaxy",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express","FastAPI"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL","MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker","Kubernetes"],
  },
  {
    category: "ML & LLM Frameworks",
    items: [
      "TensorFlow",
      "LangChain",
      "ChromaDB",
      "pandas"
    ],
  }

];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/saikarthikeyac",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://saikarthikeya.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/saikarthikeya_c",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/saikarthikeya",
  },
  {
    id: 5,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#ffb84d",
    link: "mailto:saikarthikeye.c@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/me.png",
  },
  {
    id: 2,
    img: "/images/ai-image.png",
  },
  {
    id: 3,
    img: "/images/lung-sim1.png",
  },
  {
    id: 4,
    img: "/images/lung-sim2.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI-Powered Question Paper Generator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "AI Paper.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An AI-powered system that automatically generates structured question papers from NCERT textbooks.",
            "Built using a complete RAG pipeline with recursive text chunking, embeddings, and Chroma vector search.",
            "Fine-tuned Mistral 7B generates contextual questions and answers with high relevance.",
            "Includes duplicate detection, similarity checks, and regeneration logic to ensure quality and uniqueness."
          ],
        },
        {
          id: 2,
          name: "repository link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/saikarthikeyac/AI-powered-question-paper-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ai-paper.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ai-image.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/saikarthikeyac/resumeboost",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "End-to-End Stock Sentiment & ML Prediction Pipeline",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "End-to-End Stock Sentiment & ML Prediction Pipeline.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An end-to-end real-time stock prediction system powered by news sentiment and machine learning.",
            "Built with a Redis-based distributed pipeline that processes financial news and streams features into a Random Forest model.",
            "Integrates yfinance for live stock data, SQLite for storage, and FastAPI + Streamlit for API serving and visualization.",
            "Demonstrates full data workflow design including ingestion, processing, prediction, and dashboard deployment."
          ],

        },
        {
          id: 2,
          name: "repo link.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/saikarthikeyac/SentimentGrid-A-Distributed-Data-Science-Engine-for-Real-Time-Stock-Analytics",
          position: "top-10 right-20",
        },
      ],
    },
        // ▶ Project 4
    {
      id: 8,
      name: "LungSimX: Pulmonary Drug Interaction Simulator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-100", // icon position inside Finder
      windowPosition: "top-[50vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Lung Sim.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A collaborative 3D pulmonary drug interaction simulator built using Three.js to visualize real-time drug effects on lung tissue.",
            "Contributed to simulation logic, dynamic dosage visualization, and animated spread/recovery transitions.",
            "Implemented timer-based progress effects and modular UI components for interactive drug selection.",
            "Developed as part of a collaborative project (2 contributors)."
          ],
        },
        {
          id: 2,
          name: "repository link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Gunda-Sukesh/LungXSim",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "lung-sim.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-100",
          imageUrl: "/images/lung-sim1.png",
        },
        {
          id: 5,
          name: "lung-sim2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-62 right-80",
          imageUrl: "/images/lung-sim2.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.png",
    },

    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer",
      image: "/images/me.png",
      description: [
        "Hey, I’m Sai Karthikeya 👋 — a final-year CSE student with an AI & ML specialization.",
        "I enjoy building practical systems — from full-stack web applications to backend-focused and AI-driven projects.",
        "I like understanding things end-to-end, whether it’s structuring clean databases, designing responsive UIs, or integrating intelligent models into real applications.",
        "I focus on writing clear, maintainable code and building solutions that are reliable and scalable.",
        "Outside academics, I also create content on YouTube as a creative outlet and way to explore different ideas."
      ],

    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };