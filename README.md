⚽ Football News Assistant

A smart, multilingual football news assistant that retrieves the latest football news, summarizes articles, and answers user questions in natural language. It supports translation, semantic search, and real-time responses using modern NLP and AI tools.

🔹 Features

Retrieve football news from multiple leagues: Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Champions League.

Semantic search using embeddings (SentenceTransformer + FAISS) to find relevant articles.

Summarize and answer questions using Mistral AI.

Multilingual support with automatic translation via mBART.

Sources displayed in bold for clarity.

Interactive web interface with live chat.

Loading spinner ⚽ while the assistant is processing a request.

🔹 RAG (Retrieval-Augmented Generation)

This project implements a RAG pipeline:

Retrieval (R)

News articles are fetched from NewsAPI.

Articles are converted into embeddings using SentenceTransformer.

FAISS index stores embeddings for fast similarity search.

User queries are encoded and the most relevant articles are retrieved.

Augmented Generation (AG)

Retrieved articles are formatted into a context prompt for the AI model.

Mistral generates a factual, concise answer based on the retrieved articles.

If the query is in another language, translation is applied automatically.

Output

The assistant returns the answer to the frontend with sources.

🔹 Diagram of the RAG pipeline:

User Query
↓
Language Detection
↓
Translate → English
↓
Embed with SentenceTransformer
↓
FAISS Vector Search
↓
Retrieve Top Articles
↓
Mistral Generates Summary
↓
Translate → User Language
↓
Display in Interface

🔹 Tech Stack

Backend: Flask

Frontend: HTML, CSS, JavaScript

News Retrieval: NewsAPI

NLP & Embeddings:

SentenceTransformer
(all-MiniLM-L6-v2)

FAISS
for vector search

Language Detection: langdetect

Translation: MBart50 (HuggingFace Transformers)

AI Assistant: Mistral API (mistral-small-latest)

Data Handling: Pandas, NumPy

🔹 File Structure
football-news-assistant/
│
├─ app.py # Flask backend
├─ mistral_helper.py # News fetching, embeddings, RAG response generation
├─ requirements.txt # Python dependencies
├─ templates/
│ └─ index.html # Frontend HTML
├─ static/
│ ├─ style.css # Frontend CSS
│ └─ script.js # Frontend JS
└─ README.md
