import { default as React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import Category from "../Blog/Category";
import BlogSample from "../Blog/Component/Blog";
import Landing from '../landing_page/src/components/Landing';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/category/:id" component={Category} />
                <Route exact path="/blog/:id" component={BlogSample} />
                {/* <Route exact path="/showBlog" component={BlogSample} /> */}
            </Switch>
        </BrowserRouter>
    );
};


export default App;
