const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // You can change the port number if needed

app.use(cors());
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle the contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here you can add your logic to handle the form submission
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Respond with a success message
    res.json({ message: 'Your message has been sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
