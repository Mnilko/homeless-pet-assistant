FROM keymetrics/pm2:latest-alpine

# Bundle APP files
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

COPY . .

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
