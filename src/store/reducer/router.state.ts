import {
    Action,
    Location,
    LocationState,
} from 'history'

export interface RouterLocation<S> extends Location<S> {
    query: Record<string, string>
}

export type RouterActionType = Action;

export interface RouterState<S = LocationState> {
    location: RouterLocation<S>
    action: RouterActionType
}

export { connectRouter } from 'connected-react-router'