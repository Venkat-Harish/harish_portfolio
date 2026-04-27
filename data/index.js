export const profile = {
  name: "Venkata Harish G A",
  title: "AI Engineer",
  emails: [
    { label: "Personal", address: "venkatharishg@gmail.com" },
    { label: "Academic", address: "gh.ug20.cse@nitp.ac.in" }
  ],
  phone: "+91-9344394424",
  linkedin: "https://www.linkedin.com/in/venkatharishga/",
  github: "https://github.com/venkatharishga",
  leetcode: "https://leetcode.com/venkatharishga/",
  avatar: "/images/avatar.jpg",
  summary: "AI Engineer building production ML systems — text-to-SQL pipelines, RAG document assistants, knowledge graphs, and computer vision at scale.",
  education: {
    institute: "National Institute of Technology (NIT) Patna",
    degree: "B.Tech in Computer Science and Engineering",
    startYear: 2020,
    endYear: 2024,
    period: "July 2020 – May 2024",
    location: "Patna, Bihar",
    logo: "/images/nitp-logo.png"
  }
}

// Experience start dates for dynamic calculation
export const companies = [
  {
    id: "tcs",
    name: "TATA Consultancy Services",
    shortName: "TCS",
    role: "AI Engineer",
    startDate: "2024-08-01",
    endDate: null, // null = present
    period: "Aug 2024 – Present",
    location: "India",
    type: "Full-time",
    color: "#FF6B35",
    logo: "/images/tcs-logo.png",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz R&D India",
    shortName: "Mercedes",
    role: "Machine Learning Intern",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    period: "Mar 2024 – Aug 2024",
    location: "Bengaluru",
    type: "Internship",
    color: "#A0A0B0",
    logo: "/images/mercedes-logo.png",
  },
  {
    id: "testaing",
    name: "TestAing Solutions",
    shortName: "TestAing",
    role: "Computer Vision Intern",
    startDate: "2023-06-01",
    endDate: "2023-07-31",
    period: "Jun 2023 – Jul 2023",
    location: "Bengaluru / Remote",
    type: "Internship",
    color: "#B05BA0",
    logo: "/images/testaing-logo.png",
  }
]

