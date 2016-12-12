import * as ko from "knockout";
import "ko.plus";

export class AsyncJSON
{
    static async loadAsync<T>(url: string): Promise<T>
    {
        return new Promise<T>((resolve, reject) =>
        {
            $.get(url).then(
                (data) => resolve(JSON.parse(data) as T),
                (jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => reject(errorThrown != "" ? errorThrown : textStatus)
            );
        });
    }

    static async saveAsync<T>(url: string, data: T): Promise<void>
    {
        return new Promise<void>((resolve, reject) =>
        {
            return $.ajax({
                url: url,
                type: "POST",
                data: { jsonString: JSON.stringify(data) },
                success: () => resolve(),
                error: (xhr: JQueryXHR, textStatus: string, errorThrown: string) => reject(errorThrown != "" ? errorThrown : textStatus)
            });
        });
    }
}