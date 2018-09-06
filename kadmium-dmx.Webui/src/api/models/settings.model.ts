/* tslint:disable */
import
{
  EnttecProTransmitterSettings,
  SacnTransmitterSettings,
} from '..'

export interface Settings
{
  oscPort: number;
  sacnTransmitter: SacnTransmitterSettings;
  webPort: number;
}
