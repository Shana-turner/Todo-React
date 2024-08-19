
import { useEffect, useState } from 'react';
import './App.css';
import { NewTodoForm } from './components/newTodoForm';
import { TodoList } from './components/todoList';


function App() {
  
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue ==  null) return []

    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title){
      setTodos(currentTodos => {
        return [
            ...currentTodos, 
            {id: crypto.randomUUID(), title, completed: false},
        ]
        })  
  }  

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <div className='item-form'>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
  </div> 
}

export default App;
