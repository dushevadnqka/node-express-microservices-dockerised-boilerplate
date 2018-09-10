# latest official node image
FROM node:latest

## Create base directory
RUN mkdir /src

## Specify the "working directory" for the rest of the Dockerfile
WORKDIR /src

## Install packages using NPM 5 (bundled with the node:9 image)
COPY ../../package.json /src/package.json
COPY ../../package-lock.json /src/package-lock.json

## Add the nodemon configuration file
COPY ../nodemon.json /src/nodemon.json

## Set environment to "development" by default
ENV NODE_ENV development

## Allows port 8080 to be publicly available
EXPOSE 8080

## The command uses nodemon to run the application
CMD ["node", "node_modules/.bin/nodemon", "-L", "bin/www"]