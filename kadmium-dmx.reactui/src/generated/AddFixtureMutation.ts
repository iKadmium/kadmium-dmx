/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddFixtureMutation
// ====================================================

export interface AddFixtureMutation_addFixture {
  __typename: "activeUniverse";
  name: string;
}

export interface AddFixtureMutation {
  addFixture: AddFixtureMutation_addFixture;
}

export interface AddFixtureMutationVariables {
  universeId: number;
  address: number;
  quantity: number;
  group: string;
  manufacturer: string;
  model: string;
}
