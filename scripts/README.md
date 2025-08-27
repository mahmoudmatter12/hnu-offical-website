# 🚀 Deployment Scripts

Advanced deployment scripts for the HNU Official Website with comprehensive build, format, and GitHub deployment workflows.

## 📁 Available Scripts

### 1. **Bash Script (Linux/macOS)**

- **File**: `scripts/deploy.sh`
- **Usage**: `./scripts/deploy.sh [OPTION]`

### 2. **Windows Batch Script**

- **File**: `scripts/deploy.bat`
- **Usage**: `scripts\deploy.bat [OPTION]`

### 3. **Node.js Script (Cross-platform)**

- **File**: `scripts/deploy.js`
- **Usage**: `node scripts/deploy.js [OPTION]`

### 4. **NPM Scripts (Package.json)**

- **File**: `package.json`
- **Usage**: `npm run [SCRIPT]`

## 🎯 Script Options

| Option           | Description                 | NPM Equivalent           |
| ---------------- | --------------------------- | ------------------------ |
| `deploy`         | Deploy to current branch    | `npm run deploy`         |
| `deploy:prod`    | Deploy to production (main) | `npm run deploy:prod`    |
| `deploy:staging` | Deploy to staging (develop) | `npm run deploy:staging` |
| `build`          | Only build the application  | `npm run build`          |
| `format`         | Only format the code        | `npm run format`         |
| `status`         | Show git status             | -                        |
| `help`           | Show help message           | -                        |

## 🚀 Quick Start

### Basic Deployment

```bash
# Deploy to current branch
./scripts/deploy.sh deploy

# Or using npm
npm run deploy
```

### Production Deployment

```bash
# Deploy to production (main branch)
./scripts/deploy.sh deploy:prod

# Or using npm
npm run deploy:prod
```

### Staging Deployment

```bash
# Deploy to staging (develop branch)
./scripts/deploy.sh deploy:staging

# Or using npm
npm run deploy:staging
```

## 🔧 Advanced Features

### 1. **Safety Checks**

- ✅ Git repository validation
- ✅ Uncommitted changes detection
- ✅ Branch validation and auto-switching
- ✅ Dependency installation check

### 2. **Build Process**

- 🧹 Clean previous build
- 📦 Auto-install dependencies
- 🔍 TypeScript type checking
- 🧹 ESLint linting
- 🏗️ Next.js build with Turbopack

### 3. **Code Quality**

- ✨ Prettier formatting
- 🔍 Auto-commit formatting changes
- 📝 Timestamped commit messages
- 🚫 Lint error prevention

### 4. **Git Integration**

- 🔄 Auto-pull latest changes
- 📝 Smart commit messages
- 🚀 Push to correct branch
- 📊 Status reporting

## 📋 Workflow Steps

### Full Deployment Process

1. **Safety Checks**
   - Validate git repository
   - Check for uncommitted changes
   - Verify target branch

2. **Code Updates**
   - Pull latest changes
   - Clean build directory
   - Install dependencies if needed

3. **Quality Assurance**
   - Run TypeScript type checking
   - Execute ESLint linting
   - Build application with Next.js

4. **Code Formatting**
   - Run Prettier formatting
   - Auto-commit formatting changes
   - Stage all changes

5. **GitHub Deployment**
   - Commit with timestamp
   - Push to target branch
   - Success confirmation

## 🛠️ Configuration

### Branch Configuration

```bash
# In scripts/deploy.sh or scripts/deploy.js
DEFAULT_BRANCH="main"        # Production branch
STAGING_BRANCH="develop"     # Staging branch
```

### Customization

You can modify the scripts to:

- Change default branches
- Add custom build steps
- Modify commit message format
- Add deployment notifications
- Integrate with CI/CD pipelines

## 🔍 Usage Examples

### Development Workflow

```bash
# 1. Make your changes
git add .
git commit -m "feat: add new feature"

# 2. Deploy to current branch
./scripts/deploy.sh deploy
```

### Production Release

```bash
# 1. Switch to main branch
git checkout main

# 2. Deploy to production
./scripts/deploy.sh deploy:prod
```

### Staging Testing

```bash
# 1. Switch to develop branch
git checkout develop

# 2. Deploy to staging
./scripts/deploy.sh deploy:staging
```

### Build Only

```bash
# Just build without deploying
./scripts/deploy.sh build
```

### Format Only

```bash
# Just format code without building
./scripts/deploy.sh format
```

## 📊 Status Commands

### Check Current Status

```bash
./scripts/deploy.sh status
```

This will show:

- Current git status
- Recent commits
- Current branch
- Uncommitted changes

### NPM Scripts Status

```bash
# Check formatting
npm run format:check

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🚨 Error Handling

### Common Issues & Solutions

#### 1. **Not in Git Repository**

```bash
Error: Not in a git repository!
Solution: Navigate to your project directory
```

#### 2. **Uncommitted Changes**

```bash
Warning: You have uncommitted changes!
Solution: Choose to stash or commit them
```

#### 3. **Wrong Branch**

```bash
Warning: You're on 'feature' branch, deploying to 'main'
Solution: Choose to switch branches or cancel
```

#### 4. **Build Failures**

```bash
Error: Build failed
Solution: Check TypeScript errors and linting issues
```

## 🔧 Troubleshooting

### Script Permissions (Linux/macOS)

```bash
# Make scripts executable
chmod +x scripts/deploy.sh
chmod +x scripts/deploy.js
```

### Windows Execution Policy

```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Node.js Requirements

```bash
# Ensure Node.js is installed
node --version
npm --version
```

## 📈 CI/CD Integration

### GitHub Actions Example

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
      - run: npm run ci
      - run: npm run deploy:prod # or deploy:staging
```

## 🎉 Success Indicators

### Deployment Success

```
[SUCCESS] Deployment completed successfully! 🚀
```

### Build Success

```
[SUCCESS] Build completed successfully!
```

### Formatting Success

```
[SUCCESS] Code formatting completed!
```

## 📚 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Git Workflow](https://git-scm.com/book/en/v2/Git-Branching-Branching-and-Merging)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Happy Deploying! 🚀**
