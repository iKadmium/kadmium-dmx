namespace Universe
{
    let modalEditor: ModalEditor<Universe>;

    interface Universe extends Named
    {
        name: string;
        transmitters: string[];
    }

    function onLoad(): void
    {
        modalEditor = new ModalEditor<Universe>();
    }

    window.addEventListener("load", onLoad);
}