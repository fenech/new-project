import * as React from "react";
import { StatelessComponent } from "react";
import * as styles from "./MapOverlay.css";
import { Link } from "react-router-dom";

interface MapOverlayProps {
}

export const MapOverlay: StatelessComponent<MapOverlayProps> = (props) => (
    <div>
        <Link to="/" className={styles.outer} />
        <div className={styles.cabinetView}>
            {props.children}
        </div>
    </div>
);
