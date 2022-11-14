import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    console.log(document, 'submitting')
    e.preventDefault()
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Search here
      </p>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setQuery(e)} />
        <button type='submit'>Submit</button>
      </form>
      {
        query && (
          `Current Query: ${query.target.value}`
        ) 
      } 
    </div>
  );
}

export default App;
