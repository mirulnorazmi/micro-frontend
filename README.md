


# Micro Frontend Project ![creator](https://img.shields.io/badge/creator-mirulnorazmi-white?labelColor=blue&style=flat)

![Node.js](https://img.shields.io/badge/Node.js-20.12.2-green) ![NPM](https://img.shields.io/badge/NPM-10.8.2-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

This project follows a micro frontend architecture, consisting of three separate applications:
- **root-app** (Port: 5001)
- **todo-app** (Port: 5002)
- **employee-app** (Port: 5003)

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

## Getting Started

### 1. Clone the Repository
```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Run the following command in the root directory of the project:
```sh
npm install
```

Alternatively, you can use:
```sh
npm i
```

### 3. Start the Applications
This project uses `npm-run-all` to run multiple applications simultaneously. Start all micro frontends by running:
```sh
npm run start
```

This will launch:
- `root-app` on **http://localhost:5001**
- `todo-app` on **http://localhost:5002**
- `employee-app` on **http://localhost:5003**

### 4. Running Individual Applications
If you want to run a specific application, navigate to its directory and run:
```sh
cd root-app  # or todo-app, employee-app
npm start
```

## Notes
- Ensure that ports **5001, 5002, and 5003** are available before running the project.
- The `npm-run-all` package is used to manage multiple applications concurrently.

![9l7dex](https://github.com/user-attachments/assets/b5a9690a-ebae-43b5-86de-ab32f6ba800c)


