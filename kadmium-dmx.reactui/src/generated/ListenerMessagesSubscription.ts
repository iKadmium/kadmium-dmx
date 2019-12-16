/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: ListenerMessagesSubscription
// ====================================================

export interface ListenerMessagesSubscription_listenerMessages {
  __typename: "ListenerMessage";
  /**
   * The OSC Address of the received message
   */
  address: string;
  /**
   * The time the message was received
   */
  time: any;
  /**
   * The normalised floating point value (0.0 to 1.0) of the message
   */
  value: string;
}

export interface ListenerMessagesSubscription {
  listenerMessages: ListenerMessagesSubscription_listenerMessages;
}
