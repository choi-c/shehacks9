const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/codehere', async (req, res) => {
    const { prompt, code } = req.body;

    try {
        const response = await axios.post('https://api.codehere.ai/endpoint', {
            prompt,
            code
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error communicating with CodeHere AI' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});