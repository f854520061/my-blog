import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { routes } from './routes'
import Layout from './../components/layout'

export default function router() {
    return (
        <Router>
            <Layout>
                <Switch>
                    {
                        routes.map((item: any) => {
                            return <Route {...item} />
                        })
                    }
                </Switch>
            </Layout>
        </Router>
    )
}