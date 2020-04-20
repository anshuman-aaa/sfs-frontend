import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import React from "react";
import { ApolloProvider } from 'react-apollo';
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./App/Main/App";
import { linkedStores } from "./Helpers/Stores/linkedStores";
import * as serviceWorker from "./serviceWorker";
import "./Styles/index.sass";



const stores = linkedStores();

const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache() 
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

