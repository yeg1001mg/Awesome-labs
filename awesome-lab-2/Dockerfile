FROM node:12.2.0-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY config.js /app/config.js
COPY index.js /app/index.js

COPY app /app/app

COPY views /app/views
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
