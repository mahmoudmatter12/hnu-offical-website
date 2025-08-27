# HNU Official Website

A modern, feature-rich official website for Helwan National University (HNU) built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 **Live Demo**

**Production**: https://hnu-official-website-orsypfjnq-mahmoud-matters-projects.vercel.app

## 📋 **Project Overview**

HNU Official Website is a comprehensive web platform designed to showcase Helwan National University's academic excellence, services, and information. The website features a modern, responsive design with internationalization support for both English and Arabic languages.

## ✨ **Current Features & Implementation**

### 🏠 **Homepage**
- **Hero Section**: Welcome message and university introduction
- **About HNU**: Mission statement and educational philosophy
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern black background with white text

### 🌍 **Internationalization (i18n)**
- **Multi-language Support**: English (EN) and Arabic (عربي)
- **Locale Routing**: Dynamic language switching with URL-based routing
- **Message Management**: Centralized message files in `messages/` directory
- **RTL Support**: Right-to-left language support for Arabic
- **Navigation**: Language switcher in the header

### 🧭 **Navigation System**
- **Responsive Menu**: Mobile-friendly hamburger menu
- **Navigation Items**: Home, About, Services, Contact
- **Active State**: Visual feedback for current page
- **Logo Branding**: HNU university branding
- **Mobile Optimization**: Collapsible navigation for small screens

### 🎨 **UI/UX Features**
- **Modern Design**: Clean, professional university website aesthetic
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Transitions**: CSS transitions and hover effects
- **Accessibility**: Semantic HTML and ARIA labels
- **Typography**: Optimized font hierarchy and readability

### 🔧 **Technical Features**
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest App Router with Turbopack
- **Tailwind CSS**: Utility-first styling framework
- **Component Architecture**: Reusable React components
- **State Management**: React Context API for global state

## 🛠️ **Technology Stack & Libraries**

### **Core Framework**
- **Next.js 15.5.2**: React framework with App Router and Turbopack
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe JavaScript development

### **Styling & UI**
- **Tailwind CSS 4**: Utility-first CSS framework
- **CSS Variables**: Dynamic theming support
- **Responsive Design**: Mobile-first approach
- **Component Variants**: Class Variance Authority integration

### **Internationalization**
- **next-intl 4.3.5**: Internationalization framework
- **Locale Routing**: Dynamic route handling
- **Message Bundles**: JSON-based translation files
- **RTL Support**: Right-to-left language layouts

### **State Management & Data**
- **React Context API**: Lightweight client state management
- **TanStack Query 5.85.5**: Server state management (configured)
- **React Hook Form 7.62.0**: Form handling (configured)
- **Zod 4.1.3**: Schema validation (configured)
- **Axios 1.11.0**: HTTP client with interceptors (configured)

### **Development Tools**
- **ESLint**: Code quality and style enforcement
- **Prettier 3.6.2**: Code formatting with custom configuration
- **TypeScript**: Type checking and IntelliSense
- **GitHub Actions**: Automated CI/CD pipeline

### **Deployment & Hosting**
- **Vercel**: One-click deployment platform
- **GitHub Actions**: Automated build and deployment
- **Branch Protection**: Secure development workflow

## 📁 **Project Structure**

```
hnu-offical-website/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalized routes
│   │   ├── globals.css          # Global styles with Tailwind
│   │   ├── layout.tsx           # Locale-specific layout
│   │   └── page.tsx             # Homepage component
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx            # 404 error page
│   └── favicon.ico              # Site icon
├── components/                    # Reusable components
│   └── navigation.tsx            # Main navigation component
├── contexts/                      # React Context providers
│   ├── providers.tsx             # Main provider wrapper
│   ├── theme-context.tsx         # Theme management
│   └── index.ts                  # Context exports
├── lib/                          # Utility libraries
│   ├── axios.ts                  # HTTP client configuration
│   └── utils.ts                  # Utility functions
├── i18n/                         # Internationalization
│   ├── navigation.ts             # Navigation utilities
│   ├── request.ts                # Request handling
│   └── routing.ts                # Route configuration
├── messages/                      # Translation files
│   ├── en.json                   # English messages
│   └── ar.json                   # Arabic messages
├── .github/                       # GitHub configurations
│   ├── workflows/                 # CI/CD workflows
│   │   └── build.yml             # Build verification workflow
│   ├── CODEOWNERS                # Code ownership rules
│   ├── branch-protection.yml     # Branch protection documentation
│   └── pull_request_template.md  # PR template
├── scripts/                       # Deployment scripts
│   ├── deploy.sh                 # Bash deployment script
│   ├── deploy.bat                # Windows deployment script
│   ├── deploy.ts                 # TypeScript deployment script
│   └── config.json               # Deployment configuration
├── public/                        # Static assets
├── .prettierrc                   # Prettier configuration
├── .prettierignore               # Prettier ignore rules
├── Makefile                      # Project management commands
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── vercel.json                   # Vercel deployment config
```

## 🚀 **Getting Started**

### **Prerequisites**
- **Node.js**: Version 18 or higher
- **Package Manager**: npm, yarn, or pnpm
- **Git**: Version control system

### **Installation**
```bash
# Clone the repository
git clone https://github.com/mahmoudmatter12/HNU-Official-website.git
cd hnu-offical-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Environment Setup**
Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Theme Configuration
NEXT_PUBLIC_DEFAULT_THEME=system

# Internationalization
NEXT_PUBLIC_DEFAULT_LOCALE=en
```

