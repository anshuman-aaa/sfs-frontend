import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import BlogSample from "./Blog/Blog";
import Category from "./Category";
import CategoryList from "./CategoryList";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={CategoryList} />
                    <Route exact path="/category/:id" component={Category} />
                    <Route exact path="/blog/:id" component={BlogSample} />
                    {/* <Route exact path="/showBlog" component={BlogSample} /> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
