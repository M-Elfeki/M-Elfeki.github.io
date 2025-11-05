---
layout: page
title: Projects
permalink: /projects/
---

## Projects

<div class="projects-grid">
{% for project in site.projects %}
    <article class="project-card">
        <h3 class="project-title">{{ project.title }}</h3>
        {% if project.image %}
        <div class="project-image">
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        </div>
        {% endif %}
        <div class="project-content">
            {{ project.content }}
        </div>
        {% if project.links %}
        <div class="project-links">
            {% for link in project.links %}
            <a href="{{ link.url }}" class="project-link" target="_blank" rel="noopener">{{ link.name }}</a>
            {% endfor %}
        </div>
        {% endif %}
    </article>
{% endfor %}
</div>

