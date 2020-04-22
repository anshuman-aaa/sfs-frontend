import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import Blog from "./Blog";
import Category from "./Category";
import CategoryList from "./CategoryList";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    {/* <Route path='/edit/:id' component={Edit} />
                    <Route path='/create' component={Create} />
                    <Route path='/show/:id' component={Show} /> */}
                    {/* <Route render={() => <Redirect to="/" />} /> */}
                    <Route exact path="/" component={CategoryList} />
                    <Route exact path="/category/:name" component={Category} />
                    <Route exact path="/blog/:id" component={Blog} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
