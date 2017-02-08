import { Component } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent
{
    private items: MenuItem[];

    constructor()
    {
        this.items = [
            {
                label: "Home",
                icon: "fa-home",
                url: "/"
            },
            {
                label: "Setup",
                icon: "fa-cog",
                items: [
                    {
                        label: "Settings",
                        icon: "fa-cog",
                        url: "/settings"
                    },
                    {
                        label: "Groups",
                        icon: "fa-cog",
                        url: "/groups"
                    }
                ]
            },
            {
                label: "Venues",
                items: [
                    {
                        label: "Venues",
                        url: "/venues"
                    },
                    {
                        label: "Fixture Collections",
                        url: "/fixture-collections"
                    }
                ]
            },
            {
                label: "Fixture Definitions",
                url: "/fixture-definitions"
            },
            {
                label: "Tools",
                items: [
                    {
                        label: "Testing",
                        url: "/testing"
                    },
                    {
                        label: "Preview",
                        url: "/preview"
                    },
                    {
                        label: "Raw DMX",
                        url: "/raw-dmx"
                    }
                ]
            }
        ];
    }
}
