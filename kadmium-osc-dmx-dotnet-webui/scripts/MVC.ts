export class MVC
{
    static GetActionURL(controller: string, action: string, id: string): string
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