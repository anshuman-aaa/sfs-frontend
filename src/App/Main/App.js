import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import BlogSample from "../Blog/Component/Blog";
import Category from "../Blog/Category";
import Album from "../Common/Album";
import CategoryList from "../Blog/CategoryList";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={CategoryList} />
                    <Route exact path="/category/" component={Album} />
                    <Route exact path="/category/:id" component={Category} />
                    <Route exact path="/blog/:id" component={BlogSample} />
                    {/* <Route exact path="/showBlog" component={BlogSample} /> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
