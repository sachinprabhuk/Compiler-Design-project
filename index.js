const { argv } = process;
const filePath = argv.length > 2 ? argv[2] : null;
const table = require("./grammar/table");

if(argv.find(arg => arg === "-pt") !== undefined)
  table.print();

const getNextToken = require("./lexer/lex")(
  filePath, 
  argv.find(arg => arg === "-tk") !== undefined
);

// getNextToken is a function which is passed to parser.
// so that it can access the tokens...
require("./parser/parser")(getNextToken);