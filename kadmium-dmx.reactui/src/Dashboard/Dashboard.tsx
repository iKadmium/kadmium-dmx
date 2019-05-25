import { Row, Col } from "antd";
import { VenueDashboard } from 'Dashboard/VenueDashboard/VenueDashboard';
import React from 'react';

export const Dashboard: React.FunctionComponent<{}> = () =>
{
    return (
        <Row>
            <Col lg={12} xs={24} >
                <VenueDashboard />
            </Col>
        </Row>
    )
}