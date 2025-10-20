Docker Commands:
1. docker pull IMAGE_NAME  //this pull image from our local first if ther is not then it pull from dockerhub
2. docker images  // it show all docker images which is avaliable on local system
3. docker run IMAGE_NAME  // this create a container using specificied image
4. docker run -it IMAGE_NAME  // using this command we are accessing the container terminal.
5. docker stop CONT_NAME // using this we can stop container also we use CONT_ID to stop the container
6. docker start CONT_NAME // using this we can start container also we use CONT_ID to start the container
7. docker ps // using this we can show all containers
8. docker ps -a //using this we are see an active containers.
9. docker rmi IMAGE_NAME  //using this we can remove image.
10. docker rm CONT_NAME  //using this we can remove container.
11. docker pull IMAGE_NAME:version   //using this we can pull a specific version of image
12. docker run -d IMAGE_NAME  // using this we run container in detached mode by defaul it is run in attached mode.
13. docker run --name CONT_NAME -d IMAGE_NAME  // here while creating container we are assign our custom name for the container. 
14. docker run -p LOCAL_MACHINF_PORT:CONTAINER_PORT  // here we bind local machine port to container port same localmachine port can't bind to multiple container.
15. docker logs CONT_ID  // here we check the logs of container
16. docker exec -it CONT_ID /bin/bash  or /sh   //using this command we do execute some addition command on container termainal.
17. docker network create NETWORK_NAME  // here we create a docker network
18. docker network ls // to see a list of docker.
19. docker compose -f FILENAME.yaml up -d   // here we build container in detached mode.
20. docker compose -f FILENAME.yaml down    // here we remove the containers.

<!-- attached volumes to our container -->
21. docker run -it -v HOST PATH:CONTANIER_PATH IMAGE NAME
22. docker volume ls  // see a list of valume
23. docker volume create VOLUMER_NAME  // creating a valume
24. docker volume rm VOLUME_NAME //delete an volume