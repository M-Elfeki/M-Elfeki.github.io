#!/bin/bash

# setup-github-auth.sh - One-time setup script to store GitHub credentials securely
# Run this once to store your GitHub token in macOS Keychain
# Usage: ./setup-github-auth.sh [username] [token]

set -e

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "🔐 Setting up GitHub authentication..."
    echo ""
    echo "Usage: ./setup-github-auth.sh <username> <token>"
    echo "Example: ./setup-github-auth.sh M-Elfeki ghp_your_token_here"
    echo ""
    echo "Or enter credentials interactively:"
    read -p "GitHub Username: " GITHUB_USERNAME
    read -sp "GitHub Token: " GITHUB_TOKEN
    echo ""
else
    GITHUB_USERNAME="$1"
    GITHUB_TOKEN="$2"
fi

if [ -z "$GITHUB_USERNAME" ] || [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: Username and token are required"
    exit 1
fi

echo "🔐 Storing GitHub credentials in macOS Keychain..."

# Store credentials using git credential helper
printf "protocol=https\nhost=github.com\nusername=$GITHUB_USERNAME\npassword=$GITHUB_TOKEN\n" | git credential-osxkeychain store

echo "✅ GitHub credentials stored securely in macOS Keychain"
echo "🔒 Your token is now stored securely and will be used automatically by git"
echo ""
echo "You can now use ./deploy.sh to deploy your website!"

