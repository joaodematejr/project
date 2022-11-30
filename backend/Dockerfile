FROM node:18.12.1-alpine3.15

WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .