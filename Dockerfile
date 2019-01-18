FROM node:lts-alpine

# Bundle APP files
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

COPY . .
COPY --chown=node:node . .

# Expose the listening port of your app
EXPOSE 3000

CMD [ "npm", "start" ]
