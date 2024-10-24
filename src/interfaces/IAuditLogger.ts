export interface IAuditLogger {
    log(tag: string, message: string, data?: any): void;

    warn(tag: string, message: string, data?: any): void;

    error(tag: string, message: string, data?: any): void;
}
