FROM node:16.2.0

WORKDIR /app

ENV PORT 80

COPY package.json /app

RUN npm install

COPY . /app

CMD node index.js
