# Nawy Real Estate Full-Stack Project

## Overview
Nawy is a full-stack real estate project designed for listing, creating, and viewing apartments.

## Installation
To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Build the project using Docker:
   ```sh
   docker compose build
   ```
3. create .env inside backend folder, you can find .env.example
4. create .env inside frontend folder, you can find .env.example

## Starting the Project
Once the build process is complete, start the project with:
   ```sh
   docker compose up -d
   ```

## Usage
- Access the frontend UI at: [http://localhost:3000](http://localhost:3000)
- Access the API documentation (Swagger) at: [http://localhost:5000/api/docs](http://localhost:5000/api/docs)

## Technologies Used
- **Frontend**: Next.js
- **Backend**: NestJs with MYSQL
- **Containerization**: Docker, Docker Compose

## Contributing
Feel free to fork this repository and submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.

