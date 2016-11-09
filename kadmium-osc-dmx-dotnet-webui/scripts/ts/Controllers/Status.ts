import * as ko from "knockout";

export interface CodeLookup
{
    ["Error"]: string,
    ["Success"]: string,
    ["Warning"]: string,
    ["Unknown"]: string,
    [index: string]: string
}

export class StatusViewModel
{
    static alertClasses: CodeLookup = { "Error": "alert-danger", "Success": "alert-success", "Warning": "alert-warning", "Unknown": "alert-default" };
    static panelClasses: CodeLookup = { "Error": "panel-danger", "Success": "panel-success", "Warning": "panel-warning", "Unknown": "panel-default" };
    static glyphClasses: CodeLookup = { "Error": "glyphicon-remove-sign", "Success": "glyphicon-ok-sign", "Warning": "glyphicon-info-sign", "Unknown": "glyphicon-question-sign" };

    panelClass: KnockoutComputed<string>;
    alertClass: KnockoutComputed<string>;
    glyphClass: KnockoutComputed<string>;

    message: KnockoutObservable<string>;
    code: KnockoutObservable<string>;
    name: KnockoutObservable<string>;

    constructor(name: string)
    {
        this.code = ko.observable<string>("Unknown");
        this.message = ko.observable<string>("Loading...");
        this.name = ko.observable<string>(name);
        this.panelClass = ko.computed<string>(() => StatusViewModel.panelClasses[this.code()]);
        this.alertClass = ko.computed<string>(() => StatusViewModel.alertClasses[this.code()]);
        this.glyphClass = ko.computed<string>(() => StatusViewModel.glyphClasses[this.code()]);
    }

    update(code: string, message: string)
    {
        this.message(message);
        this.code(code);
    }
}