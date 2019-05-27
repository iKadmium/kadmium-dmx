import { Switch, Tabs } from 'antd';
import { MessagesSubscription, MessagesSubscription_listenerMessages } from 'generated/MessagesSubscription';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Subscription } from 'react-apollo';
import { IChartData, OscMessage } from './OscMessage';
import { LineSeries, XYPlot } from 'react-vis';

const maxMessages = 20;

const messagesSubscription = gql`
    subscription MessagesSubscription {
        listenerMessages {
            address
            time
            value
        }
    }
`;

export const ListenerMessages: React.FunctionComponent<{}> = () =>
{
    const [updatesActivated, setUpdatesActivated] = useState(true);
    const [messages, setMessages] = useState([] as string[]);

    return (
        <Subscription<MessagesSubscription> subscription={messagesSubscription} onSubscriptionData={options =>
        {
            if (updatesActivated)
            {
                const tempMessages = messages.slice(-(maxMessages - 1));
                const message = options.subscriptionData.data.listenerMessages;
                tempMessages.push(message.address + " => " + message.value);
                setMessages([...tempMessages]);
            }
        }}>
            {() =>
            {
                return (
                    <>
                        <Switch
                            defaultChecked
                            onChange={(checked) => setUpdatesActivated(checked)}
                            checkedChildren="Active"
                            unCheckedChildren="Inactive"
                        />
                        <pre style={{ height: "100%" }}>{messages.map(x => x + "\r\n")}</pre>

                    </>
                );
            }}

        </Subscription>
    );
}