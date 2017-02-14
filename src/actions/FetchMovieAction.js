import $ from 'jquery';

const movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=";

export default function GetTheMovies(movie){
	const fullMovieUrl = movieUrl + movie;
	const thePromise = $.getJSON(fullMovieUrl);
	return{
		type: 'GET_MOVIE',
		payload: thePromise
	}
}