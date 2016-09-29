namespace EnttecProTransmitter {
    let nameBox: HTMLInputElement;
    let addressBox: HTMLSelectElement;
    let modalEditor: ModalEditor;

    interface EnttecProTransmitter {
        name: string;
    }

    function onGetData(data: EnttecProTransmitter) {
        nameBox.value = data.name;
    }

    function getObject(): EnttecProTransmitter {
        let transmitter: EnttecProTransmitter = {
            name: nameBox.value
        }
        return transmitter;
    }

    function onLoad(): void {
        nameBox = $("#name")[0] as HTMLInputElement;
        nameBox = $("#address")[0] as HTMLInputElement;

        let staticElements = [nameBox, addressBox];

        modalEditor = new ModalEditor("EnttecProTransmitters/Load/", "EnttecProTransmitters/Save/", onGetData, getObject, staticElements);
    }

    window.addEventListener("load", onLoad);
}