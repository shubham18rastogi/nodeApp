const p1 = new Promise((resolve, reject) => {
    console.log('Promise 001');
    setTimeout(() => {
        //reject(new Error('not found'));
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    console.log('Promise 002');
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));