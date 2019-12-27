/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteFixture
// ====================================================

export interface DeleteFixture_deleteFixture {
  __typename: "activeUniverse";
  name: string;
}

export interface DeleteFixture {
  deleteFixture: DeleteFixture_deleteFixture;
}

export interface DeleteFixtureVariables {
  universeId: number;
  fixture: number;
}
