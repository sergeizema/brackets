module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.map ( (e) => e.join('') );

  return strProcessing(str, config) ? false : true;
}

function strProcessing (str, arg) {
  for (let i = 0; i < arg.length; i++) {
    if (str.includes(arg[i])) {
      str = str.replace(arg[i], '');
      i = -1;
    }
  }
  return str;
}