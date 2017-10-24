/* tslint:disable */
import { DMXChannel } from './dmxchannel';
import { MovementAxis } from './movement-axis';
import { ColorWheelEntry } from './color-wheel-entry';

/**
 */
export class FixtureDefinition {
    id?: number;
    manufacturer?: string;
    model?: string;
    channels?: DMXChannel[];
    movements?: MovementAxis[];
    colorWheel?: ColorWheelEntry[];
    type?: number;
    lux?: number;
    beamAngle?: number;
}
