FROM node:16-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

RUN npm install -g prisma

COPY . /app/

