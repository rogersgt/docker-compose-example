FROM node:boron
LABEL description='A totally different example microservice'

RUN mkdir /app
ADD index.js package.json yarn.lock /app/
WORKDIR /app
RUN yarn

EXPOSE 8080 8080

CMD node index.js
