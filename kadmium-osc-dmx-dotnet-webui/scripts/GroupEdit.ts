namespace Group {
    let modalEditor: ModalEditor;

    interface Group {
        name: string;
    }
    
    function getObject(): Group {
        let group: Group = {
            name: $("#name").val()
        }
        return group;
    }

    function onLoad(): void {
        modalEditor = new ModalEditor("Groups/Load/", "Groups/Save/", getObject);
    }

    window.addEventListener("load", onLoad);
}