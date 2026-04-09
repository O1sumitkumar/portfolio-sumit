# Technical Stack

## Core Technologies
- [Remix](https://remix.run/) - React framework for server-rendered applications
- [React](https://react.dev/) v19 - UI library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting and deployment platform

## Build System
- [Vite](https://vitejs.dev/) - Build tool and development server
- [PostCSS](https://postcss.org/) - CSS processing
- CSS Modules - Component-scoped styling

## Testing & Documentation
- [Storybook](https://storybook.js.org/) - Component documentation and testing

## Common Commands

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run dev:storybook
```

### Building & Deployment
```bash
# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy

# Build Storybook
npm run build:storybook

# Deploy Storybook
npm run deploy:storybook
```

## Environment Configuration
- `.dev.vars` - Local environment variables (copy from `.dev.vars.example`)
- `wrangler.toml` - Cloudflare configuration

## Code Style
- ESLint for code linting with React and accessibility rules
- Prettier for code formatting with the following settings:
  - Single quotes
  - 90 character line length
  - 2 space indentation
  - Trailing commas in ES5 objects
  - No parentheses around single arrow function parameters