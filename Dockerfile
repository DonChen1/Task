FROM node:16.2.0

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
