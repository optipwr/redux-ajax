export default function (state = [], action){
	// console.log(action);
	switch(action.type){
		case 'GET_MOVIE':
		console.log("YayMovie request made");
		return action.payload;
	}
	return state;
}