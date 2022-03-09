
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import RootReducer from '../contactRedux/rootReducer';
import rootSaga from '../saga/rootSaga';


const sagaMiddleware = createSagaMiddleware()

const UserStore = createStore(
    RootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default UserStore
