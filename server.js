//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/curriculum-vitae'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/curriculum-vitae/index.html' })
);


app.get('/*', (req, res) =>
    res.sendFile(path.resolve('/src/app/pages/family-reference'))
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);