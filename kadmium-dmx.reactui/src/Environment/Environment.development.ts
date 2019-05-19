import { IEnvironment } from "./Environment";

export const DevelopmentEnvironment: IEnvironment =
{
    get graphQLEndpoint()
    {
        return new URL("http://localhost:5000/api/graphql");
    }
}