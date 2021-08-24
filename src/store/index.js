import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';

import convertFileReducers from './convertFileReducers';

const rootReducer = combineReducers({
    convertedFile: convertFileReducers,
});
export const store = configureStore({
    reducer: rootReducer,
    devTools: [devToolsEnhancer({realtime: true})]
});
