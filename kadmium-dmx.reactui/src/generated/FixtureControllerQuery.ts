/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FixtureControllerQuery
// ====================================================

export interface FixtureControllerQuery_activeFixture_channels {
  __typename: "activeDmxChannel";
  controlled: boolean;
  address: number | null;
  name: string;
  min: number | null;
  max: number | null;
}

export interface FixtureControllerQuery_activeFixture_attributes {
  __typename: "activeFixtureAttribute";
  controlled: boolean;
  name: string;
}

export interface FixtureControllerQuery_activeFixture {
  __typename: "activeFixture";
  address: number;
  manufacturer: string;
  model: string;
  channels: (FixtureControllerQuery_activeFixture_channels | null)[] | null;
  attributes: (FixtureControllerQuery_activeFixture_attributes | null)[] | null;
}

export interface FixtureControllerQuery {
  activeFixture: FixtureControllerQuery_activeFixture | null;
}

export interface FixtureControllerQueryVariables {
  universeId: number;
  address: number;
}
