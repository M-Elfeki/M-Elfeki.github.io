---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-intro">
    <p class="lead-text">
        I'm always interested in hearing about new research opportunities, collaborations, or interesting projects. Feel free to reach out through any of the channels below.
    </p>
</div>

<section class="contact-methods">
    <h2 class="section-heading">Get in Touch</h2>
    <div class="contact-grid">
        {% if site.email %}
        <a href="mailto:{{ site.email }}" class="contact-card">
            <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            </div>
            <h3>Email</h3>
            <p>{{ site.email }}</p>
        </a>
        {% endif %}
        
        {% if site.linkedin %}
        <a href="https://linkedin.com/in/{{ site.linkedin }}" target="_blank" rel="noopener" class="contact-card">
            <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            </div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/{{ site.linkedin }}</p>
        </a>
        {% endif %}
        
        {% if site.scholar_userid %}
        <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" rel="noopener" class="contact-card">
            <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
            </div>
            <h3>Google Scholar</h3>
            <p>View Profile</p>
        </a>
        {% endif %}
        
        {% if site.twitter %}
        <a href="https://x.com/{{ site.twitter }}" target="_blank" rel="noopener" class="contact-card">
            <div class="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
            </div>
            <h3>Twitter</h3>
            <p>@{{ site.twitter }}</p>
        </a>
        {% endif %}
    </div>
</section>

<section class="collaboration-section">
    <div class="collaboration-card">
        <div class="collaboration-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        </div>
        <h2>Collaboration</h2>
        <p>I'm open to collaborations on research projects, especially those that combine multiple areas of AI or have practical applications. If you have an idea for a project or would like to discuss potential collaboration, please don't hesitate to reach out.</p>
    </div>
    
    <div class="collaboration-card">
        <div class="collaboration-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        </div>
        <h2>Speaking & Consulting</h2>
        <p>I'm available for speaking engagements, workshops, and consulting on topics related to machine learning, deep learning, and AI research. Feel free to contact me with details about your event or project.</p>
    </div>
</section>
