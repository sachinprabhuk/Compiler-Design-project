const fs = require("fs");
const path = require("path");
const { tokenArray } = require("../grammar/tokens");

const getToken = (lexeme, test = false) => {
  if (lexeme.length === 0)
    return (test ? { token: null, lexeme: null } : null);

  for (let i = 0; i < tokenArray.length; ++i)
    if (lexeme.match(tokenArray[i].pattern))
      return (test ? {
        token: tokenArray[i].token,
        lexeme: lexeme
      } : tokenArray[i].token);
  
  return getToken(lexeme.substr(1), test);
};

const getTokens = (filePath, test) => {
  const code = fs.readFileSync(filePath, "utf8");
  return code
    .replace(/\/\/.*/g, "")
    .replace(/(\/\*(?:(?!\*\/).|[\n\r])*\*\/)/g, "")
    .replace(/(\+\+|\-\-|\w+|\(|\)|\+|-|\*|\/|\%)/g, " $1 ")
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map(lexeme => getToken(lexeme, test));
}

const defaultPath = path.join(__dirname, "./default.txt");

module.exports = function(filePath, printToken = false, test=false) {
  if(!filePath || !fs.existsSync(filePath))
    filePath = defaultPath;

  let currTokenIndex = 0;    
  const tokens = getTokens(filePath, test);
  tokens.push("$");
  const tokenCount = tokens.length;
  if(printToken) {
    console.log("\n\n\n\nTokens: ");
    console.log("-".repeat(100));    
    process.stdout.write("tokens: ");
    tokens.forEach(el => {
      process.stdout.write(el + " ");
    });
    console.log();
    console.log("-".repeat(100), "\n");
  }
    
  return () => {
    if(currTokenIndex >= tokenCount)
      return null;
    return tokens[currTokenIndex++];
  }

}

