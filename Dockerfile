FROM dockerfile/nodejs:latest

ENV NODE_ENV production

ADD ./app.js  /app/
ADD ./Gruntfile.js  /app/
ADD ./package.json  /app/
ADD ./bower.json  /app/
RUN cd /app && npm install && npm install -g grunt-cli && npm install -g bower && grunt build
ADD ./dist  /app/dist

WORKDIR /app
CMD ["node", "app.js"]

EXPOSE 80
