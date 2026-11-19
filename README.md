# Node.js Package Management and Application Packaging Project

## Project Overview

This project demonstrates the process of managing dependencies, configuring application metadata, implementing semantic versioning, separating environment\-specific configurations, packaging a Node.js application, testing the application across multiple environments, and performing dependency security audits.

The project uses **Node.js**, **npm**, and **Express.js** to demonstrate a complete application packaging and dependency management workflow.

---

## Project Objectives

The objectives of this project are to demonstrate the ability to:

- Create and configure a Node.js project using package.json.
- Install and manage project dependencies using npm.
- Maintain consistent dependency versions using package\-lock.json.
- Apply semantic versioning using the MAJOR.MINOR.PATCH format.
- Separate development and staging configuration from the application source code.
- Build and package the application into a distributable artifact.
- Verify the application in development and staging environments.
- Perform security audits on project dependencies.
- Maintain appropriate repository hygiene using .gitignore.
- Use Git and GitHub for version control and project management.

---

## Technologies Used

The project uses the following technologies:

- **Node.js** \- JavaScript runtime used to execute the application.
- **npm** \- Package manager used to install, update, audit, and package dependencies.
- **Express.js** \- Web application framework used to create the sample application.
- **Git** \- Version control system used to track project changes.
- **GitHub** \- Remote repository used to store and manage the project.
- **Linux/Bash** \- Command\-line environment used for development and testing.

---

## Project Structure

The repository is organized as follows:

package\-management\-project/

- src/
    - app.js \- Main Node.js application.
- config/
    - development.env \- Development environment configuration.
    - staging.env \- Staging environment configuration.
- dist/
    - Contains the generated distributable .tgz package.
- screenshots/
    - Contains evidence of application execution and security audit results.
- .gitignore
    - Defines files and directories that should not be committed to Git.
- package.json
    - Defines project metadata, npm scripts, version information, and dependencies.
- package\-lock.json
    - Records the exact versions of installed dependencies.
- README.md
    - Contains project documentation.

---

# Application Configuration

The project uses package.json as its primary Node.js configuration and dependency manifest.

Important application metadata includes:

- **Project name:** package\-management\-project
- **Initial version:** 1.0.0
- **Application entry point:** src/app.js
- **Module type:** commonjs
- **License:** MIT
- **Primary dependency:** Express.js

The application can be started using npm scripts configured inside package.json.

---

# Dependency Management

npm is used to manage application dependencies.

## Installing Dependencies

The project dependencies can be installed using:

npm install

Express.js was installed using:

npm install express

Installing Express automatically adds it to the dependencies section of package.json.

The installed dependencies can be checked using:

npm list \-\-depth=0

The project also contains package\-lock.json, which records the exact resolved dependency versions used during installation.

This helps maintain consistent dependency installations across different systems and environments.

## Checking for Dependency Updates

Available dependency updates can be checked using:

npm outdated

Dependencies can be updated within the version ranges allowed by package.json using:

npm update

After updating dependencies, the application should be tested again to confirm that the updates have not introduced unexpected behaviour.

---

# Semantic Versioning

The project follows the **Semantic Versioning** format:

MAJOR.MINOR.PATCH

The initial release of the application is:

1.0.0

The version numbers are interpreted as follows:

### MAJOR

The MAJOR version changes when an update introduces incompatible or breaking changes.

Example:

1.0.0 → 2.0.0

### MINOR

The MINOR version changes when new functionality is introduced while maintaining backward compatibility.

Example:

1.0.0 → 1.1.0

### PATCH

The PATCH version changes when backward\-compatible bug fixes or small corrections are made.

Example:

1.0.0 → 1.0.1

npm can be used to update these versions.

Patch update:

npm version patch

Minor update:

npm version minor

Major update:

npm version major

Using semantic versioning provides a consistent method for identifying the type and impact of changes between releases.

---

# Environment Configuration

Environment\-specific configuration is separated from the core application.

The project includes development and staging configurations.

## Development Environment

The development configuration uses:

APP\_ENV=development

PORT=3000

The application can be started in development mode using:

npm run start:dev

The application will run on:

