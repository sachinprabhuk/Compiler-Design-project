const fs = require("fs");
const { tokenArray } = require("./tokens");

const getFile = () => {
  const argFile = process.argv[2];
  if(argFile) {
    if(fs.existsSync(argFile))
      return argFile;
    console.log("No such file in current directory...");
    process.exit(0);
  }
  return "./code.txt";
}

let code = fs.readFileSync(getFile(), "utf8");

// comment removal...
code = code.replace(/\/\/.*/g, "");

// extracting lexems...
const re = /(\+\+|\-\-|\w+|\(|\))/g;
const spaceSep = code.replace(re, " $1 ").trim();
const uniformSpaceSep = spaceSep.replace(/\s+/g, " ");
const lexemes = uniformSpaceSep.split(" ");

// getting tokens...
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

const lexemeToken = lexemes.map(lexeme => getToken(lexeme, true));

console.log(lexemeToken);
