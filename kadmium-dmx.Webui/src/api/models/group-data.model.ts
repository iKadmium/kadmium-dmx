/* tslint:disable */
import {
  BsonSerializable,
} from './..';

export interface GroupData extends BsonSerializable {
  name: string;
  order: number;
}
