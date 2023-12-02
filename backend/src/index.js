import express from 'express';
import './config/dbConfig.js';
import routes from './routes.js';

const port = process.env.API_PORT;
const app = express();
const { json } = express;


app.use(json());
app.use(routes);

app.listen(port, () => {
    console.log('\x1b[32m%s\x1b[0m', `[INFO] API up ouvindo na porta ${port}`)
});



