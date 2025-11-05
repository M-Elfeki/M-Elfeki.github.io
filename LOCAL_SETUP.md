# Local Development Setup

## Ruby Version Issue

You're currently using Ruby 2.6.10 (system Ruby). The Gemfile has been configured to work with this version, but you may encounter permission issues when installing gems.

## Option 1: Use GitHub Pages (Recommended for Deployment)

**Good news**: You don't need to run `bundle install` locally to deploy to GitHub Pages! GitHub Pages will automatically install the dependencies when you push your code.

Simply:
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. GitHub will build and deploy your site automatically

## Option 2: Fix Local Development (For Testing Locally)

If you want to test the site locally before deploying, you have a few options:

### A. Install Ruby via Homebrew (Recommended)

```bash
# Install Homebrew Ruby (if not already installed)
brew install ruby

# Add to your ~/.zshrc
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Verify Ruby version (should be 2.7+)
ruby --version

# Install bundler
gem install bundler

# Now bundle install should work
cd /Users/mohamed.elfeki/Documents/Codes/melfeki.github.io
bundle install
```

### B. Use rbenv (Ruby Version Manager)

```bash
# Install rbenv
brew install rbenv ruby-build

# Install Ruby 3.0+
rbenv install 3.0.0
rbenv global 3.0.0

# Add to ~/.zshrc
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

# Install bundler and gems
gem install bundler
cd /Users/mohamed.elfeki/Documents/Codes/melfeki.github.io
bundle install
```

### C. Use sudo (Not Recommended)

If you must use system Ruby, you can grant sudo access when prompted:

```bash
cd /Users/mohamed.elfeki/Documents/Codes/melfeki.github.io
bundle install
# Enter your password when prompted
```

## Current Gemfile Configuration

The Gemfile is configured for:
- **Jekyll 3.9** (compatible with Ruby 2.6+)
- **jekyll-scholar 5.16** (compatible with Jekyll 3.9)
- Other plugins compatible with this setup

This configuration will work on GitHub Pages, which uses Jekyll 3.9 by default.

## Testing Without Local Installation

If you can't install locally, you can:
1. Make changes and push to GitHub
2. Wait for GitHub Pages to build (usually 1-3 minutes)
3. Check the Actions tab to see if the build succeeded
4. View your site at `https://melfeki.github.io`

## Next Steps

1. **For deployment**: Just push to GitHub - no local setup needed!
2. **For local development**: Choose one of the Ruby installation options above

