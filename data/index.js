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
  openToOpportunities: true,
  education: {
    institute: "National Institute of Technology (NIT) Patna",
    degree: "B.Tech in Computer Science and Engineering",
    startYear: 2020,
    endYear: 2024,
    period: "July 2020 – May 2024",
    location: "Patna, Bihar",
    logo: "/images/nitp-logo.png",
    highlights: [
      {
        icon: "🏆",
        label: "Sem 7 CSE Department Topper",
        detail: "Achieved 9.88 GPA in Semester 7, topping the Computer Science & Engineering department.",
        proofUrl: null // add your marksheet/proof link here
      },
      {
        icon: "🤖",
        label: "Google Developers Club — AI/ML",
        detail: "Active member of the Google Developers Club at NIT Patna, focusing on AI and ML initiatives, workshops, and projects.",
        proofUrl: null
      },
      {
        icon: "🌿",
        label: "Science & Environment Club",
        detail: "Member of the Science and Environment Club, participating in sustainability drives and science outreach events.",
        proofUrl: null
      },
      {
        icon: "🏀",
        label: "Intra Basketball — Bronze Medal",
        detail: "Represented the CSE department in intra-college basketball. Secured bronze medal in the tournament.",
        proofUrl: null
      },
      {
        icon: "🎨",
        label: "Figma Hackathon — E-Commerce App",
        detail: "Participated in a college Figma hackathon to design and prototype a full e-commerce application UI/UX.",
        proofUrl: null
      }
    ]
  }
}

