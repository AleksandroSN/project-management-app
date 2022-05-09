export const checkExpTimeToken = (expTime: number): boolean => {
  const currentTimeInSeconds = Date.now() / 1000;
  return expTime > currentTimeInSeconds;
};
