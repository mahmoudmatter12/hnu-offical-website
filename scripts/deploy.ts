#!/usr/bin/env ts-node

/**
 * HNU Official Website Deployment Script (TypeScript)
 * Advanced deployment with multiple options and safety checks
 * Cross-platform compatibility
 */

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { createInterface } from 'readline';

// Types and Interfaces
interface CommandResult {
  success: boolean;
  output?: string;
  error?: string;
}

interface DeployConfig {
  DEFAULT_BRANCH: string;
  STAGING_BRANCH: string;
  REPO_NAME: string;
  BUILD_DIR: string;
  NODE_MODULES: string;
}

type DeployCommand =
  | 'deploy'
  | 'deploy:prod'
  | 'deploy:staging'
  | 'build'
  | 'format'
  | 'status'
  | 'help';

// Configuration
const CONFIG: DeployConfig = {
  DEFAULT_BRANCH: 'main',
  STAGING_BRANCH: 'develop',
  REPO_NAME: 'hnu-offical-website',
  BUILD_DIR: '.next',
  NODE_MODULES: 'node_modules',
};

// Colors for output
const COLORS = {
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
  MAGENTA: '\x1b[35m',
  CYAN: '\x1b[36m',
  WHITE: '\x1b[37m',
  RESET: '\x1b[0m',
  BOLD: '\x1b[1m',
};

// Utility functions
const log = {
  info: (msg: string): void =>
    console.log(`${COLORS.BLUE}[INFO]${COLORS.RESET} ${msg}`),
  success: (msg: string): void =>
    console.log(`${COLORS.GREEN}[SUCCESS]${COLORS.RESET} ${msg}`),
  warning: (msg: string): void =>
    console.log(`${COLORS.YELLOW}[WARNING]${COLORS.RESET} ${msg}`),
  error: (msg: string): void =>
    console.log(`${COLORS.RED}[ERROR]${COLORS.RESET} ${msg}`),
  header: (msg: string): void =>
    console.log(`\n${COLORS.CYAN}${COLORS.BOLD}${msg}${COLORS.RESET}`),
};

// Create readline interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Promise wrapper for readline
const question = (query: string): Promise<string> =>
  new Promise(resolve => rl.question(query, resolve));

