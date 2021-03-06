/// <reference types="node" />
import { ApplicationConfig } from "../models/ApplicationConfig.model";
import { Server } from "http";
export declare class ApplicationManager {
    private static server;
    static startApplication(appConfig: ApplicationConfig): Server;
    private static startServer;
    static stopServer(): Promise<boolean>;
}
