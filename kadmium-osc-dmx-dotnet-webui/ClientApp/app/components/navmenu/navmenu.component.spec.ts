import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { NavMenuComponent } from "./navmenu.component";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { } from "jasmine";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('NavMenuComponent', () =>
{
    let comp: NavMenuComponent;
    let fixture: ComponentFixture<NavMenuComponent>;
    let rootNavDe: DebugElement;
    let rootNavEl: HTMLElement;

    let realNavDe: DebugElement;
    let realNavEl: HTMLElement;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            declarations: [NavMenuComponent], // declare the test component
        });

        fixture = TestBed.createComponent(NavMenuComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        rootNavDe = fixture.debugElement.query(By.css('nav'));
        rootNavEl = rootNavDe.nativeElement;

        realNavDe = fixture.debugElement.query(By.css('#myNavbar'));
        realNavEl = realNavDe.nativeElement;
    });

    it('should contain a nav element', () =>
    {
        expect(rootNavEl).not.toBe(null);
    });

    it('should contain a proper nav element', () =>
    {
        expect(realNavEl).not.toBe(null);
    });

    it('should contain some children', () =>
    {
        let ul = realNavDe.children[0];
        expect(ul.children.length).toBeGreaterThan(0);
    });
});
