FROM node:16-alpine3.15

WORKDIR /usr/app

COPY ./ ./
RUN npm install
RUN npm i
RUN npm run build

ENTRYPOINT npm run preview
