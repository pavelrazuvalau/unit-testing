test('Check addTodo able add todo to todoList', () => {
  document.body.innerHTML = `
    <input id="newTodo" />
    <button id="addTodo">Add todo</button>
    <ol id="todoList"></ol>
  `;
  require('./todolist.js');

  const newTodoInput = document.getElementById('newTodo');
  const addTodoBtn = document.getElementById('addTodo');
  const todolist = document.getElementById('todoList');

  newTodoInput.value = 'New todolist!';
  addTodoBtn.click();

  expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
});
