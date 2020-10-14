import { FETCH_POKEMON, FETCH_POKEMON_FAILURE } from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POKEMON:
            return { ...action.payload, status: true };
        case FETCH_POKEMON_FAILURE:
            return { ...action.payload, status: false };
        default:
            return state;
    }
};