console.log('hello World');

console.warn('this is a warning');

const person = {
    firstName: 'rishi',
    age: 19,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'gt road',
        city: 'nellore',
        state: 'btech'
    }
}
console.log(person.name)

console.log(person.hobbies[1]);
console.log(person.address.city);
person.email = 'jdoe@gmail.com';
const todos = [
    {
        id: 1,
        text: 'playing cricket',
        isComplete: true
    },
    {
        id: 2,
        text: 'watching movies',
        isComplete: false
    },

];
console.log(todos[1].text);
console.log(JSON.stringify(todos));

for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}
let i = 0
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
for (let todo of todos) {
    console.log(todo.text);
}
todos.forEach(function (todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
});
const todoTextArray = todos.map(function (todo) {
    return todo.text;
});
console.log(todoTextArray);


const todo1 = todos.filter(function (todo) {
    return todo.id === 1;
});







const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const passwordInput = document.querySelector('#password');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '' ) {

        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

     
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    }
}