const names = ['Edoardo', 'Simone', 'Francesco'];

// col for
/*
for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
}
*/

/*
const valoreRestituito = names.forEach((name, index) => {
    console.log(name, index);
});
*/

//console.log(valoreRestituito); // indefined

function myForEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        cb(current, i);
    }
}

myForEach(names, (param1, param2) => {
    console.log('Log ' + param1, param2);
});