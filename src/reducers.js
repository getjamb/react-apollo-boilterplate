import { combineReducers } from 'redux';

import client from './apolloClient';

const rootReducer = combineReducers({
  apollo: client.reducer(),
});

export default rootReducer;
