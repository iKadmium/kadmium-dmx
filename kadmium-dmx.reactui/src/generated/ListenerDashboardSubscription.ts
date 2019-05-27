/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { statusCode } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: ListenerDashboardSubscription
// ====================================================

export interface ListenerDashboardSubscription_listenerStatus {
  __typename: "Status";
  /**
   * The code associated with the status
   */
  statusCode: statusCode | null;
  /**
   * The message associated with the status
   */
  message: string;
}

export interface ListenerDashboardSubscription {
  listenerStatus: ListenerDashboardSubscription_listenerStatus | null;
}
