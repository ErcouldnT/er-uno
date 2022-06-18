import { handler } from './svelte/build/handler.js';
import express from 'express';

const app = express();

app.use(handler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port http://localhost:' + port);
});
