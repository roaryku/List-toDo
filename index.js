// FUNCTIONS, OBJECTS, ARRAYS

//let user = 'Marina';
//let age = 30;
//let job = 'Web Developer';
//let city = 'Kyiv';
//console.log(user);

/* let person = {
    name: 'Marina',
    age: 30,
    job: 'Web developer',
    city: 'Kyiv'
}
console.log(person.city);

let bestFriend = {
    name: 'Olga',
    year: 32,
    job: 'Home stay mom',
    city: 'Vancouver WA',
    hobby: 'Shopping',
    from: 'Moldova',
    kids: 3
}
console.log(bestFriend.name)  

let person = {
    name: 'Nathan',
    age: 9,
    category: 'son',
    city: 'Vancouver',
    school: 'River Home Link'
}
console.log(person.city); 

// DOM - Document Object Model


// 4 - Made const for parent to add the child, I used method querySelector;
const containerElement = document.querySelector('.container');

// 1 - made upp const and method createElement for new tag;
const heading = document.createElement('h2');
const par = document.createElement('p');

// 2 - type in the text which I made it in second step - innerText;
heading.innerText = 'Carry Bradshaw, 37 years old:';
par.innerText = 'I love this shoes.';

// 3 - add the same class in the element from HTML that I made it - classList add
heading.classList.add('header');
par.classList.add('text');

// 5 - Add new element using appendChild method
const headingTwo = document.createElement('h2');
headingTwo.innerText = 'John Smith, 32 years old:';
headingTwo.classList.add('header');

const parTwo = document.createElement('p');
parTwo.innerText = 'Nice t-short!';
parTwo.classList.add('text');
console.log(parTwo)


containerElement.appendChild(heading);
containerElement.appendChild(par);
containerElement.appendChild(headingTwo);
containerElement.appendChild(parTwo);

const listSelector = document.querySelector('ul');

const listTwo = document.createElement('li');
listTwo.innerText = 'Two';
listTwo.classList.add('container');

const listThree = document.createElement('li');
listThree.innerText = 'Three';
listThree.classList.add('container');

const listFour = document.createElement('li');
listFour.innerText = 'Four';
listFour.classList.add('container');

const listFive = document.createElement('li');
listFive.innerText = 'Five';
listFive.classList.add('container');

listSelector.appendChild(listTwo);
listSelector.appendChild(listThree);
listSelector.appendChild(listFour);
listSelector.appendChild(listFive); 


const myFavoriteThings = document.querySelector('.container');

const favoriteTwo = document.createElement('h2');
favoriteTwo.innerText = 'Traveling';
favoriteTwo.classList.add('heading');
const imgOne = document.createElement("img");
imgOne.src = "/module_3/traveling.jpg";
const paragraphOne = document.createElement('p');
paragraphOne.innerText = 'My next trip is Italy in 6 days with my daughter Jessica.';
paragraphOne.classList.add('par')

const favoriteThree = document.createElement('h2');
favoriteThree.innerText = 'Reading';
favoriteThree.classList.add('heading');
const imgTwo = document.createElement("img");
imgTwo.src = "/module_3/reading.jpg";
const paragraphTwo = document.createElement('p');
paragraphTwo.innerText = 'A book is a gift you can open again and again.';
paragraphTwo.classList.add('par');

const favoriteFour = document.createElement('h2');
favoriteFour.innerText = 'Family time';
favoriteFour.classList.add('heading');
const imgThree = document.createElement("img");
imgThree.src = "/module_3/family.jpg";
const paragraphThree = document.createElement('p')
paragraphThree.innerText = 'The memories we make with our family is everything.';
paragraphThree.classList.add('par');

const favoriteFive = document.createElement('h2');
favoriteFive.innerText = 'Baking';
favoriteFive.classList.add('heading');
console.log(favoriteFive);
const imgFour = document.createElement('img');
imgFour.src = '/module_3/baking.jpg';
console.log(imgFour);
const paragraphFour = document.createElement('p');
paragraphFour.innerText = 'Nothing says home like the smell of baking. And I love this smell';
paragraphFour.classList.add('par');

myFavoriteThings.appendChild(favoriteTwo);
myFavoriteThings.appendChild(imgOne);
myFavoriteThings.appendChild(paragraphOne);

myFavoriteThings.appendChild(favoriteThree);
myFavoriteThings.appendChild(imgTwo);
myFavoriteThings.appendChild(paragraphTwo);

myFavoriteThings.appendChild(favoriteFour);
myFavoriteThings.appendChild(imgThree);
myFavoriteThings.appendChild(paragraphThree);

myFavoriteThings.appendChild(favoriteFive);
myFavoriteThings.appendChild(imgFour);
myFavoriteThings.appendChild(paragraphFour); 



const button = document.querySelector('#submit');

button.addEventListener('click', function () {
    let user = prompt('What is your name?');
    alert(`Welcome ${user}!`);
})  

const button = document.querySelector('#submit');
button.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
}) 

const header = document.querySelector('#header');
const button = document.querySelector('#submit');

button.addEventListener("click", function () {
    header.classList.toggle('styleHeader');
    
}) 

const heading = document.querySelector('#heading');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function() {
    heading.classList.toggle('container')
}) 

const heading = document.querySelector('#heading');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('mouseover', function() {
    heading.classList.toggle('container')
}) 

const heading = document.querySelector('#heading');
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('dblclick', function() {
    heading.classList.toggle('container')
}) 

document.addEventListener("keydown", function(e) {
    if(e.key === "a"){
        document.body.style.backgroundColor = "red";
    }

    else if (e.key === "b"){
        document.body.style.backgroundColor = "blue";
    }

    else if (e.key === "c"){
        document.body.style.backgroundColor = "green"
    }

    else{
        document.body.style.backgroundColor = "pink"
    }
}) 

 // bring costumer to a new page

const italy = document.querySelector("#italy");
italy.addEventListener('mouseover', function() {

    //1 - open the same page
    //document.location.assign('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHklMjByb21hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60')

    //2 - new page
    window.open('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHklMjByb21hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', '_blank')
}) 

const italy = document.querySelector('#italy');
const button = document.querySelector('#btn');

button.addEventListener('click', function() {
    window.open('https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aXRhbHklMjByb21hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', '_blank')
}) 

const button = document.querySelector('#btn')

// 1 - function without name

//button.addEventListener('click', function() {
//    alert('HELLOO!')
//})

// 2 - function with name

button.addEventListener('click', testAlert);
function testAlert(){
    alert('Hello!')
} */

// To Do list - web app

const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';
    
    item.addEventListener('click', () => {
        item.classList.add('toDoCompleted');
    })

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
})





