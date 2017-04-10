export class FileSaver<T>
{
    static Save<T>(filename: string, contents: T): void
    {
        let anchor = document.createElement("a");
        anchor.download = filename;
        let stringContents = JSON.stringify(contents);
        let blob = new Blob([stringContents], { type: "application/json" });
        anchor.href = URL.createObjectURL(blob);
        anchor.click();
    }
}