import {MVC} from "../../MVC";

import * as ko from "knockout";

interface OSCListenerLogUpdateMessage
{
    type: "AttributeUpdate";
    group: string;
    attribute: string;
    value: number;
}

interface OSCListenerLogInitMessage
{
    type: "Init";
    groups: string[];
    attributes: string[];
}

interface OSCListenerLogMessage
{
    type: string;
}

class AttributeViewModel
{
    name: KnockoutObservable<string>;
    value: KnockoutObservable<number>;
    backgroundColor: KnockoutComputed<string>;

    constructor(name: string)
    {
        this.name = ko.observable<string>(name);
        this.value = ko.observable<number>(0);
        this.backgroundColor = ko.pureComputed<string>(() =>
        {
            let red = 255;
            let green = 255 - (this.value() * 255);
            let blue = 255 - (this.value() * 255);
            let color = "rgb(" + Math.floor(red) + "," + Math.floor(green) + "," + Math.floor(blue) + ")";
            return color;
        });
    }
}

class GroupViewModel
{
    name: KnockoutObservable<string>;
    attributes: KnockoutObservableArray<AttributeViewModel>;

    constructor(name: string, attributeNames: string[])
    {
        this.name = ko.observable<string>(name);
        this.attributes = ko.observableArray<AttributeViewModel>();
        for (let attributeName of attributeNames)
        {
            this.attributes.push(new AttributeViewModel(attributeName));
        }
    }

    getAttribute(name: string): AttributeViewModel
    {
        let filtered = this.attributes().filter((value: AttributeViewModel, index: number, array: AttributeViewModel[]) =>
        {
            return value.name() == name;
        })
        return filtered[0];
    }
}

class OSCListenerLiveViewModel 
{
    webSocket: WebSocket;
    groups: KnockoutObservableArray<GroupViewModel>;
    attributesBody: HTMLTableSectionElement;
    selectedGroup: KnockoutObservable<GroupViewModel>;

    constructor()
    {
        this.webSocket = new WebSocket(document.URL.replace("http://", "ws://").replace("Live", "Socket"));

        this.webSocket.addEventListener("open", (ev: Event) => 
        {
            let getGroupsRequest = { type: "Init" };
            this.webSocket.send(JSON.stringify(getGroupsRequest));
        });

        this.webSocket.addEventListener("message", (ev: MessageEvent) =>
        {
            let message = JSON.parse(ev.data) as OSCListenerLogMessage;
            switch (message.type)
            {
                case "AttributeUpdate":
                    let attributeUpdate = message as OSCListenerLogUpdateMessage;
                    this.setAttribute(attributeUpdate.group, attributeUpdate.attribute, attributeUpdate.value);
                    break;
                case "Init":
                    let initMessage = message as OSCListenerLogInitMessage;
                    this.init(initMessage.groups, initMessage.attributes);
                    break;
            }
        });

        this.groups = ko.observableArray<GroupViewModel>();

        let loadingGroup = new GroupViewModel("loading", ["loading"]);

        this.selectedGroup = ko.observable<GroupViewModel>(loadingGroup);
        this.groups().push(loadingGroup);

        this.attributesBody = $("#attributes")[0] as HTMLTableSectionElement;
    }

    init(groups: string[], attributes: string[])
    {
        this.groups.removeAll();
        for (let groupName of groups)
        {
            this.groups.push(new GroupViewModel(groupName, attributes));
        }
        this.selectGroup(this.groups()[0]);
    }

    selectGroup(group: GroupViewModel): void
    {
        this.selectedGroup(group);
    }

    setAttribute(groupName: string, attributeName: string, value: number)
    {
        let group = this.getGroup(groupName);
        if (group != null)
        {
            let attribute = group.getAttribute(attributeName);
            if (attribute != null)
            {
                attribute.value(value);
            }
        }
    }

    getGroup(name: string): GroupViewModel
    {
        let filtered = this.groups().filter((value: GroupViewModel, index: number, array: GroupViewModel[]) =>
        {
            return value.name() == name;
        })
        return filtered[0];
    }
}

let oscListenerLiveViewModel: OSCListenerLiveViewModel;
window.addEventListener("load", (ev: Event) =>
{
    oscListenerLiveViewModel = new OSCListenerLiveViewModel();
    (window as any)["viewModel"] = oscListenerLiveViewModel;
    ko.applyBindings(oscListenerLiveViewModel);
});