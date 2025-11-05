# Mohamed Elfeki - Personal Website

Welcome to my personal website! This is a modern, responsive Jekyll-based website inspired by [al-folio](https://github.com/alshedivat/al-folio), hosted on GitHub Pages.

## 🌐 Live Website

Visit the live site at: **https://melfeki.github.io**

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by al-folio theme
- **Jekyll-Powered**: Built with Jekyll static site generator
- **Responsive**: Fully responsive and works great on all devices (mobile, tablet, desktop)
- **Blog Support**: Write blog posts in Markdown (Thoughts page)
- **Projects Showcase**: Display your projects with images and links
- **SEO Optimized**: Built-in SEO tags and sitemap generation
- **Atom Feed**: RSS-like feed for blog posts

## 📁 Project Structure

```
melfeki.github.io/
├── _data/                 # Data files (YAML)
├── _includes/             # Reusable HTML components
├── _layouts/              # Page layouts
├── _pages/                # Static pages (About, Projects, Thoughts, Contact)
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
├── deploy.sh              # Deployment script
├── setup-github-auth.sh   # GitHub authentication setup
└── README.md              # This file
```

## 🛠️ Setup & Installation

### Prerequisites

- Ruby (2.6 or higher)
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

3. **Run the site locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site**: Open [http://localhost:4000](http://localhost:4000) in your browser

## 📝 Customization

### Update Personal Information

Edit `_config.yml` to update:
- Name, title, and description
- Email, LinkedIn, Google Scholar IDs
- Social media links
- Navigation menu

### Add Projects

Create new files in `_projects/` directory:
```markdown
---
title: Project Name
date: YYYY-MM-DD
image: /assets/img/project-image.png
links:
  - name: GitHub
    url: https://github.com/example
  - name: Demo
    url: https://example.com
---

Your project description here.
```

### Add Blog Posts (Thoughts)

Create new files in `_posts/` directory with the format `YYYY-MM-DD-title.md`:
```markdown
---
layout: post
title: Your Post Title
date: YYYY-MM-DD
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
- `about.md` - About page content
- `projects.md` - Projects showcase
- `thoughts.md` - Blog posts listing
- `contact.md` - Contact information

## 📝 Publishing to GitHub Pages

### Quick Deploy (Recommended)

Use the automated deploy script:

```bash
./deploy.sh "Your commit message"
```

The script will automatically:
- ✅ Stage all changes
- ✅ Commit with your message
- ✅ Push to GitHub
- ✅ Show deployment status

### Manual Deployment

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages will automatically rebuild your site within a few minutes.

### First-Time Setup

If you haven't set up GitHub authentication yet:

```bash
# Store your GitHub token securely in macOS Keychain
./setup-github-auth.sh M-Elfeki your_github_token_here

# Or run interactively (will prompt for username and token)
./setup-github-auth.sh
```

After setup, you can use `./deploy.sh` anytime!

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

## 📦 Dependencies

Key Jekyll plugins used:
- `jekyll-feed` - Atom feed generation
- `jekyll-sitemap` - Sitemap generation
- `jekyll-seo-tag` - SEO optimization
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
