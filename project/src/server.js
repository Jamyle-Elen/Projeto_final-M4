import express from 'express';
import { wastesRouter } from './routes/wastes.route.js';
import { reportsRouter } from './routes/reports.route.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use(wastesRouter);
app.use(reportsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});