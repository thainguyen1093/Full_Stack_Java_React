# Full-Stack Frontend

# Project description

The Frontend of Full_Stack

# Start Date

Apr 6, 2021

# Document

## Architecture

- SPA(Single Page Application)

## Technologies

- ES6+
- React
- Redux
- Redux-thunk
- AJAX

# Build Tools
- Nodejs

# Version control
- [Github](https://github.com/thainguyen1093/Full_Stack_Java_React)

## Library

## Project structure

- src: this folder contains all the project file

## Convention

- Set up IDE
  - indent space instead tab
  - indent 2 space instead 4 space

## Set up project for development

- Check out project from [Github - Full Stack Java React](https://github.com/thainguyen1093/Full_Stack_Java_React)
- In "config.json" change "frontend_container" to "localhost"

## Run project

### Normal run

- Check out project from [Github - Full Stack Java React](https://github.com/thainguyen1093/Full_Stack_Java_React)
- In "config.json" change "frontend_container" to "localhost"
- Open terminal
- Go to the project
- run command: "yarn" to install the dependencies
- run command: "yarn start" to run the project

### Docker run

- Install docker via this [link](https://docs.docker.com/get-docker/)
- In "config.json" change "localhost" to "frontend_container"
- Open Terminal and move to the location of this project in your machine
- Run command "**docker build -t thainguyen1093/frontend_image .**" to build the image
- Run command "**docker run -dp 80:80 --name frontend_container
  thainguyen1093/frontend_image**" to run the image

_Note:_

- thainguyen1093: is your docker id(you have to register for the docker id in [Docker hub](https://hub.docker.com/))
- backend_image: name of the image

## Reference:

- https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658
- https://www.freecodecamp.org/news/how-to-set-up-deploy-your-react-app-from-scratch-using-webpack-and-babel-a669891033d4/
- https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa

# License

thainguyen1093