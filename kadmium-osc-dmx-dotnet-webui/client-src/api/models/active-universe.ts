/* tslint:disable */
import { ActiveFixture } from './active-fixture';

export interface ActiveUniverse {

  universeID?: number;

  name?: string;

  fixtures?: ActiveFixture[];
}
