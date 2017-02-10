import { Component, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Component({
    selector: 'confirmation',
    template: require('./confirmation.component.html'),
    styles: [require("./confirmation.component.css")]
})
export class ConfirmationComponent
{
    @ViewChild("confirmation") confirmation: ElementRef;

    header: string;
    body: string;
    acceptVerb: string;
    cancelVerb: string;

    public visible = false;
    private visibleAnimate = false;

    resolve: (value?: boolean | PromiseLike<boolean>) => void;

    constructor(private renderer: Renderer)
    {

    }

    public show(header: string, body: string, acceptVerb: string, cancelVerb: string): Promise<boolean>
    {
        this.header = header;
        this.body = body;
        this.acceptVerb = acceptVerb;
        this.cancelVerb = cancelVerb;

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);

        let promise = new Promise<boolean>((resolve, reject) =>
        {
            this.resolve = resolve;
        });
        return promise;
    }

    private hide(): void
    {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    public acceptClick(): void
    {
        this.resolve(true);
        this.hide();
    }

    public cancelClick(): void
    {
        this.resolve(false);
        this.hide();
    }

}