---
layout: page
title: Contact
permalink: /contact/
---

## Get in Touch

Feel free to reach out for collaborations, discussions, or opportunities.

<div class="contact-info">
    {% if site.email %}
    <p><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    {% endif %}
    {% if site.github %}
    <p><strong>GitHub:</strong> <a href="https://github.com/{{ site.github }}" target="_blank" rel="noopener">@{{ site.github }}</a></p>
    {% endif %}
    {% if site.linkedin %}
    <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/{{ site.linkedin }}" target="_blank" rel="noopener">linkedin.com/in/{{ site.linkedin }}</a></p>
    {% endif %}
    {% if site.scholar_userid %}
    <p><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" rel="noopener">View Profile</a></p>
    {% endif %}
</div>

