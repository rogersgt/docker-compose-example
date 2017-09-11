FROM node:boron
LABEL description='An example microservice'

RUN mkdir /app
ADD index.js package.json yarn.lock /app/
WORKDIR /app
RUN yarn

EXPOSE 4000 4000

CMD node index.js
