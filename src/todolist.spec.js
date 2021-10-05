describe('Todo list', () => {
  let newTodoInput;
  let addTodoBtn;
  let todolist;

  beforeAll(() => {
    document.body.innerHTML = `
      <input id="newTodo" />
      <button id="addTodo">Add todo</button>
      <ol id="todoList"></ol>
    `;
    require('./todolist.js');

    newTodoInput = document.getElementById('newTodo');
    addTodoBtn = document.getElementById('addTodo');
    todolist = document.getElementById('todoList');
  });

  afterEach(() => {
    todolist.innerHTML = '';
  })

  test('Check addTodo able add todo to todoList', () => {
    newTodoInput.value = 'New todolist!';
    addTodoBtn.click();

    expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
  });

  test('Check whether an element exists', () => {
    addTodoBtn.click();
    expect(todolist.innerHTML).toBeFalsy();

    newTodoInput.value = 'New todolist!';
    addTodoBtn.click();

    expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
  })
})
