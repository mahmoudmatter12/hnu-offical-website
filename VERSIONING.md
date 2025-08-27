# 🚀 Versioning System Guide

This document explains the versioning system used in the HNU Official Website project.

## 📋 **Version Format**

We use [Semantic Versioning (SemVer)](https://semver.org/) with the format: `MAJOR.MINOR.PATCH`

- **MAJOR** (1.x.x): Breaking changes, major new features
- **MINOR** (1.1.x): New features, backward compatible
- **PATCH** (1.0.1): Bug fixes, minor improvements

## 🔧 **Versioning Commands**

### **Automatic Versioning**
```bash
# Bump patch version (1.0.0 → 1.0.1)
npm run version:patch

# Bump minor version (1.0.0 → 1.1.0)
npm run version:minor

# Bump major version (1.0.0 → 2.0.0)
npm run version:major
```

### **Makefile Commands**
```bash
# Version management
make version-patch      # Bump patch version
make version-minor      # Bump minor version
make version-major      # Bump major version
make version-status     # Show current version info
```

## 📝 **Commit Message Convention**

We follow [Conventional Commits](https://www.conventionalcommits.org/) for consistent commit messages:

### **Commit Types**
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### **Examples**
```bash
# New feature
git commit -m "feat: add student portal authentication"

# Bug fix
git commit -m "fix: resolve navigation menu mobile issue"

# Documentation
git commit -m "docs: update API documentation"

# Style changes
git commit -m "style: format code with Prettier"

# Refactoring
git commit -m "refactor: simplify navigation component"

# Testing
git commit -m "test: add unit tests for utility functions"

# Maintenance
git commit -m "chore: update dependencies"
```

## 🏷️ **Git Tags**

Each version is automatically tagged in Git:

```bash
# View all tags
git tag -l

# View tag details
git show v1.0.0

# Checkout specific version
git checkout v1.0.0
```

## 📊 **Version History**

### **Current Version: 1.0.0**
- **Status**: Production Ready
- **Release Date**: August 2024
- **Features**: Basic website, i18n, responsive design

### **Previous Versions**
- **0.1.0**: Initial development setup
- **0.2.0**: Basic Next.js app structure
- **0.3.0**: Internationalization added
- **0.4.0**: Navigation and styling
- **0.5.0**: Deployment and CI/CD setup

## 🚀 **Release Process**

### **1. Development Phase**
- Work on features in feature branches
- Use conventional commit messages
- Test thoroughly before merging

### **2. Pre-release Testing**
- Merge to develop branch
- Run automated tests
- Manual testing and validation

### **3. Release Preparation**
- Merge develop to main
- Run final tests
- Update documentation

### **4. Version Bump**
```bash
# For patch release (bug fixes)
npm run version:patch

# For minor release (new features)
npm run version:minor

# For major release (breaking changes)
npm run version:major
```

### **5. Release Notes**
- Update CHANGELOG.md
- Tag the release in GitHub
- Deploy to production

## 📋 **Version Checklist**

### **Before Version Bump**
- [ ] All tests passing
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Dependencies reviewed
- [ ] Security audit completed

### **After Version Bump**
- [ ] Git tag created
- [ ] Release notes published
- [ ] Production deployment
- [ ] Team notification
- [ ] Version tracking updated

## 🔄 **Automated Versioning**

### **GitHub Actions Integration**
- Automatic version bump on main branch
- Git tag creation
- Release notes generation
- Production deployment

### **Version Scripts**
```json
{
  "scripts": {
    "version:patch": "npm version patch && git push && git push --tags",
    "version:minor": "npm version minor && git push && git push --tags",
    "version:major": "npm version major && git push && git push --tags"
  }
}
```

## 📚 **Version Documentation**

### **Files to Update**
- `package.json` - Version number
- `README.md` - Version references
- `CHANGELOG.md` - Release notes
- `VERSIONING.md` - This file

### **Version References**
- API endpoints
- Documentation links
- Deployment configurations
- Environment variables

## 🎯 **Best Practices**

### **When to Bump Versions**
- **PATCH**: Bug fixes, minor improvements
- **MINOR**: New features, enhancements
- **MAJOR**: Breaking changes, major rewrites

### **Version Naming**
- Use semantic versioning
- Include release notes
- Tag releases in Git
- Update all references

### **Release Communication**
- Notify team members
- Update stakeholders
- Publish release notes
- Monitor deployment

## 🆘 **Troubleshooting**

### **Common Issues**
- **Version conflict**: Check package.json and git tags
- **Tag push failed**: Ensure proper permissions
- **Version mismatch**: Sync package.json with git tags

### **Recovery Steps**
```bash
# Reset to previous version
git reset --hard HEAD~1
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0

# Recreate version
npm version 1.0.0
git push && git push --tags
```

## 📞 **Support**

For versioning questions or issues:
- Check this documentation
- Review commit history
- Contact project maintainer
- Create GitHub issue

---

**Last Updated**: August 2024  
**Current Version**: 1.0.0  
**Maintainer**: @mahmoud-zel-din
