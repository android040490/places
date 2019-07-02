import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({ 
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                        uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/%D0%93%D1%80%D0%B0%D0%BC%D0%BF%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B.jpg"
                    }
                })
            };
            
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                })
            }

        default:
            return state;
    }
};

export default reducer;