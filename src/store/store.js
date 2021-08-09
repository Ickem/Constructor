import {createStore, compose} from 'redux';
import {rootReducer} from './reducers/rootReducer';

const configureStore = () => (
    createStore(
        rootReducer,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
);

const store = configureStore();

export default store;