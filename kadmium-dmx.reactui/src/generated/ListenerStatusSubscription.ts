/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { statusCode } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: ListenerStatusSubscription
// ====================================================

export interface ListenerStatusSubscription_listenerStatus {
  __typename: "Status";
  /**
   * The code associated with the status
   */
  statusCode: statusCode;
  /**
   * The message associated with the status
   */
  message: string;
}

export interface ListenerStatusSubscription {
  listenerStatus: ListenerStatusSubscription_listenerStatus;
}
