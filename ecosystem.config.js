module.exports = {
  apps: [{
    name: 'app',
    script: 'npm start',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};
