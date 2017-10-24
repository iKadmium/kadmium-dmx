import { NgModule } from '@angular/core';

import { EnttecProTransmitterService } from './services/enttec-pro-transmitter.service';
import { FixtureDefinitionService } from './services/fixture-definition.service';
import { GroupService } from './services/group.service';
import { HomeService } from './services/home.service';
import { LookService } from './services/look.service';
import { OSCListenerService } from './services/osclistener.service';
import { PreviewService } from './services/preview.service';
import { SACNTransmitterService } from './services/sacntransmitter.service';
import { SettingsService } from './services/settings.service';
import { SolversLiveService } from './services/solvers-live.service';
import { UniverseService } from './services/universe.service';
import { VenueService } from './services/venue.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
   EnttecProTransmitterService,
   FixtureDefinitionService,
   GroupService,
   HomeService,
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
