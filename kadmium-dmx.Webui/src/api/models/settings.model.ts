/* tslint:disable */
import
{
  EnttecProTransmitterSettings,
  SacnTransmitterSettings,
} from '..';

export interface Settings
{
  enttecProTransmitter: EnttecProTransmitterSettings;
  oscPort: number;
  sacnTransmitter: SacnTransmitterSettings;
  webPort: number;
}
