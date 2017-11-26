import { RequestOptions } from '@angular/http';

export class ApiConfiguration
{
  public static rootUrl: string = window.location.protocol + "//" + window.location.hostname + ":5000";
  public static handleError: (error: any) => void = (error) => { };
  public static prepareRequestOptions: (options: RequestOptions) => void = (req) => { };
}
