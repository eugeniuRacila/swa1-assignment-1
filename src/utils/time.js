export const isBetweenHours = (date, hours = 24) => {
  const now = new Date();
  const then = new Date(date);

  const msBetweenDates = Math.abs(then.getTime() - now.getTime());
  const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

  return hoursBetweenDates < 24;
};
