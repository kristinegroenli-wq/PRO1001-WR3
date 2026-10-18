let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];

// Select and store references to the necessary DOM elements (from module 5.6)
const todoList = document.getElementById("todo-list");//todoList: the <ul> element
const todoInput = document.getElementById("todo-input");//todoInput: the input field
const addButton = document.getElementById("add-button");//addButton: the button to add new todos

// Creating to-do item element - new <li> element and adding the todo-item class to the <li>
function createTodoElement(todo) {
     const li = document.createElement("li");
     li.classList.add("todo-item"); 

//Creating a <span> for the todo text and setting the span's text content to todo.text
     const span = document.createElement("span");
     span.classList.add("todo-text");
     span.textContent = todo.text; 

//Creating a delete button
     const deleteButton = document.createElement("button");
     deleteButton.classList.add("delete-button"); //from the ex. in module 5.6 this sentence is not included, but the CSS needs it
     deleteButton.textContent = "Delete"; 

//Adding a click event listener to the delete button that calls deleteTodo(todo.id)

     deleteButton.addEventListener("click", () => {
       deleteTodo(todo.id);
     });
  
//Append the span and delete button to the <li>
    li.appendChild(span);
    li.appendChild(deleteButton);

//Return the li element
    return li;
   
}

// Render to-do's
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(todo => {
      const todoElement = createTodoElement(todo);
      todoList.appendChild(todoElement);
    });
    
}

// Add to-do's with unique ID (found a way using solution 3 on this page https://itsourcecode.com/javascript-tutorial/how-to-generate-unique-id-for-each-array-of-objects-in-javascript/)
function addTodo() {
  const text = todoInput.value.trim();
  
  if (text !== "") {
    const newTodo = {
    id: Date.now (),
    text: text
   };
   todos.push(newTodo);
   todoInput.value = "";

    renderTodos();
                    
    }
              
  }


// Delete todo
function deleteTodo(id) {
  
    // Removes the todo with the given id from the todos array
  todos = todos.filter(todo => todo.id !== id);
  
  renderTodos();
}

// Adding a click event listener to the add button that calls addTodo
addButton.addEventListener("click", addTodo);

// Adding a keypress event listener to the input field that calls addTodo when the Enter key is pressed
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
})
// Initial render
renderTodos();