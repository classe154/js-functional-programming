console.log(students);

/*
const students = [
    {
        "id": 8887,
        "name": "Federico",
        "lastname": "Acker",
        "github_user": "federicoacker",
        "image": "https://avatars.githubusercontent.com/u/509528?v=4",
        "tickets_counter": 9,
        "year_of_birth": "1996-08-23"
    },
*/

/*
const studentiAfter2000 = students.filter(function (student, index) {
    const { year_of_birth } = student;

    console.log(year_of_birth); // 1996-08-23

    const dates_of_birth = year_of_birth.split('-');
    const year = parseInt(dates_of_birth[0]);

    if (year > 2000) {
        return true;
    } else {
        return false;
    }
});

const studentiAfter2000FullName = studentiAfter2000.map(function (student, index) {
    const { name, lastname } = student;
    return `${name} ${lastname}`;
});

console.log(studentiAfter2000FullName);
*/

const galleryElem = document.querySelector('#gallery');

let cardImages = '';
students.forEach(function (student, index) {
    const { image, github_user } = student;
    const cardImage = `
        <div>
            <img class="img-fluid" src="${image}" alt="${github_user}">
        </div>
    `;
    cardImages += cardImage;
});

galleryElem.innerHTML = cardImages;
