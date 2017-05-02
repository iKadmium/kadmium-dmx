export class Color
{
    static randomColor(): string
    {
        let color;
        color = Math.floor(Math.random() * 0x1000000); // integer between 0x0 and 0xFFFFFF
        color = color.toString(16); // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color; // prepend #
        return color;
    }

    static invertCssColor(color: string): string
    {
        let rgb = RGB.parse(color).invert();
        return rgb.toString();
    }

    static dec2hex(n: number): string
    {
        let hex = n.toString(16);
        if (hex.length < 2)
        {
            return '0' + hex;
        }
        return hex;
    }


    static clamp(n: number): number
    {
        if (n < 0) { return 0; }
        if (n > 255) { return 255; }
        return Math.floor(n);
    }
}

export class RGB
{
    r: number;
    g: number;
    b: number;

    constructor(red: number, green: number, blue: number)
    {
        this.r = red;
        this.g = green;
        this.b = blue;
    }

    public toYUV(): YUV
    {
        let y = Color.clamp(this.r * 0.29900 + this.g * 0.587 + this.b * 0.114);
        let u = Color.clamp(this.r * -0.16874 + this.g * -0.33126 + this.b * 0.50000 + 128);
        let v = Color.clamp(this.r * 0.50000 + this.g * -0.41869 + this.b * -0.08131 + 128);
        return new YUV(y, u, v);
    }

    public toString(): string
    {
        return '#' + Color.dec2hex(this.r) + Color.dec2hex(this.g) + Color.dec2hex(this.b);
    }

    public static parse(str: string): RGB
    {
        let color = str.substring(1); // remove #
        return new RGB(parseInt(color.substring(0, 2), 16),
            parseInt(color.substring(2, 4), 16),
            parseInt(color.substring(4, 6), 16)
        );
    }

    public invert(): RGB
    {
        let yuv = this.toYUV();
        let factor = 90;
        let threshold = 100;
        yuv.y = Color.clamp(yuv.y + (yuv.y > threshold ? -factor : factor));
        return yuv.toRGB();
    }
}

export class YUV
{
    y: number;
    u: number;
    v: number;

    constructor(y: number, u: number, v: number)
    {
        this.y = y;
        this.u = u;
        this.v = v;
    }

    public toRGB(): RGB
    {
        let y = this.y;
        let u = this.u;
        let v = this.v;
        let r = Color.clamp(y + (v - 128) * 1.40200);
        let g = Color.clamp(y + (u - 128) * -0.34414 + (v - 128) * -0.71414);
        let b = Color.clamp(y + (u - 128) * 1.77200);
        return new RGB(r, g, b);
    }
}