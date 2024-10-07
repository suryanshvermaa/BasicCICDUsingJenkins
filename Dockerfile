FROM node

WORKDIR /app

COPY package*.json .
RUN npm install
COPY index.js index.js
ENTRYPOINT [ "npm","start" ]