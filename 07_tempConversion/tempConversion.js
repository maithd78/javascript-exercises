const convertToCelsius = function(f) {
  // c = Math.round((f - 32) / (9/5)*10) / 10;
  c = (f - 32) / (9/5)
  r = Math.round(c * 10) / 10;
  return r;
};

const convertToFahrenheit = function(c) {
  // f = Math.round(((c * 9/5) + 32) * 10) / 10;
  f = (c * 9/5) + 32
  r = Math.round(f *10) / 10;
  return r
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
