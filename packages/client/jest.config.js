import dotenv from 'dotenv';
dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    __DEV_MODE__: process.env.NODE_ENV === 'development',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.ts',
  },
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^contexts(.*)$': '<rootDir>/src/contexts$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^img(.*)$': '<rootDir>/src/img$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^data(.*)$': '<rootDir>/src/data$1',
    '^game(.*)$': '<rootDir>/src/game$1',
    '^store(.*)$': '<rootDir>/src/store$1',
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
};
