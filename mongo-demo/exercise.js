const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',  { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.log('Could not connect to mongodb... '+err));

const courseSchema = new mongoose.Schema({
    tags: [ String ],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

/*async function getCourses(){
    const courses = await Course
    .find({isPublished: true, tags: 'backend'})
    .sort({name: 1})
    .select({name: 1, author: 1});
    console.log(courses);
}*/

/*async function getCourses(){
    const courses = await Course
    .find({isPublished: true})
    .sort({price: -1})
    .select({name: 1, author: 1});
    console.log(courses);
}*/

async function getCourses(){
const courses = await Course.find({isPublished: true}).or([ {price: {$gte: 15}}, {name: /.*by.*/}]);
    console.log(courses);
}

getCourses();