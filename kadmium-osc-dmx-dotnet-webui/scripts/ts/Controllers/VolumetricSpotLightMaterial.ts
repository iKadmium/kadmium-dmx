class FloatUniform extends THREE.Uniform
{
    value: number;
    constructor(value: number)
    {
        super(value);
        this.type = "f";
    }
}

class Vector3Uniform extends THREE.Uniform
{
    value: THREE.Vector3;
    constructor(value: THREE.Vector3)
    {
        super(value);
        this.type = "v3";
    }
}

class ColorUniform extends THREE.Uniform
{
    value: THREE.Color;
    constructor(value: THREE.Color)
    {
        super(value);
        this.type = "c";
    }
}

class VolumetricSpotLightMaterialUniforms
{
    attenuation: FloatUniform;
    anglePower: FloatUniform;
    spotPosition: Vector3Uniform;
    lightColor: ColorUniform;
    constructor()
    {
        this.attenuation = new FloatUniform(5.0);
        this.anglePower = new FloatUniform(1.2);
        this.spotPosition = new Vector3Uniform(new THREE.Vector3(0, 0, 0));
        this.lightColor = new ColorUniform(new THREE.Color("cyan"));
    }
}

/**
 * from http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
 * @return {[type]} [description]
 */
export class VolumetricSpotLightMaterial extends THREE.ShaderMaterial
{
    // 
    vertexShader: string;
    fragmentShader: string;
    material: THREE.ShaderMaterial;
    uniforms: VolumetricSpotLightMaterialUniforms;

    constructor()
    {
        super();
        this.vertexShader = [
            'varying vec3 vNormal;',
            'varying vec3 vWorldPosition;',

            'void main(){',
            '// compute intensity',
            'vNormal		= normalize( normalMatrix * normal );',

            'vec4 worldPosition	= modelMatrix * vec4( position, 1.0 );',
            'vWorldPosition		= worldPosition.xyz;',

            '// set gl_Position',
            'gl_Position	= projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}',
        ].join('\n')

        this.fragmentShader = [
            'varying vec3		vNormal;',
            'varying vec3		vWorldPosition;',

            'uniform vec3		lightColor;',

            'uniform vec3		spotPosition;',

            'uniform float		attenuation;',
            'uniform float		anglePower;',

            'void main(){',
            'float intensity;',

            //////////////////////////////////////////////////////////
            // distance attenuation					//
            //////////////////////////////////////////////////////////
            'intensity	= distance(vWorldPosition, spotPosition)/attenuation;',
            'intensity	= 1.0 - clamp(intensity, 0.0, 1.0);',

            //////////////////////////////////////////////////////////
            // intensity on angle					//
            //////////////////////////////////////////////////////////
            'vec3 normal	= vec3(vNormal.x, vNormal.y, abs(vNormal.z));',
            'float angleIntensity	= pow( dot(normal, vec3(0.0, 0.0, 1.0)), anglePower );',
            'intensity	= intensity * angleIntensity;',
            // 'gl_FragColor	= vec4( lightColor, intensity );',

            //////////////////////////////////////////////////////////
            // final color						//
            //////////////////////////////////////////////////////////

            // set the final color
            'gl_FragColor	= vec4( lightColor, intensity);',
            '}',
        ].join('\n')

        this.uniforms = new VolumetricSpotLightMaterialUniforms();
        
        this.transparent = true;
        this.depthWrite = false;

    }

}
