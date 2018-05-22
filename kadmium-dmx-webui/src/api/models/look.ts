/* tslint:disable */
import { AttributeLookSetting } from './attribute-look-setting';
import { ColorLookSetting } from './color-look-setting';

export interface Look {

  id?: number;

  name?: string;

  attributeLookSettings?: AttributeLookSetting[];

  colorLookSettings?: ColorLookSetting[];
}
