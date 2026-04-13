const projectData = [
    {
        title: "YouTube RAG Assistant [cite: 28]",
        desc: "AI assistant for YouTube video Q&A using LangChain and RAG with FAISS. [cite: 29, 30]",
        tags: ["LangChain", "RAG", "Streamlit"]
    },
    {
        title: "GenAI RAG PDF Assistant [cite: 31]",
        desc: "Flask system for PDF Q&A using ChromaDB semantic retrieval and HuggingFace models. [cite: 32]",
        tags: ["Flask", "ChromaDB", "LLMs"]
    },
    {
        title: "Thyroid Prediction [cite: 33]",
        desc: "Medical ML diagnosis using ensembles and SHAP for early, accurate detection. [cite: 35]",
        tags: ["ML", "SHAP", "Ensembles"]
    },
    {
        title: "Big Data Analytics [cite: 41]",
        desc: "Scalable data engineering projects using the Hadoop ecosystem and Apache Spark. [cite: 41]",
        tags: ["Hadoop", "Hive", "Spark"]
    }
];

const container = document.getElementById('project-list');

projectData.forEach((item, index) => {
    // Add a staggered delay for each card (100ms, 200ms, 300ms...)
    const delay = (index + 1) * 100;
    
    const card = `
        <div class="glass-card p-6 rounded-xl flex flex-col justify-between" 
             data-aos="fade-up" 
             data-aos-delay="${delay}">
            <div>
                <h3 class="text-xl font-bold mb-3">${item.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">${item.desc}</p>
            </div>
            <div class="flex flex-wrap gap-2">
                ${item.tags.map(t => `<span class="text-[10px] font-mono px-2 py-1 bg-blue-500/10 text-blue-400 rounded">${t}</span>`).join('')}
            </div>
        </div>
    `;
    container.innerHTML += card;
});
