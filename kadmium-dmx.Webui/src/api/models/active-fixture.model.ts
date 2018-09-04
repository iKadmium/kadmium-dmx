/* tslint:disable */
import
{
  ActiveAttribute,
  ColorWheelEntry,
  MovementAxis,
} from '..'

export interface ActiveFixture
{
  address: number;
  attributes: ActiveAttribute[];
  colorWheel: ColorWheelEntry[];
  group: string;
  manufacturer: string;
  model: string;
  movementAxis: MovementAxis[];
}
