import * as React from "react";
import { Cabinet } from "./Cabinet";
import { Simulation } from "./Simulation";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Route } from "react-router-dom";
import { CabinetView } from "./CabinetView";
import { RouteComponentProps } from "react-router";
import { withFadeTransition } from "./withFadeTransition";

const links = [
    { source: 0, target: 1 }
]

export const App = () => (
    <Map>
        <Route path="/">
            <Marker top={100} left={100} id={1} />
        </Route>
        <Route path="/">
            <Marker top={400} left={250} id={2} />
        </Route>
        <Route path="/">
            <Marker top={200} left={400} id={3} />
        </Route>
        <Route path="/cabinet/:id" component={withFadeTransition()(CabinetView)} />
        <Route path="/cabinet/:id/lights" />
    </Map>
);
