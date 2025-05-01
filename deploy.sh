#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the React application
echo "📦 Building your project..."
npm run build

# Create a special 404.html for GitHub Pages to handle SPA routing
echo "🔧 Creating 404.html for SPA routing..."
cp build/index.html build/404.html

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"