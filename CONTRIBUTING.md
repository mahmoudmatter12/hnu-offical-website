# Contributing to HNU Official Website

Thank you for your interest in contributing to the HNU Official Website! This document provides guidelines and information for contributors.

## 🚀 Development Workflow

### Branch Strategy
- **`main`** - Production branch (protected, requires PR review)
- **`develop`** - Staging branch (protected, requires PR review)
- **`feature/*`** - Feature branches for new development
- **`hotfix/*`** - Hotfix branches for urgent production fixes

### Development Process
1. **Create a feature branch** from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards

3. **Test locally** before committing
   ```bash
   npm run qa        # Run all quality checks
   npm run build     # Build the application
   npm run dev       # Test locally
   ```

4. **Commit your changes** with conventional commit messages
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Wait for review and approval** from code owners

7. **Merge after approval** (only maintainers can merge)

## 📋 Pull Request Requirements

### Before Submitting a PR
- [ ] All quality checks pass (`npm run qa`)
- [ ] Build succeeds (`npm run build`)
- [ ] Code follows style guidelines
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] Self-review completed

### PR Review Process
1. **Automated Checks** - CI/CD pipeline runs automatically
2. **Code Review** - At least one approval required
3. **Quality Gates** - All checks must pass
4. **Final Approval** - Maintainer approval required

## 🎯 Code Quality Standards

### TypeScript
- Use strict TypeScript configuration
- Provide proper type annotations
- Avoid `any` type when possible
- Use interfaces for object shapes

### React/Next.js
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries
- Follow Next.js 13+ app router patterns

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS variables for theming

### Code Style
- Use Prettier for formatting
- Follow ESLint rules
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

## 🧪 Testing Requirements

### Unit Tests
- Write tests for utility functions
- Test React components with React Testing Library
- Maintain good test coverage

### Integration Tests
- Test API endpoints
- Test user workflows
- Test responsive design

### Manual Testing
- Test on multiple browsers
- Test on mobile devices
- Test accessibility features

## 📚 Documentation

### Code Documentation
- Document complex functions
- Add inline comments for business logic
- Keep README files updated

### API Documentation
- Document API endpoints
- Provide usage examples
- Keep API documentation current

## 🚨 Security Guidelines

### General Security
- Never commit sensitive information
- Use environment variables for secrets
- Validate all user inputs
- Implement proper authentication

### Dependencies
- Keep dependencies updated
- Audit dependencies regularly
- Use only trusted packages
- Monitor for security vulnerabilities

## 🔧 Local Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Steps
```bash
# Clone the repository
git clone <repository-url>
cd hnu-offical-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run qa           # Run all quality checks
npm run format       # Format code
npm run lint         # Run linter
npm run type-check   # TypeScript type checking
```

## 🚀 Deployment

### Staging Deployment
- Automatic deployment on `develop` branch
- Requires all quality checks to pass
- Available at staging URL

### Production Deployment
- Automatic deployment on `main` branch
- Requires PR approval and all checks to pass
- Available at production URL

## 📞 Getting Help

### Questions and Issues
- Create an issue for bugs or feature requests
- Use discussions for questions
- Tag maintainers for urgent issues

### Communication
- Be respectful and professional
- Provide clear and detailed information
- Follow the project's communication guidelines

## 📝 Commit Message Convention

Use conventional commit messages:
```
type(scope): description

feat: add new feature
fix: fix a bug
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add or update tests
chore: maintenance tasks
```

## 🎉 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributor hall of fame

---

**Thank you for contributing to the HNU Official Website! 🚀**
