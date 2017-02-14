export default function (state = [], action){
	switch(action.type){
	case "GET_WEATHER":
		return (action.payload);
	case "somethingElse":
		return "stupid";
	}
	return [];
}