#!/bin/bash

# deploy.sh - Automated deployment script for melfeki.github.io
# Usage: ./deploy.sh [commit message]
# Example: ./deploy.sh "Update about section"

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo -e "${BLUE}🚀 Starting deployment...${NC}\n"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Check if there are any changes
if git diff --quiet && git diff --cached --quiet; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
    exit 0
fi

# Get commit message from parameter or prompt
if [ -z "$1" ]; then
    echo -e "${YELLOW}Enter commit message:${NC}"
    read -r COMMIT_MESSAGE
    if [ -z "$COMMIT_MESSAGE" ]; then
        echo -e "${RED}❌ Error: Commit message cannot be empty${NC}"
        exit 1
    fi
else
    COMMIT_MESSAGE="$1"
fi

# Show status
echo -e "${BLUE}📊 Current status:${NC}"
git status --short
echo ""

# Stage all changes
echo -e "${BLUE}📦 Staging changes...${NC}"
git add .

# Commit changes
echo -e "${BLUE}💾 Committing changes...${NC}"
git commit -m "$COMMIT_MESSAGE"

# Push to GitHub
echo -e "${BLUE}📤 Pushing to GitHub...${NC}"
if git push origin main; then
    echo -e "\n${GREEN}✅ Successfully deployed!${NC}"
    echo -e "${GREEN}🌐 Your website will be live at: https://m-elfeki.github.io${NC}"
    echo -e "${YELLOW}⏳ Please wait 1-3 minutes for GitHub Pages to deploy your changes.${NC}"
    echo -e "${BLUE}💡 Check deployment status: https://github.com/M-Elfeki/M-Elfeki.github.io/actions${NC}"
else
    echo -e "\n${RED}❌ Error: Failed to push to GitHub${NC}"
    echo -e "${YELLOW}💡 Make sure your GitHub credentials are configured correctly${NC}"
    exit 1
fi

