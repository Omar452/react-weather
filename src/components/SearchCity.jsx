import axios from 'axios';

const Search = ({setCities, setCity, setWeather}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let query = e.target.query.value;
        axios.get('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + process.env.REACT_APP_ACCUWEATHER_API + '&q=' + query)
            .then(data => {
                if(data.status === 200){
                    setCities(data.data);
                    let upperQuery = query.charAt(0).toUpperCase() + query.slice(1);
                    setCity(upperQuery);
                    setWeather(null);
                }
            })
            .catch(err => console.log(err))
    };
        
    return (
        <div className='searchDiv'>
            <form onSubmit={handleSubmit}>
                <input name='query' type='text' placeholder='Enter a city' autoFocus />
            </form>
        </div>
    )
}

export default Search;