export class Sleep
{
    public static sleepFor(duration: number): Promise<void>
    {
        let promise = new Promise<void>((resolve, reject) =>
        {
            window.setTimeout(() =>
            {
                resolve();
            });
        });
        return promise;
    }

    public static async sleepUntil(checkFunction: () => boolean): Promise<void>
    {
        while (!checkFunction())
        {
            await Sleep.sleepFor(50);
        }
    }
}
