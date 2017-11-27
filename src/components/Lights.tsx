import * as React from "react";
import { StatelessComponent, Component } from "react";
import * as styles from "./Lights.css";
import { RouterProps, RouteComponentProps } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Form, FormGroup, Col, ControlLabel, FormControl, Panel } from "react-bootstrap";

interface LightsProps {
    toggleButton: { (): void };
    buttonIsActive: boolean;
    shouldRenderChildren: boolean;
}

const classNames = {
    enterActive: styles.lightsEnterActive,
    exitActive: styles.lightsExitActive
};

export const Lights: StatelessComponent<LightsProps> = (props) => {
    return (
        <TransitionGroup className={styles.lights}>
            {
                props.shouldRenderChildren &&
                <CSSTransition
                    classNames={classNames}
                    timeout={{
                        enter: 1000,
                        exit: 750
                    }}
                    unmountOnExit
                >
                    <Panel header={<h2>Lights</h2>}>
                        <Form horizontal>
                            <FormGroup controlId="first">
                                <Col componentClass={ControlLabel} sm={6}>
                                    Dimmer switch
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="range" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="second">
                                <Col componentClass={ControlLabel} sm={6}>
                                    On/Off
                                </Col>
                                <Col sm={4}>
                                    <Button active={props.buttonIsActive} onClick={props.toggleButton}>
                                        {props.buttonIsActive ? "ON" : "OFF"}
                                    </Button>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="third">
                                <Col componentClass={ControlLabel} sm={6}>
                                    Dimmer switch
                                </Col>
                                <Col sm={4}>
                                    <FormControl type="range" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="fourth">
                                <Col componentClass={ControlLabel} sm={6}>
                                    On/Off
                                </Col>
                                <Col sm={4}>
                                    <Button active={props.buttonIsActive} onClick={props.toggleButton}>
                                        {props.buttonIsActive ? "ON" : "OFF"}
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Panel>
                </CSSTransition>
            }
        </TransitionGroup>
    );
};

interface LightsContainerProps extends RouteComponentProps<{}> {

}

interface LightsContainerState {
    buttonIsActive: boolean;
}

export class LightsContainer extends Component<LightsContainerProps, LightsContainerState> {
    constructor(props: LightsContainerProps) {
        super(props);
        this.state = {
            buttonIsActive: false
        };
    }

    private toggleButton = () => this.setState({ buttonIsActive: !this.state.buttonIsActive });

    render() {
        return (
            <Lights
                toggleButton={this.toggleButton}
                buttonIsActive={this.state.buttonIsActive}
                shouldRenderChildren={!!this.props.match}
            />
        );
    }
}
