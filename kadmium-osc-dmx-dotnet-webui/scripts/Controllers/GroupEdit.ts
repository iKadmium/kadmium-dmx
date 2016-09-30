namespace Group {
    let modalEditor: ModalEditor<Group>;

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
        modalEditor = new ModalEditor();
    }

    window.addEventListener("load", onLoad);
}