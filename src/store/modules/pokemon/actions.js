import api from '../../../services/api';

export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemon = name => async dispatch => {
    try {
        const response = await api.get(`/pokemon/${name}`);
      
        dispatch({ type: FETCH_POKEMON, payload: response.data });
    } catch (err) {
        dispatch({ type: FETCH_POKEMON_FAILURE, payload: { err, message: `Pokemon ${name} not found` } });
    }
};