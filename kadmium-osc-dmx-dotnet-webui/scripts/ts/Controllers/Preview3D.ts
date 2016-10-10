import {DMXUniverse} from "./Preview/DMXUniverse";
import {DMXFixture} from "./Preview/DMXFixture";
import {MVC} from "../MVC";
import {VolumetricSpotLightMaterial} from "./VolumetricSpotLightMaterial";

declare let THREE: any;

class DMXLight
{
    threeLight: any;
    threeVolume: any;
    threeLookAtTarget: any;
    helper: any;
    fixture: DMXFixture;

    pivot: any;

    constructor(scene: any, x: number, y: number, z: number, fixture: DMXFixture)
    {
        this.threeLookAtTarget = Preview3DController.createLookAtTarget(0, -10, 0);
        this.threeLight = Preview3DController.createSpotLight(this.threeLookAtTarget);
        this.threeVolume = Preview3DController.createVolumetricLight(scene, 10);
        
        this.threeVolume.position.set(x, y, z);
        this.threeLight.position.set(x, y, z);

        scene.add(this.threeVolume);
        scene.add(this.threeLight);

        this.helper = new THREE.SpotLightHelper(this.threeLight);
        scene.add(this.helper);

        this.pivot = new THREE.Object3D();
        this.pivot.add(this.threeLookAtTarget);
        this.pivot.position.set(x, y, z);
        scene.add(this.pivot);

        this.fixture = fixture;

        if (! (y > 0))
        {
            //this.threeVolumePivot.rotation.x = Math.PI / 180;
        }
    }
}

class DMXLightSet
{
    [address: number]: DMXLight;
}

class Preview3DController
{
    renderer: any;
    scene: any;
    camera: any;

    stage: any;

    socket: WebSocket;
    universe: DMXUniverse;
    lightSet: DMXLightSet;

    tomina: any;
    jesse: any;
    matty: any;
    james: any;

    constructor()
    {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(-5, 2.5, 25);
        this.camera.rotation.y = -45 * Math.PI / 180;
        this.camera.rotation.x = -15 * Math.PI / 180;

        let stageGeometry = new THREE.BoxGeometry(15, 1, 10);
        let stageMaterial = new THREE.MeshStandardMaterial({ color: 0xFFAAAA });

        let personGeometry = new THREE.SphereGeometry(1, 8, 6);
        let personMaterial = new THREE.MeshStandardMaterial({ color: 0xAAAAAA});

        this.tomina = new THREE.Mesh(personGeometry, personMaterial);
        this.matty = new THREE.Mesh(personGeometry, personMaterial);
        this.jesse = new THREE.Mesh(personGeometry, personMaterial);
        this.james = new THREE.Mesh(personGeometry, personMaterial);

        this.stage = new THREE.Mesh(stageGeometry, stageMaterial);

        this.matty.translateX(5);
        this.jesse.translateX(-5);
        this.james.translateZ(-5);

        this.stage.translateY(-1.5);
        this.stage.translateZ(-2.5);

        this.scene.add(this.tomina);
        this.scene.add(this.matty);
        this.scene.add(this.jesse);
        this.scene.add(this.james);

        this.scene.add(this.stage);
        
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        let controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

        $("#preview-container")[0].appendChild(this.renderer.domElement);

        this.socket = new WebSocket(MVC.getActionURL("Preview", "Socket", null).replace("http", "ws"));
        this.universe = new DMXUniverse();

        this.lightSet = new DMXLightSet();

        let that = this;
        this.socket.addEventListener("message", (message: MessageEvent) =>
        {
            let data = JSON.parse(message.data) as number[];
            that.universe.render(data);

            for (let fixture of that.universe.fixtures)
            {
                let light: DMXLight;
                if (that.lightSet[fixture.address] == null)
                {
                    let target: any;
                    switch (fixture.address)
                    {
                        case 301:
                            light = new DMXLight(that.scene, -3.75, 0, -2.5, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 315:
                            light = new DMXLight(that.scene, -1.25, 0, -2.5, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 329:
                            light = new DMXLight(that.scene, 1.25, 0, -2.5, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 343:
                            light = new DMXLight(that.scene, 3.75, 0, -2.5, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 400:
                            light = new DMXLight(that.scene, 0, 10, 0, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 405:
                            light = new DMXLight(that.scene, -5, 10, 0, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 410:
                            light = new DMXLight(that.scene, 5, 10, 0, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 415:
                            light = new DMXLight(that.scene, 0, 10, -5, fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                    }
                }
                light = that.lightSet[fixture.address];
                if (light != null)
                {
                    light.threeLight.color.r = light.fixture.red / 255;
                    light.threeLight.color.g = light.fixture.green / 255;
                    light.threeLight.color.b = light.fixture.blue / 255;
                    light.threeVolume.material.uniforms.lightColor.value.r = light.fixture.red / 255;
                    light.threeVolume.material.uniforms.lightColor.value.g = light.fixture.green / 255;
                    light.threeVolume.material.uniforms.lightColor.value.b = light.fixture.blue / 255;
                    light.threeVolume.lookAt(light.threeLookAtTarget.localToWorld(light.threeLookAtTarget.position));
                }
            }
        });
    }

    render(): void
    {
        requestAnimationFrame(this.render.bind(this));
        for (let address in this.lightSet)
        {
            this.lightSet[address].helper.update();
        }
        this.renderer.render(this.scene, this.camera)
    }

    static createSpotLight(target: any): any
    {
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.angle = 0.2;
        spotLight.target = target;
        
        return spotLight;
    }

    static createLookAtTarget(x: number, y: number, z: number): any
    {
        let target = new THREE.Object3D();
        target.position.set(x, y, z);
        return target;
    }

    static createVolumetricLight(scene: any, height: number): any
    {
        let geometry = new THREE.CylinderGeometry(0.0, 1.5, height, 32 * 2, 20, true);
        geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -geometry.parameters.height / 2, 0));
        geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
        let material = VolumetricSpotLightMaterial();
        let mesh = new THREE.Mesh(geometry, material);
        
        material.uniforms.attenuation.value = 10;
        material.uniforms.lightColor.value.set('white');
        material.uniforms.spotPosition.value = mesh.position;

        return mesh;
    }
}

let preview3DController: Preview3DController;
window.addEventListener("load", (ev: Event) => 
{
    preview3DController = new Preview3DController();
    preview3DController.render();
});