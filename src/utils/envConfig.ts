interface EnvConfig {
    PORT: number;
    DATABASE_URL: string;

    JWT_ACCESS_SECRET: string
}

const getEnv = <T extends keyof EnvConfig>(key: T): EnvConfig[T] => {
    const value = process.env[key];

    switch (key) {
        case 'PORT':
            return parseInt(value as string, 10) as EnvConfig[T];
        default:
            return value as EnvConfig[T];
    }
};

export const ENV = new Proxy<EnvConfig>({} as EnvConfig, {
    get: (_, key: keyof EnvConfig) => getEnv(key)
});