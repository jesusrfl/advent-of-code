export const execute = (input) => {
  let total = 0;

  input.forEach((line) => {
    let first = null;
    let last = null;

    line.split('').forEach((char) => {
      if (isNaN(char)) {
        return;
      }

      first = first || char;
      last = char;
    });

    total += Number(first + last);
  });

  return total;
};
