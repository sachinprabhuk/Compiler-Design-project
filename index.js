const { argv } = process;
const filePath = argv.length > 2 ? argv[2] : null;
const getNextToken = require("./lexer/lex")(filePath);


// getNextToken is a function which is passed to parser.
// so that it can access the tokens...
require("./parser/parser")(getNextToken);

