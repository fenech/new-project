import * as React from "react";
import { StatelessComponent } from "react";
import { RouteComponentProps } from "react-router";
import { CSSTransition, TransitionGroup, Transition } from "react-transition-group";
import * as styles from "./BlurMask.css";

interface BlurMaskProps extends RouteComponentProps<any> {
}

const timeout = {
    enter: 1000,
    exit: 10000
};

const classNames = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exitActive: styles.exitActive
};

export const BlurMask: StatelessComponent<BlurMaskProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                {props.children}
            </div>
            <TransitionGroup>
                {
                    props.match &&
                    <CSSTransition
                        classNames={classNames}
                        timeout={timeout}
                    >
                        <div className={`${styles.container} ${styles.blurMask}`}>
                            {props.children}
                        </div>
                    </CSSTransition>
                }
            </TransitionGroup>
        </div>
    );
}
