namespace SACNTransmitter {
    let modalEditor: ModalEditor<SACNTransmitter>;

    interface SACNTransmitter {
        name: string;
        description: string;
        universeID: number;
        delay: number;
    }
    
    function onLoad(): void {
        modalEditor = new ModalEditor<SACNTransmitter>();
    }

    window.addEventListener("load", onLoad);
}