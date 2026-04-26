export const profile = {
  name: "Venkata Harish G A",
  title: "AI Engineer",
  email: "venkatharishg@gmail.com",
  phone: "+91-9344394424",
  linkedin: "https://www.linkedin.com/in/venkatharishga/", // update with your actual LinkedIn URL
  github: "https://github.com/venkatharishga",              // update with your actual GitHub URL
  leetcode: "https://leetcode.com/venkatharishga/",          // update with your actual LeetCode URL
  summary: "AI Engineer with 2+ years of experience in machine learning, deep learning, and computer vision. Built production systems at TCS including text-to-SQL pipelines, RAG-based document assistants, and log analysis chatbots.",
  education: {
    institute: "National Institute of Technology (NIT) Patna",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "8.29/10",
    period: "July 2020 – May 2024",
    location: "Patna, Bihar"
  }
}

export const companies = [
  {
    id: "tcs",
    name: "TATA Group (TCS)",
    role: "AI Engineer",
    period: "Aug 2024 – Present",
    location: "India",
    type: "full-time",
    color: "#00FF85",
    logo: "TCS"
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz R&D India",
    role: "Machine Learning Intern",
    period: "Mar 2024 – Aug 2024",
    location: "Bengaluru",
    type: "internship",
    color: "#C0C0C0",
    logo: "MB"
  },
  {
    id: "testaing",
    name: "TestAing Solutions",
    role: "Computer Vision Intern",
    period: "June 2023 – July 2023",
    location: "Bengaluru / Remote",
    type: "internship",
    color: "#7C9EFF",
    logo: "TA"
  }
]

export const projects = [
  {
    id: "query-suggestion",
    companyId: "tcs",
    title: "Query Suggestion System",
    description: "Engineered a Trie-based query suggestion system achieving 1000% faster response times (~1e-6s) and 100% GPU independence, replacing a FAISS+LLM setup with a lightweight frontend solution requiring zero backend calls.",
    tags: ["Trie", "Python", "Frontend", "FAISS", "Optimization"],
    impact: "1000% faster response",
    github: null,         // add URL if public
    liveUrl: null,        // add URL if hosted
    highlight: true
  },
  {
    id: "text-to-sql",
    companyId: "tcs",
    title: "Text-to-SQL Optimization",
    description: "Enhanced a text-to-SQL pipeline by integrating FAISS-powered few-shot RAG prompting, achieving 25% higher accuracy and 40% faster SQL generation through optimized retrieval and LLM configuration tuning.",
    tags: ["FAISS", "RAG", "LLM", "SQL", "Few-shot"],
    impact: "25% accuracy boost",
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "log-analysis-bot",
    companyId: "tcs",
    title: "Log Analysis Chat Bot",
    description: "Session-aware chatbot that performs targeted retrieval of production logs and database audit trails. Applied error classification and contextual memory to automate root-cause explanation and reduce ticket resolution time.",
    tags: ["LLM", "RAG", "Contextual Memory", "Python"],
    impact: "Reduced ticket resolution time",
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "training-finetuning",
    companyId: "tcs",
    title: "Model Training & Fine-Tuning",
    description: "Employed advanced data extraction and generation methods to train and compare models across prompt size, response latency, and accuracy. Used LoRA for parameter-efficient fine-tuning and optimized batch sizing.",
    tags: ["LoRA", "Fine-tuning", "PyTorch", "LLM", "Transformers"],
    impact: "Optimized inference quality",
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "rag-graph-doc",
    companyId: "tcs",
    title: "RAG + Graph Document Assistant",
    description: "Hybrid Graph + Vector DB pipeline using Neo4j and FAISS/LangChain. PDFs parsed into hierarchical entities and stored in a knowledge graph. Enabled chat-based text-to-SQL interface for context-aware Q&A over documents.",
    tags: ["Neo4j", "FAISS", "LangChain", "Knowledge Graph", "RAG"],
    impact: "Context-aware document Q&A",
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "ipo-assistant",
    companyId: "tcs",
    title: "IPO Assistant (RAG + Graph + Scraping)",
    description: "Hybrid Graph and Vector DB pipeline combining web scraping, Neo4j and FAISS/LangChain. Parsed IPO data into hierarchical knowledge graphs, enabling a chat interface for real-time IPO Q&A.",
    tags: ["Web Scraping", "Neo4j", "LangChain", "RAG", "Python"],
    impact: "Real-time IPO intelligence",
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "3d-pose-estimation",
    companyId: "mercedes",
    title: "3D Human Pose Estimation Benchmarking",
    description: "Benchmarked DL models on custom datasets with occlusion. Processed inference on multiple 3D Human Pose Estimation models and compared them using metrics like Autocorrelation, Frequency, Inference Time, and Euclidean Distance.",
    tags: ["PyTorch", "Computer Vision", "3D Pose Estimation", "Docker", "Python"],
    impact: "4% improvement in keypoint prediction",
    github: null,
    liveUrl: null,
    highlight: true
  },
  {
    id: "object-detection",
    companyId: "testaing",
    title: "Object Detection Model Training",
    description: "Trained and fine-tuned YOLO and Faster R-CNN models on custom datasets for real-world object detection tasks. Handled data annotation, dataset curation, and model evaluation.",
    tags: ["YOLO", "Faster R-CNN", "PyTorch", "Data Annotation", "Computer Vision"],
    impact: "Custom dataset pipeline",
    github: null,
    liveUrl: null,
    highlight: false
  },
  {
    id: "stock-news",
    companyId: null,
    title: "Stock News Summarizer",
    description: "Summarizes news related to any stock listed in NSE. Uses Django backend, Newspaper3k for scraping, text summarization, and sentiment analysis to give a quick sentiment snapshot for any ticker.",
    tags: ["Django", "Python", "NLP", "Sentiment Analysis", "Newspaper3k"],
    impact: "NSE stock coverage",
    github: "https://github.com/venkatharishga/stock-news-summarizer", // update with actual URL
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
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online / Coursera",
    link: null
  },
  {
    title: "Joy of Computing using Python",
    issuer: "NPTEL",
    score: "84/100",
    link: null
  }
]

export const stats = [
  { label: "LeetCode Problems", value: "700+", sub: "Max rating 1806" },
  { label: "Years Experience", value: "2+", sub: "Full-time + Internships" },
  { label: "Projects at TCS", value: "6", sub: "Production systems" },
  { label: "CGPA", value: "8.29", sub: "NIT Patna" }
]
