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
            <div className={styles.image}>
                <img src={src} />
                <div className={`${styles.link} aaa`}>
                    <Link to={`/cabinet/${props.id}/lights`}>lights</Link>
                </div>
                <div className={`${styles.link} bbb`}>
                    <Link to={`/cabinet/${props.id}/ambient`}>ambient</Link>
                </div>
            </div>
        </div>
    );
}
