import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList/TodoList'
import DeleteCompletedButton from './components/Buttons/DeleteCompletedButton'
import Footer from './components/Buttons/Footer'

const App = () => {
  const [state, setState] = useState([]);
  const [active, setActive] = useState('ALL');
  return (
    <div>
      <AddTodo state={state} setState={setState} />
      <TodoList state={state} active={active} setState={setState}/>
      <Footer active={active} setActive={setActive} />
      <DeleteCompletedButton state={state} setState={setState} />
    </div>
  );
}

export default App;
