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
We use [NestJS](https://nestjs.com/) as our framework.

```bash
postgres-rest/
├── dist/
├── node_modules/  
├── src/  
│ ├── config/
│       ├── config.module.ts
│       ├── config.variables.ts
│ ├── database/
│       ├── migrations/
│       ├── seeders/
│       ├── database.config.ts
│       ├── database.module.ts
│ ├── emitter/
│       ├── emitter.module.ts
│ ├── filters/
│       ├── http-exception.filter.ts
│ ├── middlewares/
│       ├── <middleware-name>.middleware.ts
│ ├── modules/
│       ├── _shared/
│             ├── dto/
│                   ├── <dto-name>.dto.ts
│             ├── base.interface.ts
│             ├── base.model.ts
│             ├── base.repository.ts
│       ├── _tests/
│             ├── test.module.ts
│       ├── <module-name>/
│             ├── dto/
│                   ├── <dto-name>.dto.ts
│             ├── interfaces/
│                   ├── <interface-name>.interface.ts
│             ├── <module-name>.controller.ts
│             ├── <module-name>.module.ts
│             ├── <module-name>.service.ts
│       ├── index.ts
│ ├── swagger/
│       ├── swagger.ts
│ ├── app.module.ts  
│ ├── main.ts  
├── .dockerignore
├── .env 
├── .env.example
├── .eslintrc.js 
├── .gitignore  
├── .prettierrc  
├── .sequelizerc  
├── compose.yaml  
├── Dockerfile  
├── .nest-cli.json  
├── .package.json  
├── README.md
├── tsconfig.build.json  
├── tsconfig.json  
├── yarn.lock  
```

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

We use PostgreSQL as our database. You can set up the database using the following commands.

- ***You don't need to set `NODE_ENV` variable if you are running migrations or seeds in development mode.***

### Migrations

If you need to make changes to the database schema, you can use migrations. Migrations are located in the `src/migrations` directory.
You can set up the database and run migrations using the following commands:

```bash
# To create a new migration, use the following command:
$ yarn migration:add <migration-name>

# To run migrations in production environment, use the following command:
$ NODE_ENV=production yarn migration:run
$ yarn migration:run #development mode
   
# To undo last migration in production environment, use the following command:
$ NODE_ENV=production yarn migration:undo
$ yarn migration:undo #development mode

# To run single migration in production environment, use the following command:
$ NODE_ENV=production yarn migration:undo:name <migration-name>
$ yarn migration:undo:name <migration-name> #development mode
```

### Seeds

If you need to populate the database with data, you can use seeds. Seeds are located in the `src/seeds` directory.
You can set up the database and run seeds using the following commands:

```bash
# To run seeds in production environment, use the following command:
$ NODE_ENV=production yarn seed:run
$ yarn seed:run #development mode

# To undo last seed in production environment, use the following command:
$ NODE_ENV=production yarn seed:undo
$ yarn seed:undo #development mode

# To undo all seeds in production environment, use the following command:
$ NODE_ENV=production yarn seed:undo:all
$ yarn seed:undo:all #development mode
```
   
## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Your application will be available at http://localhost:5001.  
Your swagger documentation will be available at http://localhost:5001/docs.

## Testing

```bash
# To run unit tests, use the following command:
$ yarn test

# To run e2e tests, use the following command:
$ yarn test:e2e

# To run test coverage, use the following command:
$ yarn test:cov
```

## Deployment

1. To build the application, use the following command:

```bash
$ yarn build
```

