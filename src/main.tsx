// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </React.StrictMode>
);
