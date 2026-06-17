//ConfigManager.ts

export class ConfigManager {
    private static instance: ConfigManager;

    private constructor() {}

    static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    getBaseUrl() {
        return 'https://example.com';
    }
}

Usage:
const config = ConfigManager.getInstance();
await page.goto(config.getBaseUrl());