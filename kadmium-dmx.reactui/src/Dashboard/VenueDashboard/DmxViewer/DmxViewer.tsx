import { useQuery, useSubscription } from '@apollo/react-hooks';
import { Alert, Card, Descriptions, Spin } from 'antd';
import { DescriptionsItemProps } from 'antd/lib/descriptions';
import { ActiveUniverseQuery, ActiveUniverseQueryVariables, ActiveUniverseQuery_activeUniverse_fixtures, ActiveUniverseQuery_activeUniverse_fixtures_channels } from 'generated/ActiveUniverseQuery';
import { UniverseSubscription, UniverseSubscriptionVariables } from 'generated/UniverseSubscription';
import gql from 'graphql-tag';
import React, { useRef, useState } from 'react';
import { DmxRenderer } from './DmxRenderer';
import styled from 'styled-components';

const dmxSubscription = gql`
    subscription UniverseSubscription($universeId: Int!){
        universeDmx(universeId: $universeId) {
            dmx
        }
    }
`;

const activeUniverseQuery = gql`
    query ActiveUniverseQuery($universeId: Int!){
        activeUniverse(universeId: $universeId) {
            name,
            fixtures {
                address,
                manufacturer,
                model
                channels 
                {
                    address,
                    name
                    controlled
                }
                group
            }
        }
    }
`

const Canvas = styled.canvas`
    background: black;
    padding-bottom: 24px;
`;

interface IDmxViewerProps
{
    universeId: number
};

interface IDmxViewerState
{
    selectedChannel?: ActiveUniverseQuery_activeUniverse_fixtures_channels;
    selectedFixture?: ActiveUniverseQuery_activeUniverse_fixtures;
}

let renderer: DmxRenderer;

export const DmxViewer: React.FC<IDmxViewerProps> = (props) => 
{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { data, error: queryError, loading: dataLoading } = useQuery<ActiveUniverseQuery, ActiveUniverseQueryVariables>(
        activeUniverseQuery,
        {
            variables: {
                universeId: props.universeId
            }
        }
    );
    const { error: subscriptionError, loading: subscriptionLoading } = useSubscription<UniverseSubscription, UniverseSubscriptionVariables>(
        dmxSubscription,
        {
            variables: { universeId: props.universeId },
            onSubscriptionData: (options =>
            {
                const dmxData = options.subscriptionData.data.universeDmx;
                if (canvasRef.current && data && data.activeUniverse)
                {
                    if (!renderer)
                    {
                        renderer = new DmxRenderer(data.activeUniverse.fixtures);
                    }
                    if (renderer)
                    {
                        const context = canvasRef.current.getContext('2d');
                        renderer.render(context, dmxData.dmx);
                    }
                }
            })
        }
    );

    const [selection, setSelection] = useState<IDmxViewerState>({});

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) =>
    {
        if (renderer)
        {
            const x = event.nativeEvent.offsetX;
            const y = event.nativeEvent.offsetY;
            renderer.handleCanvasClick(x, y, (fixture, channel) => setSelection({ selectedChannel: channel, selectedFixture: fixture }));
        }
    }

    if (subscriptionError)
    {
        return (<Alert message={subscriptionError.message} type="error" />);
    }
    else if (queryError)
    {
        return (<Alert message={queryError.message} type="error" />);
    }
    else if (dataLoading || subscriptionLoading)
    {
        return (<Spin />);
    }

    const getDescriptionsItems: () => DescriptionsItemProps[] = () =>
    {
        const items: DescriptionsItemProps[] = [];
        if (selection.selectedFixture)
        {
            items.push({ label: "Manufacturer", children: selection.selectedFixture.manufacturer });
            items.push({ label: "Model", children: selection.selectedFixture.model });
            items.push({ label: "Group", children: selection.selectedFixture.group });
            items.push({ label: "Address", children: selection.selectedFixture.address });
        }
        if (selection.selectedChannel)
        {
            items.push({ label: "Channel", children: selection.selectedChannel.address });
            items.push({ label: "Name", children: selection.selectedChannel.name });
        }
        return items;
    }

    return (
        <>
            <h2>{data.activeUniverse.name} DMX</h2>
            <Canvas
                ref={canvasRef}
                width={DmxRenderer.totalWidth}
                height={DmxRenderer.totalHeight}
                style={{ background: 'black' }}
                onClick={(event) => handleCanvasClick(event)}
            ></Canvas>
            {selection.selectedChannel &&
                <Card title={`${selection.selectedChannel.address}`}>
                    <Descriptions bordered={true} column={1}>
                        {getDescriptionsItems().map(item => <Descriptions.Item {...item} />)}
                    </Descriptions>
                </Card>
            }
        </>
    );

}