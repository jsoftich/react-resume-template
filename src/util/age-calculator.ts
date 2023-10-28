export function CalculateDiff(myDate:number[]) {
  const yearNow = +new Date().getFullYear();
  const monthNow = new Date().getMonth() + 1;
  const dayNow = +new Date().getDate();

  let yearsDiff = yearNow - myDate[0];
  let monthsDiff = monthNow - myDate[1];
  let daysDiff = dayNow - myDate[2];

  if (daysDiff < 0) {
    monthsDiff -= 1;
    daysDiff =
      monthNow !== 4 ? 30 - Math.abs(daysDiff) : 31 - Math.abs(daysDiff);
  }
  if (monthsDiff < 0) {
    yearsDiff -= 1;
    monthsDiff = 12 - Math.abs(monthsDiff);
  }

  const result = {
    years: yearsDiff.toString(),
    months: monthsDiff.toString(),
    days: daysDiff.toString(),
  };

  return result;
};