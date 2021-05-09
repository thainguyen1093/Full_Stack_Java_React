# Full-Stack Docker

# Description 
Using docker to run the all the project of Full_Stack in containers

# Document

## Architecture

- Micro Services

## Technologies
- Docker

## Set up project
 - Check out project from [Github - Full Stack Java React](https://github.com/thainguyen1093/Full_Stack_Java_React)
 
## Run the project
- Open terminal at "docker" folder
- Remove the other image(Optional) of Full Stack if want to rebuild these image
  - Remove frontend Container: "**docker rm frontend_container**"
  - Remove frontend Image: "**docker rmi frontend_image**"
  - Remove backend Container: "**docker rm backend_container**"
  - Remove backend Image: "**docker rmi backend_image**"
  - Remove sql Container: "**docker rm mysql_container**"
- Run command: "**docker-compose up**" to build all images (if not exist), base on the code in (backend, frontend, database) and run the containers for these images.

# License

thainguyen1093

