import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// switch between production with Heroku to handle their assigned port
// and running locally
const PORT = process.env.PORT || 5000;
app.listen(PORT);