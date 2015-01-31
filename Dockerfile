FROM dockerfile/nodejs:latest

ENV NODE_ENV production

ADD ./dist  /app/dist
ADD ./app.js  /app/
ADD ./package.json  /app/

RUN cd /app && npm install

WORKDIR /app
CMD ["node", "app.js"]

EXPOSE 80
