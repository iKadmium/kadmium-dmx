import { Form, InputNumber, Modal, Select } from 'antd';
import { FixtureViewerQuery_fixtures } from 'generated/FixtureViewerQuery';
import React, { useState } from 'react';

export interface IAddFixturesResult
{
    quantity: number;
    address: number;
    group: string;
    fixtureType: FixtureViewerQuery_fixtures;
}

export interface IAddFixturesProps
{
    groups: string[];
    fixtures: FixtureViewerQuery_fixtures[];
    onOk: (result: IAddFixturesResult) => void;
    onCancel: () => void;
}

export const AddFixtures: React.FC<IAddFixturesProps> = (props) =>
{
    const [quantity, setQuantity] = useState<number>(1);
    const [address, setAddress] = useState<number>(1);
    const [group, setGroup] = useState<string>(props.groups[0]);
    const [fixtureIndex, setFixtureIndex] = useState<number>(0);

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const handleOk = () =>
    {
        const result: IAddFixturesResult = {
            address,
            quantity,
            group,
            fixtureType: props.fixtures[fixtureIndex]
        };
        props.onOk(result);
    };

    return (
        <Modal
            title="Add Fixtures"
            visible={true}
            onOk={handleOk}
            onCancel={props.onCancel}
        >
            <Form {...formItemLayout} >
                <Form.Item label="Quantity">
                    <InputNumber value={quantity} min={1} max={512} defaultValue={1} onChange={setQuantity} />
                </Form.Item>
                <Form.Item label="Address">
                    <InputNumber value={address} min={1} max={512} defaultValue={1} onChange={setAddress} />
                </Form.Item>
                <Form.Item label="Group">
                    <Select onChange={setGroup} value={group}>
                        {props.groups.map(x => <Select.Option key={x} value={x}>{x}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item label="Type">
                    <Select onChange={setFixtureIndex} value={fixtureIndex}>
                        {props.fixtures.map((fixture, index) => <Select.Option key={index} value={index}>{fixture.manufacturer} {fixture.model}</Select.Option>)}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}