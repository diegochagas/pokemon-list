import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPokemon } from '../../store/modules/pokemon/actions';
import { Container } from './styles';
import { favoritesStorageName } from '../../utils';
import history from '../../services/history';

function Results({ match }) {
    const { name } = match.params;
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const items = localStorage.getItem(favoritesStorageName);
    const pokemons = items !== null ? JSON.parse(items) : [];

    useEffect(() => {
        async function getPokemon() {
            await dispatch(fetchPokemon(name));
        }

        getPokemon();
    }, [dispatch, name]);

    function addToFavorites() {
        let isFavorite = false;

        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id === pokemon.id) {
                isFavorite = true;
            }
        }

        if (isFavorite) {
            alert(`${pokemon.name} is already in the list of favorites`);
        } else {
            pokemons.push({ id: pokemon.id, name: pokemon.name, img: pokemon.sprites.front_default });

            localStorage.setItem(favoritesStorageName, JSON.stringify(pokemons));

            alert(`${pokemon.name} added to the list of favorites`);

            history.push('/#/favorites');

            window.location.reload();
        }
    }

    return (
        <Container>
            {pokemon.status && (
                <div className="card" style={{ width: '18rem' }}>
                    <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        
                        <p className="card-text">Type: {pokemon.types[0].type.name}</p>

                        <button className="btn btn-primary" onClick={addToFavorites}>Add to favorites</button>
                    </div>
                </div>
            )}

            {!pokemon.status && !pokemon.message && <progress />}

            {!pokemon.status && <div className="alert alert-danger" role="alert">{pokemon.message}</div>}
        </Container>
    );
}

export default Results;