import { Component, ViewChild } from '@angular/core';
import { MessageBarComponent } from "../status/message-bar/message-bar.component";
import { GroupService } from "../groups/group.service";

@Component({
    selector: 'fixtures-live',
    template: require('./fixtures-live.component.html'),
    providers: [GroupService]
})
export class FixturesLiveComponent
{
    @ViewChild("messageBar") messageBar: MessageBarComponent;

    groups: PreviewGroup[];

    constructor(private groupService: GroupService)
    {
        groupService
            .get()
            .then(value => 
            {
                this.groups = value.map(group => new PreviewGroup(group.name));
            })
            .catch(reason => this.messageBar.add("Error", reason));
    }

    activate(group: StateGroup, state: State): void
    {
        group.activeState = state;
        for (let attributeName in state.settings)
        {
            let attributeValue = state.settings[attributeName];
            this.groupService.set(group.groupName, attributeName, attributeValue);
        }
    }
}

class PreviewGroup
{
    name: string;
    stateGroups: StateGroup[];

    constructor(name: string)
    {
        this.name = name
        this.stateGroups =
            [new StateGroup(name, "Colours",
                [
                    new State("Black", { Hue: 0, Saturation: 0, Brightness: 0, Strobe: 0 }),
                    new State("Red", { Hue: 0, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new State("Green", { Hue: 0.3333, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new State("Blue", { Hue: 0.666, Saturation: 1, Brightness: 1, Strobe: 0 }),
                    new State("White", { Hue: 0, Saturation: 0, Brightness: 1, Strobe: 0 }),
                    new State("Strobing", { Hue: 0, Saturation: 0, Brightness: 1, Strobe: 1 })
                ]),
            new StateGroup(name, "Movements",
                [
                    new State("Centered", { Pan: 0.5, Tilt: 0.5, RandomMove: 0 }),
                    new State("Down", { Pan: 0.5, Tilt: 0, RandomMove: 0 }),
                    new State("Up", { Pan: 0.5, Tilt: 1, RandomMove: 0 }),
                    new State("Left", { Pan: 0, Tilt: 0.5, RandomMove: 0 }),
                    new State("Right", { Pan: 1, Tilt: 0.5, RandomMove: 0 }),
                    new State("Moving", { RandomMove: 1 })
                ])
            ];
    }
}

class StateGroup
{
    activeState: State;
    states: State[];
    name: string;
    groupName: string;

    constructor(groupName: string, name: string, states: State[])
    {
        this.name = name;
        this.groupName = groupName;
        this.states = states;
        this.activeState = null;
    }
}

class State
{
    name: string;
    settings: Settings;

    constructor(name: string, settings: Settings)
    {
        this.name = name;
        this.settings = settings;
    }
}

interface Settings
{
    [key: string]: number;
}