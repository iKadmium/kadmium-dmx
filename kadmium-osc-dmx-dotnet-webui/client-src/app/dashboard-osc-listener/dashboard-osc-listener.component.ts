import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard-osc-listener',
    templateUrl: './dashboard-osc-listener.component.html',
    styleUrls: ['./dashboard-osc-listener.component.css']
})
export class DashboardOSCListenerComponent implements OnInit
{
    static MAX_LENGTH = 50;
    @Input() unrecognised: string[];
    @Input() recognised: string[];

    constructor()
    {
        this.unrecognised = [];
        this.recognised = [];
    }

    ngOnInit()
    {
    }

    public getRecognised(): string
    {
        return this.recognised.join("\r\n");
    }

    public getUnrecognised(): string
    {
        return this.unrecognised.join("\r\n");
    }

}
