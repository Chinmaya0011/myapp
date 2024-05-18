const express = require('express');
const app = express();
const port = 3000;

// Dummy data for todo list
let todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build an Express.js API' },
];

// Middleware to parse JSON bodies
app.use(express.json());

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  const newTodo = { id: todos.length + 1, text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Get a specific todo by ID
app.get('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  if (todos.length < initialLength) {
    res.sendStatus(204); // No Content
  } else {
    res.status(404).send('Todo not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
