namespace EnttecProTransmitter
{
    let modalEditor: ModalEditor<EnttecProTransmitter>;

    interface EnttecProTransmitter extends Named
    {
        name: string;
        address: string;
    }

    function onLoad(): void
    {
        modalEditor = new ModalEditor<EnttecProTransmitter>();
    }

    window.addEventListener("load", onLoad);
}