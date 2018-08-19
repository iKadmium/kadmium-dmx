/* tslint:disable */
import
{
  BsonSerializable,
  UniverseData,
} from '..';

export interface VenueData extends BsonSerializable
{
  name: string;
  universes: UniverseData[];
}
