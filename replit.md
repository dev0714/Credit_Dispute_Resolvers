# Credit Dispute Resolvers - Professional Credit Restoration Website

## Overview

Credit Dispute Resolvers is a professional credit restoration service website built for a South African company that has been helping clients regain their financial freedom since 2013. The application serves as a marketing and lead generation platform, showcasing the company's services in debt review removal, prescribed debt clearing, default removals, credit bureau clearance, and judgment rescission. The website features a modern, professional design with a comprehensive contact form system for potential clients to request consultations.

**Update (October 2024)**: The application has been converted from a React SPA to a static HTML website with vanilla JavaScript. This change provides simpler deployment, faster initial load times, and eliminates the need for frontend build processes.

**Recent Updates**: Statistics updated to reflect 9000+ clients assisted and 18000 accounts written off. Website imagery updated with diverse representation featuring beautiful young women of various ethnicities (white, Indian, Black, and multiracial).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built as a **static HTML website** with **vanilla CSS and JavaScript**. This provides a fast, lightweight, and easily maintainable solution for the marketing website.

**File Structure**:
- `public/index.html`: Single-page HTML containing all website sections (hero, services, about, process, testimonials, contact)
- `public/styles.css`: Vanilla CSS with custom design system, typography (Inter and Playfair Display fonts), and responsive breakpoints
- `public/app.js`: Vanilla JavaScript handling mobile menu toggle, smooth scrolling, and form validation/submission
- `public/logo.png`: Professional company logo with phoenix emblem and "Your Partners in Blacklisting Removals" tagline
- `public/images/`: Professional stock photography (7 images) integrated throughout the site:
  - Hero section: Professional businesswoman reviewing financial documents
  - Visual banner: Partnership handshake, credit score improvement chart, celebrating family
  - Testimonials: Professional client portrait
  - About section: Consultant helping client
  - Contact background: Subtle South African cityscape

**Key Sections**:
1. **Hero Section**: Two-column layout with gradient background, professional image, main call-to-action, and statistics
2. **Benefits Section**: Why Choose Us - 4 key benefits with icons, followed by visual banner with 3 professional images
3. **Services Section**: 6 comprehensive credit solutions with detailed features
4. **Process Section**: 3-step process overview with numbered steps
5. **Testimonials Section**: Client success story with professional portrait photo
6. **About Section**: Company information with consultant image and key stats
7. **Contact Section**: Consultation request form with subtle cityscape background
8. **Footer**: Company info, services, and quick links

**Styling**: Custom CSS variables for consistent theming, gradient designs, hover effects, and smooth transitions. Responsive design with mobile-first approach using CSS Grid and Flexbox.

**Navigation**: Fixed navigation bar with professional company logo displayed in the header. Logo is inverted to white on dark background with hover glow effects. Smooth scrolling to sections using anchor links. Mobile-responsive navigation with hamburger menu for smaller screens.

### Backend Architecture
The backend is built on **Express.js** running on **Node.js**, providing a RESTful API architecture. The server handles two main endpoints: creating consultation requests and retrieving consultation requests (admin functionality).

**Development Setup**: The application uses **TSX** for running TypeScript files directly during development, eliminating the need for separate compilation steps. In production, **esbuild** compiles the server code into optimized JavaScript bundles.

**API Design**: The API follows REST principles with clear endpoint patterns (`/api/consultation-requests`) and proper HTTP status codes. Request validation is handled using **Zod** schemas shared between frontend and backend.

### Data Storage Solutions
**Current Implementation**: The application uses an in-memory storage system (`MemStorage` class) that stores consultation requests in a JavaScript Map. This is suitable for development and demonstration purposes.

**Database Ready**: The codebase is configured for **PostgreSQL** integration using **Drizzle ORM**. The database schema is defined in the shared directory, with migration support through Drizzle Kit. The configuration expects a `DATABASE_URL` environment variable and uses **Neon Database** as the serverless PostgreSQL provider.

**Data Models**: Consultation requests include customer information (name, email, phone), primary concerns, additional details, and consent tracking. The schema includes proper validation rules and automatic timestamp generation.

### Form Management and Validation
The contact form uses **vanilla JavaScript** for client-side validation with the following rules:
- First name: minimum 2 characters
- Last name: minimum 2 characters
- Email: valid email format (regex validation)
- Phone: minimum 10 characters
- Consent: must be checked

**User Experience**: Forms provide real-time validation feedback with error messages displayed below each field. Loading states are shown during submission (button text changes to "Submitting..."). Success messages appear after successful submission, and the form automatically resets. Error handling displays user-friendly messages for failed submissions.

### Development and Serving
**Static File Serving**: The Express server serves static files from the `public/` directory using `express.static('public')`. All routes fall back to `index.html` for proper navigation.

**Development**: The server uses **TSX** for running TypeScript files directly, eliminating the need for compilation during development. Static HTML, CSS, and JavaScript files are served directly without build steps.

**API Integration**: The backend API routes (e.g., `/api/consultation-requests`) remain intact and are called from the vanilla JavaScript using the Fetch API. The server properly handles both static file serving and API requests.

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with TypeScript support
- **Express.js**: Backend web server framework
- **Vite**: Build tool and development server with React plugin
- **Node.js**: Runtime environment for the backend server

### Database and ORM
- **Drizzle ORM**: Type-safe SQL toolkit for database operations
- **Drizzle Kit**: Migration and introspection tools
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **PostgreSQL**: Primary database (configured but not yet implemented)

### UI Component Libraries
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Radix UI**: Accessible UI primitive components (20+ components)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Form Handling and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **TSX**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### Styling and Design
- **PostCSS**: CSS processing with Autoprefixer
- **Google Fonts**: Custom typography (Inter, Playfair Display, Geist Mono)
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditionally joining classNames

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command palette functionality for enhanced UX