#!/bin/bash
eval $("C:\Program Files\Docker Toolbox\docker-machine.exe" env dev)
docker build -t rmichniewskihome/front-end:latest .
docker push rmichniewskihome/front-end:latest
ssh ec2 docker pull rmichniewskihome/front-end:latest
ssh ec2 docker rm -f front-end
ssh ec2 docker run -d --name=front-end -p 4200:4200 --rm rmichniewskihome/front-end:latest
ssh ec2 docker ps
