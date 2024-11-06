interface EnvConfig {
    PORT: number;
    DATABASE_URL: string;
}

const getEnv = <T extends keyof EnvConfig>(key: T): EnvConfig[T] => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }

    switch (key) {
        case 'PORT':
            return parseInt(value, 10) as EnvConfig[T];
        default:
            return value as EnvConfig[T];
    }
};

export const ENV = new Proxy<EnvConfig>({} as EnvConfig, {
    get: (_, key: keyof EnvConfig) => getEnv(key)
});