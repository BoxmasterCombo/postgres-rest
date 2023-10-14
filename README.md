# Postgres REST

## Description

Welcome to the README for PG_REST project! This document provides an overview of the project's structure, guidelines for setting up and running the application, and key information for development.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Configuration](#configuration)
4. [Database Setup](#database-setup)
   - [Migrations](#migrations)
   - [Seeds](#seeds)
5. [Running the app](#running-the-app)
6. [Testing](#testing)
7. [Deployment](#deployment)

## Project Structure

Our project is structured as follows:

- `dist/`: Compiled JavaScript files.
- `node_modules/`: Node.js modules installed via npm.
- `src/`: This directory contains the main source code for application, including the entry point (`main.ts`) and various modules.
- `.env`: Environment variables and configuration settings.
- `.env.example`: Example environment variables and configuration settings.
- `.eslintrc.js`: ESLint configuration file.
- `.gitignore`: List of files and directories to be ignored by Git.
- `.prettierrc`: Prettier configuration file.
- `.sequelizerc`: Sequelize configuration file.
- `nest-cli.json`: Nest configuration file.
- `package.json`: Project metadata and dependencies.
- `README.md`: This document.
- `tsconfig.build.json`: TypeScript configuration file for building the project.
- `tsconfig.json`: TypeScript configuration file.
- `yarn.lock`: Lock file for Yarn.

## Getting Started

### Prerequisites

Before you start, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) 20.x
- [Yarn](https://yarnpkg.com/) 1.22.x
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   $ git clone git@github.com:BoxmasterCombo/postgres-rest.git
    ```

2. Navigate to the project directory:

   ```bash
   $ cd postgres-rest
   ```

3. Install the project dependencies:

   ```bash
   $ yarn install
   ```

## Configuration

Modify environment variables in the `.env` file. You can use the `.env.example` file as a template.

```bash
$ cp .env.example .env
```

## Database Setup

### Migrations

```bash
# To create a new migration, use the following command:
$ yarn run migration:add <migration-name>

# To run migrations, use the following command:
$ yarn run migration:run
   
# To undo migrations, use the following command:
$ yarn run migration:undo
```

### Seeds

```bash
# To run seeds, use the following command:
$ yarn run seed:run

# To undo seeds, use the following command:
$ yarn run seed:undo
```
   
## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

Your application will be available at http://localhost:5001.  
Your swagger documentation will be available at http://localhost:5001/docs.

## Testing

```bash
# To run unit tests, use the following command:
$ yarn run test

# To run e2e tests, use the following command:
$ yarn run test:e2e

# To run test coverage, use the following command:
$ yarn run test:cov
```

## Deployment

1. To build the application, use the following command:

    ```bash
    yarn run build
    ```

