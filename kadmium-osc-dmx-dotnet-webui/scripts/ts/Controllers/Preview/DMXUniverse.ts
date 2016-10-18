import {DMXFixture} from "./DMXFixture";
import {MVC} from "../MVC";

interface FixtureJSON
{
    name: string;
    address: number;
}

export class DMXUniverse
{
    fixtures: DMXFixture[];
    constructor()
    {
        this.fixtures = [];
        let url = MVC.getActionURL("Preview", "Fixtures", null);

        let that = this;
        $.ajax({
            url: url,
            success: $.proxy(that.onLoadFixtures, that)
        });
    }

    onLoadFixtures(data: any, textStatus: string, jqXHR: JQueryXHR)
    {
        let fixtures = JSON.parse(data) as FixtureJSON[];

        for (let fixture of fixtures)
        {
            this.fixtures.push(new DMXFixture(fixture.name, fixture.address)); 
        }
    }

    render(data: number[])
    {
        for (let fixture of this.fixtures)
        {
            fixture.render(data);
        }
    }


}