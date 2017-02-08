import { Component, Input } from '@angular/core';

@Component({
    selector: 'status-panel',
    template: require('./status-panel.component.html')
})
export class StatusPanelComponent
{
    private alertStyle: string;
    @Input() private headingContent: string;

    constructor()
    {
        this.headingContent = "<button type='button' class='btn'>You suck</button>"
        this.alertStyle = "alert-success";
    }
}