/* tslint:disable */
import
{
  FixtureDefinitionSkeleton,
  IColorWheelEntryData,
  IDMXChannelData,
  IMovementAxisData,
} from './..';
import { FixtureType } from 'app/enums/fixture-type.enum';

export interface IFixtureDefinition
{
  channels: IDMXChannelData[];
  colorWheel: IColorWheelEntryData[];
  fixtureType: FixtureType;
  id: string;
  movements: IMovementAxisData[];
  skeleton: FixtureDefinitionSkeleton;
}
