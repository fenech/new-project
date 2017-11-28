import * as React from "react";
import { StatelessComponent } from "react";
import { CSSTransition } from "react-transition-group";
import * as styles from "./BouncePanel.css";
import { Panel } from "react-bootstrap";

interface BouncePanelProps {
    in: boolean;
    title: string;
}

const classNames = {
    enterActive: styles.bounceEnterActive,
    exitActive: styles.bounceExitActive
};

export const BouncePanel: StatelessComponent<BouncePanelProps> = props => (
    <CSSTransition
        in={props.in}
        classNames={classNames}
        timeout={{
            enter: 1000,
            exit: 750
        }}
        unmountOnExit
    >
        <Panel header={<h2>{props.title}</h2>}>
            {props.children}
        </Panel>
    </CSSTransition>
);
