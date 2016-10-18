import {ModalEditorCollection} from "./ModalEditorCollection";

export interface ListControllerData<T>
{
    name: string;

    fillInputBoxes(data: T): void;
    getDataFromInputBoxes(): void;
}