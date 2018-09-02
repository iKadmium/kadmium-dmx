import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { StatusCode } from 'app/enums/status-code.enum';
import { MessageService } from 'app/message.service';
import { Subscription } from 'rxjs';
import { AnimationLibrary } from '../animation-library';
import { Status } from "../status";
import { StatusData, StatusStreamService } from '../status-stream.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	animations: [AnimationLibrary.animations()]

})
export class DashboardComponent implements OnInit, OnDestroy
{
	private controllers = ["Venues", "SACNTransmitters", "OSCListeners"];
	public statuses: Map<string, Status>;
	public loading: boolean;

	private subscription: Subscription;

	constructor(private statusStreamService: StatusStreamService, private messageService: MessageService, titleService: Title)
	{
		titleService.setTitle("Dashboard");

		this.statuses = new Map<string, Status>();
		for (const controllerName of this.controllers)
		{
			this.statuses.set(controllerName, new Status());
		}

		this.loading = true;
	}

	ngOnInit()
	{
		try
		{
			const observable = this.statusStreamService.open();
			this.subscription = observable.subscribe(data => this.updateStatus(data));
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	ngOnDestroy(): void
	{
		if (this.subscription != null)
		{
			this.subscription.unsubscribe();
		}
	}

	private async updateStatus(statusData: StatusData): Promise<void>
	{
		const panelStatus = this.statuses.get(statusData.controller);
		const statusCode = statusData.code as StatusCode;
		if (panelStatus != null)
		{
			panelStatus.statusCode = statusCode;
			panelStatus.body = statusData.message;
		}
		this.loading = false;
	}
}