// Execute command and return result
function execCommand(
  command: string,
  options: { silent?: boolean } = {}
): CommandResult {
  try {
    const result = execSync(command, {
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

// Check if we're in a git repository
function checkGitRepo(): void {
  const result = execCommand('git rev-parse --git-dir', { silent: true });
  if (!result.success) {
    log.error('Not in a git repository!');
    process.exit(1);
  }
  log.info('Git repository detected');
}

// Get current git branch
function getCurrentBranch(): string {
  const result = execCommand('git branch --show-current', { silent: true });
  if (!result.success) {
    log.error('Could not determine current branch');
    process.exit(1);
  }
  return result.output!.trim();
}

// Check for uncommitted changes
async function checkUncommittedChanges(): Promise<void> {
  const result = execCommand('git diff-index --quiet HEAD --', {
    silent: true,
  });
  if (!result.success) {
    log.warning('You have uncommitted changes!');
    const answer = await question('Do you want to stash them? (y/n): ');

    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      log.info('Stashing changes...');
      const stashResult = execCommand(
        'git stash push -m "Auto-stashed before deployment"'
      );
      if (stashResult.success) {
        log.success('Changes stashed successfully');
      } else {
        log.error('Failed to stash changes');
        process.exit(1);
      }
    } else {
      log.error('Please commit or stash your changes before deploying');
      process.exit(1);
    }
  }
}

// Check and switch branch if needed
async function checkBranch(targetBranch: string): Promise<void> {
  const currentBranch = getCurrentBranch();

  if (currentBranch !== targetBranch) {
    log.warning(
      `You're currently on branch '${currentBranch}', but deploying to '${targetBranch}'`
    );
    const answer = await question(
      `Do you want to switch to '${targetBranch}'? (y/n): `
    );

    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      log.info(`Switching to branch '${targetBranch}'...`);
      const result = execCommand(`git checkout ${targetBranch}`);
      if (result.success) {
        log.success(`Switched to branch '${targetBranch}'`);
      } else {
        log.error(`Failed to switch to branch '${targetBranch}'`);
        process.exit(1);
      }
    } else {
      log.error('Deployment cancelled');
      process.exit(1);
    }
  }
}

// Pull latest changes
function pullLatestChanges(branch: string): void {
  log.info('Pulling latest changes...');
  const result = execCommand(`git pull origin ${branch}`);
  if (!result.success) {
    log.error('Failed to pull latest changes');
    process.exit(1);
  }
  log.success('Latest changes pulled successfully');
}

// Clean build directory
function cleanBuild(): void {
  log.info('Cleaning previous build...');
  if (existsSync(CONFIG.BUILD_DIR)) {
    rmSync(CONFIG.BUILD_DIR, { recursive: true, force: true });
    log.success('Build directory cleaned');
  }
}

// Install dependencies if needed
function installDependencies(): void {
  if (!existsSync(CONFIG.NODE_MODULES)) {
    log.info('Installing dependencies...');
    const result = execCommand('npm install');
    if (!result.success) {
      log.error('Failed to install dependencies');
      process.exit(1);
    }
    log.success('Dependencies installed successfully');
  } else {
    log.info('Dependencies already installed');
  }
}

// Run type checking
function runTypeCheck(): void {
  log.info('Running TypeScript type checking...');
  const result = execCommand('npm run type-check');
  if (!result.success) {
    log.error('Type checking failed');
    process.exit(1);
  }
  log.success('Type checking passed');
}

// Run linting
function runLinting(): void {
  log.info('Running ESLint...');
  const result = execCommand('npm run lint');
  if (!result.success) {
    log.error('Linting failed');
    process.exit(1);
  }
  log.success('Linting passed');
}

// Run build
function runBuild(): void {
  log.info('Building the application...');
  const result = execCommand('npm run build');
  if (!result.success) {
    log.error('Build failed');
    process.exit(1);
  }
  log.success('Build completed successfully');
}

// Run formatting
function runFormatting(): void {
  log.info('Running code formatting...');
  const result = execCommand('npm run format');
  if (!result.success) {
    log.error('Formatting failed');
    process.exit(1);
  }

  // Check if formatting made changes
  const gitResult = execCommand('git diff-index --quiet HEAD --', {
    silent: true,
  });
  if (!gitResult.success) {
    log.warning('Formatting made changes to files');
    const addResult = execCommand('git add .');
    if (addResult.success) {
      const commitResult = execCommand(
        'git commit -m "chore: auto-format code"'
      );
      if (commitResult.success) {
        log.success('Formatting changes committed');
      }
    }
  }

  log.success('Code formatting completed');
}

// Deploy to GitHub
function deployToGitHub(branch: string, commitMessage: string): void {
  log.info(`Deploying to GitHub branch: ${branch}`);

  // Add all changes
  const addResult = execCommand('git add .');
  if (!addResult.success) {
    log.error('Failed to add changes');
    process.exit(1);
  }

  // Commit with timestamp
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const commitResult = execCommand(
    `git commit -m "${commitMessage} - ${timestamp}"`
  );
  if (!commitResult.success) {
    log.error('Failed to commit changes');
    process.exit(1);
  }

  // Push to remote
  log.info(`Pushing to origin/${branch}...`);
  const pushResult = execCommand(`git push origin ${branch}`);
  if (!pushResult.success) {
    log.error('Failed to push to GitHub');
    process.exit(1);
  }

  log.success('Successfully deployed to GitHub');
}

// Show deployment status
function showStatus(): void {
  log.header('Git Status');
  execCommand('git status --short');

  log.header('Recent Commits');
  execCommand('git log --oneline -5');

  log.header('Current Branch');
  const currentBranch = getCurrentBranch();
  console.log(currentBranch);
}

// Show help
function showHelp(): void {
  log.header('HNU Official Website Deployment Script');
  console.log(`
Usage: npx ts-node scripts/deploy.ts [OPTION]

Options:
  deploy              Deploy to current branch
  deploy:prod         Deploy to production (main branch)
  deploy:staging      Deploy to staging (develop branch)
  build               Only build the application
  format              Only format the code
  status              Show current git status
  help                Show this help message

Examples:
  npx ts-node scripts/deploy.ts deploy           # Deploy to current branch
  npx ts-node scripts/deploy.ts deploy:prod      # Deploy to production
  npx ts-node scripts/deploy.ts build            # Only build
  `);
}

// Main deployment function
async function mainDeploy(
  branch: string,
  commitMessage: string
): Promise<void> {
  log.header('Starting Deployment Process');

  // Safety checks
  checkGitRepo();
  await checkUncommittedChanges();
  await checkBranch(branch);

  // Pull latest changes
  pullLatestChanges(branch);

  // Run build and formatting
  cleanBuild();
  installDependencies();
  runTypeCheck();
  runLinting();
  runBuild();
  runFormatting();

  // Deploy to GitHub
  deployToGitHub(branch, commitMessage);

  log.success('Deployment completed successfully! 🚀');
}

// Main script logic
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = (args[0] || 'deploy') as DeployCommand;

  try {
    switch (command) {
      case 'deploy':
        const currentBranch = getCurrentBranch();
        await mainDeploy(currentBranch, 'Deploy');
        break;

      case 'deploy:prod':
        await mainDeploy(CONFIG.DEFAULT_BRANCH, 'Production Deploy');
        break;

      case 'deploy:staging':
        await mainDeploy(CONFIG.STAGING_BRANCH, 'Staging Deploy');
        break;

      case 'build':
        checkGitRepo();
        cleanBuild();
        installDependencies();
        runTypeCheck();
        runLinting();
        runBuild();
        break;

      case 'format':
        checkGitRepo();
        runFormatting();
        break;

      case 'status':
        checkGitRepo();
        showStatus();
        break;

      case 'help':
        showHelp();
        break;

      default:
        log.error(`Unknown option: ${command}`);
        showHelp();
        process.exit(1);
    }
  } catch (error) {
    log.error(`Deployment failed: ${(error as Error).message}`);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
if (require.main === module) {
  main();
}

export { mainDeploy, runBuild, runFormatting, showStatus, CONFIG };
