import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "../../Styles/index.sass";
import { CategoryFetch } from "../Query/CategoryFetch";
import Blog from "./Blog";


const App = () => {
  const { loading, data, error } = useQuery(CategoryFetch);
  console.log(loading, data, error);
  if (loading) return <h1>loading</h1>;
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/blog/:id" render={id => <Blog id={id} />} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
