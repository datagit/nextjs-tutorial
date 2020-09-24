module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
};