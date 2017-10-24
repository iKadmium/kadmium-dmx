import { RequestOptions } from '@angular/http';

export class ApiConfiguration
{
  public static rootUrl: string = "http://localhost:5000";
  public static handleError: (error: any) => void = (error) => alert(error);
  public static prepareRequestOptions: (options: RequestOptions) => void = (req) => { };
}
