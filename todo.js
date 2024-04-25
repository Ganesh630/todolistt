let todos = [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText !== "") {
    todos.push({ text: todoText, completed: false });
    input.value = "";
    renderTodos();
  }
}

function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", () => toggleCompleted(index));
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTodo(index);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

renderTodos();
