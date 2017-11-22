/// <reference path="typings.d.ts" />

import * as React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import { HashRouter } from "react-router-dom";

document.addEventListener("DOMContentLoaded", () => {
    render((
        <HashRouter>
            <App />
        </HashRouter>
    ), document.getElementById("app"));
});
