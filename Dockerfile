FROM dockerfile/nodejs:latest

ENV NODE_ENV production

ADD ./.bowerrc  /app/
ADD ./.jshintrc  /app/
ADD ./app.js  /app/
ADD ./bower.json  /app/
ADD ./Gruntfile.js  /app/
ADD ./package.json  /app/
ADD ./.tmp  /app/

WORKDIR /app

RUN npm install
RUN npm install -g grunt-cli
RUN npm install -g bower
RUN bower install --allow-root
RUN grunt build
ADD ./dist  /app/dist

CMD ["node", "app.js"]

EXPOSE 80
