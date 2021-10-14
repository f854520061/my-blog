import { combineReducers, Reducer } from 'redux'
import { History, LocationState } from 'history'
import { connectRouter, RouterState } from './router.state'
import counts, { CountTypes } from "./count.state"
import todos, { TodosTypes } from "./todos.state"

export interface rootReducerTypes {
    router: Reducer<RouterState<LocationState>>,
    counts: CountTypes,
    todos: TodosTypes
}

const createRootReducer = (history: History<LocationState>) => combineReducers({
    router: connectRouter(history),
    counts,
    todos
})

export default createRootReducer