import * as React from "react";
import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import * as styles from "./Fade.css";

interface FadeProps {
}

interface FadeState {
    in: boolean;
}

const classNamesFog = {
    enterActive: styles.fogEnterActive
};

const classNamesFade = {
    enter: styles.fadeEnter,
    enterActive: styles.fadeEnterActive,
    exit: styles.fadeExit,
    exitActive: styles.fadeExitActive
};

export class Fade extends Component<FadeProps, FadeState> {
    constructor(props: FadeProps) {
        super(props);
        this.state = {
            in: false
        };
    }

    componentDidMount() {
        this.setState({
            in: true
        });
    }

    componentWillUnmount() {
        this.setState({
            in: false
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <CSSTransition
                    classNames={classNamesFog}
                    timeout={2000}
                    in={this.state.in}
                >
                    <div className={styles.fog} />
                </CSSTransition>
                <CSSTransition
                    classNames={classNamesFade}
                    timeout={3000}
                    in={this.state.in}
                >
                    {this.props.children}
                </CSSTransition>
            </div>
        );
    }
}
