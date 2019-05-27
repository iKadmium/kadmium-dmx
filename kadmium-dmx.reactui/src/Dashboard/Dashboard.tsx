import { Row, Col } from "antd";
import { VenueDashboard } from 'Dashboard/VenueDashboard/VenueDashboard';
import React from 'react';
import { ListenerDashboard } from "./ListenerDashboard/ListenerDashboard";
import "./Dashboard.css";

export const Dashboard: React.FunctionComponent<{}> = () =>
{
    return (
        <Row>
            <Col lg={11} xs={24} >
                <VenueDashboard />
            </Col>
            <Col lg={12} xs={24} >
                <ListenerDashboard />
            </Col>
        </Row>
    )
}