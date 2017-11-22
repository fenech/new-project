import * as React from "react";
import { StatelessComponent, Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { History } from "history";
import { withRouter } from "react-router";

interface MarkerProps {
    id: number;
    top: number;
    left: number;
}

export class MarkerComponent extends Component<MarkerProps & RouteComponentProps<any>> {
    render() {
        return (
            <svg
                height={60} width={25}
                style={{ position: "absolute", top: this.props.top, left: this.props.left }}
                onClick={() => this.props.history.push(`/cabinet/${this.props.id}`)}
            >
                <rect height={60} width={25} fill="#333" stroke="#222" />
            </svg>
        );
    }
}

export const Marker = withRouter<MarkerProps>(MarkerComponent);
