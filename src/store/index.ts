import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducer'

export const history = createBrowserHistory()

const store = createStore(
  createRootReducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

export default store