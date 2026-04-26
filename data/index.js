export const profile = {
  name: "Venkata Harish G A",
  title: "AI Engineer",
  email: "venkatharishg@gmail.com",
  phone: "+91-9344394424",
  linkedin: "https://www.linkedin.com/in/venkatharishga/",
  github: "https://github.com/venkatharishga",
  leetcode: "https://leetcode.com/venkatharishga/",
  avatar: "/images/avatar.jpg",
  summary: "AI Engineer with 2+ years of experience building production ML systems — from text-to-SQL pipelines and RAG-based document assistants to 3D human pose estimation and log analysis chatbots.",
  education: {
    institute: "National Institute of Technology (NIT) Patna",
    degree: "B.Tech in Computer Science and Engineering",
    period: "July 2020 – May 2024",
    location: "Patna, Bihar",
    logo: "/images/nitp-logo.png"
  }
}

export const companies = [
  {
    id: "tcs",
    name: "TATA Consultancy Services",
    shortName: "TCS",
    role: "AI Engineer",
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
    period: "Mar 2024 – Aug 2024",
    location: "Bengaluru",
    type: "Internship",
    color: "#C0C0C0",
    logo: "/images/mercedes-logo.png",
  },
  {
    id: "testaing",
    name: "TestAing Solutions",
    shortName: "TestAing",
    role: "Computer Vision Intern",
    period: "Jun 2023 – Jul 2023",
    location: "Bengaluru / Remote",
    type: "Internship",
    color: "#7C9EFF",
    logo: "https://www.testaing.com/favicon.svg",
  }
]

export const projects = [
  {
    id: "query-suggestion",
    companyId: "tcs",
    title: "Query Suggestion System",
    chips: ["Trie", "Optimization", "Zero Backend"],
    impact: "1000× faster",
    description: "Engineered a Trie-based query suggestion system achieving 1000% faster response times (~1e-6s) and 100% GPU independence, replacing a FAISS+LLM setup with a lightweight frontend solution requiring zero backend calls.",
    tags: ["Trie", "Python", "Frontend", "FAISS", "Optimization"],
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "text-to-sql",
    companyId: "tcs",
    title: "Text-to-SQL Optimization",
    chips: ["RAG", "FAISS", "SQL", "LLM"],
    impact: "25% accuracy ↑",
    description: "Enhanced a text-to-SQL pipeline by integrating FAISS-powered few-shot RAG prompting, achieving 25% higher accuracy and 40% faster SQL generation through optimized retrieval and LLM configuration tuning.",
    tags: ["FAISS", "RAG", "LLM", "SQL", "Few-shot"],
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "log-analysis-bot",
    companyId: "tcs",
    title: "Log Analysis Chat Bot",
    chips: ["Chatbot", "LLM", "Contextual Memory"],
    impact: "Faster ticket resolution",
    description: "Session-aware chatbot that performs targeted retrieval of production logs and database audit trails. Applied error classification and contextual memory to automate root-cause explanation and reduce ticket resolution time.",
    tags: ["LLM", "RAG", "Contextual Memory", "Python"],
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "training-finetuning",
    companyId: "tcs",
    title: "Model Training & Fine-Tuning",
    chips: ["LoRA", "Fine-tuning", "PyTorch"],
    impact: "Optimized inference",
    description: "Employed advanced data extraction and generation methods to train and compare models across prompt size, response latency, and accuracy. Used LoRA for parameter-efficient fine-tuning and optimized batch sizing.",
    tags: ["LoRA", "Fine-tuning", "PyTorch", "LLM", "Transformers"],
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "rag-graph-doc",
    companyId: "tcs",
    title: "RAG + Graph Document Assistant",
    chips: ["Knowledge Graph", "Neo4j", "RAG", "LangChain"],
    impact: "Context-aware Q&A",
    description: "Hybrid Graph + Vector DB pipeline using Neo4j and FAISS/LangChain. PDFs parsed into hierarchical entities (Main Heading → Subheading → Content) and stored in a knowledge graph. Enabled chat-based text-to-SQL interface for context-aware document Q&A.",
    tags: ["Neo4j", "FAISS", "LangChain", "Knowledge Graph", "RAG"],
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "ipo-assistant",
    companyId: "tcs",
    title: "IPO Assistant (Scraping + RAG + Graph)",
    chips: ["Web Scraping", "Knowledge Graph", "RAG"],
    impact: "Real-time IPO intelligence",
    description: "Hybrid Graph and Vector DB pipeline combining web scraping, Neo4j and FAISS/LangChain. Parsed IPO data into hierarchical knowledge graphs, enabling a real-time chat interface for IPO Q&A.",
    tags: ["Web Scraping", "Neo4j", "LangChain", "RAG", "Python"],
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "3d-pose-estimation",
    companyId: "mercedes",
    title: "3D Human Pose Estimation Benchmarking",
    chips: ["Computer Vision", "3D Pose", "PyTorch", "Docker"],
    impact: "4% keypoint accuracy ↑",
    description: "Benchmarked DL models on custom datasets with occlusion. Compared multiple 3D Human Pose Estimation models using Autocorrelation, Frequency, Inference Time, Euclidean Distance, and Qualitative Analysis metrics. Improved future pose keypoint predictions by 4% via correlation of previous keypoints.",
    tags: ["PyTorch", "Computer Vision", "3D Pose Estimation", "Docker", "Python"],
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "object-detection",
    companyId: "testaing",
    title: "Object Detection Model Training",
    chips: ["YOLO", "Faster R-CNN", "Computer Vision"],
    impact: "Custom dataset pipeline",
    description: "Trained and fine-tuned YOLO and Faster R-CNN models on custom datasets for real-world object detection tasks. Handled end-to-end pipeline: data annotation, dataset curation, training, and model evaluation.",
    tags: ["YOLO", "Faster R-CNN", "PyTorch", "Data Annotation", "Computer Vision"],
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "stock-news",
    companyId: null,
    title: "Stock News Summarizer",
    chips: ["NLP", "Sentiment Analysis", "Django"],
    impact: "NSE full coverage",
    description: "Summarizes news related to any NSE-listed stock. Uses Django backend with Newspaper3k for scraping, text summarization, and sentiment analysis to deliver a quick sentiment snapshot for any ticker.",
    tags: ["Django", "Python", "NLP", "Sentiment Analysis", "Newspaper3k"],
    github: "https://github.com/venkatharishga/stock-news-summarizer",
    liveUrl: null,
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

export const stats = [
  { label: "LeetCode Problems", value: "700+", sub: "Max rating 1806" },
  { label: "Experience", value: "2+", sub: "Years" },
  { label: "Projects at TCS", value: "6", sub: "Production systems" },
  { label: "NIT Patna", value: "CSE", sub: "B.Tech Graduate" }
]
