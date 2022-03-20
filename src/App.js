import './App.css';
import { useState } from 'react';
import SearchCity from './components/SearchCity';
import SelectCity from './components/SelectCity';
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState(null);
  const [cities, setCities] = useState(null);
  const [weather, setWeather] = useState(null);

  const light = weather && weather[0].IsDayTime ? 'day' : weather && !weather[0].IsDayTime ? 'night' : '';

  return (
    <div className={'App ' +  light}>
      { !cities || weather 
        ? <SearchCity setCities={setCities} setWeather={setWeather} setCity={setCity} />
        : <SelectCity cities={cities} setWeather={setWeather}  />
      }
      { weather && 
        <Weather weather={weather} city={city}/>
      }
    </div>

    
  );
}

export default App;
