import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import Navbar from './components/Navbar'
import history from './services/history';
import { store } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <HashRouter history={history}>
        <Navbar />
        
        <div className="App">
          <Routes />
          
          <GlobalStyle />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
