namespace OSCListener {
    let modalEditor: ModalEditor;

    interface OSCListener {
        name: string;
        port: number;
    }
    
    function getObject(): OSCListener {
        let oscListener: OSCListener = {
            name: $("#name").val(),
            port: $("#port").val()
        }
        return oscListener;
    }

    function onLoad(): void {
        modalEditor = new ModalEditor("OSCListeners/Load/", "OSCListeners/Save/", getObject);
    }

    window.addEventListener("load", onLoad);
}