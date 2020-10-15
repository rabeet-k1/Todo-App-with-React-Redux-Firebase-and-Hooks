import authReducer from './authReducer';
import todosReducer from './todosReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebsae: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    todos: todosReducer,
})

export default rootReducer;