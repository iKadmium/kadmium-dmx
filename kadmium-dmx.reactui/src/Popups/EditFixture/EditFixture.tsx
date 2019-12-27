import { Form, InputNumber, Modal, Select } from 'antd';
import { FixtureViewerQuery_fixtures } from 'generated/FixtureViewerQuery';
import React, { useState } from 'react';

export interface IEditFixturesResult
{
    address: number;
    group: string;
    fixtureType: FixtureViewerQuery_fixtures;
}

export interface IEditFixturesProps
{
    groups: string[];
    fixtures: FixtureViewerQuery_fixtures[];

    initialGroup: string;
    initialManufacturer: string;
    initialModel: string;
    initialAddress: number;

    onOk: (result: IEditFixturesResult) => void;
    onCancel: () => void;
}

export const EditFixture: React.FC<IEditFixturesProps> = (props) =>
{
    const [address, setAddress] = useState<number>(props.initialAddress);
    const [group, setGroup] = useState<string>(props.initialGroup);
    const [fixtureIndex, setFixtureIndex] = useState<number>(props.fixtures.findIndex(x => x.manufacturer === props.initialManufacturer && x.model === props.initialModel));

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
        const result: IEditFixturesResult = {
            address,
            group,
            fixtureType: props.fixtures[fixtureIndex]
        };
        props.onOk(result);
    };

    return (
        <Modal
            title="Edit Fixture"
            visible={true}
            onOk={handleOk}
            onCancel={props.onCancel}
        >
            <Form {...formItemLayout} >
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