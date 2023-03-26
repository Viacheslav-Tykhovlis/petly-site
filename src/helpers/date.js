// convert string to date

export function convertStringToDate(data) {
  if (data) {
    const [day, month, year] = data.split('.');
    const dateObject = new Date(year, month - 1, day);
    return dateObject;
  }
}
