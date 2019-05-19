import React from "react";
import { DevelopmentEnvironment } from "./Environment.development";

export interface IEnvironment
{
    readonly graphQLEndpoint: URL
}

export class Environment
{
    public static getEnvironment(): IEnvironment
    {
        switch (process.env.NODE_ENV)
        {
            default:
                throw new Error(`Unknown environment: ${process.env.NODE_ENV}`)
            case "development":
                return DevelopmentEnvironment;
        }

    }
}

const ctx = React.createContext<IEnvironment>(Environment.getEnvironment());
export const EnvironmentProvider = ctx.Provider;
export const EnvironmentConsumer = ctx.Consumer;