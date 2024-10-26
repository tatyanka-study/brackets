module.exports = function check(str, bracketsConfig) {
  function removeBrackets(str) {
    for (let [open, close] of bracketsConfig) {
      let pair = open + close;
      if (str.includes(pair)) {
        const a = str.replace(pair, '')
        return removeBrackets(a);        
      }
    }
    return str;
  }
  return removeBrackets(str) ==='';
}
