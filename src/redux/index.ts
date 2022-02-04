import { createStore, combineReducers } from 'redux';
import linkReducer from './reducer/link.action';
import { linkReduxState } from './state/link.state';

export interface AppReduxState {
    link: linkReduxState,
}

const rootReducer = combineReducers<AppReduxState>({
    link: linkReducer,
})


export const store = createStore(rootReducer)