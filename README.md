![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000) ![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)
# A Public API to Retrieve Basic Information
![HNG Logo](/assets/images/hng.jpg)

## Table of Contents
- [Introduction](#introduction)
  - [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [API Documentation](#api-documentation)
- [Usage](#usage)
  - [Local Version Usage](#local-version-usage)
  - [Deployed Version Usage](#deployed-version-usage)
  - [Browser Version Usage](#browser-version-usage)

## Introduction
This project is a part of HNG12 Internship, and it's intended to meet the
requirements of stage 0 task for the **Backend Track**.

### Project Description
A public API is required to be developed and have the ability to let users
retrieve basic information.

The basic information to be retrieved includes the following:
  1. **The developer's registered email address** in the HNG12 Slack workspace.
  2. **The current datetime** as an ISO 8601 formatted timestamp.
  3. **The GitHub URL** of the project's codebase.

## Technologies Used
- **Runtime Environment**: [Node.js](https://hng.tech/hire/nodejs-developers)
- **Server**: Express.js
- **Containerization**: Docker, Docker-compose
- **Deployment**: Vercel

## Installation Instructions
To get started with the API locally, follow these steps:

1. **Clone your repository**:
  ```bash
  git clone https://github.com/AAEmara/HNG_Public_API.git
  cd HNG_Public_API
  ```
2. **Install dependencies**
  ```bash
  cd server
  npm i
  ```
3. **Run the docker container**:
  ```bash
  cd ..
  ./scripts/docker-compose/dev/build
  ```
4. **Now, the server service is running using Docker Compose.**

## API Documentation
**API Endpoint**: `GET /api/information`
**Request Format using Bash CLI**:
  ```bash
  curl <the-host-url>/api/information # Uses GET method by default.
  ```
**Response Format using Bash CLI**:
  ```bash
   {
    "email": "<developer's-email>",
    "current_datetime": "<current-datetime-in-ISO-8601>",
    "github_url": "<the-project's-github-repository-url>"
  }
  ```

## Usage
### Local Version Usage
1. **Local Version Request Format using Bash CLI**:
  ```bash
  curl localhost:5000/api/information # or curl GET localhost:5000/api/information
  ```
2. **Local Version Response Format using Bash CLI**:
  ```bash 
  {
    "email": "abdelrahmanemara18@gmail.com",
    "current_datetime": "2025-01-31T00:56:52.040Z",
    "github_url": "https://github.com/AAEmara/HNG_Public_API.git"
  }
  ```

### Deployed Version Usage
1. **Deployed Version Request Format using Bash CLI**:
  ```bash
  curl https://hng-public-api-1.vercel.app/api/information
  ```
2. **Deployed Version Response Format using Bash CLI**:
  ```bash 
  {
    "email": "abdelrahmanemara18@gmail.com",
    "current_datetime": "2025-01-31T00:56:52.040Z",
    "github_url": "https://github.com/AAEmara/HNG_Public_API.git"
  }
  ```

### Browser Version Usage
**Browser Version Request Format**:
1. Copy the following url: `https://hng-public-api-1.vercel.app/api/information`
2. Paste the url in the browser.
3. The browser will automatically trigger the `GET` method with the `api/information` endpoint.
4. The Response will be presented on the browser as following:
![JSON response representation on the browser](/assets/images/json-response-browser.png)
