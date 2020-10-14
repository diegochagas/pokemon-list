import thunk from 'redux-thunk';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';

export const middlewares = [thunk];

const store = createStore(rootReducer, middlewares);

export { store };