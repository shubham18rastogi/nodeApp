console.log('Before');
getUser(1, (user) => {
    console.log(user);
    getMovies(1, (movies) => {
        console.log(movies);
    });
});
console.log('After');

function getUser(id, callback){
    console.log("Fetching User Data...");
    setTimeout(() => {
        callback( {id: 1, userName: 'iron-man'} );
    }, 2000);
}

function getMovies(id, callback){
    console.log('Fetching Movies...')
    setTimeout(() => {
        callback(['IronMan', 'IronMan-2', 'IronMan-3']);
    }, 1000);
}