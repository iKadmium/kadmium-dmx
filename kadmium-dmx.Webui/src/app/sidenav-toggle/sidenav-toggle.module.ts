import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavToggleComponent } from './sidenav-toggle/sidenav-toggle.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: [
		SidenavToggleComponent
	],
	exports: [SidenavToggleComponent]
})
export class SidenavToggleModule { }
