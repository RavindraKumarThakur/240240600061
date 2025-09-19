const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/dbconnect');
const userRouter = require('./route/user.route.js');
const urlRouter = require('./route/url.route.js');


const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/api/users', userRouter);
app.use('/api/url', urlRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});