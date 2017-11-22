import * as React from "react";
import { Transition } from "react-transition-group";
import { createElement } from "react";

const defaultDuration = 300;

const defaultStyle = {
    transition: `opacity ${defaultDuration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

export const withFadeTransition = <P extends { in: boolean }, S = {}>(duration: number = defaultDuration, elementType: keyof ElementListTagNameMap = "div") =>
    (wrappedComponent: React.Component<any, S> | React.StatelessComponent<any>) =>
        class extends React.Component<P, S> {
            render() {
                return createElement(
                    Transition,
                    {
                        in: this.props.in,
                        timeout: duration
                    },
                    ({ state }: { state: "entering" | "entered" }) =>
                        createElement(elementType,
                            {
                                style: {
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }
                            },
                            wrappedComponent));
            }
        };
