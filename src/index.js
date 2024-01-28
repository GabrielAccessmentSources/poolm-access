import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import store from "./ducks/store";
import client from "./config/apollo";

import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>
);

reportWebVitals();
