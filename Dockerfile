FROM node:18

WORKDIR /usr/src/mediaserver

ENV PORT=4000

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]