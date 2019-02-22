/* tslint:disable */
import
{
  SacnTransmitterSettings,
} from '..'

export interface Settings
{
  oscPort: number;
  sacnTransmitter: SacnTransmitterSettings;
  webPort: number;
  strobeEffectFrequency: number;
}
