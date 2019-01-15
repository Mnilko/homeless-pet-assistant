FROM lts-alpine

# Bundle APP files
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
COPY package*.json ./

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

COPY . .
COPY --chown=node:node . .

USER node

# Expose the listening port of your app
EXPOSE 8080

CMD [ "npm", "start" ]
