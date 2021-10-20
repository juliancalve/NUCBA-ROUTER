import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from '../pages/Login/Login';
import ProductId from "../pages/Products/ProductsId/ProductsId";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/register" component={Register} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/products" component={Products} />
                <Route path="/products/:id" component={ProductId} />
                <Redirect to="/login" />
                {/* <Route>
                    <Login />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
