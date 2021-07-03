import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, CheckOut, Information, Payment, Success, NotFound } from "../containers" 
// Tambien se puede llamar componente por componente 
// Asi tambien se puede => import * as Page from '../pages' y se debe llamar en route de la siguinte manera
    {/* <Route exact path="/">
        <Page.Home />
            </Route>
        <Route exact path="/checkout">
            <Page.CheckOut />
        </Route>
        <Route exact path="/checkout/information">
            <Page.Information />
        </Route>
        <Route exact path="/checkout/payment">
            <Page.Payment />
        </Route>
        <Route exact path="/checkout/success">
            <Page.Success />
        </Route>
        <Route>
            <Page.NotFound />
        </Route> 
    */}

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={CheckOut} />
                <Route exact path="/checkout/information" component={Information} />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;