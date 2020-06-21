const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, resp) => {
    resp.send('Hello World');
});

app.get('/api/courses', (req, resp) => {
    resp.send(courses);
});

app.get('/api/courses/:id', (req, resp) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return resp.status(404).send('Not Found');
    resp.send(course);
});

app.get('/api/query', (req, resp) => {
    resp.send(req.query);
});

app.post('/api/courses', (req, resp) => {
    /*if(!req.body.name || req.body.name.length < 3){
        resp.status(400).send('Illegal argument');
        return;
    }*/
    /*const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    //console.log(result);
    */
    const result = validateName(req.body);
    if(result.error) return resp.status(400).send(result.error);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    resp.send(course);
});

app.put('/api/courses/:id', (req, resp) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return resp.status(404).send('Not Found');
    
    const { error } = validateName(req.body);  // shorthand for result.error
    if(error) return resp.status(400).send(error.details[0].message);

    course.name = req.body.name;
    resp.send(course);
});

function validateName(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);    
};

app.delete('/api/courses/:id', (req, resp) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return resp.status(404).send('Not Found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    resp.send(course);
});

const port = process.env.PORT || 1995;
app.listen(port, () => {
    console.log(`Listening to Port ${port}...`);
});