# HNU Official Website - Complete Project Setup Documentation

## 📋 **Project Overview**

This document provides a comprehensive guide to all the setup, configurations, and infrastructure we've implemented for the HNU Official Website project. It serves as a reference for future development and maintenance.

## 🏗️ **Project Architecture**

### **Technology Stack**
- **Frontend Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: TanStack Query (React Query) 5.85.5
- **Forms**: React Hook Form 7.62.0 + Zod 4.1.3
- **HTTP Client**: Axios 1.11.0
- **Theming**: next-themes 0.4.6
- **Animations**: Framer Motion 12.23.12
- **Internationalization**: next-intl 4.3.5

### **Project Structure**
```
hnu-offical-website/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/             # Reusable components
├── contexts/               # React Context providers
├── lib/                    # Utility libraries
├── messages/               # i18n message files
├── .github/                # GitHub configurations
└── scripts/                # Deployment scripts
```

## 🔧 **Core Setup & Dependencies**

### **1. Package.json Scripts**
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "lint:fix": "eslint --fix",
    "prepare": "npm run build && npm run format && npm run lint:fix",
    "deploy": "npm run build && npm run format && git add . && git commit -m \"Deploy: $(date)\" && git push",
    "deploy:prod": "npm run build && npm run format && npm run lint:fix && git add . && git commit -m \"Production Deploy: $(date)\" && git push origin main",
    "deploy:staging": "npm run build && npm run format && git add . && git commit -m \"Staging Deploy: $(date)\" && git push origin develop",
    "pre-commit": "npm run type-check && npm run lint && npm run format:check",
    "ci": "npm run type-check && npm run lint && npm run build"
  }
}
```

### **2. Key Dependencies**
- **@tanstack/react-query**: Server state management
- **axios**: HTTP client with interceptors
- **react-hook-form**: Form handling with validation
- **zod**: Schema validation
- **next-themes**: Theme management (light/dark)
- **framer-motion**: Animation library
- **next-intl**: Internationalization

## 🎯 **Context Providers & State Management**

### **1. Centralized Providers (`contexts/providers.tsx`)**
```tsx
export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </NextThemeProvider>
    </QueryClientProvider>
  )
}
```

### **2. Custom Theme Context (`contexts/theme-context.tsx`)**
- **Features**: Light/dark mode toggle, system theme detection
- **Hooks**: `useThemeContext()` for theme management
- **Integration**: Works with `next-themes` for seamless theme switching

### **3. Axios Configuration (`lib/axios.ts`)**
- **Base URL**: Configurable via `NEXT_PUBLIC_API_URL`
- **Interceptors**: Request/response handling
- **Error Management**: Centralized error handling for 401, 404, 500

## 🚀 **Deployment & CI/CD Infrastructure**

### **1. GitHub Actions Workflows**

#### **CI/CD Pipeline (`.github/workflows/ci-cd.yml`)**
- **Triggers**: Pull requests and pushes to main/develop
- **Jobs**:
  - **Quality Assurance**: TypeScript, ESLint, formatting
  - **Build and Test**: Next.js build verification
  - **Format and Lint**: Auto-formatting and linting
  - **Full CI Check**: Complete validation pipeline

#### **Format & Build (`.github/workflows/format-build.yml`)**
- **Format Check**: Prettier and ESLint validation
- **Auto Format**: Automatically formats code in PRs
- **Build Verification**: Comprehensive build testing
- **Build Integrity**: Verifies Next.js output structure

#### **Dependency Management (`.github/workflows/dependency-update.yml`)**
- **Schedule**: Weekly checks (Monday 2 AM UTC)
- **Features**: Security audits, license checks, package verification

#### **Security Scanning (`.github/workflows/security.yml`)**
- **Schedule**: Daily scans (6 AM UTC)
- **Features**: Vulnerability detection, package integrity, suspicious dependency detection

### **2. Branch Protection Rules**
```json
{
  "required_status_checks": {
    "strict": true,
    "contexts": [
      "Quality Assurance",
      "Build and Test",
      "Format Check",
      "Build Verification"
    ]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": true
  },
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false
}
```

**Key Features**:
- ✅ **Owner bypass**: You can push directly to main
- ❌ **Others blocked**: Must use Pull Requests
- 🔒 **Quality gates**: All checks must pass
- 👥 **Code ownership**: You must approve all changes

### **3. Repository Protection Files**

#### **CODEOWNERS (`.github/CODEOWNERS`)**
```
# Global ownership
* @mahmoud-zel-din

# Specific file ownership
.github/ @mahmoud-zel-din
workflows/ @mahmoud-zel-din
```

#### **Pull Request Template (`.github/pull_request_template.md`)**
- **Standardized PR descriptions**
- **Checklist for quality assurance**
- **Links to relevant documentation**

#### **Contributing Guidelines (`.github/CONTRIBUTING.md`)**
- **Development workflow**
- **Code standards**
- **PR process**

## 🛠️ **Development Tools & Scripts**

### **1. Deployment Scripts**
- **`scripts/deploy.sh`**: Bash script for Linux/macOS
- **`scripts/deploy.bat`**: Windows Batch script
- **`scripts/deploy.ts`**: TypeScript cross-platform script
- **`scripts/config.json`**: Configuration for deployment scripts

### **2. Makefile**
```makefile
.PHONY: help install dev build format lint type-check clean deploy status

