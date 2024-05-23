const firstNameInput = document.getElementById('student-form__firstname');
const lastNameInput = document.getElementById('student-form__lastname');
const ageInput = document.getElementById('student-form__age');
const form = document.getElementById('student__form');
const list = document.getElementById('student__list');


let std = JSON.parse(localStorage.getItem("std")) || [];


function Student(firstname, lastname, age) {
    this.name = firstname;
    this.lastname = lastname;
    this.age = age;
}

const getValue = function (e) {
    e.preventDefault();
    if (firstNameInput.value.trim() !== "" && lastNameInput.value.trim() !== "" && ageInput.value.trim()) {
        let newStudent = new Student(firstNameInput.value, lastNameInput.value, ageInput.value);
        std.push(newStudent);
        localStorage.setItem("std", JSON.stringify(std));


        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';

        render();
    } 
}

const render = function () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    std?.forEach((item, index) => {
        list.innerHTML += `
            <li data-id="${index}" class="student__list-item">
            <h4 class="student__list__item-name">${item.name} ${item.lastname}</h4>
                <span>${item.age}</span>
                <span>yosh</span>
                <i class="bi bi-trash3-fill"></i>
            </li>
        `
    });
}

const deleteItem = function (e) {
    if (e.target.classList.contains("bi-trash3-fill")) {
        const itemToDelete = e.target.closest('li');
        itemToDelete.remove();
    }
}

form.addEventListener('submit', getValue);
list.addEventListener('click', deleteItem);


window.onload = function () {
    render();
}