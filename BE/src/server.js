const express = require('express');
require('dotenv').config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: "Contact Manager API Running"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})