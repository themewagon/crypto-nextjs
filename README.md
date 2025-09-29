# Crypto Next.js Project

A modern cryptocurrency-themed website built with Next.js, Tailwind CSS, and TypeScript.

**Repository**: [themewagon/crypto-nextjs](https://github.com/themewagon/crypto-nextjs)  
**Live Demo**: [https://themewagon.github.io/crypto-nextjs](https://themewagon.github.io/crypto-nextjs)

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

### Deployment

The project automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

#### Manual Deployment

```bash
# Build and prepare for deployment
npm run deploy
```

This will:
1. Build the project with static export
2. Create the `.nojekyll` file for GitHub Pages
3. Output files to the `out/` directory

### Configuration

The project is configured with:
- **Static Export**: `output: 'export'` in `next.config.mjs`
- **Asset Prefix**: Set to `/crypto-nextjs` for GitHub Pages subdirectory
- **Base Path**: Configured for `themewagon/crypto-nextjs` repository
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slash**: Enabled for better GitHub Pages compatibility

### GitHub Pages Setup

1. Go to your repository settings at [themewagon/crypto-nextjs](https://github.com/themewagon/crypto-nextjs/settings)
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main/master

### Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable components
├── lib/                 # Utility functions
└── types/              # TypeScript type definitions
```

### Technologies Used

- **Next.js 15** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **Next Themes** - Theme management

### License

This project is private and proprietary.