export const projects = [
  {
    id: "query-suggestion",
    companyId: "tcs",
    title: "Query Suggestion System",
    chips: ["Trie", "Optimization", "Zero Backend"],
    impact: "1000× faster response",
    description: "Replaced a FAISS+LLM-based suggestion system with a Trie-based frontend solution, cutting response time to ~1e-6s and achieving 100% GPU independence. Zero backend calls required.",
    tags: ["Trie", "Python", "FAISS", "Optimization", "Frontend"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: true
  },
  {
    id: "text-to-sql",
    companyId: "tcs",
    title: "Text-to-SQL Optimization",
    chips: ["RAG", "FAISS", "SQL", "LLM"],
    impact: "25% accuracy ↑ · 40% faster",
    description: "Enhanced a text-to-SQL pipeline with FAISS-powered few-shot RAG prompting. Improved accuracy by 25% and SQL generation speed by 40% via optimized retrieval and LLM config tuning.",
    tags: ["FAISS", "RAG", "LLM", "SQL", "Few-shot"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: true
  },
  {
    id: "log-analysis-bot",
    companyId: "tcs",
    title: "Log Analysis Chat Bot",
    chips: ["Chatbot", "LLM", "Contextual Memory"],
    impact: "Reduced ticket resolution time",
    description: "Session-aware chatbot for targeted retrieval of production logs and DB audit trails. Applied error classification and contextual memory to automate root-cause explanation.",
    tags: ["LLM", "RAG", "Contextual Memory", "Python"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: false
  },
  {
    id: "training-finetuning",
    companyId: "tcs",
    title: "Model Training & Fine-Tuning",
    chips: ["LoRA", "Fine-tuning", "PyTorch"],
    impact: "Maximized inference quality",
    description: "Trained and compared models across prompt size, latency, and accuracy dimensions. Used LoRA for parameter-efficient fine-tuning and optimized batch sizing for speed and quality.",
    tags: ["LoRA", "Fine-tuning", "PyTorch", "LLM", "Transformers"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: false
  },
  {
    id: "rag-graph-doc",
    companyId: "tcs",
    title: "RAG + Graph Document Assistant",
    chips: ["Knowledge Graph", "Neo4j", "RAG", "LangChain"],
    impact: "Context-aware document Q&A",
    description: "Hybrid Graph + Vector DB pipeline using Neo4j and FAISS/LangChain. PDFs are parsed into hierarchical entities (Heading → Subheading → Content) stored as a knowledge graph. Cross-heading semantic relationships captured via graph edges. Chat-based text-to-SQL interface for intelligent Q&A.",
    tags: ["Neo4j", "FAISS", "LangChain", "Knowledge Graph", "RAG"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: true
  },
  {
    id: "ipo-assistant",
    companyId: "tcs",
    title: "IPO Assistant (Scraping + RAG + Graph)",
    chips: ["Web Scraping", "Knowledge Graph", "RAG"],
    impact: "Real-time IPO intelligence",
    description: "Live IPO data pipeline combining web scraping, Neo4j graph DB, and FAISS/LangChain. Scraped data parsed into hierarchical knowledge graphs. Real-time chat interface for IPO Q&A.",
    tags: ["Web Scraping", "Neo4j", "LangChain", "RAG", "Python"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: false
  },
  {
    id: "3d-pose-estimation",
    companyId: "mercedes",
    title: "3D Human Pose Estimation Benchmarking",
    chips: ["Computer Vision", "3D Pose", "PyTorch"],
    impact: "4% keypoint accuracy ↑",
    description: "Benchmarked multiple DL models on custom occluded datasets. Compared models using Autocorrelation, Frequency, Inference Time, Euclidean Distance, and Qualitative Analysis. Improved future keypoint predictions by 4% using correlation from previously generated keypoints.",
    tags: ["PyTorch", "Computer Vision", "3D Pose Estimation", "Docker", "Python"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: true
  },
  {
    id: "object-detection",
    companyId: "testaing",
    title: "Object Detection Model Training",
    chips: ["YOLO", "Faster R-CNN", "Computer Vision"],
    impact: "End-to-end custom pipeline",
    description: "Trained YOLO and Faster R-CNN on custom annotated datasets. Handled full pipeline: data annotation, dataset curation, training, evaluation.",
    tags: ["YOLO", "Faster R-CNN", "PyTorch", "Data Annotation"],
    features: [],
    github: null,
    liveUrl: null,
    demoUrl: null,
    highlight: false
  },
  {
    id: "stock-news",
    companyId: null,
    title: "Stock News Summarizer",
    chips: ["NLP", "Sentiment Analysis", "Django", "Web Scraping"],
    impact: "Full NSE coverage · Real-time sentiment",
    description: "An end-to-end stock news intelligence tool for any NSE-listed stock.",
    features: [
      { icon: "🔍", label: "News Discovery", detail: "Scrapes the web for all recent news articles related to the entered stock ticker from multiple sources simultaneously." },
      { icon: "🧹", label: "Article Cleaning", detail: "Strips boilerplate, ads, and irrelevant content — extracts only the core journalistic body of each article using Newspaper3k." },
      { icon: "📝", label: "Per-Article Summarization", detail: "Summarizes each cleaned article independently into a concise 2-3 sentence takeaway, so you can scan dozens of articles in seconds." },
      { icon: "📊", label: "Per-Article Sentiment", detail: "Runs sentiment analysis on each article individually — outputs Positive / Negative / Neutral with a confidence score." },
      { icon: "🎯", label: "Overall Sentiment Rating", detail: "Aggregates all per-article sentiments into a single weighted overall sentiment score and rating for the stock." }
    ],
    tags: ["Django", "Python", "NLP", "Newspaper3k", "Sentiment Analysis", "Beautiful Soup"],
    github: "https://github.com/venkatharishga/stock-news-summarizer",
    liveUrl: null,
    demoUrl: null, // add a YouTube/video URL here e.g. "https://youtu.be/xxxxx"
    highlight: true,
    isPersonal: true
  }
]

export const skills = {
  "Programming Languages": ["Python", "C++", "Java", "JavaScript", "SQL"],
  "AI & ML": ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "AI Agents", "MCP", "Computer Vision"],
  "Frameworks & Libraries": ["PyTorch", "Transformers", "LangChain", "Scikit-Learn", "OpenCV", "NLTK", "Pandas", "NumPy", "Matplotlib", "Beautiful Soup"],
  "Databases": ["MySQL", "PostgreSQL", "Neo4j", "FAISS"],
  "Web Development": ["React", "Django", "HTML", "CSS", "Eureka Server"],
  "Tools & Platforms": ["Git", "Docker", "Linux", "VSCode", "Putty", "Burp Suite", "Google Colab"]
}

export const certifications = [
  { title: "Machine Learning Specialization", issuer: "Stanford Online / Coursera", link: null },
  { title: "Joy of Computing using Python", issuer: "NPTEL", score: "84/100", link: null }
]
