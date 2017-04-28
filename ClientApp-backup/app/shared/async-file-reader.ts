export class AsyncFileReader<T>
{
    static read<T>(file: File): Promise<T>
    {
        return new Promise<T>((resolve, reject) =>
        {
            try
            {
                let reader = new FileReader();
                reader.addEventListener("load", (event) => 
                {
                    let content = reader.result;
                    let returnVal = JSON.parse(content) as T;
                    resolve(returnVal);
                });
                reader.readAsText(file);
            }
            catch (error)
            {
                reject(error);
            }
        });
        
    }
}