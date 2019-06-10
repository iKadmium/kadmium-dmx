import { Switch } from 'antd';
import { ListenerMessagesSubscription, ListenerMessagesSubscription_listenerMessages } from 'generated/ListenerMessagesSubscription';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Subscription } from 'react-apollo';

const maxMessages = 20;

const messagesSubscription = gql`
    subscription ListenerMessagesSubscription {
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
    const [messages, setMessages] = useState([] as ListenerMessagesSubscription_listenerMessages[]);

    return (
        <Subscription<ListenerMessagesSubscription> subscription={messagesSubscription} onSubscriptionData={options =>
        {
            if (updatesActivated)
            {
                const tempMessages = messages.slice(-(maxMessages - 1));
                const message = options.subscriptionData.data.listenerMessages;
                tempMessages.push(message);
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
                        <pre style={{ height: "100%" }}>{messages.map(x => x.address + " " + x.value + "\r\n")}</pre>

                    </>
                );
            }}

        </Subscription>
    );
}