import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise-middleware';

import weather from "./ducks/weather";

// this tells redux that we want middleware applied on every action that is dispatched
export default createStore( weather, null, applyMiddleware(promiseMiddleware()) );
