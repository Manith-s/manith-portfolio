#!/bin/bash

# Build the React application
npm run build

# Create a special 404.html for GitHub Pages to handle SPA routing
cp build/index.html build/404.html

# If you're using Windows, you might need to use this command instead
# copy build\index.html build\404.html

# If you're deploying manually, you can use this command
# npm run deploy

# If you're using GitHub Actions, you can create a workflow file
# in .github/workflows/ instead of using this script

echo "Build completed! You can now deploy to GitHub Pages using 'npm run deploy'"