/* tslint:disable */
import { EnttecProTransmitterSettings } from './enttec-pro-transmitter-settings';
import { SacnTransmitterSettings } from './sacn-transmitter-settings';

/**
 */
export class Settings {
    webPort?: number;
    oscPort?: number;
    enttecProTransmitter?: EnttecProTransmitterSettings;
    sacnTransmitter?: SacnTransmitterSettings;
}