help:          ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / { printf "  %-15s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install:       ## Install dependencies
	npm install

dev:           ## Start development server
	npm run dev

build:         ## Build for production
	npm run build

format:        ## Format code with Prettier
	npm run format

lint:          ## Run ESLint
	npm run lint

type-check:    ## Run TypeScript type checking
	npm run type-check

clean:         ## Clean build artifacts
	rm -rf .next out dist

deploy:        ## Deploy to production
	npm run deploy:prod

status:        ## Show git status
	git status
```

### **3. Vercel Configuration (`vercel.json`)**
```json
{
  "version": 2,
  "name": "hnu-official-website",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {
    "app/**/*.tsx": {
      "runtime": "nodejs18.x"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🔐 **Security & Access Control**

### **1. Authentication**
- **GitHub Personal Access Token**: Used for API access
- **Token Scopes**: `repo`, `workflow`, `admin:org`
- **Repository Access**: Full control for owner, restricted for others

### **2. Branch Protection**
- **Main Branch**: Protected with multiple status checks
- **Owner Access**: Can bypass restrictions
- **Team Access**: Must follow PR workflow
- **Quality Gates**: Build, format, and security checks required

## 📚 **Development Workflow**

### **1. For You (Owner)**
```bash
# Direct push to main (bypasses protection)
git add .
git commit -m "Your changes"
git push origin main
```

### **2. For Contributors**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push origin feature/new-feature

# Create Pull Request on GitHub
# Wait for automated checks to pass
# Get your approval (as code owner)
# Merge after approval
```

### **3. Automated Quality Checks**
1. **TypeScript**: Type checking
2. **ESLint**: Code quality and style
3. **Prettier**: Code formatting
4. **Build**: Next.js compilation
5. **Security**: Dependency vulnerability scanning

## 🚀 **Deployment Process**

### **1. Local Development**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run format       # Format code
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

### **2. Production Deployment**
```bash
# Option 1: Use deployment script
make deploy

# Option 2: Use npm script
npm run deploy:prod

# Option 3: Manual deployment
npm run build
npm run format
git add .
git commit -m "Production deployment"
git push origin main
```

### **3. Vercel Deployment**
- **Automatic**: Deploys on push to main
- **Manual**: Use Vercel CLI (`vercel --prod`)
- **Preview**: Automatic for PRs

## 🔍 **Monitoring & Maintenance**

### **1. GitHub Actions Dashboard**
- **Location**: Actions tab in repository
- **Monitoring**: Check workflow runs, failures, and performance
- **Debugging**: View detailed logs for failed workflows

### **2. Security Monitoring**
- **Daily**: Automated security scans
- **Weekly**: Dependency update checks
- **Real-time**: Security alerts for vulnerabilities

### **3. Performance Monitoring**
- **Build Times**: Track CI/CD pipeline performance
- **Dependency Health**: Monitor package updates and security
- **Code Quality**: Track linting and formatting issues

## 🆘 **Troubleshooting**

### **1. Common Issues**

#### **Branch Protection Errors**
```bash
# Error: "Protected branch update failed"
# Solution: Use Pull Request workflow or check status checks
```

#### **Workflow Failures**
```bash
# Check GitHub Actions tab for detailed error logs
# Verify all required status checks are passing
# Ensure dependencies are up to date
```

#### **Build Failures**
```bash
# Local debugging
npm run type-check
npm run lint
npm run build

# Check for TypeScript errors
# Verify ESLint configuration
# Check Next.js configuration
```

### **2. Emergency Procedures**

#### **Bypass Branch Protection (Owner Only)**
1. Go to GitHub → Settings → Branches
2. Temporarily disable protection rule
3. Make your changes
4. Re-enable protection rule

#### **Rollback Deployment**
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

## 📖 **Additional Resources**

### **1. Documentation Links**
- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### **2. GitHub Resources**
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)

### **3. Project Files Reference**
- **`.github/workflows/`**: All CI/CD workflows
- **`contexts/`**: React context providers
- **`lib/`**: Utility libraries and configurations
- **`scripts/`**: Deployment and automation scripts
- **`Makefile`**: Project management commands

## 🎯 **Summary of Achievements**

### ✅ **What We've Built**
1. **Modern Next.js Application** with TypeScript and Tailwind CSS
2. **Comprehensive State Management** with React Query and Context API
3. **Enterprise-Grade CI/CD** with GitHub Actions
4. **Robust Security** with branch protection and automated scanning
5. **Professional Development Workflow** with quality gates and automation
6. **Cross-Platform Deployment** with multiple script options
7. **Vercel Integration** for seamless hosting
8. **Team Collaboration Tools** with PR templates and guidelines

### 🔒 **Security Features**
- Branch protection rules
- Automated security scanning
- Dependency vulnerability detection
- Code quality enforcement
- Owner-only bypass capabilities

### 🚀 **Automation Features**
- Automated formatting and linting
- Build verification and testing
- Dependency management
- Security monitoring
- Deployment automation

This setup provides a **production-ready, enterprise-grade development environment** that ensures code quality, security, and efficient collaboration while maintaining your full control as the repository owner.

---

**Last Updated**: $(date)
**Setup By**: AI Assistant
**Repository**: https://github.com/mahmoudmatter12/HNU-Official-website
