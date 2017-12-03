import { Component, OnInit } from '@angular/core';
import { Group } from 'api/models/group';
import { GroupService } from 'api/services/group.service';
import { AnimationLibrary } from 'app/animation-library';
import { MatSelectionList } from '@angular/material';
import { Settings } from 'api/models/settings';
import { SettingsService } from 'api/services/settings.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-tools',
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.scss'],
	providers: [GroupService, SettingsService],
	animations: [AnimationLibrary.animations()]
})
export class ToolsComponent implements OnInit
{
	public loading: boolean
	public groups: Group[];
	public attributes: Attribute[];
	public settings: Settings;

	constructor(private groupService: GroupService, private settingsService: SettingsService, private titleService: Title)
	{
		this.loading = true;
	}

	ngOnInit()
	{
		let promises = [];
		this.attributes = [
			new Attribute("Hue", 0, 360, 0.1),
			new Attribute("Saturation"),
			new Attribute("Brightness"),
			new Attribute("Strobe"),
			new Attribute("Apeshit"),
			new Attribute("UV"),
			new Attribute("Chase"),
			new Attribute("Program"),
			new Attribute("Pan", 0, 1, 0.001, 0.5),
			new Attribute("Tilt"),
			new Attribute("RandomMove"),
			new Attribute("CO2"),
			new Attribute("Fire")
		];

		promises.push(this.groupService.getGroups().then(response =>
		{
			this.groups = response.data;
		}));

		promises.push(this.settingsService.getSettings().then(response =>
		{
			this.settings = response.data;
		}));

		Promise.all(promises).then(x => 
		{
			this.loading = false;
		});

		this.titleService.setTitle("Tools");
	}

	public getReaperControllerScript(attributesList: MatSelectionList): string
	{
		let sliderLines: string[] = [];
		let selectedAttributes: Attribute[] = attributesList.selectedOptions.selected.map(x => x.value);
		sliderLines.push(getSliderCode(sliderLines.length + 1, "MIDI Channel", 0, 0, 15, 1));

		for (let attribute of selectedAttributes)
		{
			sliderLines.push(getSliderCode(sliderLines.length + 1, attribute.name, attribute.defaultValue, attribute.min, attribute.max, attribute.step));
		}

		let pinLines = ["in_pin:none", "out_pin:none"];

		let initLines = [
			`@init`,
			`\tlastRefreshTime = 0;`,
			`\tlastValues = 4096;`,
			``,
			`\tfunction sendMessage(channel, cc, value) (`,
			`\t\tmidisend(0, channel | 0xb0, cc, value);`,
			`\t\tlastValues[cc] = value;`,
			`\t);`,
			``,
			`\tfunction sendMaybe(channel, cc, value) (`,
			`\t\tlastValues[cc] != value ? (`,
			`\t\t\tsendMessage(channel, cc, value);`,
			`\t\t);`,
			`\t);`
		];

		let blockLines = [
			`@block`,
			`\tcurrentTime = time();`,
			`\tcurrentTime > lastRefreshTime ? (`];

		for (let i = 0; i < selectedAttributes.length; i++)
		{
			let attribute = selectedAttributes[i];
			if (attribute.max != 1)
			{
				blockLines.push(`\t\tsendMessage(slider1, ${i + 1}, slider${i + 2} / ${attribute.max} * 127);`)
			}
			else
			{
				blockLines.push(`\t\tsendMessage(slider1, ${i + 1}, slider${i + 2} * 127);`)
			}
		}

		blockLines.push(`\t\tlastRefreshTime = currentTime;`,
			`\t) : (`
		);

		for (let i = 0; i < selectedAttributes.length; i++)
		{
			let attribute = selectedAttributes[i];
			if (attribute.max != 1)
			{
				blockLines.push(`\t\tsendMaybe(slider1, ${i + 1}, slider${i + 2} / ${attribute.max} * 127);`)
			}
			else
			{
				blockLines.push(`\t\tsendMaybe(slider1, ${i + 1}, slider${i + 2} * 127);`)
			}
		}

		blockLines.push(`\t);`);


		let script = [
			sliderLines.join("\r\n"),
			pinLines.join("\r\n"),
			initLines.join("\r\n"),
			blockLines.join("\r\n")
		].join("\r\n\r\n");
		console.log(script);
		return script;
	}

