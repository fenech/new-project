import * as React from "react";
import { Component } from "react";
import { withFauxDOM, ReactFauxDomProps } from "react-faux-dom";
import * as d3 from "d3";

interface CabinetProps {
}

interface ExtraProps {
    group: SVGGElement;
}

class CabinetComponent extends Component<CabinetProps & ReactFauxDomProps> {
    componentDidMount() {
        const faux = this.props.connectFauxDOM("g", "group");

        d3.select(faux)
            .append("rect")
            .attr("height", 30)
            .attr("width", 20)
            .style("fill", "red")
            .transition()
            .duration(5000)
            .style("fill", "black");

        this.props.animateFauxDOM(5000);
    }

    render() {
        const props = this.props as ExtraProps;

        return (
            <g>{props.group}</g>
        );
    }
}

export const Cabinet = withFauxDOM(CabinetComponent);
