import * as React from "react";
import { StatelessComponent, Component } from "react";

interface AmbientProps {

}

export const Ambient: StatelessComponent<AmbientProps> = props => {
    return (
        <div>
            <h2>Ambient</h2>
        </div>
    );
};

export class AmbientContainer extends Component<{}> {
    render() {
        return (
            <Ambient />
        );
    }
}