	public getOsciiBotControllerScript(attributesList: MatSelectionList, groupsList: MatSelectionList, midiLoopbackName: string): string
	{
		let ioLines = [];
		let selectedAttributes: Attribute[] = attributesList.selectedOptions.selected.map(x => x.value);
		let selectedGroups: Group[] = groupsList.selectedOptions.selected.map(x => x.value);

		ioLines.push(
			`@output lightingOutput OSC "backingtracks.local:${this.settings.oscPort}"`,
			`@input lightingInput MIDI "${midiLoopbackName}"`
		);

		let initLines = [
			`@init`,
			`\tdefaultGroup = "defaultGroup";`,
			`\tdefaultAttribute = "defaultAttribute";`,
			``,
			`\tfunction sendUpdate(group, attribute, value)`,
			`\t(`,
			`\t\taddress = "/group/";`,
			`\t\tsprintf(address, "/group/%s/%s", group, attribute);`,
			`\t\tprintf("%s = %f\\n", address, value);`,
			`\t\toscsend(lightingOutput, address, value);`,
			`\t);`,
			``,
			`\tfunction getGroup(groupNumber)`,
			`\t(`,
			`\t\tgroup = defaultGroup;`,
		];

		for (let i = 0; i < selectedGroups.length; i++)
		{
			let group = selectedGroups[i];
			initLines.push(
				``,
				`\t\tgroupNumber == ${i + 1} ? (`,
				`\t\t\tgroup = "${group.name}";`,
				`\t\t);`
			);
		}

		initLines.push(
			``,
			`\t\tgroup;`,
			`\t);`,
			``,
			`\tfunction getAttribute(ccNumber)`,
			`\t(`,
			`\t\tattribute = defaultAttribute;`,
		);

		for (let i = 0; i < selectedAttributes.length; i++)
		{
			let attribute = selectedAttributes[i];
			initLines.push(
				``,
				`\t\tccNumber == ${i + 1} ? (`,
				`\t\t\tattribute = "${attribute.name}";`,
				`\t\t);`
			);
		}

		initLines.push(
			``,
			`\t\tattribute;`,
			`\t);`
		);

		let midiMsgLines = [
			`@midimsg`,
			`\tchannel = msg1 & 0x0F;`,
			`\tmessageType = msg1 & 0xF0;`,
			``,
			`\tmessageType == 0xB0 ? (`,
			`\t\tccNumber = (msg2 & 0xFF);`,
			`\t\tvalue = msg3 / 127;`,
			`\t\tattribute = getAttribute(ccNumber);`,
			`\t\tgroup = getGroup(channel);`,
			``,
			`\t\t(group != defaultGroup && attribute != defaultAttribute) ? (`,
			`\t\t\tsendUpdate(group, attribute, value);`,
			`\t\t);`,
			`\t);`
		];

		let lines = [
			ioLines.join("\r\n"),
			initLines.join("\r\n"),
			midiMsgLines.join("\r\n")
		].join("\r\n\r\n");

		console.log(lines);
		return lines;
	}

	public download(filename, text): void
	{
		let pom = document.createElement('a');
		pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		pom.setAttribute('download', filename);

		if (document.createEvent)
		{
			let event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			pom.dispatchEvent(event);
		}
		else
		{
			pom.click();
		}
	}

	public getNames(list: MatSelectionList): string
	{
		return list.selectedOptions.selected.map(x => x.value.name).join(", ");
	}
}

function getSliderCode(sliderNumber: number, name: string, defaultValue: number = 0, min: number = 0, max: number = 1, step: number = 0.001): string
{
	return `slider${sliderNumber}:${defaultValue}<${min},${max},${step}>${name}`;
}



class Attribute
{
	constructor(public name: string, public min: number = 0, public max: number = 1, public step: number = 0.001, public defaultValue: number = 0.0)
	{

	}
}