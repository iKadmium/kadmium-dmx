import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';

export interface IAddUniversePopupProps
{
    onOkClick: (name: string, universeId: number) => void;
    onCancelClick: () => void;
    defaultUniverseNumber: number;
}

export const AddUniversePopup: React.FC<IAddUniversePopupProps> = (props) =>
{
    const [name, setName] = useState<string>(`Universe ${props.defaultUniverseNumber}`);
    const [universeId, setUniverseId] = useState<number>(props.defaultUniverseNumber);
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

    return (
        <Modal
            visible={true}
            title="Add Universe"
            onOk={() => props.onOkClick(name, universeId)}
            onCancel={props.onCancelClick}
        >
            <Form {...formItemLayout}>
                <Form.Item label="Name">
                    <Input value={name} onChange={(event) => setName(event.target.value)} />
                </Form.Item>
                <Form.Item label="Universe ID">
                    <InputNumber value={universeId} onChange={setUniverseId} min={1} max={63999} />
                </Form.Item>
            </Form>
        </Modal>
    );
}