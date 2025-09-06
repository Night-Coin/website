# CryptoSecure Website

A privacy-focused cryptocurrency website inspired by Monero's design, built with React and featuring a blue and black color scheme.

## Features

- **Privacy-First Design**: Clean, minimalist interface emphasizing security and privacy
- **Blue & Black Theme**: Professional color scheme with blue (#0066cc) and black (#000000) accents
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Fast Loading**: Optimized for performance and accessibility
- **Whitepaper Integration**: Direct link to the whitepaper.pdf file

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with logo
│   ├── Header.css
│   ├── Hero.js            # Main hero section
│   ├── Hero.css
│   ├── Features.js        # Features showcase
│   ├── Features.css
│   ├── Footer.js          # Footer with links and whitepaper
│   └── Footer.css
├── App.js                 # Main app component
├── App.css               # Global app styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Design Philosophy

The website follows Monero's design principles:
- **Purposeful Simplicity**: Clean, functional design without unnecessary elements
- **Privacy-First**: Design choices that emphasize security and confidentiality
- **Accessibility**: Fast-loading, accessible design that works with privacy tools
- **Professional**: Blue and black color scheme conveys trust and security

## Whitepaper

The whitepaper is available at `/whitepaper.pdf` and is linked in the footer's Resources section.
