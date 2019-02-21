const ID = "ID";
const ARITHOP = "ARITHOP";
const RELOP = "RELOP";
const DATATYPE = "DATATYPE";
const NUMBER = "NUMBER";
const SAMEOP = "SAMEOP";
const BEGIN = "BEGIN";
const END = "END";
const OPENBRACKET = "OPENBRACKET";
const CLOSEBRACKET = "CLOSEBRACKET";
const MAIN = "MAIN";
const FOR = "FOR";
const ASSIGNMENT = "ASSIGNMENT";
const STM_TERMINATOR = "STM_TERMINATOR";
const COMMA = "COMMA";

const tokenArray = [
  {
    token: ASSIGNMENT,
    pattern: /^=$/
  },
  {
    token: COMMA,
    pattern: /^,$/
  },
  {
    token: STM_TERMINATOR,
    pattern: /^;$/
  },
  {
    token: ARITHOP,
    pattern: /^(\+|\-|\*|\/|\*\*|\^)$/
  },
  {
    token: RELOP,
    pattern: /^(<|>|!=|>=|<=|==)$/
  },
  {
    token: END,
    pattern: /end/
  },
  {
    token: FOR,
    pattern: /for/
  },
  {
    token: DATATYPE,
    pattern: /^(int|bool|void|float)$/
  },
  {
    token: SAMEOP,
    pattern: /\+\+|\-\-/
  },
  {
    token: BEGIN,
    pattern: /^begin$/
  },
  {
    token: NUMBER,
    pattern: /^(\d+)$/
  },
  {
    token: MAIN,
    pattern: /^main$/
  },
  {
    token: OPENBRACKET,
    pattern: /^\($/
  },
  {
    token: CLOSEBRACKET,
    pattern: /^\)$/
  },
  {
    token: ID,
    pattern: /^([a-zA-Z][a-zA-Z0-9_]*)$/
  },
];


module.exports = {
  ID, ARITHOP, RELOP, DATATYPE, NUMBER, SAMEOP, BEGIN, END, OPENBRACKET,
  CLOSEBRACKET, MAIN, FOR, ASSIGNMENT, STM_TERMINATOR, COMMA,
  tokenArray
}