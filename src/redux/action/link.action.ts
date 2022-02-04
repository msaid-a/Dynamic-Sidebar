import {createAction} from '../../utilities'

export const SET_MENU: string = 'TODS.SET_MENU';

export const setTodos = (todos: any[]) => {
    return createAction<any[]>(SET_MENU, todos)
}