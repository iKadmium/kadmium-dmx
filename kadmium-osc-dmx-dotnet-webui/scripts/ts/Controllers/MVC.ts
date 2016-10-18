export class MVC
{
    static getActionURL(controller: string, action: string, id: string): string
    {
        let originalURL: string = document.URL;
        let urlParts: string[] = document.URL.split("/");
        let protocol: string = urlParts[0];
        let host: string = urlParts[2];

        let root:string = protocol + "//" + host;
        
        if (id == null)
        {
            return root + "/" + controller + "/" + action;
        }
        else
        {
            return root + "/" + controller + "/" + action + "/" + id;
        }
    }
}