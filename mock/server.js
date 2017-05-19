const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');

const PORT = process.env.PORT || 3001;

app.use(bodyParser());

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad');
router.get('/api/homead', (ctx) => {
  ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', (ctx) => {
    // 参数
    console.log(ctx.params);
    ctx.body = homeListData;
});

router.post('/api/test_post', (ctx) => {
  ctx.body = ctx.request.body;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);
console.log(`Koa server is started on port ${PORT}`);