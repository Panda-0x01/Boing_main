#!/bin/bash

# Boing Website Deployment Script
# This script automates the deployment process

echo "🚀 Starting Boing Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type checks..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed. Please fix TypeScript errors."
    exit 1
fi

# Run linting
echo "🧹 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found. Consider fixing them before deployment."
fi

# Build the project
echo "🏗️  Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors."
    exit 1
fi

# Add all changes to git
echo "📝 Adding changes to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    read -p "Enter commit message: " commit_message
    git commit -m "$commit_message"
    
    # Push to GitHub
    echo "⬆️  Pushing to GitHub..."
    git push origin main
    if [ $? -ne 0 ]; then
        echo "❌ Failed to push to GitHub."
        exit 1
    fi
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site will be available at: https://boing-main.vercel.app"
echo "📊 Monitor deployment at: https://vercel.com/dashboard"

# Optional: Open deployment URL
read -p "Open deployment URL in browser? (y/n): " open_url
if [ "$open_url" = "y" ] || [ "$open_url" = "Y" ]; then
    if command -v xdg-open > /dev/null; then
        xdg-open "https://boing-main.vercel.app"
    elif command -v open > /dev/null; then
        open "https://boing-main.vercel.app"
    else
        echo "Please open https://boing-main.vercel.app manually"
    fi
fi