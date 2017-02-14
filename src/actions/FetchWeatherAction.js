import $ from 'jquery';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=482c145ce8edf1d69ea5168f9d06460c&zip=';

export default function GetTheWeather(zipCode){
	const fullWeatherUrl = weatherUrl + zipCode;
	const thePromise = $.getJSON(fullWeatherUrl);
	return{
		type: 'GET_WEATHER',
		payload: thePromise
	}
}