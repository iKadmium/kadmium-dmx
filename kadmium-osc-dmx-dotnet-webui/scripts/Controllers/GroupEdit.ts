import { ListLayout } from "../ListLayout";
import {ModalEditor } from "../ModalEditor";

namespace Group
{
    let modalEditor: ModalEditor<Group>;

    interface Group {
        name: string;
        [key: string]: string;
    }
    
    function getObject(): Group {
        let group: Group = {
            name: $("#name").val()
        }
        return group;
    }

    function onLoad(): void {
        modalEditor = new ModalEditor();
    }

    window.addEventListener("load", onLoad);
}