import * as Koa from "koa";
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as convert from 'koa-convert';

import { errorMiddleware } from './middleware/error'
import { apiAUTH } from './middleware/auth'

import CONFIG from './config';
const app = new Koa();


app.use(convert(logger()));
app.use(convert(bodyParser()));
app.use(convert(errorMiddleware()));
app.use(convert(apiAUTH))

const modules = require('./modules');
modules(app);

app.listen(CONFIG.PORT, () => {
  console.log(`Server started on ${CONFIG.PORT}`);
})