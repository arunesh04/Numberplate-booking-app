# Fancy Number Plate App Docker Compose Setup

🚀 This repository contains a Docker Compose configuration for deploying and running the Fancy Number Plate application, which consists of frontend and backend services along with a MongoDB database.

## Prerequisites

Before getting started, ensure that you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

To run the Fancy Number Plate application using Docker Compose, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/arunesh04/Numberplate-booking-app
   ```

2. Navigate to the repository directory:

   ```bash
   cd Numberplate-booking-app
   ```

3. Build and start the containers using Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. Once the containers are up and running, you can access the frontend of the application at `http://localhost:8080` and interact with the backend API at `http://localhost:5000`.

## Services

This Docker Compose setup includes the following services:

- **📦 db (MongoDB)**: A MongoDB database service.
- **🖥️ frontend**: The frontend service of the Fancy Number Plate application, built using the provided Dockerfile in the `FancyNumberPlace_Frontend` directory.
- **🛠️ backend**: The backend service of the Fancy Number Plate application, built using the provided Dockerfile in the `FancyNumberPlate_Backend` directory.

## Configuration

The configuration for the application and its services can be found in the `docker-compose.yml` file. You can customize the ports, volumes, and other settings according to your requirements.

## Management

To manage the Docker Compose setup and its services, you can use the following commands:

- Start containers: `docker-compose up -d`
- Stop containers: `docker-compose down`
- View logs: `docker-compose logs [service_name]`
- List running containers: `docker-compose ps`
- Execute commands inside a container: `docker-compose exec [service_name] [command]`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

--- 
