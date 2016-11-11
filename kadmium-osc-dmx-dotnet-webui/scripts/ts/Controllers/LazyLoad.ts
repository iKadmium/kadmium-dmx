import * as ko from "knockout";
import "ko.plus";

export class LazyLoad
{
    static load<T>(url: string): JQueryPromise<T>
    {
        return $.get(url).then((data) => JSON.parse(data) as T);
    }
}