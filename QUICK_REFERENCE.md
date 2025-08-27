# 🚀 Quick Reference Guide - HNU Official Website

## 📋 **Daily Development Commands**

### **Start Development**
```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
```

### **Code Quality**
```bash
npm run format       # Format code with Prettier
npm run format:check # Check if code is formatted
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # TypeScript type checking
```

### **Deployment**
```bash
# Quick deployment
make deploy          # Deploy to production
npm run deploy:prod  # Alternative deployment command

# Manual deployment
npm run build
npm run format
git add .
git commit -m "Deploy: $(date)"
git push origin main
```

## 🔧 **Makefile Commands**

```bash
make help            # Show all available commands
make install         # Install dependencies
make dev             # Start development
make build           # Build project
make format          # Format code
make lint            # Run linting
make type-check      # TypeScript check
make clean           # Clean build files
make status          # Git status
```

## 🛠️ **Git Workflow**

### **For You (Owner)**
```bash
# Direct push to main (bypasses protection)
git add .
git commit -m "Your changes"
git push origin main
```

### **For Contributors**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/new-feature
# Then create Pull Request on GitHub
```

## 📁 **Key Files & Directories**

```
📁 app/              # Next.js pages and layouts
📁 components/       # Reusable components
📁 contexts/         # React context providers
📁 lib/              # Utility libraries
📁 .github/          # GitHub workflows and configs
📁 scripts/          # Deployment scripts
📄 Makefile          # Project management commands
📄 vercel.json       # Vercel deployment config
```

## 🔒 **Branch Protection Status**

**Main Branch**: 🔒 **PROTECTED**
- ✅ **You can push directly** (owner bypass)
- ❌ **Others must use PRs**
- 🔍 **Required checks**: 4 status checks must pass

**Required Status Checks**:
1. ✅ Quality Assurance
2. ✅ Build and Test
3. ✅ Format Check
4. ✅ Build Verification

## 🚨 **Troubleshooting Quick Fixes**

### **Build Fails**
```bash
npm run type-check   # Check TypeScript errors
npm run lint         # Check ESLint errors
npm run format:check # Check formatting
```

### **Workflow Fails**
1. Check GitHub Actions tab
2. Verify all status checks are passing
3. Check for dependency issues: `npm audit`

### **Can't Push to Main**
- **You**: Check if branch protection is working
- **Others**: Must create Pull Request

## 📊 **GitHub Actions Status**

**Workflows**:
- 🔄 **CI/CD Pipeline**: Runs on PRs and pushes
- 🔄 **Format & Build**: Auto-formatting and build verification
- 🔄 **Dependency Update**: Weekly security checks
- 🔄 **Security Scan**: Daily vulnerability scanning

**Monitor**: Go to Actions tab in repository

## 🌐 **Deployment URLs**

- **Repository**: https://github.com/mahmoudmatter12/HNU-Official-website
- **Vercel**: Check your Vercel dashboard
- **Actions**: https://github.com/mahmoudmatter12/HNU-Official-website/actions

## 📞 **Emergency Contacts**

- **Repository Owner**: @mahmoud-zel-din
- **Documentation**: See `PROJECT_SETUP_DOCUMENTATION.md`
- **GitHub Issues**: Create issue in repository

---

**💡 Tip**: Use `make help` to see all available commands!
**📚 Full Docs**: See `PROJECT_SETUP_DOCUMENTATION.md` for complete details
