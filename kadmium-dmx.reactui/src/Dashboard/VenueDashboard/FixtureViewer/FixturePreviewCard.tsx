import { useMutation } from '@apollo/react-hooks';
import { Card, Icon, message, Modal } from 'antd';
import { DeleteFixture, DeleteFixtureVariables } from 'generated/DeleteFixture';
import { EditFixture as EditFixtureMutation, EditFixtureVariables } from 'generated/EditFixture';
import { FixtureViewerQuery_activeUniverse_fixtures, FixtureViewerQuery_fixtures } from 'generated/FixtureViewerQuery';
import gql from 'graphql-tag';
import { EditFixture, IEditFixturesResult as IEditFixtureResult } from 'Popups/EditFixture';
import React, { useState } from 'react';
import { Link } from 'react-navi';
import styled from 'styled-components';
import { FixturePreviewWindow } from './FixtureController/FixturePreviewWindow';

export interface IFixturePreviewCardProps
{
    fixture: FixtureViewerQuery_activeUniverse_fixtures;
    fixtures: FixtureViewerQuery_fixtures[];
    groups: string[];
    dmx: number[];
    universeId: number;
    onUpdate: () => void;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const deleteFixtureMutation = gql`
    mutation DeleteFixture($universeId: Int!, $fixture: Int!)
    {
        deleteFixture(universeId: $universeId, fixture: $fixture)
        {
            name
        }
    }
`;

const editFixtureMutation = gql`
    mutation EditFixture($universeId: Int!, $oldAddress: Int!, $newAddress: Int!, $group: String!, $manufacturer: String!, $model: String!)
    {
        editFixture(universeId: $universeId, oldAddress: $oldAddress, newAddress: $newAddress, group: $group, manufacturer: $manufacturer, model: $model) {
            name
        }
    }
`;

export const FixturePreviewCard: React.FC<IFixturePreviewCardProps> = (props) =>
{
    const [confirmDeleteVisible, setConfirmDeleteVisible] = useState<boolean>(false);
    const [deleteFixture] = useMutation<DeleteFixture, DeleteFixtureVariables>(deleteFixtureMutation);
    const [editFixtureVisible, setEditFixtureVisible] = useState<boolean>(false);
    const [editFixture] = useMutation<EditFixtureMutation, EditFixtureVariables>(editFixtureMutation);

    const handleDeleteConfirm = async () =>
    {
        setConfirmDeleteVisible(false);
        const result = await deleteFixture({
            variables: {
                universeId: props.universeId,
                fixture: props.fixture.address
            }
        });
        if (result.errors)
        {
            console.error(result.errors);
        }
        else
        {
            props.onUpdate();
        }
    }

    const handleCancelClick = () =>
    {
        setConfirmDeleteVisible(false);
    }

    const handleEditFixture = async (result: IEditFixtureResult) =>
    {
        setEditFixtureVisible(false);
        const mutationResult = await editFixture({
            variables: {
                oldAddress: props.fixture.address,
                newAddress: result.address,
                group: result.group,
                manufacturer: result.fixtureType.manufacturer,
                model: result.fixtureType.model,
                universeId: props.universeId
            }
        });
        if (mutationResult.errors)
        {
            message.error(mutationResult.errors);
        }
        else
        {
            props.onUpdate();
        }
    };

    const title = (
        <>
            {props.fixture.address} - {props.fixture.manufacturer} {props.fixture.model}<br />
            {props.fixture.group}
        </>
    );

    const actions = [
        <Link href={`${props.fixture.address}`}>
            <Icon type="control" />
        </Link>,
        <Icon type="edit"
            onClick={() => setEditFixtureVisible(true)}
        />,
        <Icon type="setting" />,
        <Icon type="drag" />,
        <Icon type="delete"
            onClick={() => setConfirmDeleteVisible(true)}
        />
    ];

    return (
        <>
            <Card
                title={title}
                actions={actions}
            >
                <Container>
                    <FixturePreviewWindow fixture={props.fixture} dmx={props.dmx} />
                </Container>
            </Card>
            {confirmDeleteVisible && <Modal
                title="Confirm deletion"
                visible={true}
                onOk={handleDeleteConfirm}
                onCancel={handleCancelClick}
                okText="Delete"
                okType="danger"
            >
                Are you sure you want to delete the {props.fixture.manufacturer} {props.fixture.model} on channel {props.fixture.address}?
            </Modal>}
            {editFixtureVisible && <EditFixture
                fixtures={props.fixtures}
                groups={props.groups}
                initialGroup={props.fixture.group}
                initialManufacturer={props.fixture.manufacturer}
                initialModel={props.fixture.model}
                initialAddress={props.fixture.address}
                onCancel={() => setEditFixtureVisible(false)}
                onOk={handleEditFixture}
            />}
        </>
    );
}