## 📜 **Available Scripts**

### **Development**
```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run type-check       # TypeScript type checking
```

### **Code Quality**
```bash
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted correctly
npm run pre-commit       # Run pre-commit checks
```

### **Deployment**
```bash
npm run deploy           # Deploy to current branch
npm run deploy:prod      # Deploy to production (main)
npm run deploy:staging   # Deploy to staging (develop)
```

### **Versioning**
```bash
npm run version:patch    # Bump patch version (1.0.0 → 1.0.1)
npm run version:minor    # Bump minor version (1.0.0 → 1.1.0)
npm run version:major    # Bump major version (1.0.0 → 2.0.0)
```

## 🔧 **Makefile Commands**

```bash
make help                # Show all available commands
make install             # Install dependencies
make dev                 # Start development server
make build               # Build project
make format              # Format code with Prettier
make format-check        # Check code formatting
make type-check          # Run TypeScript checks
make clean               # Clean build files
make deploy              # Deploy to production
make quality             # Run all quality checks
```

## 🌐 **Internationalization**

### **Supported Languages**
- **English (EN)**: Primary language
- **Arabic (عربي)**: Secondary language with RTL support

### **Language Switching**
- **URL-based**: `/en/` for English, `/ar/` for Arabic
- **Dynamic Routing**: Seamless language switching
- **Persistent Selection**: Language preference maintained

### **Message Structure**
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  }
}
```

## 🎨 **Styling & Design**

### **Tailwind CSS Configuration**
- **Custom Colors**: University brand colors
- **Responsive Breakpoints**: Mobile-first design
- **Component Variants**: Consistent design system
- **Dark Theme**: Modern black background

### **Component Architecture**
- **Reusable Components**: Modular design approach
- **Props Interface**: TypeScript prop definitions
- **Styling Variants**: Flexible component styling
- **Accessibility**: ARIA labels and semantic HTML

## 🚀 **Deployment & CI/CD**

### **Vercel Integration**
- **Automatic Deployment**: Deploys on push to main
- **Preview Deployments**: Automatic for pull requests
- **Environment Variables**: Secure configuration management
- **Performance Monitoring**: Built-in analytics

### **GitHub Actions**
- **Build Verification**: Automated build testing
- **Quality Gates**: Ensures code quality
- **Branch Protection**: Secure development workflow
- **Automated Testing**: CI/CD pipeline

### **Branch Strategy**
- **Main Branch**: Production-ready code
- **Develop Branch**: Staging and testing
- **Feature Branches**: Individual feature development
- **Pull Requests**: Code review and approval process

## 📊 **Performance & Optimization**

### **Next.js 15 Features**
- **App Router**: Modern routing system
- **Turbopack**: Fast bundling and development
- **Server Components**: Optimized rendering
- **Image Optimization**: Automatic image handling

### **Build Optimization**
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: Production code optimization
- **Caching**: Efficient resource caching

## 🛡️ **Security & Quality**

### **Code Quality**
- **TypeScript**: Type safety and error prevention
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent code formatting
- **Pre-commit Hooks**: Quality gate enforcement

### **Security Features**
- **Environment Variables**: Secure configuration
- **Input Validation**: Schema-based validation
- **HTTPS Only**: Secure communication
- **Security Headers**: HTTP security headers

## 🔮 **Roadmap & Future Features**

### **Phase 1 (Current)**
- ✅ **Basic Website**: Homepage and navigation
- ✅ **Internationalization**: English and Arabic support
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Basic Styling**: Tailwind CSS implementation

### **Phase 2 (Planned)**
- 🚧 **Content Pages**: About, Services, Contact
- 🚧 **Admin Panel**: Content management system
- 🚧 **News & Events**: Dynamic content updates
- 🚧 **Student Portal**: User authentication system

### **Phase 3 (Future)**
- 📋 **E-learning Integration**: Online course platform
- 📋 **Student Services**: Registration and enrollment
- 📋 **Faculty Portal**: Staff management system
- 📋 **Analytics Dashboard**: Performance monitoring

## 🤝 **Contributing**

We welcome contributions! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

### **Development Workflow**
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** and test locally
4. **Commit changes**: Use conventional commit messages
5. **Push branch**: `git push origin feature/new-feature`
6. **Create Pull Request**: Wait for review and approval

### **Code Standards**
- **TypeScript**: Full type coverage required
- **Prettier**: Automatic code formatting
- **ESLint**: Code quality enforcement
- **Conventional Commits**: Standard commit message format

## 📚 **Documentation**

- **Project Setup**: [PROJECT_SETUP_DOCUMENTATION.md](PROJECT_SETUP_DOCUMENTATION.md)
- **Quick Reference**: [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- **Contributing**: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- **API Reference**: Check individual component files

## 📞 **Support & Contact**

- **Repository**: https://github.com/mahmoudmatter12/HNU-Official-website
- **Issues**: Create an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Owner**: @mahmoud-zel-din

## 📄 **License**

This project is private and proprietary. All rights reserved by Helwan National University.

## 🏆 **Acknowledgments**

- **Next.js Team**: For the amazing React framework
- **Vercel**: For seamless deployment platform
- **Tailwind CSS**: For the utility-first CSS framework
- **Open Source Community**: For the excellent libraries and tools

---

**Built with ❤️ for Helwan National University**

**Version**: 1.0.0  
**Last Updated**: August 2024  
**Status**: �� Production Ready
