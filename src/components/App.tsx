import * as React from "react";
import { Cabinet } from "./Cabinet";
import { Simulation } from "./Simulation";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Route } from "react-router-dom";
import { MapOverlay } from "./MapOverlay";
import { Fade } from "./Fade";
import { CollapsedView } from "./CollapsedView";
import { TransitionGroup } from "react-transition-group";
import { LightsContainer } from "./Lights";

export const App = () => (
    <div style={{ height: "100%", width: "100%" }}>
        <Map>
            <Marker top={100} left={100} id={1} />
            <Marker top={400} left={250} id={2} />
            <Marker top={200} left={400} id={3} />
        </Map>
        <Route
            path="/cabinet/:id"
            children={
                ({ match, ...props }) => (
                    <Fade>
                        {
                            match && <MapOverlay>
                                <Cabinet id={match.params.id} />
                                <Route
                                    path={`${match.url}/lights`}
                                    children={(props) => <LightsContainer {...props} />}
                                />
                            </MapOverlay>
                        }
                    </Fade>
                )
            }
        />
    </div >
);
