
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

// Open index.html in browser after each change and verify it worked.
