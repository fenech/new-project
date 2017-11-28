import * as React from "react";
import { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as styles from "./Fade.css";

interface FadeProps {
}

const classNamesFade = {
    enter: styles.fadeEnter,
    enterActive: styles.fadeEnterActive,
    exit: styles.fadeExit,
    exitActive: styles.fadeExitActive
};

const timeout = {
    enter: 1000,
    exit: 1000
};

export class Fade extends Component<FadeProps> {
    constructor(props: FadeProps) {
        super(props);
    }

    render() {
        return (
            <TransitionGroup>
                {
                    this.props.children && [
                        <CSSTransition
                            key="fade"
                            classNames={classNamesFade}
                            timeout={timeout}
                            unmountOnExit
                        >
                            {this.props.children}
                        </CSSTransition>
                    ]
                }
            </TransitionGroup>
        );
    }
}
