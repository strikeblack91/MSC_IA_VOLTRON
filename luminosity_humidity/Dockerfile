FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN mkdir -p src

COPY src ./src/

CMD [ "npm", "start" ]