namespace SACNTransmitter {
    let nameBox: HTMLInputElement;
    let descriptionBox: HTMLInputElement;
    let universeIDBox: HTMLInputElement;
    let delayBox: HTMLInputElement;

    let modalEditor: ModalEditor;

    interface SACNTransmitter {
        name: string;
        description: string;
        universeID: number;
        delay: number;
        [key: string]: number | string;
    }
    
    function getObject(): SACNTransmitter {
        let transmitter: SACNTransmitter = {
            name: nameBox.value,
            description: descriptionBox.value,
            universeID: parseInt(universeIDBox.value),
            delay: parseInt(delayBox.value)
        }
        return transmitter;
    }

    function onLoad(): void {
        nameBox = $("#name")[0] as HTMLInputElement;
        descriptionBox = $("#description")[0] as HTMLInputElement;
        universeIDBox = $("#universeID")[0] as HTMLInputElement;
        delayBox = $("#delay")[0] as HTMLInputElement;

        let staticElements = [nameBox, descriptionBox, universeIDBox, delayBox];

        modalEditor = new ModalEditor("SACNTransmitters/Load/", "SACNTransmitters/Save/", getObject, staticElements);
    }

    window.addEventListener("load", onLoad);
}