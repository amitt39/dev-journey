
// Do these tasks:

// Select the h1 by id and change its text to "DOM Practice"
const titleEl = document.querySelector('#title');

titleEl.textContent = "DOM Practice"

// Select all .description paragraphs and change both their text to "Updated paragraph"
const parasEl = document.querySelectorAll(".description");
parasEl.forEach(para => {
  para.textContent = "Updated Paragraph"
})

// Select the button by id and change its text to "Click Me!"
const btnEl = document.querySelector("#btn");
btnEl.textContent = "Click Me!"

// Select the ul by id and change the second li text to "Updated Item"
const ulEl = document.querySelectorAll('#list li');
ulEl[1].textContent = "Updated Item"

// Select the input and change its placeholder to "Enter your name..."
const inputEl = document.querySelector("input");
inputEl.placeholder = "Enter you name..."

// Add the highlight class to the h1
titleEl.classList.add("highlight");

// Toggle the hidden class on the first .description paragraph — run it twice and see what happens
const firstDescPara = document.querySelector(".description");
firstDescPara.classList.toggle("hidden")
firstDescPara.classList.toggle("hidden")

// Change the button's type attribute to "submit"
btnEl.setAttribute("type", "submit")

// Add a data-level attribute to the h1 with value "beginner"
titleEl.setAttribute("data-level", "beginner");

// Read that data-level back using both getAttribute and dataset and print both to console
const dataLevelUsingGetAttr = titleEl.getAttribute("data-level")
console.log(dataLevelUsingGetAttr);

const dataLevelUsingDataset = titleEl.dataset.level;
console.log(dataLevelUsingDataset);
