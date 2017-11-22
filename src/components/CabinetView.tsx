import * as React from "react";
import { Component } from "react";
import * as styles from "./CabinetView.css";
import src from "../../img/server-rack-cabinet-hi.png";
import { Link } from "react-router-dom";

interface CabinetViewProps {
    match: {
        params: {
            id: string;
        };
    };
}

export class CabinetView extends Component<CabinetViewProps> {
    render() {
        return (
            <div>
                <Link to="/" className={styles.outer} />
                <div className={styles.cabinetView}>
                    <h1>Cabinet {this.props.match.params.id}</h1>
                    <img src={src} />
                </div>
            </div>
        );
    }
}
