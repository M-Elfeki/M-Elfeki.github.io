---
title: Building Autoraters for Expert-Level Reasoning Data
date: 2025-07-28
image: /assets/img/project-autoraters.png
links:
  - name: Blog Post
    url: https://scale.com/blog/building_autoraters_for_expert_level_reasoning_data
---

We developed a multi-agent LLM system that uses model debate to automatically evaluate expert-level reasoning data, achieving a **4x improvement in error detection** (23% to 82%) compared to single-model approaches. The system deploys two LLM debaters that independently solve problems and engage in structured debate, with a third LLM judge providing the final verdict.

When integrated into production pipelines, the autorater reduces human errors slipping through final review from 9% to 1%. As a live feedback copilot during data labeling, it helps contributors achieve 87% improvement in correctness. The system works with both closed-source and open-source models, enabling deployment on private infrastructure for data confidentiality.

This work demonstrates how multi-agent collaboration can achieve scalable oversight of advanced AI systems, providing a robust foundation for building more capable and trustworthy models. The approach is particularly valuable for frontier model training where data quality directly impacts model capabilities and safety.

For detailed methodology and results, see the [blog post](https://scale.com/blog/building_autoraters_for_expert_level_reasoning_data).

