/* tslint:disable */
import
{
  FixtureDefinitionSkeleton,
  FixtureOptions,
} from '..'

export interface FixtureData
{
  address: number;
  group: string;
  options: FixtureOptions;
  type: FixtureDefinitionSkeleton;
}
