const { argv } = process;
const filePath = argv.length > 2 && argv[2] ? argv[2] : null;
const getNextToken = require("./lexer/lex")(filePath);

const parser = require("./parser/parser")(getNextToken);

process.on("SIGTERM", e => {
  console.log('exiting!');
  console.log(e);
})
