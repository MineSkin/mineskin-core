export interface IFlagProvider {
    isEnabled(key: string): Promise<boolean>;

    getValue(key: string): Promise<any>;
}
