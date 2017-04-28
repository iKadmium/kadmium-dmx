import { Component, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Component({
    selector: 'input-box',
    template: require('./input-box.component.html'),
    styles: [require("./input-box.component.css")]
})
export class InputBoxComponent
{
    header: string;
    body: string;
    acceptVerb: string;
    cancelVerb: string;

    public visible = false;
    private visibleAnimate = false;

    resolve: (value?: string | PromiseLike<string>) => void;
    reject: () => void;

    private response: string;

    constructor(private renderer: Renderer)
    {
        this.response = "";
    }

    public show(header: string, body: string, acceptVerb: string, cancelVerb: string): Promise<string>
    {
        this.header = header;
        this.body = body;
        this.acceptVerb = acceptVerb;
        this.cancelVerb = cancelVerb;

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);

        let promise = new Promise<string>((resolve, reject) =>
        {
            this.resolve = resolve;
            this.reject = reject;
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
        this.resolve(this.response);
        this.hide();
    }

    public cancelClick(): void
    {
        this.reject();
        this.hide();
    }

}