const express = require('express');
const Joi = require('joi');

const router = express.Router();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

router.get('/', (req, resp) => {
    resp.send(courses);
});

router.get('/:id', (req, resp) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return resp.status(404).send('Not Found');
    resp.send(course);
});

router.post('/', (req, resp) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if(result.error) return resp.status(400).send(result.error);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    resp.send(course);
});

router.put('/:id', (req, resp) => {
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

router.delete('/:id', (req, resp) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return resp.status(404).send('Not Found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    resp.send(course);
});

module.exports = router;