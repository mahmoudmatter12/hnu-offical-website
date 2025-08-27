# 🚀 HNU Official Website - Deployment Guide

Complete deployment system with multiple options for building, formatting, and pushing to GitHub.

## 📁 Available Deployment Methods

### 1. **Makefile (Recommended)**

The easiest way to deploy with comprehensive targets and colored output.

```bash
# Quick deployment
make deploy              # Deploy to current branch
make deploy-prod         # Deploy to production (main)
make deploy-staging      # Deploy to staging (develop)

# Full deployment pipeline
make deploy-full         # QA + Build + Deploy
make deploy-prod-full    # Full production deployment
make deploy-staging-full # Full staging deployment

# Show help
make help                # Comprehensive help
```

### 2. **TypeScript Script (Advanced)**

Cross-platform TypeScript deployment script with type safety.

```bash
# Using ts-node
npx ts-node scripts/deploy.ts deploy
npx ts-node scripts/deploy.ts deploy:prod
npx ts-node scripts/deploy.ts deploy:staging

# Or make targets
make deploy-ts           # Deploy with TypeScript script
make deploy-prod-ts      # Production with TypeScript
make deploy-staging-ts   # Staging with TypeScript
```

### 3. **Bash Script (Linux/macOS)**

Traditional bash script for Unix-like systems.

```bash
./scripts/deploy.sh deploy
./scripts/deploy.sh deploy:prod
./scripts/deploy.sh deploy:staging
```

### 4. **Windows Batch Script**

Windows-compatible deployment script.

```cmd
scripts\deploy.bat deploy
scripts\deploy.bat deploy:prod
scripts\deploy.bat deploy:staging
```

### 5. **NPM Scripts**

Direct npm commands for quick operations.

```bash
npm run deploy           # Deploy to current branch
npm run deploy:prod      # Deploy to production
npm run deploy:staging   # Deploy to staging
```

## 🔧 What Each Deployment Does

### **Complete Deployment Pipeline**

1. **Safety Checks**
   - ✅ Git repository validation
   - ✅ Uncommitted changes detection
   - ✅ Branch validation and auto-switching

2. **Code Updates**
   - 🔄 Pull latest changes from remote
   - 🧹 Clean previous build artifacts
   - 📦 Install dependencies if needed

3. **Quality Assurance**
   - 🔍 TypeScript type checking
   - 🧹 ESLint linting
   - 🏗️ Next.js build with Turbopack

4. **Code Formatting**
   - ✨ Prettier formatting
   - 📝 Auto-commit formatting changes
   - 🎨 Consistent code style

5. **GitHub Deployment**
   - 📝 Timestamped commit messages
   - 🚀 Push to correct branch
   - ✅ Success confirmation

## 🎯 Deployment Scenarios

### **Development Workflow**

```bash
# Daily development
make pull              # Get latest changes
make install           # Install new dependencies
make dev               # Start development server
make format            # Format code before commit
make deploy            # Deploy to current branch
```

### **Production Release**

```bash
# Production deployment
make deploy-prod-full  # Full production pipeline
# OR step by step:
make qa                # Quality checks
make build             # Build application
make deploy-prod       # Deploy to production
```

### **Staging Testing**

```bash
# Staging deployment
make deploy-staging-full  # Full staging pipeline
# OR step by step:
make qa                   # Quality checks
make build                # Build application
make deploy-staging       # Deploy to staging
```

### **Quick Build Only**

```bash
# Just build without deploying
make build              # Build only
make build-clean        # Clean build and rebuild
```

### **Code Quality Only**

```bash
# Quality checks without deployment
make qa                 # All quality checks
make format             # Format code only
make lint               # Lint only
make type-check         # Type check only
```

## 🛠️ Configuration

### **Branch Configuration**

```bash
# In scripts/deploy.ts or scripts/deploy.sh
DEFAULT_BRANCH="main"        # Production branch
STAGING_BRANCH="develop"     # Staging branch
```

### **Customization Options**

- Change default branches
- Modify commit message format
- Add custom build steps
- Integrate with CI/CD pipelines
- Add deployment notifications

## 📊 Status and Monitoring

### **Check Current Status**

```bash
make status              # Git status, commits, branch
make scripts-help        # Available npm scripts
make check-node          # Node.js version check
make check-deps          # Dependency status
```

### **Monitor Application**

```bash
make monitor             # Application process status
make logs                # Application logs (if available)
```

## 🚨 Error Handling

### **Common Issues & Solutions**

#### **Git Repository Issues**

```bash
Error: Not in a git repository!
Solution: Navigate to project directory
```

#### **Uncommitted Changes**

```bash
Warning: You have uncommitted changes!
Solution: Choose to stash or commit them
```

#### **Branch Mismatch**

```bash
Warning: You're on 'feature' branch, deploying to 'main'
Solution: Choose to switch branches or cancel
```

#### **Build Failures**

```bash
Error: Build failed
Solution: Check TypeScript errors and linting issues
```

## 🔧 Troubleshooting

### **Script Permissions (Linux/macOS)**

```bash
chmod +x scripts/deploy.sh
chmod +x scripts/deploy.js
```

### **Windows Execution Policy**

```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### **TypeScript Requirements**

```bash
# Ensure ts-node is installed
npm install --save-dev ts-node
```

## 📈 CI/CD Integration

### **GitHub Actions Example**

```yaml
name: Deploy
on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: make ci
      - run: make deploy-prod # or deploy-staging
```

## 🎉 Success Indicators

### **Deployment Success**

```
[SUCCESS] Deployment completed successfully! 🚀
```

### **Build Success**

```
[SUCCESS] Build completed successfully!
```

### **Quality Checks Success**

```
[SUCCESS] All quality checks passed
```

## 📚 Additional Resources

- [Makefile Help](Makefile.help) - Quick reference guide
- [Scripts README](scripts/README.md) - Detailed script documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Git Workflow](https://git-scm.com/book/en/v2/Git-Branching-Branching-and-Merging)

---

## 🚀 Quick Start Commands

```bash
# Show all available options
make help

# Install and start development
make install
make dev

# Deploy to current branch
make deploy

# Full production deployment
make deploy-prod-full
```

**Happy Deploying! 🎉**
