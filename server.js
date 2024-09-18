const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.render('index')
});

const userRouter = require('./routes/user')
app.use('/user', userRouter)