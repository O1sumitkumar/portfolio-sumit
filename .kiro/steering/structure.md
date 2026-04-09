# Project Structure

## Key Directories

### `/app`
Core application code:
- `/app/assets` - Static assets like fonts and images
- `/app/components` - Reusable UI components
- `/app/hooks` - Custom React hooks
- `/app/layouts` - Layout components (navbar, error pages, etc.)
- `/app/routes` - Route components and page content
- `/app/utils` - Utility functions and helpers
- `/app/global.module.css` - Global CSS variables and styles
- `/app/reset.module.css` - CSS reset styles
- `/app/root.jsx` - Root component and app configuration

### `/public`
Static assets served directly:
- `/public/build` - Compiled assets (generated)
- `/public/draco` - Three.js Draco compression library
- `/public/static` - Static media files
- Various favicon and manifest files

### `/.storybook`
Storybook configuration:
- `/.storybook/main.js` - Main Storybook configuration
- `/.storybook/preview.jsx` - Story preview configuration
- `/.storybook/story-container.jsx` - Story container component

### `/functions`
Cloudflare Functions:
- `/functions/[[path]].js` - Cloudflare Pages Functions handler

## Configuration Files
- `remix.config.js` - Remix framework configuration
- `vite.config.js` - Vite build configuration
- `wrangler.toml` - Cloudflare Wrangler configuration
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `postcss.config.cjs` - PostCSS configuration

## Architecture Patterns

### Component Structure
- Components use CSS Modules for styling (`component-name.module.css`)
- Components are organized by feature/purpose
- Accessibility is prioritized with proper ARIA attributes

### Routing
- Uses Remix file-based routing in `/app/routes`
- Custom route configuration in `vite.config.js`

### State Management
- Uses React hooks for local state
- Uses Remix's data loading patterns for server state
- Theme state is managed via cookies

### Styling
- CSS Modules for component-scoped styles
- CSS Custom Properties (variables) for theming
- PostCSS for processing and transforming CSS