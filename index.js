import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import stats from './routes/stats.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/stats', stats);

const port = process.env.PORT || '8000';
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${port}`);
});
