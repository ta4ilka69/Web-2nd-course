export const validateInputs = (x, y, r, setError) => {
  let x1, y1, r1;
  x1 = parseFloat(x);
  y1 = parseFloat(y);
  r1 = parseFloat(r);
  if (isNaN(x1) || isNaN(y1) || isNaN(r1)) {
    setError("Invalid float input");
    return false;
  }
  if (x1 < -5 || x1 > 5) {
    setError("x is out of range");
    return false;
  }
  if (y1 < -5 || y1 > 5) {
    setError("y is out of range");
    return false;
  }
  if (r1 <=0 || r1 > 5) {
    setError("r must be in (0;5]");
    return false;
  }
  return true;
};
