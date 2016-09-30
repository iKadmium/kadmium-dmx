namespace FixtureCollection {
    let modalEditor: ModalEditor<FixtureCollection>;

    interface Fixture {
        startChannel: Number;
        type: string;
        group: string;
        options: string;
    }

    interface FixtureCollection extends Named {
        name: string;
        fixtures: Fixture[];
    }

    function onLoad(): void {
        modalEditor = new ModalEditor<FixtureCollection>();
    }

    window.addEventListener("load", onLoad);
}