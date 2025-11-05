---
layout: page
title: News
permalink: /news/
---

## News

{% for news_item in site.news %}
    <article class="news-item">
        <div class="news-date">{{ news_item.date | date: "%B %d, %Y" }}</div>
        <div class="news-content">
            <h3 class="news-title">{{ news_item.title }}</h3>
            {% if news_item.content %}
            <div class="news-excerpt">{{ news_item.content | markdownify }}</div>
            {% endif %}
        </div>
    </article>
{% endfor %}

