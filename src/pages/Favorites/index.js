import React from 'react';

import { Container } from './styles';
import { favoritesStorageName } from '../../utils';

function Favorites() {
    const items = localStorage.getItem(favoritesStorageName);
    const pokemons = items !== null ? JSON.parse(items) : [];

    function removeFavorite(id, name) {
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id === id) {
                pokemons.splice(i, 1);

                localStorage.setItem(favoritesStorageName, JSON.stringify(pokemons));

                alert(`${name} removed from the list of favorites`);

                window.location.reload();
            }
        }
    }
    
    return (
        <Container>
            <h1>Favorites</h1>

            {pokemons.length > 0 && (
                <ul className="list-group">
                    {pokemons.map(pokemon => (
                        <li className="list-group-item" key={pokemon.id}>
                            <div className="info">
                                <img src={pokemon.img} alt={pokemon.name} />

                                <span>{pokemon.name}</span>
                            </div>

                            <span
                                className="badge badge-danger badge-pill"
                                onClick={() => removeFavorite(pokemon.id, pokemon.name)}
                            >X</span>
                        </li>
                    ))}
                </ul>
            )}

            {pokemons.length === 0 && (
                <div className="alert alert-primary" role="alert">
                    <h2>The list is empty</h2>

                    <p>Write a pokemon name in the search field and click in the button "Search".</p>
                </div>
            )}
        </Container>
    );
}

export default Favorites;