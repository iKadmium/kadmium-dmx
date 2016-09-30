namespace OSCListener {
    let modalEditor: ModalEditor<OSCListener>;

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
        modalEditor = new ModalEditor<OSCListener>();
    }

    window.addEventListener("load", onLoad);
}