import React from "react";
import ReactDOM from "react-dom";
import App from "./App/Main/App";
import { Provider } from "unstated";
import * as serviceWorker from "./serviceWorker";
import { linkedStores } from "./Helpers/Stores/linkedStores";

const stores = linkedStores();

ReactDOM.render(
  <Provider inject={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
