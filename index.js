const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    // Get form data from req.body
    const { name, email } = req.body;

    // Connect to your Xata database and save the data
    // ...

    res.send('Form submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});