export const companies = [
  {
    id: "tcs",
    name: "TATA Consultancy Services",
    shortName: "TCS",
    role: "AI Engineer",
    startDate: "2024-08-01",
    endDate: null,
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
    endDate: "2024-07-31",
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
    description: "Replaced a FAISS+LLM-based suggestion system with a lightweight Trie-based frontend solution. Response time dropped to ~1e-6s with 100% GPU independence and zero backend calls.",
    features: [
      { icon: "🔍", label: "Problem", detail: "Original system used FAISS vector search + LLM inference for every keypress — expensive, GPU-dependent, and slow." },
      { icon: "🌳", label: "Trie Data Structure", detail: "Built a prefix Trie from the query corpus at initialization time. Each keypress traverses the Trie in O(k) time — no GPU, no network." },
      { icon: "⚡", label: "1000× Speed Gain", detail: "Response latency dropped from ~1ms (FAISS) to ~1e-6s (Trie). Completely frontend-based, zero backend calls required." },
      { icon: "🖥️", label: "GPU Independence", detail: "Eliminated all GPU dependency for query suggestion, freeing compute resources for heavier inference tasks." }
    ],
    tags: ["Trie", "Python", "FAISS", "Optimization", "Frontend"],
    github: null, liveUrl: null, demoUrl: null, highlight: true
  },
  {
    id: "text-to-sql",
    companyId: "tcs",
    title: "Text-to-SQL Optimization",
    chips: ["RAG", "FAISS", "SQL", "LLM"],
    impact: "25% accuracy ↑ · 40% faster",
    description: "Enhanced a text-to-SQL pipeline with FAISS-powered few-shot RAG prompting. Improved accuracy by 25% and SQL generation speed by 40%.",
    features: [
      { icon: "📝", label: "Input Understanding", detail: "User's natural language query is received and cleaned before being passed to the retrieval stage." },
      { icon: "🔎", label: "FAISS Few-Shot Retrieval", detail: "FAISS vector index retrieves the most semantically similar past query-SQL pairs from a curated example bank, used as few-shot examples in the LLM prompt." },
      { icon: "🧠", label: "LLM Prompting", detail: "Few-shot examples are injected into a carefully tuned prompt template. LLM configuration (temperature, token limits) was tuned to maximize SQL accuracy." },
      { icon: "📊", label: "Results", detail: "25% higher SQL accuracy compared to baseline zero-shot prompting. SQL generation speed improved 40% through retrieval and config optimizations." }
    ],
    tags: ["FAISS", "RAG", "LLM", "SQL", "Few-shot"],
    github: null, liveUrl: null, demoUrl: null, highlight: true
  },
  {
    id: "log-analysis-bot",
    companyId: "tcs",
    title: "Log Analysis Chat Bot",
    chips: ["Chatbot", "LLM", "Contextual Memory"],
    impact: "Reduced ticket resolution time",
    description: "Session-aware chatbot for targeted retrieval of production logs and DB audit trails. Automates root-cause analysis and reduces ticket resolution time.",
    features: [
      { icon: "💬", label: "Structured Input Parsing", detail: "User provides structured inputs (service name, time range, error code). Bot parses these to scope retrieval." },
      { icon: "📂", label: "Targeted Log Retrieval", detail: "Retrieves relevant production logs and database audit trail entries matching the user's criteria — avoids scanning full log dumps." },
      { icon: "🏷️", label: "Error Classification", detail: "Classifies retrieved errors into categories (DB errors, timeout, auth failures, etc.) to surface the most likely root cause." },
      { icon: "🧠", label: "Contextual Memory", detail: "Maintains session memory across the conversation so users can ask follow-up questions without re-specifying context." },
      { icon: "🎯", label: "Root Cause Explanation", detail: "Generates a human-readable root cause explanation with suggested fixes, reducing time engineers spend reading raw logs." }
    ],
    tags: ["LLM", "RAG", "Contextual Memory", "Python"],
    github: null, liveUrl: null, demoUrl: null, highlight: false
  },
  {
    id: "training-finetuning",
    companyId: "tcs",
    title: "Model Training & Fine-Tuning",
    chips: ["LoRA", "Fine-tuning", "PyTorch"],
    impact: "Maximized inference quality",
    description: "End-to-end pipeline for training, comparing, and fine-tuning LLMs. Used LoRA for parameter-efficient fine-tuning and optimized batch sizing.",
    features: [
      { icon: "📦", label: "Data Extraction & Generation", detail: "Advanced extraction from internal sources and synthetic generation techniques to build high-quality training datasets." },
      { icon: "📊", label: "Model Comparison Framework", detail: "Benchmarked multiple model variants across prompt size sensitivity, response latency, and task accuracy to identify best candidates." },
      { icon: "🔧", label: "LoRA Fine-Tuning", detail: "Applied Low-Rank Adaptation (LoRA) for parameter-efficient fine-tuning — achieved full model performance at a fraction of the trainable parameters." },
      { icon: "⚙️", label: "Batch Size Optimization", detail: "Tuned batch sizes and gradient accumulation to maximize GPU utilization and training throughput without sacrificing convergence." }
    ],
    tags: ["LoRA", "Fine-tuning", "PyTorch", "LLM", "Transformers"],
    github: null, liveUrl: null, demoUrl: null, highlight: false
  },
  {
    id: "rag-graph-doc",
    companyId: "tcs",
    title: "RAG + Graph Document Assistant",
    chips: ["Knowledge Graph", "Neo4j", "RAG", "LangChain"],
    impact: "Context-aware document Q&A",
    description: "Hybrid Graph + Vector DB pipeline for intelligent Q&A over uploaded PDFs using Neo4j knowledge graphs and FAISS/LangChain.",
    features: [
      { icon: "📄", label: "PDF Parsing & Chunking", detail: "Uploaded PDFs are parsed and split into hierarchical chunks: Main Heading → Subheading → Content paragraphs." },
      { icon: "🕸️", label: "Knowledge Graph Construction", detail: "Chunks stored in Neo4j as graph nodes. Cross-heading semantic relationships detected and stored as graph edges, preserving document structure." },
      { icon: "🔍", label: "FAISS Vector Indexing", detail: "Content chunks are also embedded and stored in FAISS for fast semantic similarity search across the document corpus." },
      { icon: "💬", label: "Chat-based Text-to-SQL Interface", detail: "LangChain chat interface translates natural language queries into graph traversals and vector lookups for context-aware answers." },
      { icon: "🧩", label: "Hybrid Retrieval", detail: "Combines graph traversal (for structural context) with vector search (for semantic relevance) to give more accurate, grounded answers." }
    ],
    tags: ["Neo4j", "FAISS", "LangChain", "Knowledge Graph", "RAG"],
    github: null, liveUrl: null, demoUrl: null, highlight: true
  },
  {
    id: "ipo-assistant",
    companyId: "tcs",
    title: "IPO Assistant (Scraping + RAG + Graph)",
    chips: ["Web Scraping", "Knowledge Graph", "RAG", "Fuzzy Logic"],
    impact: "Real-time IPO intelligence",
    description: "End-to-end live IPO intelligence system — multi-level web scraping, fuzzy matching, LLM-structured extraction, Neo4j graph storage, and LangChain Q&A.",
    features: [
      { icon: "🌐", label: "Level 1 Scraping — IPO Listing Sites", detail: "Multiple IPO listing websites scraped simultaneously. Recursive approach detects and follows links for individual company IPO pages." },
      { icon: "🔗", label: "Level 2 Scraping — Company IPO Pages", detail: "For each detected company IPO link, a second-level scrape is performed. Relevant data tables (subscription status, dates, GMP, lot size) are identified and extracted." },
      { icon: "🔀", label: "Fuzzy Matching Logic", detail: "IPO names differ slightly across sites (e.g. 'Tata Tech IPO' vs 'TATA Technologies'). Fuzzy string matching merges records from multiple sources into a single unified entity." },
      { icon: "🧠", label: "LLM Structured Extraction", detail: "Raw scraped text is passed to an LLM to extract structured metrics (issue price, lot size, GMP, subscription rate, listing date) and convert them into typed JSON." },
      { icon: "🕸️", label: "Neo4j Graph Storage", detail: "Structured IPO data stored in Neo4j as a knowledge graph. Relationships between IPOs, sectors, companies, and dates are captured as graph edges." },
      { icon: "💬", label: "LangChain Chat Interface", detail: "LangChain Q&A layer on top of the graph. Users can ask natural language questions like 'Which IPOs are open this week?' and get live, accurate answers." }
    ],
    tags: ["Web Scraping", "Neo4j", "LangChain", "RAG", "Python", "Fuzzy Logic", "LLM"],
    github: null, liveUrl: null, demoUrl: null, highlight: false
  },
  {
    id: "3d-pose-estimation",
    companyId: "mercedes",
    title: "3D Human Pose Estimation Benchmarking",
    chips: ["Computer Vision", "3D Pose", "PyTorch", "Research"],
    impact: "4% keypoint accuracy ↑",
    description: "End-to-end research pipeline to benchmark state-of-the-art 3D Human Pose Estimation models on custom automotive datasets for Mercedes-Benz R&D.",
    features: [
      { icon: "📚", label: "Literature Survey", detail: "Systematically reviewed papers from arXiv, Hugging Face model hub, and Google Scholar to identify the most promising open-source 3D pose estimation models." },
      { icon: "⚙️", label: "Environment Setup & Reproduction", detail: "Cloned and configured open-source repos on local GPU machines. Resolved dependency conflicts, set up Docker environments, and verified baseline reproducibility." },
      { icon: "🏃", label: "Inference on Custom Dataset", detail: "Ran inference on Mercedes-Benz's custom dataset featuring real-world occlusion scenarios (partial body, cluttered backgrounds). Generated keypoint predictions for all models." },
      { icon: "📊", label: "Multi-Metric Comparison", detail: "Compared models across Autocorrelation, Frequency analysis, Inference Time, Euclidean Distance (MPJPE), and Qualitative visual analysis to select the best-performing model." },
      { icon: "📈", label: "Jitter Reduction via Regression", detail: "Applied a regression technique on temporally consecutive keypoint predictions to smooth out sudden movements (jitter) in the output — improved future keypoint prediction accuracy by 4%." }
    ],
    tags: ["PyTorch", "Computer Vision", "3D Pose Estimation", "Docker", "Python", "arXiv"],
    github: null, liveUrl: null, demoUrl: null, highlight: true
  },
  {
    id: "object-detection",
    companyId: "testaing",
    title: "Object Detection Model Training",
    chips: ["YOLO", "Faster R-CNN", "Computer Vision"],
    impact: "End-to-end custom pipeline",
    description: "Trained YOLO and Faster R-CNN on custom annotated datasets for real-world object detection. Handled the full pipeline from annotation to evaluation.",
    features: [
      { icon: "🏷️", label: "Data Annotation", detail: "Manually annotated custom image datasets using labeling tools. Created bounding box annotations for target object classes." },
      { icon: "🗂️", label: "Dataset Curation", detail: "Cleaned and balanced the dataset — removed low-quality images, ensured class distribution, and split into train/val/test sets." },
      { icon: "🚀", label: "YOLO Training", detail: "Fine-tuned YOLOv5/v8 on the custom dataset using Google Colab GPU. Tuned hyperparameters (lr, augmentation, anchor sizes) for best mAP." },
      { icon: "🔬", label: "Faster R-CNN Training", detail: "Trained Faster R-CNN with ResNet backbone via PyTorch. Compared against YOLO on precision, recall, and inference speed." },
      { icon: "📊", label: "Evaluation & Comparison", detail: "Evaluated both models using mAP@0.5, precision-recall curves, and inference latency. Documented trade-offs between speed (YOLO) and accuracy (Faster R-CNN)." }
    ],
    tags: ["YOLO", "Faster R-CNN", "PyTorch", "Data Annotation", "Computer Vision"],
    github: null, liveUrl: null, demoUrl: null, highlight: false
  },
  {
    id: "stock-news",
    companyId: null,
    title: "Stock News Summarizer",
    chips: ["NLP", "Sentiment Analysis", "Django", "Web Scraping"],
    impact: "Full NSE coverage · Real-time sentiment",
    description: "End-to-end stock news intelligence tool for any NSE-listed stock — from web scraping to per-article sentiment and an aggregated rating.",
    features: [
      { icon: "🔍", label: "News Discovery", detail: "Scrapes the web for all recent news articles related to the entered NSE stock ticker from multiple sources simultaneously." },
      { icon: "🧹", label: "Article Cleaning", detail: "Strips boilerplate, ads, and irrelevant HTML — extracts only the core journalistic body of each article using Newspaper3k." },
      { icon: "📝", label: "Per-Article Summarization", detail: "Each cleaned article is independently summarized into a concise 2–3 sentence takeaway, so analysts can scan dozens of articles in seconds." },
      { icon: "📊", label: "Per-Article Sentiment", detail: "Sentiment analysis on each article individually — outputs Positive / Negative / Neutral with a confidence score." },
      { icon: "🎯", label: "Overall Sentiment Rating", detail: "Aggregates all per-article sentiments into a single weighted overall sentiment score and market mood rating for the stock." }
    ],
    tags: ["Django", "Python", "NLP", "Newspaper3k", "Sentiment Analysis", "Beautiful Soup"],
    github: "https://github.com/venkatharishga/stock-news-summarizer",
    liveUrl: null,
    demoUrl: null,
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
