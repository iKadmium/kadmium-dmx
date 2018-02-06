/* tslint:disable */
import { FixtureDefinitionSkeleton } from './fixture-definition-skeleton';

export interface Fixture
{

  id?: number;

  address?: number;

  type?: FixtureDefinitionSkeleton;

  options?: any;

  group?: string;
}
