import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { OSCListenerData, OSCListenerLiveService } from "app/osclistener-live.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
	selector: 'app-dashboard-osc-listener-messages',
	templateUrl: './dashboard-osc-listener-messages.component.html',
	styleUrls: ['./dashboard-osc-listener-messages.component.scss'],
	providers: [OSCListenerLiveService]
})
export class DashboardOscListenerMessagesComponent implements OnInit, AfterViewInit, OnDestroy
{
	static MAX_LENGTH = 50;
	private renderTimer: number;

	private events: OSCListenerData[] = [];
	public dataSource: MatTableDataSource<OSCListenerData>
	public displayedColumns = ["time", "address", "value", "recognised"];
	@ViewChild(MatSort) sort: MatSort;

	constructor(private oscListenerLiveService: OSCListenerLiveService, private sanitizer: DomSanitizer) 
	{
		this.dataSource = new MatTableDataSource<OSCListenerData>(this.events);

	}

	ngOnInit()
	{
		this.oscListenerLiveService.subscribe(data =>
		{
			this.addMessage(data);
		});

		this.renderTimer = window.setInterval(() =>
		{
			this.dataSource._updateChangeSubscription();
		}, 100);
	}

	ngAfterViewInit(): void
	{
		this.dataSource.sort = this.sort;
	}

	ngOnDestroy()
	{
		this.oscListenerLiveService.unsubscribe();
	}

	public getColor(value: number): SafeStyle
	{
		let red = Math.round(255 - value * 255);
		let style = `color: rgb(${red},255,${red})`;
		return this.sanitizer.bypassSecurityTrustStyle(style);
	}

	public addMessage(data: OSCListenerData): void
	{
		data.time = new Date(Date.parse(data.time as any));
		this.events.push(data);
		if (this.events.length > DashboardOscListenerMessagesComponent.MAX_LENGTH)
		{
			let tooLongAmount = this.events.length - DashboardOscListenerMessagesComponent.MAX_LENGTH;
			this.events.splice(0, tooLongAmount);
		}
	}

	public get oscText(): string
	{
		return this.events.map(x => `${x.address} => ${x.value}`).join('\r\n');
	}

}
