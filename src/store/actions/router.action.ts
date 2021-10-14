import dispatcher from './../dispatcher'
import { push } from 'connected-react-router'

const routerAction = {
    push: (location: string) => {
        dispatcher(push(location))
    }
}

export default routerAction