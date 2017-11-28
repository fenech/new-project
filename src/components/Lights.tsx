import * as React from "react";
import { StatelessComponent, Component } from "react";
import { RouterProps, RouteComponentProps } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Form, FormGroup, Col, ControlLabel, FormControl, Panel } from "react-bootstrap";

interface LightsProps {
    toggleButton: { (): void };
    buttonIsActive: boolean;
}

export const Lights: StatelessComponent<LightsProps> = props => {
    return (
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
    );
};

interface LightsContainerProps {
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
            />
        );
    }
}
