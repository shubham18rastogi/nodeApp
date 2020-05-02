async function displayMovies(){
    try{
        const user = await getUser(1);
        const movies = await getMovies(1);
        console.log(movies);
    }catch(err) {
        console.log(err.message);
    }
}
displayMovies();

function getUser(id){
    console.log("Fetching User Data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( {id: 1, userName: 'iron-man'} );
            //reject(new Error('message'));
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