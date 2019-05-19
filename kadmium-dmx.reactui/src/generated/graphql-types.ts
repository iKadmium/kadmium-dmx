export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents a year, month and day in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  Date: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects
   * timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  DateTime: any;
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC.
   * `DateTimeOffset` expects timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
   */
  DateTimeOffset: any;
  Decimal: any;
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any;
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any;
};

export type ColorWheelEntry = {
  /** The hex value of the color */
  color: Scalars["String"];
  /** The maximum value of the color */
  max?: Maybe<Scalars["Int"]>;
  /** The minimum value of the color */
  min?: Maybe<Scalars["Int"]>;
  /** The name of the color */
  name: Scalars["String"];
};

export type DmxChannel = {
  /** The address of the channel (beginning at 1) */
  address?: Maybe<Scalars["Int"]>;
  /** The maximum meaningful value for the channel */
  max?: Maybe<Scalars["Int"]>;
  /** The minimum meaningful value for the channel */
  min?: Maybe<Scalars["Int"]>;
  /** The name of the channel */
  name: Scalars["String"];
};

export type FixtureDefinition = {
  /** DMX Channels in this fixture */
  channels?: Maybe<Array<Maybe<DmxChannel>>>;
  /** Entries for the fixture's color wheel */
  colorWheel?: Maybe<Array<Maybe<ColorWheelEntry>>>;
  /** Fixture Type */
  fixtureType?: Maybe<FixtureType>;
  /** The fixture's manufacturer */
  manufacturer: Scalars["String"];
  /** The fixture's model name (including its personality) */
  model: Scalars["String"];
  /** Movement axis */
  movements?: Maybe<Array<Maybe<MovementAxis>>>;
};

export type FixtureInstance = {
  address?: Maybe<Scalars["Int"]>;
  group: Scalars["String"];
  manufacturer: Scalars["String"];
  model: Scalars["String"];
};

export enum FixtureType {
  Led = "LED",
  Tungsten = "TUNGSTEN",
  Effect = "EFFECT"
}

export type Group = {
  /** The Group's name */
  name: Scalars["String"];
  /** The order in which the group appears in the list */
  order: Scalars["Int"];
};

export type KadmiumDmxMutation = {
  loadVenue?: Maybe<Venue>;
};

export type KadmiumDmxMutationLoadVenueArgs = {
  name: Scalars["String"];
};

export type KadmiumDmxQuery = {
  activeVenue?: Maybe<Venue>;
  fixture?: Maybe<FixtureDefinition>;
  fixtures?: Maybe<Array<Maybe<FixtureDefinition>>>;
  groups?: Maybe<Array<Maybe<Group>>>;
  settings?: Maybe<Settings>;
  venues?: Maybe<Array<Maybe<Venue>>>;
};

export type KadmiumDmxQueryFixtureArgs = {
  manufacturer: Scalars["String"];
  model: Scalars["String"];
};

export type MovementAxis = {
  /** The maximum angle (in degrees) of the axis */
  max: Scalars["Int"];
  /** The minimum angle (in degrees) of the axis */
  min: Scalars["Int"];
  /** The name of the axis */
  name: Scalars["String"];
};

export type SacnTransmitterSettings = {
  /** How long to delay sending packets to this transmitter */
  delay: Scalars["Int"];
  /** Enable multicast for this transmitter */
  multicast: Scalars["Boolean"];
  /** A list of hosts to unicast packets to */
  unicast: Array<Scalars["String"]>;
  /** The UUID for this sACN transmitter */
  uuid?: Maybe<Scalars["String"]>;
};

export type Settings = {
  /** The OSC Port on which the app should listen for commands */
  oscPort: Scalars["Int"];
  /** Settings for sACN transmission */
  sacnTransmitter?: Maybe<SacnTransmitterSettings>;
  /** How frequently the strobe effect should flash */
  strobeFrequency: Scalars["Float"];
};

export type Universe = {
  dmxChannels?: Maybe<Scalars["Int"]>;
  fixtures?: Maybe<Array<Maybe<FixtureInstance>>>;
  name: Scalars["String"];
  universeID: Scalars["Int"];
};

export type Venue = {
  name: Scalars["String"];
  universes?: Maybe<Array<Maybe<Universe>>>;
};
