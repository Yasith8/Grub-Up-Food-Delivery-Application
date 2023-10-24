import express from 'express';

const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors);

app.get('/', (req, res) => {
    return res.json("Return from server");
})

app.listen(8081, () => {
    console.log("App Listing from 8081 port")
})