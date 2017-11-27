import * as React from "react";
import { StatelessComponent } from "react";
import src from "../../img/server-rack-cabinet-hi.png";
import { Link } from "react-router-dom";
import * as styles from "./Cabinet.css";

interface CabinetProps {
    id: string;
}

export const Cabinet: StatelessComponent<CabinetProps> = (props) => {
    return (
        <div className={styles.cabinet}>
            <h1>Cabinet {props.id}</h1>
            <img src={src} />
            <Link to={`/cabinet/${props.id}/lights`}>lights</Link>
            <Link to={`/cabinet/${props.id}/lights`}>lights</Link>
        </div>
    );
}
