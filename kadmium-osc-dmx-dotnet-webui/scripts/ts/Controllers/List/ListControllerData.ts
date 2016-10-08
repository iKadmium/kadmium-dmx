import {ModalEditorCollection} from "./ModalEditorCollection";

export abstract class ListControllerData
{
    name: string;
    [key: string]: any;

    constructor()
    {
        this.name = "";
    }

    static fillData(data: any) : void
    {
        for (let key in data)
        {
            let value: any = data[key];
            if (key == "$schema")
            {
                //do nothing
            }
            else if (Array.isArray(value))
            {
                let arrayElement = $("#" + key);
                let array = value as string[];

                switch (arrayElement.prop("nodeName"))
                {
                    case "SELECT":
                        arrayElement.children().each((index, element) =>
                        {
                            let present = array.indexOf($(element).val()) != -1;
                            $(element).prop("selected", present);
                        });
                        break;
                    default:
                        for (let arrayItem of value) 
                        {
                            let row = ModalEditorCollection.itemAdd(key);
                            for (let arrayItemKey in arrayItem)
                            {
                                let arrayItemValue: any = arrayItem[arrayItemKey];
                                row.children().children("#" + arrayItemKey).val(arrayItemValue);
                            }
                        }
                        break;
                }
            }
            else
            {
                $("#edit-form").find("#" + key).val(value);
            }
        }
    }

    static getObject<T extends ListControllerData>(controllerConstructor: () => T): T
    {
        let obj: T = controllerConstructor();

        for (let key in obj)
        {
            let value: any = obj[key];
            if (Array.isArray(value)) 
            {
                let parentElement = $("#" + key);
                if (parentElement.prop("nodeName") == "TBODY")
                {
                    let rows = parentElement.children().not(".collection-prototype");
                    let collection: any[] = [];
                    obj[key] = collection;
                    for (let row of rows.toArray())
                    {
                        let properties = $(row).children().children().not("button").toArray();
                        let subObj: any = {};
                        for (let propertyElement of properties)
                        {
                            let propertyKey = $(propertyElement).attr("id");
                            if ($(propertyElement).prop("nodeName") == "SELECT")
                            {
                                subObj[propertyKey] = $(propertyElement).val();
                            }
                            else
                            {
                                let propertyValue = $(propertyElement).val();
                                subObj[propertyKey] = propertyValue;
                            }
                        }
                        collection.push(subObj);
                    }
                }
                else if (parentElement.prop("nodeName") == "SELECT")
                {
                    let array = obj[key] as any[];
                    let values: any[] = parentElement.val();
                    if (values != null)
                    {
                        for (let item of values)
                        {
                            array.push(item);
                        }
                    }
                }
            }
            else
            {
                obj[key] = $("#edit-form").find("#" + key).val();
            }
        }

        return obj;
    }
}