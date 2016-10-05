import { ModalEditor, ControllerData } from "../ModalEditor";

export abstract class EditController<T extends ControllerData>
{
    modalEditor: ModalEditor<T>;

    constructor()
    {
        window.addEventListener("load", (ev: Event) =>
        {
            this.modalEditor = new ModalEditor<T>();
        });
        
    }
}