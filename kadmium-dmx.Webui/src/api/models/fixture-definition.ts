/* tslint:disable */
import { DMXChannel } from './dmxchannel';
import { MovementAxis } from './movement-axis';
import { ColorWheelEntry } from './color-wheel-entry';

export interface FixtureDefinition
{

  skeleton: {
    manufacturer?: string;
    model?: string;
  }

  channels?: DMXChannel[];

  movements?: MovementAxis[];

  colorWheel?: ColorWheelEntry[];

  fixtureType?: number;

  lux?: number;

  beamAngle?: number;
}
