import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import React from "react";
import { ApolloProvider } from 'react-apollo';
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import { linkedStores } from "./Helpers/Stores/linkedStores";
// import App from "./App/Main/App";
import App from './landing_page/src/components/App';
// import "./Styles/index.sass";
import './landing_page/styles/styles.css';
import * as serviceWorker from "./serviceWorker";


const stores = linkedStores();

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BASEURL + "/graphql/"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider inject={stores}>
            <App />
        </Provider>
    </ApolloProvider>
    ,
    document.getElementById("root")
);

serviceWorker.unregister();

