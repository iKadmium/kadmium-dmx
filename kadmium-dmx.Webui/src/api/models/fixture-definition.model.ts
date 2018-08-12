/* tslint:disable */
import {
  BsonSerializable,
  ColorWheelEntryData,
  DMXChannelData,
  FixtureDefinitionSkeleton,
  FixtureType,
  MovementAxisData,
} from './..';

export interface FixtureDefinition extends BsonSerializable {
  channels: DMXChannelData[];
  colorWheel: ColorWheelEntryData[];
  fixtureType: FixtureType;
  movements: MovementAxisData[];
  skeleton: FixtureDefinitionSkeleton;
}
