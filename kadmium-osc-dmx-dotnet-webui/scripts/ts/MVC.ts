export class MVC
{
    static getActionURL(controller: string, action: string, id: string): string
    {
        if (id == null)
        {
            return "/" + controller + "/" + action;
        }
        else
        {
            return "/" + controller + "/" + action + "/" + id;
        }
    }
}