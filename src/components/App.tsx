import * as React from "react";
import { Cabinet } from "./Cabinet";
import { Simulation } from "./Simulation";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Route } from "react-router-dom";
import { MapOverlay } from "./MapOverlay";
import { Fade } from "./Fade";
import { CollapsedView } from "./CollapsedView";

const links = [
    { source: 0, target: 1 }
]

export const App = () => (
    <Map>
        <Marker top={100} left={100} id={1} />
        <Marker top={400} left={250} id={2} />
        <Marker top={200} left={400} id={3} />
        <Route path="/cabinet" children={
            ({ match, ...props }) => (
                match &&
                <Fade>
                    <MapOverlay>
                        <Route
                            path="/cabinet/:id"
                            children={
                                ({ match, ...props }) =>
                                    match && <Cabinet id={match.params.id} />
                            }
                        />
                        <Route
                            path="/cabinet/:id/lights"
                            children={
                                ({ match, ...props }) =>
                                    match && <div style={{ alignSelf: "stretch" }} />
                            }
                        />
                    </MapOverlay>
                </Fade>
            )
        } />
    </Map>
);
