---
layout: about
title: about
permalink: /
subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  image: photo2.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>auliadewi936@gmail.com</p>
    <p>Pekanbaru, Indonesia</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

{% if site.announcements.enabled %}
  <div class="news">
    <h2>news</h2>

    {% assign all_news = site.news | sort: 'date' | reverse %}
    {% assign limit = site.announcements.limit | default: all_news.size %}

    <ul id="visible-news">
      {% for post in all_news limit: limit %}
        <li>
          <b>{{ post.date | date: "%b %d, %Y" }}</b>
          {{ post.content | markdownify }}
        </li>
      {% endfor %}
    </ul>

    {% if all_news.size > limit %}
      <details>
        <summary style="cursor:pointer; margin-top:8px;">Old News (~{{ all_news.last.date | date: "%Y" }})</summary>
        <ul>
          {% for post in all_news offset: limit %}
            <li>
              <b>{{ post.date | date: "%b %d, %Y" }}</b>
              {{ post.content | markdownify }}
            </li>
          {% endfor %}
        </ul>
      </details>
    {% endif %}
  </div>
{% endif %}

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Project Control Administrator at PT. Surya Mas Perkasa (Karawang), supporting project control, documentation, and data management in engineering-based project environments.

Previously, I served as a Project Manager at Pro Knowledge Indonesia and worked as a Researcher in the Department of Information Systems, UIN Sultan Syarif Kasim Riau. I completed my Bachelor’s degree in Information Systems at UIN Sultan Syarif Kasim Riau in 2025, supervised by Dr. Saide.

My interests focus on the intersection of Artificial Intelligence and Digital Knowledge Management within Project Management Information Systems (PMIS). I am particularly interested in how AI can enhance decision support, collaboration, and project efficiency in organizational settings.

I work at the boundary between research and practice, contributing to digital transformation and project innovation through systems-oriented thinking and data-driven project workflows.
