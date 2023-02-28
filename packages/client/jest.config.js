import dotenv from 'dotenv';
dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
  },
};
