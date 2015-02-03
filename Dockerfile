FROM dockerfile/nodejs:latest

ENV NODE_ENV production

ADD ./app.js  /app/
ADD ./package.json  /app/

WORKDIR /app

RUN npm install
ADD ./dist  /app/dist

CMD ["node", "app.js"]

EXPOSE 80
