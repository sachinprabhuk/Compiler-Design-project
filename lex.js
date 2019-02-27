const fs = require("fs");
const path = require("path");
const tokens = require("./grammar/tokens");

const keywordOrIden = str => {
  if(str === tokens.MAIN)
    return tokens.MAIN;
  else if(str === tokens.FOR)
    return tokens.FOR;
  else if(str === tokens.BEGIN)
    return tokens.BEGIN;
  else if(str === tokens.END)
    return tokens.END;
  return tokens.ID;
}

const getTokens = (filePath) => {
  const code = fs.readFileSync(filePath, "utf-8");
  const ans = [];
  let index = 0, len = code.length;
  let currChar;
  while(index < len) {
    currChar = code[index];
    if(!currChar) {
      ++index;
      continue;
    }
    switch(currChar) {
      case '+': 
        if(index+1 < len && code[index+1] === '+')
          ans.push(tokens.INCR);
        ans.push(tokens.PLUS);
      case '-':
        if(index+1 < len && code[index+1] === '-')
            ans.push(tokens.DECR);
        ans.push(tokens.MINUS);
      case '*':
        ans.push(tokens.PROD);
      case '/':
        ans.push(tokens.DIV);
      case '%':
        ans.push(tokens.MOD);
      case '<':
        if(index + 1 < len && code[index+1] === '=')
          ans.push(tokens.LE);
        ans.push(tokens.LT);
      case '>':
        if(index + 1 < len && code[index+1] === '=')
            ans.push(tokens.GE);
        ans.push(tokens.GT);
      case '!':
        if(index + 1 < len && code[index+1] === '=')
          ans.push(tokens.NE);
        ans.push(null);
      case '=':
        if(index + 1 < len && code[index+1] === '=')
          ans.push(tokens.EQ);
        ans.push(tokens.ASSI);
      case '(':
        ans.push(tokens.OB);
      case ')':
        ans.push(tokens.CB);
      case ';':
        ans.push(tokens.SC);
      case ',':
        ans.push(tokens.CM);
      default:
        if(currChar.match(/[0-9]/)) {
          while(index<len && !code[index].match(/[0-9]/))
            ++index;
          --index;
          ans.push(tokens.NUM);
        }else if(currChar.match(/[a-zA-Z]/)) {
          let temp = currChar;
          while(index<len && !code[index].match(/[a-zA-Z_]/))
            ++index, temp += code[index];
          --index;
          ans.push(keywordOrIden(temp));
        }
      ++index;
    }
  }
  return ans;
};

const defaultPath = path.join("./code.txt");

module.exports = function(filePath, test = false) {
  if (!filePath || !fs.existsSync(filePath)) filePath = defaultPath;

  let currTokenIndex = 0;
  const grammarTokens = getTokens(filePath, test);
  const tokenCount = grammarTokens.length;
  console.log(grammarTokens);
  return () => {
    if (currTokenIndex === tokenCount)  return null;
    return grammarTokens[currTokenIndex++];
  }
};
