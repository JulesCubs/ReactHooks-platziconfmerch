import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { Home, CheckOut, Information, Payment, Success, NotFound } from "../containers";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

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
    const initialState = useInitialState();
    const isEmpty = Object.keys(initialState.state).length;
    return (
        <>
            {isEmpty > 0 
            ? (<AppContext.Provider value={initialState}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/checkout" component={CheckOut} />
                                <Route exact path="/checkout/information" component={Information} />
                                <Route exact path="/checkout/payment" component={Payment} />
                                <Route exact path="/checkout/success" component={Success} />
                                <Route component={NotFound} />
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </AppContext.Provider>)
            : <h1>Cargando ... </h1>}
        </>
    )
}

export default App;