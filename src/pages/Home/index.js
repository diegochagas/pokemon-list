import React from 'react';

// import { Container } from './styles';

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Pokemon list</h1>
            
            <p className="lead">Web project to search for a pokemon and add it to a favorite list.</p>
            
            <hr className="my-4" />
            
            <p>Write a pokemon name in the search field and click in the button "Search".</p>
        </div>
    );
}

export default Home;