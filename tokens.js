const DT = "DT";
const MAIN = "MAIN";
const OB = "OB";
const CB = "CB";
const BEGIN = "BEGIN";
const END = "END";
const SC = "SC";
const CM = "CM";
const ID = "ID";
const ASSI = "ASSI";
const NUM = "NUM";
const RELOP = "RELOP";
const INCR = "INCR";
const DECR = "DECR";
const PLUS = "PLUS";
const MINUS = "MINUS";
const PROD = "PROD";
const DIV = "DIV";
const MOD = "MOD";

const tokenArray = [
  {
    token: ASSI,
    pattern: /^=$/
  },
  {
    token: CM,
    pattern: /^,$/
  },
  {
    token: SC,
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
    token: DT,
    pattern: /^(int|bool|void|float)$/
  },
  {
    token: PLUS,
    patter: /^\+$/
  },
  {
    token: MINUS,
    patter: /^-$/
  },
  {
    token: DIV,
    patter: /^\/$/
  },
  {
    token: PROD,
    patter: /^\*$/
  },
  {
    token: MOD,
    patter: /^%$/
  },
  {
    token: INCR,
    pattern: /\+\+|\-\-/
  },
  {
    token: DECR,
    pattern: /\+\+|\-\-/
  },
  {
    token: BEGIN,
    pattern: /^begin$/
  },
  {
    token: NUM,
    pattern: /^(\d+)$/
  },
  {
    token: MAIN,
    pattern: /^main$/
  },
  {
    token: OB,
    pattern: /^\($/
  },
  {
    token: CB,
    pattern: /^\)$/
  },
  {
    token: ID,
    pattern: /^([a-zA-Z][a-zA-Z0-9_]*)$/
  },
];

module.exports = {
  DT, MAIN, OB, CB, BEGIN, END, SC, CM, ID, ASSI, NUM, RELOP, INCR,
  DECR, PLUS, MINUS, PROD, DIV, MOD, tokenArray
}
