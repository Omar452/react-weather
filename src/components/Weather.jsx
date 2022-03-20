import day from '../img/day.svg';
import night from '../img/night.svg';

const Weather = ({weather, city}) => {
    let dayImg = weather[0].IsDayTime ? day : night;
    let iconNumber = weather[0].WeatherIcon;

    return (
        <div className='weatherDiv'>
            <div className='weatherImg'>
                <img src={dayImg} alt="time"/>
            </div>
            <div className='weatherIcon'>
                <img src={require('../img/icons/'+iconNumber+'.svg')} alt="time"/>
            </div>
            <div>
                <p className='city'>{city}</p>
                <p className='temperature'>{weather[0].Temperature.Metric.Value}&deg;C</p>
            </div>
        </div>
    );
}

export default Weather;