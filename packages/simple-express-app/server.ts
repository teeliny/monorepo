import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3001;

app.get("/data", (_req, res) => {
  res.json({ foo: "bar" });
});

app.get('/', (_req, res) => {
  res.json({ data: 'server data return successfully' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
