import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { URLs, Controller } from "./url";
import { Look, LookSkeleton } from "./look";

@Injectable()
export class LookService
{

    private looksUrl = URLs.getAPIUrl(Controller.Look);

    constructor(private http: Http) { }

    public getSkeletons(): Promise<LookSkeleton[]>
    {
        return this.http.get(this.looksUrl)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as LookSkeleton[]);
                return data;
            });
    }

    public get(id: number): Promise<Look>
    {
        return this.http.get(this.looksUrl + "/" + id)
            .toPromise()
            .then(response =>
            {
                let data = (response.json() as Look);
                return Look.load(data);
            });
    }

    public put(look: Look): Promise<void>
    {
        return this.http.put(this.looksUrl + "/" + look.id, look)
            .toPromise()
            .then(response => { });
    }

    public post(look: Look): Promise<number>
    {
        return this.http.post(this.looksUrl, look)
            .toPromise()
            .then(response => parseInt(response.text()));
    }

    public delete(look: LookSkeleton): Promise<void>
    {
        return this.http.delete(this.looksUrl + "/" + look.id)
            .toPromise()
            .then(response => { });
    }

    public activate(look: LookSkeleton, amount: number): Promise<void>
    {
        return this.http.post(this.looksUrl + "/" + "Activate" + "/" + amount, look)
            .toPromise()
            .then(response => { });
    }

}
