import {DMXUniverse} from "./Preview/DMXUniverse";
import {DMXFixture} from "./Preview/DMXFixture";
import {MVC} from "../MVC";
import {VolumetricSpotLightMaterial} from "./VolumetricSpotLightMaterial";

class Vector3 
{
    x: number;
    y: number;
    z: number;
}

class DMXLight
{
    light: THREE.SpotLight;
    volume: THREE.Mesh;
    helper: THREE.SpotLightHelper;
    fixture: DMXFixture;
    inverted: boolean;
    initialRotation: THREE.Euler;

    lookAtHelper: THREE.Object3D;
    lookAtPivot: THREE.Object3D;
    lookAtVector: THREE.Vector3;

    constructor(scene: THREE.Scene, initialPosition: THREE.Vector3, initialRotation: THREE.Euler, fixture: DMXFixture)
    {
        this.fixture = fixture;
        this.initialRotation = initialRotation;

        this.lookAtHelper = Preview3DController.createLookAtTarget();
        this.lookAtPivot = Preview3DController.createLookAtTarget();
        
        this.lookAtHelper.translateY(10);
        scene.add(this.lookAtPivot);
        this.lookAtPivot.add(this.lookAtHelper);
        
        this.light = Preview3DController.createSpotLight(this.lookAtHelper);
        this.light.position.copy(initialPosition);
        this.volume = Preview3DController.createVolumetricLight(scene, 15);
        this.lookAtPivot.add(this.volume);
        this.helper = new THREE.SpotLightHelper(this.light);
        
        this.lookAtPivot.rotation.copy(initialRotation);
        this.lookAtPivot.position.copy(initialPosition);

        let lookAtAbsolute = new THREE.Vector3(this.lookAtHelper.position.x, this.lookAtHelper.position.y, this.lookAtHelper.position.z);
        this.lookAtHelper.localToWorld(lookAtAbsolute);

        this.volume.lookAt(lookAtAbsolute);

        this.updateTargetPosition();
        
        //scene.add(this.helper);
        scene.add(this.light);
    }

    update(): void
    {
        this.light.color.r = this.fixture.red / 255;
        this.light.color.g = this.fixture.green / 255;
        this.light.color.b = this.fixture.blue / 255;
        let material = this.volume.material as VolumetricSpotLightMaterial;
        material.uniforms.lightColor.value.r = this.fixture.red / 255;
        material.uniforms.lightColor.value.g = this.fixture.green / 255;
        material.uniforms.lightColor.value.b = this.fixture.blue / 255;

        this.updateTargetPosition();

        
        this.helper.update();
    }

    updateTargetPosition(): void
    {
        let rotation = new THREE.Euler(this.initialRotation.x, this.initialRotation.y, this.initialRotation.z);
        
        if (this.fixture.pan != null)
        {
            rotation.y += this.fixture.panDegrees * Math.PI / 180;
        }
        if (this.fixture.tilt != null)
        {
            rotation.x += this.fixture.tiltDegrees * Math.PI / 180;
        }

        this.lookAtPivot.rotation.copy(rotation);
        
    }
}

class DMXLightSet
{
    [address: number]: DMXLight;
}

class Preview3DController
{
    renderer: THREE.Renderer;
    scene: THREE.Scene;
    camera: THREE.Camera;

    stage: THREE.Mesh;

    socket: WebSocket;
    universe: DMXUniverse;
    lightSet: DMXLightSet;

    tomina: THREE.Mesh;
    jesse: THREE.Mesh;
    matty: THREE.Mesh;
    james: THREE.Mesh;

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

        let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
        this.scene.add(ambientLight);

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
                            light = new DMXLight(that.scene, new THREE.Vector3(- 3.75, 0, -2.5), new THREE.Euler(0, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 315:
                            light = new DMXLight(that.scene, new THREE.Vector3(-1.25, 0, -2.5), new THREE.Euler(0, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 329:
                            light = new DMXLight(that.scene, new THREE.Vector3(1.25, 0, -2.5), new THREE.Euler(0, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 343:
                            light = new DMXLight(that.scene, new THREE.Vector3(3.75, 0, -2.5), new THREE.Euler(0, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 400:
                            light = new DMXLight(that.scene, new THREE.Vector3(0, 10, 0), new THREE.Euler(Math.PI, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 405:
                            light = new DMXLight(that.scene, new THREE.Vector3(-5, 10, 0), new THREE.Euler(Math.PI, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 410:
                            light = new DMXLight(that.scene, new THREE.Vector3(5, 10, 0), new THREE.Euler(Math.PI, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                        case 415:
                            light = new DMXLight(that.scene, new THREE.Vector3(0, 10, -5), new THREE.Euler(Math.PI, 0, 0), fixture);
                            that.lightSet[fixture.address] = light;
                            break;
                    }
                }
                light = that.lightSet[fixture.address];
                if (light != null)
                {
                    light.update();
                }
            }
        });
    }

    render(): void
    {
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera)
    }

    static createSpotLight(target: any): THREE.SpotLight
    {
        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.angle = 0.2;
        spotLight.target = target;
        
        return spotLight;
    }

    static createLookAtTarget(): THREE.Object3D
    {
        let target = new THREE.Object3D();
        return target;
    }

    static createVolumetricLight(scene: any, height: number): THREE.Mesh
    {
        let geometry = new THREE.CylinderGeometry(0.0, 1.5, height, 32 * 2, 20, true);
        geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -geometry.parameters.height / 2, 0));
        geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
        let material = new VolumetricSpotLightMaterial();
        let mesh = new THREE.Mesh(geometry, material);
        
        material.uniforms.attenuation.value = 10;
        material.uniforms.lightColor.value.set('white');
        material.uniforms.spotPosition.value = mesh.position;

        return mesh;
    }

    static createDot(): any
    {
        let dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
        let dotMaterial = new THREE.PointCloudMaterial({ size: 1, sizeAttenuation: false });
        let dot = new THREE.PointCloud(dotGeometry, dotMaterial);
        return dot;
    }
}

let preview3DController: Preview3DController;
window.addEventListener("load", (ev: Event) => 
{
    preview3DController = new Preview3DController();
    preview3DController.render();
});