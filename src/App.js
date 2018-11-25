import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList/TodoList'
import AllButton from './components/Buttons/AllButton'
import CompletedButton from './components/Buttons/CompletedButton'
import TodoButton from './components/Buttons/TodoButton'
import DeleteCompletedButton from './components/Buttons/DeleteCompletedButton'

const App = () => {
  const [state, setState] = useState([]);
  const [active, setActive] = useState({ active: 'ALL' });
  return (
    <div>
      <AddTodo state={state} setState={setState} />
      <TodoList state={state} active={active} setState={setState}/>
      {/* <AllButton active={active} setActive={setActive} />
      <CompletedButton active={active} setActive={setActive} />
      <TodoButton active={active} setActive={setActive} />
      <DeleteCompletedButton todos={state} setTodos={setState} /> */}
    </div>
  );
}

export default App;
