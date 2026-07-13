# Environment Setup

## Objective
Set up the React development environment using VS Code, Git, Node.js, and Vite.

## Software Installed

- Operating System: Windows 11 (64-bit)
- Visual Studio Code (Stable)
- Git 2.53.0.windows.1
- Node.js v22.21.0 (LTS)
- npm 10.9.4

## Verify Installation

Commands:

git --version

node -v

npm -v

Output:

Git version: 2.53.0.windows.1
Node.js version: v22.21.0
npm version: 10.9.4

## Created Project

Project Folder:
D:\DevOps_Port

Command:

npm create vite@latest .

## Vite Setup Questions

1. Framework?
Answer: React

Reason:
React is a component-based JavaScript library used to build modern user interfaces.

2. Variant?
Answer: JavaScript

Reason:
JavaScript is easier to learn and suitable for beginners.

3. Linter?
Answer: ESLint

Reason:
ESLint helps identify coding mistakes and improves code quality.

4. Install dependencies and start now?
Answer: Yes

Reason:
Automatically runs npm install and npm run dev.

## Commands Used

npm install

npm run dev

## Output

VITE v8.1.4

Local:
http://localhost:5173/

Result:
The default React + Vite page opened successfully.

## Problems Faced

PowerShell Error:

npm.ps1 cannot be loaded because running scripts is disabled.

Solution:

Used Command Prompt (cmd) instead of PowerShell.