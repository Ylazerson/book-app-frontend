// B''H //


// This is different than the srcServer.js in that we removed all the Webpack and hot reloading-related code.
// We don't need those since we're just serving plain static files via Express.

// --------------------------------------------------------------------------------
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/*eslint-disable no-console */
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
const port = 3000;
const app = express();
// --------------------------------------------------------------------------------


// --------------------------------------------------------------------------------
// This will enable gzip compression
app.use(compression());

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
// --------------------------------------------------------------------------------

