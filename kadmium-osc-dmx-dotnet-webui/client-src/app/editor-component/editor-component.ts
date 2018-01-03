import { NgForm } from "@angular/forms";

export class EditorComponent
{
    public form: NgForm;
    public saved: boolean;

    constructor()
    {
        this.saved = false;
    }
}