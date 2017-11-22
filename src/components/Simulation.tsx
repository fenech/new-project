import * as React from "react";
import { Children, Component, cloneElement, ReactElement, ReactChild } from "react";
import * as d3 from "d3";
import { ReactFauxDomProps, withFauxDOM } from "react-faux-dom";
import * as styles from "./Simulation.css";
import { TransitionGroup } from "react-transition-group";
import { Link } from "../data/Link";
import { Particle } from "./Particle";

interface SimulationProps {
    links: Link[];
}

interface SimulationState {

}

interface N {
    node: ReactChild;
    x: number;
    y: number;
}

const width = 960;
const height = 600;

export class Simulation extends Component<SimulationProps> {
    private simulation: d3.Simulation<N, Link>;

    componentWillMount() {
        const nodes: N[] = Children.map(this.props.children,
            child => ({ node: child, x: null, y: null }));

        this.simulation = d3.forceSimulation<N, Link>()
            .force("link", d3.forceLink())
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2))
            .nodes(nodes);

        this.simulation.on("tick", this.tick)
            .force<d3.ForceLink<N, Link>>("link")
            .links(this.props.links);
    }

    private tick = () => {
        this.setState({

        });
    };

    render() {
        return (
            <svg width={width}
                height={height}>
                <TransitionGroup component="g">
                    {
                        Children.map(this.props.children,
                            (child: ReactElement<any>, index) => (
                                <Particle x={0} y={index}>
                                    {child}
                                </Particle>
                            )
                        )
                    }
                </TransitionGroup>
            </svg>
        );
    }
}
