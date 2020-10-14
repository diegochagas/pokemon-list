import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Results from '../pages/Results';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/results/:name" component={Results} />
            <Route component={Home} />
        </Switch>
    );
}