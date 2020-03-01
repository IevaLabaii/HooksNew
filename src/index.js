import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const App = () => {

const [currentInput, setCurrentInput] = React.useState('')
const [list, setList] = React.useState([]);

const AddTodo = (event) => {
  event.preventDefault();
  const newList = [...list];
  newList.push(currentInput);
  setList([...newList]);
}

  return (
    <div>
      <div className="outer-box">
          <h1>To do:</h1>
          <form className="input-box">
            <input className="input" type="text" placeholder="Enter text" onChange={(event)=>{setCurrentInput(event.target.value)}}/>
            <button className="add-button" onClick={AddTodo}>Add</button>
          </form>
          {list.map((singleTodo)=>{
            return <div>{singleTodo}</div>
          })}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
