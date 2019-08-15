FROM node:8.11.3 as builder
#COPY --chown=node:node . /home/node/src
WORKDIR /app
COPY --chown=node:node . /app
RUN npm install
RUN npm install -g @angular/cli@6.0.3
RUN ng build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/ .
