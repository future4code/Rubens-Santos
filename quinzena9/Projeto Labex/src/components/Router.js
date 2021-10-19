import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Administrative } from "./Pages/Administrative";
import { Home } from "./Pages/Home";
import { Trips } from "./Pages/ListTrips";
import { Login } from "./Pages/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/adm-area'>
                    <Administrative />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/trips'>
                    <Trips />
                </Route>

                <Route exact path='/create-trip'>
                </Route>

                <Route exact path='/trip-details'>
                </Route>
            </Switch>

        </BrowserRouter>

    )
}