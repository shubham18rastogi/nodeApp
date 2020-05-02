const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',  { useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.log('Could not connect to mongodb... '+err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String ],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); 


/*async function createCourse(){
     const course = new Course({
         name: 'Temp',
         author: 'Shubham',
         tags: ['temp', 'temp1'],
         isPublished: false
     });

     const result = await course.save();
     console.log(result);
 }

 createCourse();*/

// async function getCourses(){
//     const courses = await Course
// //    .find({author: /^Shu/})
// //    .find({author: /AM$/i})
//     .find({author: /.*hub.*/})
// //    .find({prices : {$gte: 10, $lte: 20}})
// //    .or([{}, {}])
// //    .skip(1)
//     .limit(10)
//     .sort({name: 1})
//     .countDocuments();
// //    .select({name: 1, tags: 1});
//     console.log(courses);
// }

// getCourses();

// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if(!course) return;
//     course.set({
//         isPublished: true,
//         author: 'Rastogi'
//     });
//     const result = await course.save();
//     console.log(result);
// }

// async function updateCourse(id){
//     const result = await Course.update({_id: id},{ 
//         $set: {
//             author: 'Shubham',
//             isPublished: true
//         }
//     });
//     console.log(result);
// }

// async function updateCourse(id){
//     const course = await Course.findByIdAndUpdate(id,{ 
//         $set: {
//             author: 'Vivek',
//             isPublished: false
//         }
//     }, {new: true});
//     console.log(course);
// }
// updateCourse('5eadae868733965f2ca398de');

async function removeCourse(id){
    //const result = await Course.deleteOne({_id: id});
    //const result = await Course.deleteMany({_id: id});
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}
removeCourse('5eadc7e3189973434019ff2d');