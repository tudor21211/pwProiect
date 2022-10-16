import Pay from "./Pay"
import Success from "./Success"
import React from "react"
import { BrowserRouter,Route ,Router, Switch } from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pay">
                <Pay />
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;