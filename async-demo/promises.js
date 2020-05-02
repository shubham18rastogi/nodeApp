// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve(1);
//         reject(new Error('message'));
//     }, 2000);
// });

// p
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message));

console.log('Before');
const pr = getUser(1);
pr.then(user => getMovies(1))
  .then(movies => console.log(movies))
  .catch(err => console.log(err.message));
console.log('After');

function getUser(id){
    console.log("Fetching User Data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( {id: 1, userName: 'iron-man'} );
        }, 2000);
    });
    
}

function getMovies(id){
    console.log('Fetching Movies...')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['IronMan', 'IronMan-2', 'IronMan-3']);
        }, 1000);
    });   
}