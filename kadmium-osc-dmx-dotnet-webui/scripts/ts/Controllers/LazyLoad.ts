import * as ko from "knockout";
import "ko.plus";

export class LazyLoad
{
    static async loadAsync<T>(url: string): Promise<T>
    {
        return new Promise<T>((resolve, reject) =>
        {
            return $.get(url).then((data) => resolve(JSON.parse(data) as T));
        });
    }

    static load<T>(url: string): JQueryPromise<T>
    {
        return $.get(url).then((data) => JSON.parse(data) as T);
    }
}