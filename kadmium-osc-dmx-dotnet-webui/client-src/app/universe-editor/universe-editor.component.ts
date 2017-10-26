import { Component, OnInit, Input } from '@angular/core';
import { StatusCode } from "../status-code.enum";
import { NotificationsService } from "../notifications.service";
import { AsyncFileReader } from "../async-file-reader";
import { FileSaver } from "../file-saver";
import { GroupService, FixtureDefinitionService } from "api/services";
import { Group, FixtureDefinitionSkeleton, Universe, Fixture } from "api/models";

@Component({
    selector: 'app-universe-editor',
    templateUrl: './universe-editor.component.html',
    styleUrls: ['./universe-editor.component.css'],
    providers: [FixtureDefinitionService, GroupService]
})
export class UniverseEditorComponent implements OnInit
{
    @Input("universe") universe: Universe;
    @Input("groups") groups: Group[];

    public selectedFixture: Fixture;
    private selectedFixtures: Fixture[];
    public fixtureDefinitionSkeletons: FixtureDefinitionSkeleton[];

    constructor(private fixtureDefinitionService: FixtureDefinitionService, private notificationsService: NotificationsService)
    {
        this.selectedFixtures = [];
        this.selectedFixture = null;
    }

    async ngOnInit(): Promise<void>
    {
        try
        {
            this.fixtureDefinitionSkeletons = (await this.fixtureDefinitionService.getFixtureDefinitionSkeletons()).data;
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

    private async removeFixture(fixture: Fixture): Promise<void>
    {
        if (window.confirm("Are you sure you want to delete " + fixture.type.manufacturer + " " + fixture.type.model + "?"))
        {
            let index = this.universe.fixtures.indexOf(fixture);
            this.universe.fixtures.splice(index, 1);
            if (this.selectedFixture == fixture)
            {
                let newIndex = (index == this.universe.fixtures.length) ? this.universe.fixtures.length - 1 : index;
                this.selectedFixture = this.universe.fixtures[newIndex];
            }
        }
    }

    private addFixture(): void
    {
        let fixture = new Fixture();
        fixture.group = this.groups[0].name;
        this.universe.fixtures.push(fixture);
        this.selectedFixture = fixture;
    }

    private isSelected(fixture: Fixture): boolean
    {
        return this.selectedFixtures.indexOf(fixture) != -1;
    }

    private selectFixture(fixture: Fixture, selected: boolean)
    {
        let index = this.selectedFixtures.indexOf(fixture);
        if (selected && index == -1)
        {
            this.selectedFixtures.push(fixture);
        }
        else if (!selected && index != -1)
        {
            this.selectedFixtures.splice(index, 1);
        }
    }

    private get sortedFixtures(): Fixture[]
    {
        return this.universe.fixtures.slice().sort((a, b) => a.address - b.address);
    }

    private async savePresetAs(filenameForm: HTMLInputElement): Promise<void>
    {
        try
        {
            let name = filenameForm.value; // await this.inputBox.show("Select a name", "Name:", "Save", "Cancel");
            let fixtures = this.selectedFixtures;
            FileSaver.Save(name + ".json", fixtures);
        }
        catch (error)
        { }
    }

    private upload(fileInput: any): void
    {
        (fileInput as HTMLInputElement).click();
    }

    public async uploadFiles(files: File[]): Promise<void>
    {
        for (let file of files)
        {
            await this.uploadFile(file);
        }
    }

    private async uploadFile(file: File): Promise<void>
    {
        try
        {
            let fixtures = await AsyncFileReader.read<Fixture[]>(file);
            for (let fixture of fixtures)
            {
                fixture.id = 0;
                fixture.type = this.fixtureDefinitionSkeletons.find(x => x.manufacturer == fixture.type.manufacturer && x.model == fixture.type.model);
                this.universe.fixtures.push(fixture);
            }
            this.notificationsService.add(StatusCode.Success, "Successfully added " + fixtures.length + " fixtures");
        }
        catch (reason)
        {
            this.notificationsService.add(StatusCode.Error, reason);
        }
    }

}
