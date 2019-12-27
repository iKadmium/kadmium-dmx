/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditFixture
// ====================================================

export interface EditFixture_editFixture {
  __typename: "activeUniverse";
  name: string;
}

export interface EditFixture {
  editFixture: EditFixture_editFixture;
}

export interface EditFixtureVariables {
  universeId: number;
  oldAddress: number;
  newAddress: number;
  group: string;
  manufacturer: string;
  model: string;
}
