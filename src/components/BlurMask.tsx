import * as React from "react";
import { StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { CSSTransition, TransitionGroup, Transition } from "react-transition-group";
import * as styles from "./BlurMask.css";

interface BlurMaskProps extends RouteComponentProps<any> {
}

const timeout = {
    enter: 1000,
    exit: 1000
};

const classNames = {
    enterActive: styles.enterActive,
    exitActive: styles.exitActive
};

export const BlurMask: StatelessComponent<BlurMaskProps> = (props) => {
    return (
        <CSSTransition
            classNames={classNames}
            timeout={timeout}
            in={!!props.match}
        >
            <div className={[styles.container, props.match && styles.blurMask].join(" ")}>
                {props.children}
            </div>
        </CSSTransition>
    );
}
