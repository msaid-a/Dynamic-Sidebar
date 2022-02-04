import {SET_MENU} from '../action/link.action'
import {linkDefaultState, linkReduxState} from '../state/link.state'
import {AnyAction} from 'redux'

const todosReducer = (state : linkReduxState = linkDefaultState, action : AnyAction) => {
    switch (action.type) {
        case SET_MENU:
          return {
            ...state,
            todos: action.payload
          };
        default:
          return state;
      }
}

export default todosReducer