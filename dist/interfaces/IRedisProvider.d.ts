import { RedisClientType } from "redis";
export interface IRedisProvider {
    scripts: Record<string, RedisScript>;
    client: RedisClientType;
    sub: RedisClientType;
    pub: RedisClientType;
    close(): Promise<void>;
}
export type RedisScript = {
    script: string;
    sha: string;
};
