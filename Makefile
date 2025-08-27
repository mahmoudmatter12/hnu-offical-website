# HNU Official Website Makefile
# Advanced deployment and development management

.PHONY: help install dev build format type-check clean deploy status test ci pre-commit prepare version-patch version-minor version-major version-status

# Configuration
PROJECT_NAME := hnu-offical-website
NODE_VERSION := 18
DEFAULT_BRANCH := main
STAGING_BRANCH := develop

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
BLUE := \033[0;34m
CYAN := \033[0;36m
RESET := \033[0m
BOLD := \033[1m

help:          ## 🚀 Show this help message with all available commands
	@echo '🎯 HNU Official Website - Project Management Commands'
	@echo ''
	@echo '📋 Usage: make [target]'
	@echo ''
	@echo '🎨 Development Commands:'
	@echo '  dev             Start development server with hot reload'
	@echo '  build           Build project for production'
	@echo '  start           Start production server locally'
	@echo ''
	@echo '🔧 Setup & Maintenance:'
	@echo '  install         Install all dependencies'
	@echo '  clean           Remove build artifacts and node_modules'
	@echo '  status          Show current git status'
	@echo ''
	@echo '✨ Code Quality Commands:'
	@echo '  format          Format code with Prettier (targeted files only)'
	@echo '  format:check    Check if code is formatted correctly'
	@echo '  type-check      Run TypeScript type checking'
	@echo '  test            Run all tests (if configured)'
	@echo ''
	@echo '🚀 Deployment Commands:'
	@echo '  deploy          Deploy to production (build + format + push)'
	@echo '  ci              Run complete CI pipeline locally'
	@echo '  pre-commit      Run pre-commit checks (type-check + format-check)'
	@echo '  prepare         Run prepare script (build + format)'
	@echo ''
	@echo '🏷️ Version Management:'
	@echo '  version-patch   Bump patch version (1.0.0 → 1.0.1)'
	@echo '  version-minor   Bump minor version (1.0.0 → 1.1.0)'
	@echo '  version-major   Bump major version (1.0.0 → 2.0.0)'
	@echo '  version-status  Show current version information'
	@echo ''
	@echo '📚 Documentation:'
	@echo '  help            Show this help message'
	@echo ''
	@echo '💡 Pro Tips:'
	@echo '  • Use "make dev" to start development'
	@echo '  • Use "make format" before committing code'
	@echo '  • Use "make ci" to test your changes locally'
	@echo '  • Use "make deploy" for quick production deployment'
	@echo '  • Use "make version-patch" for bug fixes'
	@echo '  • Use "make version-minor" for new features'

install:       ## 📦 Install all project dependencies
	@echo '📦 Installing dependencies...'
	npm install
	@echo '✅ Dependencies installed successfully!'

dev:           ## 🚀 Start development server with hot reload and Turbopack
	@echo '🚀 Starting development server...'
	@echo '🌐 Open http://localhost:3000 in your browser'
	@echo '🔄 Hot reload enabled with Turbopack'
	npm run dev

build:         ## 🏗️ Build project for production (creates .next folder)
	@echo '🏗️ Building project for production...'
	npm run build
	@echo '✅ Build completed! Check .next folder for output'

start:         ## 🚀 Start production server locally (requires build first)
	@echo '🚀 Starting production server...'
	@echo '🌐 Open http://localhost:3000 in your browser'
	npm run start

format:        ## ✨ Format code with Prettier (only targeted file types)
	@echo '✨ Formatting code with Prettier...'
	@echo '📁 Formatting: JS, TS, JSX, TSX, JSON, CSS, SCSS, MD files'
	npm run format
	@echo '✅ Code formatting completed!'

format-check:  ## 🔍 Check if code is formatted correctly
	@echo '🔍 Checking code formatting...'
	npm run format:check
	@echo '✅ Format checking completed!'

type-check:    ## 🔒 Run TypeScript type checking (ensures type safety)
	@echo '🔒 Running TypeScript type checking...'
	npm run type-check
	@echo '✅ Type checking completed!'

clean:         ## 🧹 Clean build artifacts and dependencies (frees disk space)
	@echo '🧹 Cleaning build artifacts...'
	rm -rf .next out dist node_modules
	@echo '✅ Cleanup completed!'

deploy:        ## 🚀 Deploy to production (build + format + git push)
	@echo '🚀 Starting production deployment...'
	@echo '📦 Building project...'
	npm run build
	@echo '✨ Formatting code...'
	npm run format
	@echo '📝 Committing changes...'
	git add .
	git commit -m "🚀 Production Deploy: $(date)" || true
	@echo '🚀 Pushing to production...'
	git push origin main
	@echo '✅ Deployment completed successfully!'

status:        ## 📊 Show current git status and branch information
	@echo '📊 Git Repository Status:'
	@echo '===================='
	git status
	@echo ''
	@echo '🌿 Current Branch:'
	git branch --show-current
	@echo ''
	@echo '📈 Recent Commits:'
	git log --oneline -5

test:          ## 🧪 Run all tests (if testing framework is configured)
	@echo '🧪 Running tests...'
	@if [ -f "package.json" ] && grep -q '"test"' package.json; then \
		npm test; \
	else \
		echo '⚠️  No test script found in package.json'; \
		echo '💡 Consider adding tests to your project'; \
	fi

ci:            ## 🔄 Run complete CI pipeline locally (type-check + build)
	@echo '🔄 Running complete CI pipeline locally...'
	@echo '🔒 Type checking...'
	npm run type-check
	@echo '🏗️ Building...'
	npm run build
	@echo '✅ CI pipeline completed successfully!'

pre-commit:    ## ✅ Run pre-commit checks (type-check + format-check)
	@echo '✅ Running pre-commit checks...'
	@echo '🔒 Type checking...'
	npm run type-check
	@echo '✨ Format checking...'
	npm run format:check
	@echo '✅ Pre-commit checks passed!'

prepare:       ## 🎯 Run prepare script (build + format)
	@echo '🎯 Running prepare script...'
	npm run prepare
	@echo '✅ Prepare script completed!'

# Version management commands
version-patch: ## 🏷️ Bump patch version (1.0.0 → 1.0.1) for bug fixes
	@echo '🏷️ Bumping patch version...'
	@echo '📝 This is for: Bug fixes, minor improvements'
	npm run version:patch
	@echo '✅ Patch version bumped successfully!'

version-minor: ## 🏷️ Bump minor version (1.0.0 → 1.1.0) for new features
	@echo '🏷️ Bumping minor version...'
	@echo '📝 This is for: New features, enhancements'
	npm run version:minor
	@echo '✅ Minor version bumped successfully!'

version-major: ## 🏷️ Bump major version (1.0.0 → 2.0.0) for breaking changes
	@echo '🏷️ Bumping major version...'
	@echo '⚠️  WARNING: This is for breaking changes!'
	@echo '📝 This is for: Breaking changes, major rewrites'
	@read -p "Are you sure you want to bump the major version? (y/N): " confirm && [ "$$confirm" = "y" ] || exit 1
	npm run version:major
	@echo '✅ Major version bumped successfully!'

version-status: ## 📊 Show current version information
	@echo '📊 Version Information:'
	@echo '===================='
	@echo '📦 Package Version:'
	@node -p "require('./package.json').version"
	@echo ''
	@echo '🏷️ Git Tags:'
	@git tag -l --sort=-version:refname | head -5
	@echo ''
	@echo '📈 Recent Version Commits:'
	@git log --oneline --grep="^chore(release)" -5
	@echo ''
	@echo '📋 Version Files:'
	@echo '  • package.json - Current version'
	@echo '  • CHANGELOG.md - Release notes'
	@echo '  • VERSIONING.md - Versioning guide'

# Additional utility commands
setup: install ## 🚀 Quick setup: install dependencies
	@echo '🚀 Project setup completed!'
	@echo '💡 Run "make dev" to start development'

quality: format type-check ## ✨ Run all quality checks (format + type-check)
	@echo '✨ All quality checks completed!'

quick-deploy: build format ## 🚀 Quick deploy: build and format only
	@echo '🚀 Quick deploy completed!'
	@echo '💡 Run "git add . && git commit && git push" to deploy'

# Help for specific command categories
dev-help:      ## 📚 Show development-specific help
	@echo '🚀 Development Commands Help:'
	@echo '  make dev       - Start development server'
	@echo '  make build     - Build for production'
	@echo '  make start     - Start production server'
	@echo '  make clean     - Clean build files'

quality-help:  ## 📚 Show quality-related help
	@echo '✨ Quality Commands Help:'
	@echo '  make format    - Format code with Prettier'
	@echo '  make format-check - Check if code is formatted'
	@echo '  make type-check - Run TypeScript checks'
	@echo '  make quality   - Run all quality checks'

deploy-help:   ## 📚 Show deployment-related help
	@echo '🚀 Deployment Commands Help:'
	@echo '  make deploy    - Full production deployment'
	@echo '  make quick-deploy - Build and format only'
	@echo '  make ci        - Run CI pipeline locally'
	@echo '  make prepare   - Run prepare script'

version-help:  ## 📚 Show versioning-related help
	@echo '🏷️ Version Management Help:'
	@echo '  make version-patch   - Bump patch version (bug fixes)'
	@echo '  make version-minor   - Bump minor version (new features)'
	@echo '  make version-major   - Bump major version (breaking changes)'
	@echo '  make version-status  - Show version information'
	@echo ''
	@echo '📝 Version Guidelines:'
	@echo '  • PATCH: Bug fixes, minor improvements'
	@echo '  • MINOR: New features, enhancements'
	@echo '  • MAJOR: Breaking changes, major rewrites'
