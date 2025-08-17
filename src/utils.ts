import config from './config';

export const add = (a: number, b: number): number => {
  if (config.debug) {
    console.log(`Calling add functin with arguments ${a} and ${b}`);
  }
  return a + b;
};
