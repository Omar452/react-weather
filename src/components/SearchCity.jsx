import axios from 'axios';
import { useState } from 'react';

const SearchCity = ({setCities, setCity, setWeather}) => {

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let query = e.target.query.value;
        axios.get('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + process.env.REACT_APP_ACCUWEATHER_API + '&q=' + query)
            .then(data => {
                if(data.status === 200){
                    console.log(data.data)
                    if(data.data.length === 0){
                        setError(true);
                    } else{
                        setError(false);
                        setCities(data.data);
                        let upperQuery = query.charAt(0).toUpperCase() + query.slice(1);
                        setCity(upperQuery);
                        setWeather(null);
                    }
                    
                }
            })
            .catch(err => console.log(err))
    };
        
    return (
        <div className='searchDiv'>
            <form onSubmit={handleSubmit}>
                <input name='query' type='text' placeholder='Enter a city' autoFocus />
            </form>
            {error && <div className='errorDiv'>Ooops! No results found!</div>}
        </div>
    )
}

export default SearchCity;