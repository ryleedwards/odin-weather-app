function cToF(celsius) {
  let cTemp = celsius;
  let cToFahr = Math.round((cTemp * 9) / 5 + 32);
  return cToFahr;
}

function fToC(fahreinheit) {
  let fTemp = fahrenheit;
  let fToCel = Math.round(((fTemp - 32) * 5) / 9);
  return fToCel;
}

export { cToF, fToC };
