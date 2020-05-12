import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Todo from '../page/Todo'
function Router(){
return(
<BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/todo">
            <Todo/>
        </Route>
    </Switch>
</BrowserRouter>
)
}
export default Router

