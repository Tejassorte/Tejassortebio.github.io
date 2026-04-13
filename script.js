const projects = [
    {
        title: "YouTube RAG Assistant",
        description: "Built an AI assistant for YouTube video Q&A using LangChain and RAG with FAISS. [cite: 28, 29, 30]",
        tech: ["LangChain", "RAG", "Streamlit"],
        link: "https://github.com/tejas-sorte-32ab18151" // [cite: 8]
    },
    {
        title: "GenAI RAG PDF Assistant",
        description: "Flask + LangChain system for semantic retrieval using ChromaDB and OpenAI models. [cite: 31, 32]",
        tech: ["Flask", "ChromaDB", "Hugging Face"],
        link: "#"
    },
    {
        title: "Thyroid Prediction",
        description: "Supervised ML with hyperparameter tuning and SHAP for accurate early detection. [cite: 33, 35]",
        tech: ["Scikit-learn", "SHAP", "Ensembles"],
        link: "#"
    }
];

const container = document.getElementById('project-container');

projects.forEach(p => {
    container.innerHTML += `
        <div class="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
            <p class="text-slate-400 text-sm mb-4">${p.description}</p>
            <div class="flex flex-wrap gap-2 mb-6">
                ${p.tech.map(t => `<span class="text-[10px] font-['Roboto_Mono'] px-2 py-1 bg-blue-500/10 text-blue-400 rounded">${t}</span>`).join('')}
            </div>
            <a href="${p.link}" target="_blank" class="text-xs font-bold tracking-widest text-blue-400 uppercase hover:underline">View Source →</a>
        </div>
    `;
});
