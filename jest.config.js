module.exports = {
  verbose: true,
  automock: false,
  setupFilesAfterEnv: ["<rootDir>/testSetup.jsx"],
  testPathIgnorePatterns: ["./results", "./.ci_cache"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|tsx?|ts?)$",
  moduleFileExtensions: ["tsx", "ts", "js"],
  moduleDirectories: ["node_modules", "src/**/*"],
  moduleNameMapper: {
    "\\.(jpg|gif|png)$": "<rootDir>/__mocks__/imageMock.js",
  },
};
