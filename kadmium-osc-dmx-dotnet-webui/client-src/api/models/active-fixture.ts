/* tslint:disable */
import { ColorWheelEntry } from './color-wheel-entry';
import { MovementAxis } from './movement-axis';
import { ActiveAttribute } from './active-attribute';

/**
 */
export class ActiveFixture {
    id?: number;
    manufacturer?: string;
    model?: string;
    address?: number;
    group?: string;
    colorWheel?: ColorWheelEntry[];
    movementAxis?: MovementAxis[];
    attributes?: ActiveAttribute[];
}
