import * as React from "react";
import { StatelessComponent, ReactElement } from "react";
import { Grid, Row, Col } from "react-bootstrap";

interface CollapsedViewProps {
    left: ReactElement<any>;
    right: ReactElement<any>;
}

export const CollapsedView: StatelessComponent<CollapsedViewProps> = (props) => {
    return (
        <Grid>
            <Row>
                <Col md={16}>
                    {props.left}
                </Col>
                <Col md={8}>
                    {props.right}
                </Col>
            </Row>
        </Grid>
    );
};
