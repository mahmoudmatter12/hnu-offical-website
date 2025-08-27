@echo off
setlocal enabledelayedexpansion

REM HNU Official Website Deployment Script (Windows)
REM Advanced deployment with multiple options and safety checks

REM Configuration
set DEFAULT_BRANCH=main
set STAGING_BRANCH=develop
set REPO_NAME=hnu-offical-website

REM Function to print colored output
:print_status
echo [INFO] %~1
goto :eof

:print_success
echo [SUCCESS] %~1
goto :eof

:print_warning
echo [WARNING] %~1
goto :eof

:print_error
echo [ERROR] %~1
goto :eof

REM Function to check if we're in a git repository
:check_git_repo
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    call :print_error "Not in a git repository!"
    exit /b 1
)
goto :eof

REM Function to check if there are uncommitted changes
:check_uncommitted_changes
git diff-index --quiet HEAD -- >nul 2>&1
if errorlevel 1 (
    call :print_warning "You have uncommitted changes!"
    set /p "stash_choice=Do you want to stash them? (y/n): "
    if /i "!stash_choice!"=="y" (
        git stash push -m "Auto-stashed before deployment"
        call :print_success "Changes stashed successfully"
    ) else (
        call :print_error "Please commit or stash your changes before deploying"
        exit /b 1
    )
)
goto :eof

REM Function to check current branch
:check_branch
set target_branch=%~1
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i

if not "!current_branch!"=="!target_branch!" (
    call :print_warning "You're currently on branch '!current_branch!', but deploying to '!target_branch!'"
    set /p "switch_choice=Do you want to switch to '!target_branch!'? (y/n): "
    if /i "!switch_choice!"=="y" (
        git checkout !target_branch!
        call :print_success "Switched to branch '!target_branch!'"
    ) else (
        call :print_error "Deployment cancelled"
        exit /b 1
    )
)
goto :eof

REM Function to run build process
:run_build
call :print_status "Starting build process..."

REM Clean previous build
call :print_status "Cleaning previous build..."
if exist .next rmdir /s /q .next

REM Install dependencies if needed
if not exist node_modules (
    call :print_status "Installing dependencies..."
    npm install
)

REM Run type checking
call :print_status "Running TypeScript type checking..."
npm run type-check

REM Run linting
call :print_status "Running ESLint..."
npm run lint

REM Run build
call :print_status "Building the application..."
npm run build

call :print_success "Build completed successfully!"
goto :eof

REM Function to run formatting
:run_formatting
call :print_status "Running code formatting..."
npm run format

REM Check if formatting made changes
git diff-index --quiet HEAD -- >nul 2>&1
if errorlevel 1 (
    call :print_warning "Formatting made changes to files"
    git add .
    git commit -m "chore: auto-format code"
)

call :print_success "Code formatting completed!"
goto :eof

REM Function to deploy to GitHub
:deploy_to_github
set branch=%~1
set commit_message=%~2

call :print_status "Deploying to GitHub branch: !branch!"

REM Add all changes
git add .

REM Commit with timestamp
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set date_str=%%a-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set time_str=%%a-%%b
git commit -m "!commit_message! - !date_str! !time_str!"

REM Push to remote
call :print_status "Pushing to origin/!branch!..."
git push origin !branch!

call :print_success "Successfully deployed to GitHub!"
goto :eof

REM Function to show deployment status
:show_status
call :print_status "Current git status:"
git status --short

call :print_status "Recent commits:"
git log --oneline -5

call :print_status "Current branch:"
git branch --show-current
goto :eof

REM Function to show help
:show_help
echo HNU Official Website Deployment Script
echo.
echo Usage: %~nx0 [OPTION]
echo.
echo Options:
echo   deploy              Deploy to current branch
echo   deploy:prod         Deploy to production (main branch)
echo   deploy:staging      Deploy to staging (develop branch)
echo   build               Only build the application
echo   format              Only format the code
echo   status              Show current git status
echo   help                Show this help message
echo.
echo Examples:
echo   %~nx0 deploy           # Deploy to current branch
echo   %~nx0 deploy:prod      # Deploy to production
echo   %~nx0 build            # Only build
echo.
goto :eof

REM Main deployment function
:main_deploy
set branch=%~1
set commit_message=%~2

call :print_status "Starting deployment process..."

REM Safety checks
call :check_git_repo
if errorlevel 1 exit /b 1
call :check_uncommitted_changes
if errorlevel 1 exit /b 1
call :check_branch !branch!
if errorlevel 1 exit /b 1

REM Pull latest changes
call :print_status "Pulling latest changes..."
git pull origin !branch!

REM Run build and formatting
call :run_build
call :run_formatting

REM Deploy to GitHub
call :deploy_to_github "!branch!" "!commit_message!"

call :print_success "Deployment completed successfully! 🚀"
goto :eof

REM Main script logic
if "%~1"=="" (
    call :main_deploy "!current_branch!" "Deploy"
) else if "%~1"=="deploy" (
    for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
    call :main_deploy "!current_branch!" "Deploy"
) else if "%~1"=="deploy:prod" (
    call :main_deploy "!DEFAULT_BRANCH!" "Production Deploy"
) else if "%~1"=="deploy:staging" (
    call :main_deploy "!STAGING_BRANCH!" "Staging Deploy"
) else if "%~1"=="build" (
    call :check_git_repo
    if errorlevel 1 exit /b 1
    call :run_build
) else if "%~1"=="format" (
    call :check_git_repo
    if errorlevel 1 exit /b 1
    call :run_formatting
) else if "%~1"=="status" (
    call :check_git_repo
    if errorlevel 1 exit /b 1
    call :show_status
) else if "%~1"=="help" (
    call :show_help
) else (
    call :print_error "Unknown option: %~1"
    call :show_help
    exit /b 1
)

endlocal
