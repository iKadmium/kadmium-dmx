import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyCardComponent } from './component/busy-card.component';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,

		MatProgressSpinnerModule
	],
	declarations: [BusyCardComponent],
	exports: [BusyCardComponent]
})
export class BusyCardModule { }
