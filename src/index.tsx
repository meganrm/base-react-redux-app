import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { createReduxStore } from "./util";

import App from "./containers/App";

const store = createReduxStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("visual-cell")
);
