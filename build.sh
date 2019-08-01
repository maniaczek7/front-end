#!/bin/bash
eval $("C:\Program Files\Docker Toolbox\docker-machine.exe" env dev)
ng build --prod
docker build -t rmichniewskihome/application:front-end .
docker push rmichniewskihome/application:front-end
ssh ec2 docker pull rmichniewskihome/application:front-end
ssh ec2 docker rm -f front-end
#ssh ec2 docker run -d --name=front-end -p 80:80 --rm rmichniewskihome/application:front-end
ssh ec2 docker run -d --name=front-end -p 4200:4200 --rm rmichniewskihome/application:front-end
ssh ec2 docker ps
