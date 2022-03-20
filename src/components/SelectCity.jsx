import axios from 'axios';

const SelectCity = ({cities,setWeather}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + e.target.cityKey.value + '?apikey=' + process.env.REACT_APP_ACCUWEATHER_API)
            .then(data => {
                if(data.status === 200){
                    setWeather(data.data);
                }
            })
            .catch(err => console.log(err))
    };
        
    return (
        <div className='searchDiv'>
            <form onSubmit={handleSubmit}>
                <select name='cityKey' autoFocus>
                    {cities.map(city => {
                        return (
                            <option key={city.Key} value={city.Key}>{city.LocalizedName}, {city.AdministrativeArea.LocalizedName}, {city.Country.LocalizedName}</option>
                        )
                    })}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SelectCity;