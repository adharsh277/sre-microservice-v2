const express = require('express');
const app = express();
const port = 5000;

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Root endpoint (optional, helps debugging)
app.get('/', (req, res) => {
  res.send('Hello from SRE Microservice!');
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});
