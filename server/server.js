const express = require('express');
const app = express();
// brings in bodyParser to allow axios requests from the front-end
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
const books = require('./routes/books.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use(xmlparser());
/** ---------- EXPRESS ROUTE ---------- **/
app.use('/books', books);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});