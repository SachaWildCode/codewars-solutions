/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

export const breakCamel = (string: string): string => {
  if (string.toUpperCase() === string) {
    return string;
  }
  return string.replace(/([a-z\d])([A-Z])/g, "$1 $2").trim();
};
