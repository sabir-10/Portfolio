export const projects = [
  {
    title: "Vendor Connect",
    skills: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "LangGraph", "RAG"],
    description: `Roadside Vendors often face visibility challenges, logistical inefficiencies, and limited access to digital 
resources. ‘Vendor Connect’ is a digital platform designed to bridge this gap by connecting roadside vendors 
with customers, allowing them to list products, update their real-time locations, and accept digital payments, 
creating a user-friendly ecosystem for both vendors and consumers. Vendor Connect is built using the ‘MERN’ stack (MongoDB, Express, React, Node.js), chosen for its efficiency, 
scalability, and compatibility with dynamic, data-driven applications. A critical feature of Vendor Connect is its 
Artificial Intelligence-driven recommendations and insights. `,
    github: "https://github.com/sabir-10/Vendor-Connect",
  },
  {
    title: "Text2SQL",
    skills: ["LangChain", "LLM", "SQL", "Gemini", "Streamlit"],
    description: ` Developed a Text to SQL application, enabling users to query SQL databases through natural language inputs. 
The project involved leveraging language models to translate user queries into SQL statements. 
Used Streamlit framework developing the User Interface of the web application. `,
    github: "https://github.com/sabir-10/Text2SQL-GeminiPro",
  },
  {
    title: "SmartPDF-Gemini",
    skills: ["LangChain", "FAISS Vector Embeddings", "LLM", "Python", "Gemini", "Streamlit"],
    description: `An LLM application using Google gemini and langchain where we can query multiple PDF documents 
    with FAISS vector embeddings. Used Streamlit framework developing the User Interface of the web application. `,
    github: "https://github.com/sabir-10/SmartPDF-Gemini",
  },
   {
    title: "Multilingual Text Classifier",
    skills: ["MBERT", "Flan-T5", "LLM", "Transformers", "Quantization", "Batch Inference"],
    description: `Designed and trained a multilingual classifier across six languages, achieving 84% accuracy.
Applied deep learning frameworks (PyTorch, TensorFlow) for model training and optimization.
Implemented quantization and batch processing to improve high performance compute efficiency, reducing inference latency by 40%.
Explored agentic AI orchestration for automated retraining and adaptive workflows
`,
    github: null, // add later if repo exists
  },
];
