console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id){
    setTimeout(() => {
        return {id: 1, userName: 'iron-man'};
    }, 2000);
    //return 1;
}