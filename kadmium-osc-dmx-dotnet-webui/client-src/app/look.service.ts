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

@Injectable()
export class MockLookService extends LookService
{
    looks: Look[];

    constructor()
    {
        super(null);
        this.looks = [
            {
                attributeLookSettings: [],
                colorLookSettings: [
                    {
                        color: "#FF0000",
                        group: "vocalist",
                        id: 1
                    }
                ],
                id: 1,
                name: "Mock Look 1"
            }
        ];
    }

    public getSkeletons(): Promise<LookSkeleton[]>
    {
        return new Promise<LookSkeleton[]>(
            (resolve, reject) =>
            {
                let skeletons: LookSkeleton[] = this.looks.map(x => { return { id: x.id, name: x.name } });
                resolve(skeletons);
            }
        )
    }

    public get(id: number): Promise<Look>
    {
        return new Promise<Look>(
            (resolve, reject) => 
            {
                resolve(this.looks.find(x => x.id == id));
            }
        );
    }

    public put(look: Look): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) => 
            {
                let index = this.looks.findIndex(x => x.id == look.id);
                this.looks.splice(index, 1);
                this.looks.push(look);
                resolve();
            }
        );
    }

    public post(look: Look): Promise<number>
    {
        return new Promise<number>(
            (resolve, reject) => 
            {
                look.id = this.looks.length;
                this.looks.push(look);
                resolve();
            }
        );
    }

    public delete(look: LookSkeleton): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) => 
            {
                let index = this.looks.findIndex(x => x.id == look.id);
                this.looks.splice(index, 1);
                resolve();
            }
        );
    }

    public activate(look: LookSkeleton, amount: number): Promise<void>
    {
        return new Promise<void>(
            (resolve, reject) => 
            {
                resolve();
            }
        );
    }
}

