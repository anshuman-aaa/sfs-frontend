import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import React from "react";
import { ApolloProvider } from 'react-apollo';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from "unstated";
import App from "./App/Main/App";
import { linkedStores } from "./Helpers/Stores/linkedStores";
import * as serviceWorker from "./serviceWorker";



const stores = linkedStores();

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider inject={stores}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
