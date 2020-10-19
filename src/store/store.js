import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import firebase from "../Config/firebaseConfig";
import config from "../Config/firebaseConfig";
import { getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(config)
  )
);

const rrfConfig = {
  userProfile: "Users",
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  // presence: 'presence', // where list of online users is stored in database
  // sessions: 'sessions'
};
