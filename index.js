import express from 'express';
import stats from './routes/stats.js';

const app = express();

app.get('/', (req, res) => res.send('Chesscom Profile Stats'));
app.get('/stats', stats);

const port = process.env.PORT || '8000';
app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`Server is listening on ${port}`);
});
