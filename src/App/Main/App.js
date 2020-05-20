import { default as React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import Category from "../Blog/Category";
import BlogSample from "../Blog/Component/Blog";
import Landing from '../landing_page/src/components/Landing';
import Register from "../Auth/Register"
import Login from "../Auth/Login"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/category/:id" component={Category} />
                <Route exact path="/blog/:id" component={BlogSample} />
                <Route exact path="*" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
};


export default App;