[http://localhost:3000](http://localhost:3000)

The main application endpoint can be tested using:

curl [http://localhost:3000](http://localhost:3000)

The health endpoint can be tested using:

curl [http://localhost:3000/health](http://localhost:3000/health)

---

## Staging Environment

The staging environment uses:

APP\_ENV=staging

PORT=4000

The application can be started in staging mode using:

npm run start:staging

The staging application will run on:

[http://localhost:4000](http://localhost:4000)

It can be tested using:

curl [http://localhost:4000](http://localhost:4000)

The health endpoint can also be tested using:

curl [http://localhost:4000/health](http://localhost:4000/health)

Using different configuration values allows the same application code to run in multiple deployment environments without changing the main application source code.

---

# Application Packaging

The Node.js application is packaged into a distributable npm archive.

The packaging command configured for this project is:

npm run build

The build script executes:

npm pack \-\-pack\-destination dist

This generates a compressed .tgz package inside the dist directory.

For version 1.0.0, the generated artifact is expected to have a name similar to:

package\-management\-project\-1.0.0.tgz

The contents that will be included in the package can be inspected before packaging using:

npm pack \-\-dry\-run

The generated .tgz file represents the distributable application artifact.

---

# Testing the Packaged Application

The application is verified in multiple simulated environments to ensure that the application operates correctly with different environment configurations.

## Development Verification

The development environment is started using:

npm run start:dev

The expected application port is:

3000

The application response is verified using:

curl [http://localhost:3000](http://localhost:3000)

and:

curl [http://localhost:3000/health](http://localhost:3000/health)

A successful response confirms that the application operates correctly in the development environment.

Evidence of the development test is stored in the screenshots directory.

---

## Staging Verification

The staging environment is started using:

npm run start:staging

The staging environment uses port:

4000

The application is verified using:

curl [http://localhost:4000](http://localhost:4000)

and:

curl [http://localhost:4000/health](http://localhost:4000/health)

A successful response confirms that the application can run using the staging configuration without modifying the application source code.

Evidence of the staging test is also stored in the screenshots directory.

---

# Dependency Security Audit

npm provides a security auditing mechanism for identifying known vulnerabilities in project dependencies.

The project dependencies are audited using:

npm audit

The audit examines the dependency tree and reports identified security vulnerabilities.

Where appropriate, automatically resolvable vulnerabilities can be addressed using:

npm audit fix

After applying appropriate fixes, the security audit should be run again:

npm audit

This ensures that the final dependency security status is recorded after remediation.

## Audit Result

The final npm audit result should be recorded here after running the audit.

For example, if the command reports no known vulnerabilities, the result can be recorded as:

**Dependency Audit Result:** 0 vulnerabilities found

If vulnerabilities are identified, this section should instead document the actual number and severity of the findings and the remediation performed.

A screenshot or log of the final audit result is included in the screenshots directory as evidence.

---

# Repository Hygiene

The project uses .gitignore to prevent unnecessary, generated, environment\-specific, or sensitive files from being committed.

Examples include:

- node\_modules/
- .env
- .env.local
- Log files
- npm debug logs
- Editor configuration directories
- Operating\-system\-specific temporary files

The node\_modules directory is intentionally excluded because dependencies can be restored using:

npm install

The package.json and package\-lock.json files are committed to the repository because they provide the information necessary to recreate the project's dependencies.

Sensitive values such as passwords, API keys, access tokens, and production credentials should never be committed to GitHub.

---

# Git and GitHub Workflow

Git is used to maintain the history of the project.

The general workflow used is:

1. Create or modify project files.
2. Review changes using git status.
3. Stage the required files using git add.
4. Create descriptive commits using git commit.
5. Push commits to the remote GitHub repository.
6. Use feature branches for isolated development where appropriate.
7. Merge completed changes into the main branch.

Example:

git status

git add package.json package\-lock.json

git commit \-m "Configure Node.js package and dependencies"

git push origin main

Feature work can be performed using a dedicated branch such as:

feature/package\-management

This helps keep ongoing development work separate from the stable main branch.

---

# Restoring the Project

A new user can clone the repository using Git and restore the dependencies without downloading the original node\_modules directory.

After cloning the project, enter the project directory and run:

npm install

The application can then be started in development mode:

npm run start:dev

or staging mode:

npm run start:staging

This demonstrates that the application's required dependencies and configuration are reproducible from the repository.

---

# Build and Verification Commands

The main commands used during the project are:

### Install dependencies

npm install

### Check installed dependencies

npm list \-\-depth=0

### Check available updates

npm outdated

### Update dependencies

npm update

### Start development environment

npm run start:dev

### Start staging environment

npm run start:staging

### Run security audit

npm audit

### Build distributable package

npm run build

### Preview package contents

npm pack \-\-dry\-run

---

# Evidence and Screenshots

The screenshots directory contains evidence demonstrating successful completion of the practical tasks.

Recommended evidence includes:

1. Successful dependency installation.
2. Output of npm list \-\-depth=0.
3. Application running in the development environment.
4. Successful development HTTP response.
5. Application running in the staging environment.
6. Successful staging HTTP response.
7. Final npm audit result.
8. Successful npm run build.
9. Generated .tgz artifact inside the dist directory.
10. GitHub commit history where required.

---

# Distributable Artifact

The packaged application is stored in the:

dist/

directory.

For the initial 1.0.0 release, the artifact is:

package\-management\-project\-1.0.0.tgz

The artifact was generated using npm packaging rather than manually compressing the source files.

---

# Conclusion

This project demonstrates a complete Node.js dependency management and packaging workflow.

It covers project metadata configuration, npm dependency installation, exact dependency locking, semantic versioning, development and staging configuration, application testing, security auditing, application packaging, and Git\-based source control.

The resulting project contains the necessary configuration files, documentation, testing evidence, and distributable artifact required to reproduce, verify, and distribute the Node.js application.


