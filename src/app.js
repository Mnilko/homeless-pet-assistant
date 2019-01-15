const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();
const PORT = 3000;

app.use(bodyParser());

router.get('/', (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!!!!!!!!!!!!?',
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
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
