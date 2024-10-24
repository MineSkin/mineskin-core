import winston from "winston";
export interface ILogProvider {
    l: winston.Logger;
}
