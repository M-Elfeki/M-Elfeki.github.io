# Mohamed Elfeki - Personal Website

Welcome to my personal website! This is a modern, responsive Jekyll-based website inspired by [al-folio](https://github.com/alshedivat/al-folio), hosted on GitHub Pages.

## 🌐 Live Website

Visit the live site at: **https://melfeki.github.io**

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by al-folio theme
- **Jekyll-Powered**: Built with Jekyll static site generator
- **Responsive**: Fully responsive and works great on all devices (mobile, tablet, desktop)
- **Publications**: BibTeX integration for automatic publication listings
- **Blog Support**: Write blog posts in Markdown
- **News Feed**: Automatically display latest news and updates
- **Projects Showcase**: Display your projects with images and links
- **Math Support**: MathJax integration for mathematical equations
- **SEO Optimized**: Built-in SEO tags and sitemap generation
- **Atom Feed**: RSS-like feed for blog posts

## 📁 Project Structure

```
melfeki.github.io/
├── _bibliography/         # BibTeX files for publications
├── _data/                 # Data files (YAML)
├── _includes/             # Reusable HTML components
├── _layouts/              # Page layouts
├── _news/                 # News items (Markdown)
├── _pages/                # Static pages (About, Research, etc.)
├── _posts/                # Blog posts (Markdown)
├── _projects/             # Project showcase (Markdown)
├── _sass/                 # SCSS stylesheets
├── assets/                # CSS, JS, images
│   ├── css/
│   ├── js/
│   └── img/
├── resources/             # Static resources (profile picture, etc.)
├── _config.yml            # Jekyll configuration
├── Gemfile                # Ruby dependencies
├── index.html             # Homepage
└── README.md              # This file
```

## 🛠️ Setup & Installation

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/M-Elfeki/melfeki.github.io.git
   cd melfeki.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Build and serve locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**: Open [http://localhost:4000](http://localhost:4000) in your browser

## 📝 Customization

### Update Personal Information

Edit `_config.yml` to update:
- Name, title, and description
- Email, GitHub, LinkedIn, Google Scholar IDs
- Social media links
- Navigation menu

### Add Publications

1. Edit `_bibliography/papers.bib` to add your publications in BibTeX format
2. Publications will automatically appear on the Publications page

### Add News Items

Create new files in `_news/` directory with the format:
```markdown
---
title: Your News Title
date: 2024-01-01
---

Your news content here.
```

### Add Projects

Create new files in `_projects/` directory:
```markdown
---
title: Project Name
date: 2024-01-01
image: /assets/img/project-image.png
links:
  - name: GitHub
    url: https://github.com/example
---

Project description here.
```

### Add Blog Posts

Create new files in `_posts/` directory with the format:
```markdown
---
layout: post
title: Your Post Title
date: 2024-01-01
tags: [tag1, tag2]
---

Your post content here.
```

### Customize Styling

- Edit `_sass/_variables.scss` to change colors, fonts, and spacing
- Modify individual SCSS files in `_sass/` for specific components
- The theme color can be changed in `_config.yml` (`theme_color`)

### Update Pages

Edit files in `_pages/` directory:
- `about.md` - About page
- `research.md` - Research interests
- `publications.md` - Publications (auto-generated from BibTeX)
- `projects.md` - Projects showcase
- `news.md` - News listing
- `contact.md` - Contact information

## 📝 Publishing to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

GitHub Pages will automatically build your Jekyll site when you push to the `main` branch.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder

2. **Deploy using the deploy script**:
   ```bash
   ./deploy.sh "Your commit message"
   ```

### Option 2: Manual Deployment

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages will automatically rebuild your site within a few minutes.

### Option 3: GitHub Actions (Advanced)

For more control, you can set up GitHub Actions to build and deploy. The site will be built using the same Jekyll configuration locally and on GitHub.

## 🔧 Development

### Build the site

```bash
bundle exec jekyll build
```

The site will be built to `_site/` directory.

### Serve locally with auto-reload

```bash
bundle exec jekyll serve --livereload
```

### Check for broken links

```bash
bundle exec jekyll build
# Then use a link checker tool
```

## 📦 Dependencies

Key Jekyll plugins used:
- `jekyll-feed` - Atom feed generation
- `jekyll-sitemap` - Sitemap generation
- `jekyll-seo-tag` - SEO optimization
- `jekyll-scholar` - BibTeX integration for publications
- `jekyll-paginate-v2` - Pagination support

## 🎨 Theme Customization

The design is inspired by al-folio with a modern, clean aesthetic. Key features:
- Purple theme color (customizable)
- Smooth animations and transitions
- Responsive grid layouts
- Mobile-first design
- Accessible and semantic HTML

## 📧 Contact

Feel free to reach out through any of the contact links on the website!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by [al-folio](https://github.com/alshedivat/al-folio) theme
- Built with [Jekyll](https://jekyllrb.com/)

---

**Built with ❤️ using Jekyll, SCSS, and JavaScript**
