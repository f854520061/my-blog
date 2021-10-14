import About from "../views/about"
import Home from "../views/home"

export const routes = [
    {
        path: '/',
        key: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        key: '/about',
        component: About
    }
]