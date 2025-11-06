---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-intro">
    <p class="lead-text">
        I'm always interested in hearing about new research opportunities, collaborations, or interesting projects. Feel free to reach out through any of the channels below.
    </p>
    <p>
        Whether you're a fellow researcher, a student with questions, or someone interested in AI, I'd be happy to connect. I'm particularly interested in discussions about machine learning, natural language processing, computer vision, and the ethical implications of AI.
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

<section class="research-interests-section">
    <h2 class="section-heading">Research Interests</h2>
    <div class="interests-grid">
        <div class="interest-card">
            <div class="interest-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
            <h3>Neural Architecture Search</h3>
            <p>Automating the design of efficient neural networks</p>
        </div>
        <div class="interest-card">
            <div class="interest-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            </div>
            <h3>Interpretable AI</h3>
            <p>Making complex models more understandable</p>
        </div>
        <div class="interest-card">
            <div class="interest-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
            </div>
            <h3>Efficient Deep Learning</h3>
            <p>Reducing computational requirements while maintaining performance</p>
        </div>
        <div class="interest-card">
            <div class="interest-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            </div>
            <h3>AI Ethics</h3>
            <p>Ensuring AI systems are fair, transparent, and beneficial</p>
        </div>
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
