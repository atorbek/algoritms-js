function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge1(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
  return age > 18 || confirm('Родители разрешили?');
}

function min(x, y) {
  return x < y ? x : y;
}

function pow(x, n) {
  return x > 1 && n > 1 ? x ** n : new Error('Error2');
}
