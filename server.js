const express = require('express');
const path = require('path'); // Import the path module

const app = express();
const port = 3000; // You can change this port if you like

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
