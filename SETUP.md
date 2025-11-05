# Setup Guide

This guide will help you set up and run your Jekyll-based personal website locally.

## Quick Start

1. **Install Ruby** (if not already installed):
   ```bash
   # On macOS (using Homebrew)
   brew install ruby
   
   # Verify installation
   ruby --version
   ```

2. **Install Bundler**:
   ```bash
   gem install bundler
   ```

3. **Install Jekyll dependencies**:
   ```bash
   bundle install
   ```

4. **Run the site locally**:
   ```bash
   bundle exec jekyll serve
   ```

5. **View your site**: Open [http://localhost:4000](http://localhost:4000) in your browser

## Customization Steps

### 1. Update Personal Information

Edit `_config.yml` and update:
- `email`: Your email address
- `github`: Your GitHub username
- `linkedin`: Your LinkedIn username (without the full URL)
- `scholar_userid`: Your Google Scholar user ID
- `twitter`: Your Twitter handle (optional)
- `url`: Your website URL (update if different)

### 2. Add Your Publications

Edit `_bibliography/papers.bib` and add your publications in BibTeX format. Example:

```bibtex
@article{yourpaper2024,
  title={Your Paper Title},
  author={Elfeki, Mohamed and Co-Author, Name},
  journal={Conference/Journal Name},
  year={2024},
  abstract={Your abstract here},
  pdf={/assets/pdf/your-paper.pdf},
  code={https://github.com/your-repo},
  arxiv={https://arxiv.org/abs/xxxx.xxxxx}
}
```

### 3. Add News Items

Create new files in `_news/` with the format:
- Filename: `YYYY-MM-DD-title.md`
- Content:
  ```markdown
  ---
  title: Your News Title
  date: YYYY-MM-DD
  ---
  
  Your news content here.
  ```

### 4. Add Projects

Create new files in `_projects/`:
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

### 5. Customize Styling

- Edit `_sass/_variables.scss` to change colors, fonts, and spacing
- The primary theme color is purple (`#6c5ce7`) - change it to match your preference
- Modify individual SCSS files in `_sass/` for component-specific styling

### 6. Update Pages

Edit the Markdown files in `_pages/`:
- `about.md` - About page content
- `research.md` - Research interests
- `contact.md` - Contact information

## Deployment

### GitHub Pages

1. Push your changes to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. GitHub Pages will automatically build and deploy your site

### Using the Deploy Script

```bash
./deploy.sh "Your commit message"
```

## Troubleshooting

### Jekyll not found
```bash
bundle install
bundle exec jekyll serve
```

### SCSS compilation errors
Make sure all SCSS files are properly imported in `assets/css/main.scss`

### Publications not showing
- Check that `_bibliography/papers.bib` exists and has valid BibTeX entries
- Verify Jekyll Scholar is installed: `bundle list | grep jekyll-scholar`

### Build errors
- Check `_config.yml` for syntax errors
- Verify all required plugins are in `Gemfile`
- Run `bundle update` to update dependencies

## Next Steps

1. Replace placeholder content with your actual information
2. Add your publications to `_bibliography/papers.bib`
3. Customize the theme colors in `_sass/_variables.scss`
4. Add your projects and news items
5. Deploy to GitHub Pages

Happy building! 🚀

