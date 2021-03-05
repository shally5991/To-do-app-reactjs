import React, {useState} from 'react'
import './App.css'

function Todo({todo,index,completeTodo,deleteTodo}){
return (
  <div
    className="todo"
    style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
  >
    {todo.text}
    <div className="button">
      <button onClick={()=>deleteTodo(index)}>x</button>
      <button onClick={() => completeTodo(index)}>Complete</button>
    </div>
  </div>
);
}

function TodoForm({adtodo}){
  const [value, setvalue] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault(); 
    if(!value) return;
    adtodo(value);
    setvalue("");
  }
  return (
    <form onSubmit={handleSubmit} className="todo todo-form">
      <input
        type="text"
        placeholder="Add to-do"
        className="input"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </form>
  );
}

function App() {
const [todos, settodos] = useState([
  {
    text:'Make list of todo',
    isComplete:false
  },
  {
    text:'Make list of todo',
    isComplete:false
  },
  {
    text:'Make list of todo',
    isComplete:false
  }

])

const adtodo = (text) =>{
  const newtodos = [...todos, {text}]
  settodos(newtodos);

}

const completeTodo = index => {
  const newtodos = [...todos];
  newtodos[index].isComplete = !newtodos[index].isComplete;
  settodos(newtodos);
}
const deleteTodo = index => {
  const newtodos = [...todos];
  newtodos.splice(index,1);
  settodos(newtodos);
}

  return (
    <div className="app">
      <TodoForm adtodo={adtodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}  />
        ))}
      </div>
    </div>
  );
}
export default App;