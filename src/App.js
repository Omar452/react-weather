import './App.css';
import { useState } from 'react';
import SearchCity from './components/SearchCity';

function App() {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState(null);

  return (
    <div className="App">
      <SearchCity setCities={setCities} setCity={setCity}/>
    </div>
  );
}

export default App;
