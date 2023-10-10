FROM ubuntu:latest

WORKDIR /app

COPY package*.json ./

RUN apt update && apt install -y nodejs npm

RUN npm install

COPY . ./

EXPOSE 8080

CMD [ "npm", "run", "start" ]