FROM node:slim

WORKDIR /ui

COPY public ./public
COPY src ./src
COPY package.json .
COPY tsconfig.json .

RUN npm install
RUN npm install serve -g
RUN npm run build
CMD serve -s 3000

EXPOSE 3000/tcp