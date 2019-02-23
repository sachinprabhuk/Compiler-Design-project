const { argv } = process;
const filePath = argv.length > 2 && argv[2] ? argv[2] : "code.txt";
const getNextToken = require("./lexer/lex")(filePath, true);

let token = null;
do {
  token = getNextToken();
  console.log(token);
} while (token != null);
