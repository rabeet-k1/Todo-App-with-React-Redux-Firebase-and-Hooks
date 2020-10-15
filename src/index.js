import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from './Config/firebaseConfig';
import config from './Config/firebaseConfig';


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(config),
    // reactReduxFirebase(config, { attachAuthIsReady: true })
  )
)

const rrfConfig = {
  userProfile: 'Users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  // presence: 'presence', // where list of online users is stored in database
  // sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebsae.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
