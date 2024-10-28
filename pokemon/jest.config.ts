// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   roots: ["<rootDir>/src"], // ajusta la ruta según la estructura de tu proyecto
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

// export default config;

// jest.config.ts
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Para manejar CSS
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Para manejar imágenes
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
};
