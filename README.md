# UML Umbrello Tutorials

A comprehensive collection of tutorials for creating UML diagrams using Umbrello 5. This repository contains step-by-step guides for various UML diagram types including Use Case Diagrams, Activity Diagrams, and Class Diagrams.

## About This Project

This website aims to help users learn and master different types of UML diagrams through practical examples and detailed instructions. Perfect for students, developers, and software engineers looking to improve their modeling skills.

## Available Tutorials

- **Use Case Diagrams**: Learn how to create and manage use case diagrams
- **Activity Diagrams**: Create diagrams to model workflows and business processes
- **Class Diagrams**: Design object-oriented systems and database schemas

## Local Development

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Prerequisites

- Node.js (version 16 or above)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start the local development server
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Building for Production

```bash
# Generate static files
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This site is deployed on GitHub Pages. The deployment process uses two branches:
- `main` - Contains the source code
- `gh-pages` - Contains the built website for deployment

The live site is available at: https://prakash-aryan.github.io/UML-Umbrello-Tutorials/

### Manual Deployment Process

```bash
# Build the website
npm run build

# Switch to deployment branch
git checkout gh-pages

# Replace with new build
rm -rf assets docs img *.html *.xml *.js
cp -r build/* .

# Commit and push the deployment
git add .
git commit -m "Deploy website update"
git push origin gh-pages

# Return to main branch for development
git checkout main
```

## License

This tutorial collection is available under the MIT License.

## Author

Made by [Prakash Aryan](https://prakasharyan.com/)