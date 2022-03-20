import './App.css';
import { useState } from 'react';
import SearchCity from './components/SearchCity';
import SelectCity from './components/SelectCity';

function App() {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState(null);
  const [weather, setWeather] = useState(null);

  return (
    <div className="App">
      { !cities || weather 
        ? <SearchCity setCities={setCities} setWeather={setWeather} setCity={setCity} />
        : <SelectCity cities={cities} setWeather={setWeather}  />}
    </div>
  );
}

export default App;
