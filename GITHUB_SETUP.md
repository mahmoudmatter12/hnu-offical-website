# 🚀 GitHub Repository Setup Guide

Complete setup guide for protecting your main branch and implementing CI/CD with GitHub Actions.

## 🛡️ Branch Protection Setup

### 1. **Enable Branch Protection Rules**

Go to your GitHub repository → **Settings** → **Branches** → **Add rule**

#### **Main Branch Protection**
- **Branch name pattern**: `main`
- **Require a pull request before merging**: ✅ **CHECKED**
  - **Require approvals**: 1 (minimum)
  - **Dismiss stale PR approvals when new commits are pushed**: ✅ **CHECKED**
  - **Require review from code owners**: ✅ **CHECKED**
- **Require status checks to pass before merging**: ✅ **CHECKED**
  - **Require branches to be up to date before merging**: ✅ **CHECKED**
  - **Status checks that are required**:
    - `Quality Assurance`
    - `Build and Test`
- **Require conversation resolution before merging**: ✅ **CHECKED**
- **Require signed commits**: ❌ **UNCHECKED** (optional)
- **Require linear history**: ✅ **CHECKED**
- **Require deployments to succeed before merging**: ❌ **UNCHECKED**
- **Restrict pushes that create files that are larger than**: ❌ **UNCHECKED**
- **Restrict pushes that create files with specified names**: ❌ **UNCHECKED**
- **Restrict pushes that create files with specified paths**: ❌ **UNCHECKED**
- **Restrict pushes that create files with specified extensions**: ❌ **UNCHECKED**
- **Require branches to be up to date before merging**: ✅ **CHECKED**
- **Allow force pushes**: ❌ **UNCHECKED**
- **Allow deletions**: ❌ **UNCHECKED**

#### **Develop Branch Protection** (Optional)
- **Branch name pattern**: `develop`
- **Require a pull request before merging**: ✅ **CHECKED**
  - **Require approvals**: 1 (minimum)
- **Require status checks to pass before merging**: ✅ **CHECKED**
- **Require conversation resolution before merging**: ✅ **CHECKED**

### 2. **Code Owners Setup**

The `.github/CODEOWNERS` file is already configured with you as the owner:
```
* @mahmoud-zel-din
```

This means:
- ✅ You must review all pull requests
- ✅ Only you can approve changes
- ✅ You have full control over the codebase

## 🔐 Repository Settings

### 1. **General Settings**
- **Repository name**: `hnu-offical-website`
- **Description**: HNU Official Website - Next.js with TypeScript
- **Visibility**: Choose based on your needs
- **Topics**: `nextjs`, `typescript`, `tailwindcss`, `vercel`

### 2. **Features**
- ✅ **Issues**: Enable
- ✅ **Pull requests**: Enable
- ✅ **Discussions**: Enable (optional)
- ✅ **Actions**: Enable
- ✅ **Projects**: Enable (optional)
- ✅ **Wiki**: Disable (unless needed)
- ✅ **Security**: Enable

### 3. **Security & Analysis**
- ✅ **Dependency graph**: Enable
- ✅ **Dependabot alerts**: Enable
- ✅ **Dependabot security updates**: Enable
- ✅ **Code scanning**: Enable (if using GitHub Advanced Security)

## 🚀 CI/CD Pipeline Setup

### 1. **Required Secrets**

Go to **Settings** → **Secrets and variables** → **Actions**

#### **Vercel Deployment Secrets**
```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

#### **How to Get Vercel Secrets**
```bash
# Get Vercel token
npx vercel login
npx vercel whoami

# Get project info
npx vercel project ls
npx vercel project inspect hnu-official-website
```

### 2. **Environment Protection**

#### **Production Environment**
- **Environment name**: `production`
- **Protection rules**:
  - ✅ **Required reviewers**: Add yourself
  - ✅ **Wait timer**: 0 minutes
  - ✅ **Deployment branches**: `main`

#### **Staging Environment**
- **Environment name**: `staging`
- **Protection rules**:
  - ✅ **Required reviewers**: Add yourself
  - ✅ **Wait timer**: 0 minutes
  - ✅ **Deployment branches**: `develop`

## 📋 Workflow Overview

### **Pull Request Workflow**
1. **Developer creates feature branch**
2. **Makes changes and commits**
3. **Creates Pull Request**
4. **Automated checks run**:
   - Quality Assurance (TypeScript, ESLint, Prettier)
   - Build and Test (Next.js build)
5. **Code review required** (you must approve)
6. **All checks must pass**
7. **Merge allowed only after approval**

### **Deployment Workflow**
1. **Merge to `develop`** → Automatic staging deployment
2. **Merge to `main`** → Automatic production deployment
3. **Both require all checks to pass**

## 🔒 Security Features

### **Branch Protection**
- ✅ No direct pushes to `main`
- ✅ No direct pushes to `develop`
- ✅ All changes must go through PR
- ✅ Code review mandatory
- ✅ Quality checks required

### **Code Quality Gates**
- ✅ TypeScript type checking
- ✅ ESLint linting
- ✅ Prettier formatting
- ✅ Build verification
- ✅ Security audit

### **Access Control**
- ✅ Only you can merge to main
- ✅ Only you can merge to develop
- ✅ Code ownership enforced
- ✅ Review requirements enforced

## 🛠️ Local Development Workflow

### **For Contributors**
```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/your-username/hnu-offical-website.git

# 3. Add upstream remote
git remote add upstream https://github.com/mahmoud-zel-din/hnu-offical-website.git

# 4. Create feature branch
git checkout -b feature/new-feature

# 5. Make changes and test
npm run qa
npm run build

# 6. Commit and push
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# 7. Create Pull Request on GitHub
```

### **For You (Maintainer)**
```bash
# 1. Clone the repository
git clone https://github.com/mahmoud-zel-din/hnu-offical-website.git

# 2. Create feature branch
git checkout -b feature/new-feature

# 3. Make changes and test
npm run qa
npm run build

# 4. Commit and push
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# 5. Create Pull Request and merge after review
```

## 📊 Monitoring and Maintenance

### **Regular Tasks**
- **Weekly**: Review dependency updates
- **Monthly**: Review security alerts
- **Quarterly**: Review and update workflows
- **As needed**: Review and approve PRs

### **Health Checks**
- Monitor GitHub Actions runs
- Review security alerts
- Check dependency vulnerabilities
- Monitor deployment status

## 🚨 Troubleshooting

### **Common Issues**

#### **PR Checks Failing**
1. Check the GitHub Actions logs
2. Run checks locally: `npm run qa`
3. Fix issues and push updates
4. Checks will re-run automatically

#### **Deployment Failures**
1. Check Vercel deployment logs
2. Verify secrets are correct
3. Check build output locally
4. Review environment settings

#### **Branch Protection Issues**
1. Verify protection rules are enabled
2. Check required status checks
3. Ensure code owner approval
4. Verify branch is up to date

## 🎯 Best Practices

### **For Contributors**
- Always create feature branches
- Test locally before pushing
- Use conventional commit messages
- Keep PRs focused and small
- Respond to review feedback

### **For You (Maintainer)**
- Review PRs promptly
- Maintain code quality standards
- Keep dependencies updated
- Monitor security alerts
- Document important changes

---

## 🚀 Quick Start Checklist

- [ ] Enable branch protection rules
- [ ] Set up required secrets
- [ ] Configure environments
- [ ] Test the workflow with a PR
- [ ] Verify deployment pipeline
- [ ] Share contributing guidelines with team

**Your repository is now fully protected and automated! 🎉**

