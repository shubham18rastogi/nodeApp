const express = require('express');
const courses = require('./routes/courses');
const app = express();

app.use(express.json());
app.use('/api/courses', courses);
app.get('/', (req, resp) => {
    resp.send('Hello World');
});

const port = process.env.PORT || 1995;
app.listen(port, () => {
    console.log(`Listening to Port ${port}...`);
});