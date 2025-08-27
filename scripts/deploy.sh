#!/bin/bash

# HNU Official Website Deployment Script
# Advanced deployment with multiple options and safety checks

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DEFAULT_BRANCH="main"
STAGING_BRANCH="develop"
REPO_NAME="hnu-offical-website"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not in a git repository!"
        exit 1
    fi
}

# Function to check if there are uncommitted changes
check_uncommitted_changes() {
    if ! git diff-index --quiet HEAD --; then
        print_warning "You have uncommitted changes!"
        read -p "Do you want to stash them? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git stash push -m "Auto-stashed before deployment"
            print_success "Changes stashed successfully"
        else
            print_error "Please commit or stash your changes before deploying"
            exit 1
        fi
    fi
}

# Function to check current branch
check_branch() {
    local current_branch=$(git branch --show-current)
    local target_branch=$1
    
    if [ "$current_branch" != "$target_branch" ]; then
        print_warning "You're currently on branch '$current_branch', but deploying to '$target_branch'"
        read -p "Do you want to switch to '$target_branch'? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then ]]; then
            git checkout $target_branch
            print_success "Switched to branch '$target_branch'"
        else
            print_error "Deployment cancelled"
            exit 1
        fi
    fi
}

# Function to run build process
run_build() {
    print_status "Starting build process..."
    
    # Clean previous build
    print_status "Cleaning previous build..."
    rm -rf .next
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm install
    fi
    
    # Run type checking
    print_status "Running TypeScript type checking..."
    npm run type-check
    
    # Run linting
    print_status "Running ESLint..."
    npm run lint
    
    # Run build
    print_status "Building the application..."
    npm run build
    
    print_success "Build completed successfully!"
}

# Function to run formatting
run_formatting() {
    print_status "Running code formatting..."
    npm run format
    
    # Check if formatting made changes
    if ! git diff-index --quiet HEAD --; then
        print_warning "Formatting made changes to files"
        git add .
        git commit -m "chore: auto-format code"
    fi
    
    print_success "Code formatting completed!"
}

# Function to deploy to GitHub
deploy_to_github() {
    local branch=$1
    local commit_message=$2
    
    print_status "Deploying to GitHub branch: $branch"
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "$commit_message - $timestamp"
    
    # Push to remote
    print_status "Pushing to origin/$branch..."
    git push origin $branch
    
    print_success "Successfully deployed to GitHub!"
}

# Function to show deployment status
show_status() {
    print_status "Current git status:"
    git status --short
    
    print_status "Recent commits:"
    git log --oneline -5
    
    print_status "Current branch:"
    git branch --show-current
}

# Function to show help
show_help() {
    echo "HNU Official Website Deployment Script"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  deploy              Deploy to current branch"
    echo "  deploy:prod         Deploy to production (main branch)"
    echo "  deploy:staging      Deploy to staging (develop branch)"
    echo "  build               Only build the application"
    echo "  format              Only format the code"
    echo "  status              Show current git status"
    echo "  help                Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 deploy           # Deploy to current branch"
    echo "  $0 deploy:prod      # Deploy to production"
    echo "  $0 build            # Only build"
    echo ""
}

# Main deployment function
main_deploy() {
    local branch=$1
    local commit_message=$2
    
    print_status "Starting deployment process..."
    
    # Safety checks
    check_git_repo
    check_uncommitted_changes
    check_branch $branch
    
    # Pull latest changes
    print_status "Pulling latest changes..."
    git pull origin $branch
    
    # Run build and formatting
    run_build
    run_formatting
    
    # Deploy to GitHub
    deploy_to_github "$branch" "$commit_message"
    
    print_success "Deployment completed successfully! 🚀"
}

# Main script logic
case "${1:-deploy}" in
    "deploy")
        current_branch=$(git branch --show-current)
        main_deploy "$current_branch" "Deploy"
        ;;
    "deploy:prod")
        main_deploy "$DEFAULT_BRANCH" "Production Deploy"
        ;;
    "deploy:staging")
        main_deploy "$STAGING_BRANCH" "Staging Deploy"
        ;;
    "build")
        check_git_repo
        run_build
        ;;
    "format")
        check_git_repo
        run_formatting
        ;;
    "status")
        check_git_repo
        show_status
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        print_error "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
