namespace Venue {
    let modalEditor: ModalEditor<Venue>;

    interface Venue {
        name: string;
        fixtureCollections: string[];
    }
    
    function onLoad(): void {
        modalEditor = new ModalEditor<Venue>();
    }

    window.addEventListener("load", onLoad);
}