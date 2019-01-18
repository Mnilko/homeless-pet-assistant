const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
// const dialogflow = require('dialogflow');

const app = new Koa();
const router = new Router();
const PORT = 3000;
process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/Tamriel/MyProjects/homeless-pet-assistant/homeless-pet-assistant-695f04322f7c.json';

app.use(bodyParser());

router.get('/', (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!',
  };
});

router.post('/params', (ctx) => {
  const { body } = ctx.request;
  ctx.body = {
    body,
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port, listening: ${PORT}`);
});

// async function runSample(projectId = 'homeless-pet-assistant') {
//   // A unique identifier for the given session
//   const sessionId = 'My session';

//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient();
//   const sessionPath = sessionClient.sessionPath(projectId, sessionId);

//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: 'вітаю',
//         // The language used by the client (en-US)
//         languageCode: 'en-US',
//       },
//     },
//   };

//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent');
//   const result = responses[0].queryResult;
//   console.log(`Query: ${result.queryText}`);
//   console.log(`Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`Intent: ${result.intent.displayName}`);
//   } else {
//     console.log('No intent matched.');
//   }
// }
// runSample();

module.exports = server;
