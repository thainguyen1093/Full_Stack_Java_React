# Full-Stack Backend

# Project description

The Backend of Full_Stack

# Start Date

Apr 6, 2021

# Document

## Architecture

- Restful: this project work as a service so that the client application can call to this project to get the data

## Technologies

- Java 11
- Spring:
  - Boot
  - Security (JWT)
  - Data JPA(Hibernate)

# Build Tools
- Gradle

## Database

- MySQL

# Version control
- [Github](https://github.com/thainguyen1093/Full_Stack_Java_React)

## Project structure

- core: contain core controller and core service with default implementation for the project
- src: main source code

## Project Information

- We had using the jwt to implement the security for our project
  - The endpoint "/api/login" using to login and get the jwt token
  - we can use jwt token to go to the other page without login again
  - the "private key"(project.app.jwtSecretKey) and "time out"(project.app.jwtExpirationMs) for jwt token is located in
    application.yml

## Convention

- Set up IDE
  - indent space instead tab
  - indent 2 space instead 4 space

## Set up project for development

- Check out project from [Github - Full Stack Java React](https://github.com/thainguyen1093/Full_Stack_Java_React)
- In "application.yml" update the connection to db:
  - Change the url "mysql_container" to "localhost"
  - Update user and password

## Run project

### Normal run

- Check out project from [Github - Full Stack Java React](https://github.com/thainguyen1093/Full_Stack_Java_React)
- In "application.yml" update the connection to db:
  - Change the url "mysql_container" to "localhost"
  - Update user and password
- Open terminal
- Go to the project
- Run the command: "*./gradlew build*"
- Run command "java -jar */build/libs/backend-1.0.jar*"

### Docker run

- Install docker via this [link](https://docs.docker.com/get-docker/)
- In "application.yml" update the connection to db:
  - Change the url "localhost" to "mysql_container"
  - Update user and password
- Open Terminal and move to the location of this project in your machine
- Run command "**docker build -t thainguyen1093/backend_image .**" to build the image
- Run command "**docker run -dp 8080:8080 --network backend-mysql --name backend_container
  thainguyen1093/backend_image**" to run the image

_Note:_

- thainguyen1093: is your docker id(you have to register for the docker id in [Docker hub](https://hub.docker.com/))
- backend_image: name of the image

# License

thainguyen1093
