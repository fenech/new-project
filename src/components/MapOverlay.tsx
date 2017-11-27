import * as React from "react";
import { StatelessComponent } from "react";
import * as styles from "./MapOverlay.css";
import { Link } from "react-router-dom";
import { Fade } from "./Fade";

interface MapOverlayProps {
}

export const MapOverlay: StatelessComponent<MapOverlayProps> = (props) => (
    <div className={styles.mapOverlay}>
        <Link className={styles.link} to="/" />
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
);
