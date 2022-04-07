import {useState} from 'react';
function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  return (
    <center className="App">
      <h1>Java sample approach</h1>
      <p>Categories:</p>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => {input.length && setList([...list, input]);
      setInput('')}}>Add</button>
      <br/>
      <button onClick={() => setList([])}>Remove All</button>
    </center>
  );
}

export default App;
