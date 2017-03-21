import { Component } from '@angular/core';
import { Response } from "@angular/http";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Status, StatusCode } from "../status";

@Component({
    selector: 'message-bar',
    template: require('./message-bar.component.html'),
    styles: [require("./message-bar.component.css")]
})
export class MessageBarComponent
{
    private messages: Status[];

    constructor(private sanitizer: DomSanitizer)
    {
        this.messages = [];
    }

    private remove(status: Status)
    {
        let index = this.messages.indexOf(status);
        this.messages.splice(index, 1);
    }

    public add(statusCode: StatusCode, message: string): void
    {
        this.messages.push(new Status(statusCode, message));
    }

    public addError(reason: Response): void
    {
        let error = new Status("Error", reason.statusText);
        error.body = reason.text();
        this.messages.push(error);
    }

    private getBody(message: Status): SafeHtml
    {
        let body = message.body;
        let safeHTML = this.sanitizer.bypassSecurityTrustHtml(body);
        return safeHTML;
    }

    private iframeLoad(index: number): void
    {
        let headerHeight = document.getElementById("modal-header-" + index).offsetHeight;
        headerHeight = headerHeight > 0 ? headerHeight : 64;
        let footerHeight = document.getElementById("modal-footer-" + index).offsetHeight;
        footerHeight = footerHeight > 0 ? footerHeight : 64;
        let paddingHeight = 110;
        let calculatedHeight = headerHeight + footerHeight + paddingHeight;
        let remainingHeight = window.innerHeight - calculatedHeight;
        let iframeRef = document.getElementById('error-details-iframe-' + index) as HTMLIFrameElement;
        iframeRef.style.height = remainingHeight + "px";
    }
}