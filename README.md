# Playwright TypeScript Framework

# Overview

This is a TypeScript-based testing framework using Playwright for end-to-end testing. The framework is designed to provide a robust structure for writing and managing automated tests for web applications.

# Project Structure
Here’s an overview of the project structure:

## Playwright-typescript-framework


### `/src`

- **`/hooks`**: Contains custom hooks for setting up and tearing down tests. `Hooks.ts` includes functions that can be used to manage test lifecycle events.
- **`/tests`**: Contains the actual test files. Each file should include test cases written using Playwright.
- **`/Pages`**: Includes  Page object models for all reached pages.

### `/tests`

- **`files`**: Contains test file for upload 

### Configuration and Metadata

- **`.gitignore`**: Specifies which files and directories should be ignored by Git.
- **`playwright.config.ts`**: Configuration file for Playwright, where you can define settings for running your tests.
- **`tsconfig.json`**: TypeScript configuration file to manage TypeScript compiler options.
- **`package.json`**: Manages project dependencies, scripts, and metadata.
- **`README.md`**: This file, providing an overview of the project.

# Installation

## Clone the Repository  

git clone project repo

cd folder-path-of-Project

# Install Dependencies

Ensure you have Node.js installed. Then run:

npm install 

# Run Test Cases

npx playwright install

npx playwright run

# Report

Report will auto populate when test complete

you can check on **playwright-report** folder




