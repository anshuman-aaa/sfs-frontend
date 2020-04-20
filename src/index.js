import React from "react";
import ReactDOM from "react-dom";
import App from "./App/Main/App";
import "./Styles/index.sass";
import { Provider } from "unstated";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import * as serviceWorker from "./serviceWorker";
import { linkedStores } from "./Helpers/Stores/linkedStores";

const stores = linkedStores();

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql"
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider inject={stores}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById("root")
);

serviceWorker.unregister();

