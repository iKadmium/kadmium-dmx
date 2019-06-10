import { IEnvironment } from "./Environment";

export const DevelopmentEnvironment: IEnvironment =
{
    get graphQLEndpoint()
    {
        return new URL(`http://${window.location.hostname}:5000/api/graphql`);
    },

    get graphQLWebSocketsEndpoint()
    {
        return new URL(`ws://${window.location.hostname}:5000/api/graphql`);
    }
}