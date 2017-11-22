import * as React from "react";
import * as styles from "./Map.css";
import { StatelessComponent } from "react";

export const Map: StatelessComponent<{}> = (props) => {
    return (
        <div className={styles.map}>
            {props.children}
        </div>
    );
};
