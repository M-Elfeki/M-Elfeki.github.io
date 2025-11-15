---
title: Chatbot Memory with Web Search - Reasoning-Powered AI Assistant
date: 2025-01-15
image: /assets/img/project-chatbot-memory.png
links:
  - name: GitHub Repository
    url: https://github.com/M-Elfeki/chatbot_memory
---

A production-ready chatbot system that combines GPT-OSS reasoning capabilities with persistent semantic memory and real-time web search. The system demonstrates how to build an AI assistant that can remember information across conversations and search the web when needed, all powered by a reasoning-capable language model.

The architecture features a unified server that runs both GPT-OSS-20B and Qwen/Qwen3-Embedding-8B models, pre-loaded at startup for minimal latency. Semantic memory uses FAISS-based vector storage with embeddings generated via HTTP API, enabling zero query-time latency. The web search tool leverages DuckDuckGo with robust rate limiting, caching, and error handling.

The interactive Gradio-based chat UI provides real-time streaming responses, automatic tool usage (web search and memory), reasoning chain visualization, and persistent conversation history. The system supports configurable reasoning levels (low, medium, high), temperature and top-p sampling controls, and both streaming and non-streaming modes.

This project showcases practical techniques for building production AI systems with memory, tool calling, and multi-modal capabilities, making it valuable for developers building conversational AI applications.

See the [GitHub repository](https://github.com/M-Elfeki/chatbot_memory) for implementation details, examples, and documentation.

