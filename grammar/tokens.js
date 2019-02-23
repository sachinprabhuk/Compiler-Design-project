const DT = "DT";
const MAIN = "MAIN";
const OB = "OB";
const CB = "CB";
const BEGIN = "BEGIN";
const END = "END";
const SC = "SC";
const ID = "ID";
const ASSI = "ASSI";
const CM = "CM";
const FOR = "FOR";
const LT = "LT";
const GT = "GT";
const LE = "LE";
const GE = "GE";
const NE = "NE";
const EQ = "EQ";
const PLUS = "PLUS";
const MINUS = "MINUS";
const PROD = "PROD";
const DIV = "DIV";
const MOD = "MOD";
const INCR = "INCR";
const DECR = "DECR";
const NUM = "NUM";

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
  { token: LT, pattern: /^<$/ },
  { token: GT, pattern: /^>$/ },
  { token: LE, pattern: /^<=$/ },
  { token: GE, pattern: /^>=$/ },
  { token: NE, pattern: /^!=$/ },
  { token: EQ, pattern: /^==$/},
  {
    token: END,
    pattern: /^end$/
  },
  {
    token: FOR,
    pattern: /^for$/
  },
  {
    token: DT,
    pattern: /^(int|bool|void|float)$/
  },
  {
    token: PLUS,
    pattern: /^\+$/
  },
  {
    token: MINUS,
    pattern: /^-$/
  },
  {
    token: DIV,
    pattern: /^\/$/
  },
  {
    token: PROD,
    pattern: /^\*$/
  },
  {
    token: MOD,
    pattern: /^%$/
  },
  {
    token: INCR,
    pattern: /^(\+\+)$/
  },
  {
    token: DECR,
    pattern: /^(\-\-)$/
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
  DT, MAIN, OB, CB, BEGIN, END, SC, ID, ASSI, CM, FOR, LT, GT, LE,
  GE, NE, EQ, PLUS, MINUS, PROD, DIV, MOD, INCR, DECR, NUM,
  tokenArray
}
