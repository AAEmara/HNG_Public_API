import express from 'express';
import getInfo from './routes.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();
app.set('json spaces', 2);

const corsOptions = {
  origin: ['http://localhost:5000/*', 'http://www.hngapi.com/*'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/api', getInfo);

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
})
