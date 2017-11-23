import * as React from "react";
import { StatelessComponent, Component } from "react";
import { Route, RouteComponentProps, Link } from "react-router-dom";

interface MarkerProps {
    id: number;
    top: number;
    left: number;
}

export class Marker extends Component<MarkerProps> {
    render() {
        return (
            <Link to={`/cabinet/${this.props.id}`}>
                <svg
                    height={60} width={25}
                    style={{ position: "absolute", top: this.props.top, left: this.props.left }}
                >
                    <rect height={60} width={25} fill="#333" stroke="#222" />
                </svg>
            </Link>
        );
    }
}
