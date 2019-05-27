/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: MessagesSubscription
// ====================================================

export interface MessagesSubscription_listenerMessages {
  __typename: "ListenerMessage";
  /**
   * The OSC Address of the received message
   */
  address: string;
  /**
   * The time the message was received
   */
  time: any | null;
  /**
   * The normalised floating point value (0.0 to 1.0) of the message
   */
  value: string | null;
}

export interface MessagesSubscription {
  listenerMessages: MessagesSubscription_listenerMessages | null;
}
