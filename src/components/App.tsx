import * as React from "react";
import { Cabinet } from "./Cabinet";
import { Simulation } from "./Simulation";
import { Map } from "./Map";
import { Marker } from "./Marker";
import { Route, Link } from "react-router-dom";
import { MapOverlay } from "./MapOverlay";
import { Fade } from "./Fade";
import { TransitionGroup } from "react-transition-group";
import { LightsContainer } from "./Lights";
import { BlurMask } from "./BlurMask";
import { BouncePanel } from "./BouncePanel";

export const App = () => (
    <div>
        <Route path="/cabinet/:id" children={
            props => (
                <BlurMask {...props}>
                    <Map>
                        <Marker top={100} left={100} id={1} />
                        <Marker top={400} left={250} id={2} />
                        <Marker top={200} left={400} id={3} />
                    </Map>
                </BlurMask>
            )
        } />
        <Route
            path="/cabinet/:id"
            children={
                ({ match, ...props }) => (
                    <Fade>
                        {
                            match &&
                            <MapOverlay>
                                <Cabinet id={match.params.id} />
                                <Route
                                    path={`${match.url}/lights`}
                                    children={props => (
                                        <BouncePanel in={!!props.match} title="Lights">
                                            <LightsContainer />
                                        </BouncePanel>
                                    )}
                                />
                                {/* <Route
                                        path={`${match.url}/ambient`}
                                        component={AmbientContainer}
                                    /> */}
                            </MapOverlay>
                        }
                    </Fade>
                )
            }
        />
    </div >
);
