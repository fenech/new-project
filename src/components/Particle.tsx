import { TransitionProps } from "react-transition-group/Transition";
import { Component } from "react";
import { Link } from "../data/Link";

interface ParticleProps {
    x: number;
    y: number;
}

export class Particle extends Component<ParticleProps> {
    render() {
        const { x, y } = this.props;

        return (
            <g transform={`translate(${x}, ${y})`}>
                {this.props.children}
            </g>
        );
    }
}
