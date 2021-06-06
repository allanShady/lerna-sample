const express = require('express')
const app = express();

app.get('/', (req, res) => { res.send("Backend API") })

app.listen(5000, error => {
    if (error) console.log(`Error: ${error.message}`)
    console.log(`Server listening on port`);
})