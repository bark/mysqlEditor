// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import database from './database';

const rootReducer = combineReducers({
  database,
  counter,
  routing
});

export default rootReducer;
