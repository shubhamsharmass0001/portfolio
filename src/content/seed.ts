import type { SiteContent } from "./types";

/**
 * Local seed content.
 *
 * This is the site's content until Sanity credentials are present. It exists
 * so the project runs, builds, and deploys with zero external setup — and so
 * there is always a known-good reference for the shape the CMS must return.
 *
 * Once /studio is populated, Sanity wins and this file becomes the fallback.
 */
export const seedContent: SiteContent = {
  settings: {
    name: "Shubham",
    role: "SDE",
    thesis:
      "I build full-stack products and AI systems end-to-end — from database schema to LLM orchestration to production deployment. My best work lives where backend engineering meets applied AI.",
    location: "Gurugram, Haryana",
    email: "shubhamsharmass0001@gmail.com",
    socials: [
      { label: "GitHub", url: "https://github.com/shubhamsharmass0001" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shubhamsharmass0001/" },
    ],
    resumeUrl: "/resume.pdf",
    currently: "EXL",
    stats: [
      { value: "2142", label: "LeetCode rating" },
      { value: "1100+", label: "problems solved" },
      { value: "1.28%", label: "LeetCode global rank" },
    ],
    workIntro:
      "Full-stack systems and applied AI — from retinal-image ML pipelines to multi-agent LangGraph workflows.",
    contactHeading:
      "Building something at the intersection of backend and AI? Let's talk.",
    footerNote: "Built by Shubham Sharma \u00b7 Next.js, GSAP, Sanity",
  },

  projects: [
    {
      slug: "email-intelligence",
      title: "EmailAI",
      tagline: "AI-native customer-support platform with multi-agent orchestration.",
      org: "Personal Project",
      role: "Creator",
      period: "2026",
      stack: ["Next.js", "FastAPI", "Python", "LangGraph", "ChromaDB", "Multi-Provider LLM"],
      status: "live",
      doodle: "brain",
      problem: [
        "Customer support teams drown in repetitive queries. Existing bots give brittle, keyword-matched answers that fall apart the moment a question strays from the script.",
        "There was no system that could reliably classify intent, retrieve the right policy context, generate a grounded response, and measure its own quality — all in a single coherent pipeline.",
      ],
      build: [
        "A full-stack JEV-aligned AI platform with a Next.js frontend and an async FastAPI backend, orchestrating a multi-agent LangGraph workflow for intent classification, document retrieval, and response generation.",
        "RAG with ChromaDB over a structured JSON knowledge base of policies and FAQs, reducing irrelevant responses by 40% through semantic retrieval and context-aware generation.",
        "Claude \u2192 Gemini failover for LLM reliability, and an automated evaluation pipeline using BERTScore, semantic similarity, and LLM-as-a-judge \u2014 improving response-quality monitoring by 35%.",
      ],
      outcome: [
        "Reduced irrelevant responses by 40% through semantic retrieval and context-aware generation.",
        "Improved response-quality monitoring by 35% via an automated BERTScore + LLM-as-a-judge evaluation pipeline.",
      ],
      links: [],
    },

    {
      slug: "project-evaluator",
      title: "Evaluator",
      tagline: "Batch-verify 500+ certificates and LinkedIn posts in minutes.",
      org: "Personal Project",
      role: "Creator",
      period: "2026",
      stack: ["Python", "Streamlit", "Selenium", "Pandas", "Multi-threading", "BeautifulSoup"],
      status: "live",
      doodle: "stamp",
      problem: [
        "Manually verifying hundreds of Coursera certificates and LinkedIn posts for community programmes was slow, error-prone, and entirely dependent on spreadsheet column names matching exactly \u2014 which they never did.",
      ],
      build: [
        "A verification tool that batch-validates 500+ Coursera certificates and LinkedIn posts using Selenium, BeautifulSoup, and Streamlit, replacing manual checking entirely.",
        "A multi-threaded pipeline for concurrent verification and data extraction, reducing processing time by 60% compared with sequential execution.",
        "Fuzzy matching to auto-detect inconsistent Excel column names and generate evaluation reports, removing manual column mapping and review effort.",
      ],
      outcome: [
        "60% reduction in processing time versus sequential execution.",
        "Eliminated manual column-mapping overhead entirely with fuzzy matching.",
      ],
      links: [],
    },
  ],

  // Oldest first. The trajectory station lays these out left to right along
  // the scroll direction, so chronological order has to match reading order —
  // reversed, scrolling forward walked backwards through time.
  experience: [
    {
      org: "Microsoft Learn Student Chapter",
      role: "Technical Leader",
      location: "Patiala, India",
      start: "Sep 2023",
      end: "May 2025",
      summary:
        "Led a 25+ member team to organise 10+ technical events \u2014 workshops, coding sessions, and the Ideathon \u2014 engaging 500+ participants. Mentored students through hands-on development, code reviews, and deployment of tech-focused projects.",
    },
    {
      org: "VzenCare",
      role: "Software Development Intern \u2013 AI/ML",
      location: "Remote",
      start: "Jun 2025",
      end: "Aug 2025",
      current: true,
      summary:
        "Co-built an AI-powered eye-care MVP with a retinal-image ML workflow for disease and stage prediction, backed by a MongoDB data pipeline. Contributed to VzenCare\u2019s All India Rank 1 finish at UptoSkills StartupThon among 1,000+ startups.",
    },
  ],

  awards: [
    {
      title: "UptoSkills StartupThon",
      org: "VzenCare",
      year: "2025",
      detail:
        "All India Rank 1 among 1,000+ startups in a 6-month national competition. Contributed to VzenCare\u2019s journey from national finalist to top position, earning recognition and rewards worth INR 2 Lakh.",
      metric: "AIR 1",
      metricLabel: "All India Rank",
    },
    {
      title: "LeetCode Guardian",
      org: "LeetCode",
      year: "2025",
      detail:
        "Achieved LeetCode Guardian level with a 2142 rating \u2014 top 1.25% of users globally. Solved 1000+ problems and participated in 50+ contests across competitive programming platforms.",
      metric: "2142",
      metricLabel: "Guardian rating",
    },
    {
      title: "Flipkart GRiD 7.0",
      org: "Flipkart",
      year: "2025",
      detail:
        "Advanced to the Semi-Finals of Flipkart GRiD 7.0, one of India\u2019s most competitive engineering challenges run by Flipkart.",
      metric: "Semi",
      metricLabel: "Finalist",
    },
    {
      title: "NVIDIA Generative AI Certification",
      org: "NVIDIA",
      year: "2025",
      detail:
        "Completed NVIDIA\u2019s Large Language Models and Generative AI Deployment certification, covering LLM deployment and Generative AI workflows.",
      metric: "1",
      metricLabel: "Certification",
    },
  ],
};
