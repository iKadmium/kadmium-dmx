import { Component, OnInit, OnDestroy } from '@angular/core';
import { OSCListenerData, OSCListenerLiveService } from "../osclistener-live.service";
import { Subscription } from 'rxjs';
import { MessageService } from 'app/message.service';

@Component({
	selector: 'app-dashboard-osc-listener-messages',
	templateUrl: './dashboard-osc-listener-messages.component.html',
	styleUrls: ['./dashboard-osc-listener-messages.component.scss']
})
export class DashboardOscListenerMessagesComponent implements OnInit, OnDestroy
{
	static MAX_LENGTH = 50;
	private events: OSCListenerData[] = [];
	private subscription: Subscription;
	public oscText: string;

	constructor(private oscListenerLiveService: OSCListenerLiveService, private messageService: MessageService) 
	{
		this.oscText = "";
	}

	ngOnInit()
	{
		try
		{
			this.subscription = this.oscListenerLiveService
				.open()
				.subscribe(
					data => this.addMessage(data),
					error => this.messageService.error(error)
				);
		}
		catch (error)
		{
			this.messageService.error(error);
		}
	}

	ngOnDestroy()
	{
		if (this.subscription != null) { this.subscription.unsubscribe(); }
	}

	private addMessage(data: OSCListenerData): void
	{
		data.time = new Date(Date.parse(data.time as any));
		this.events.push(data);
		if (this.events.length > DashboardOscListenerMessagesComponent.MAX_LENGTH)
		{
			let tooLongAmount = this.events.length - DashboardOscListenerMessagesComponent.MAX_LENGTH;
			this.events.splice(0, tooLongAmount);
		}
		this.oscText = this.events.map(x => `${x.address} => ${x.value}`).join('\r\n');
	}
}
