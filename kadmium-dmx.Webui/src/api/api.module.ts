import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';

import { EnttecProTransmitterService } from './services/enttec-pro-transmitter.service';
import { FixtureDefinitionService } from './services/fixture-definition.service';
import { GroupService } from './services/group.service';
import { LookService } from './services/look.service';
import { OSCListenerService } from './services/osclistener.service';
import { PreviewService } from './services/preview.service';
import { SACNTransmitterService } from './services/sacntransmitter.service';
import { SettingsService } from './services/settings.service';
import { SolversLiveService } from './services/solvers-live.service';
import { UniverseService } from './services/universe.service';
import { VenueService } from './services/venue.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
   EnttecProTransmitterService,
   FixtureDefinitionService,
   GroupService,
   LookService,
   OSCListenerService,
   PreviewService,
   SACNTransmitterService,
   SettingsService,
   SolversLiveService,
   UniverseService,
   VenueService
  ],
})
export class ApiModule { }
