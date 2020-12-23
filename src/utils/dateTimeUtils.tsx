export const addMinutes = (date: number, minutes: number): number => {
  return Math.round(new Date().getTime() / 1000) + minutes * 60;
};

export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));
