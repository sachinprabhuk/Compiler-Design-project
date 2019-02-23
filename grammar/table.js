const prods = require("./productions");
const NT = require("./NT");
const tokens = require("./tokens");

module.exports = {
  [NT.s]: {
    [tokens.DT]: prods[1]
  },
  [NT.stmt]: {
    [tokens.DT]: prods[2],
    [tokens.END]: prods[5],
    [tokens.ID]: prods[4],
    [tokens.FOR]: prods[3],
    [tokens.INCR]: prods[4],
    [tokens.DECR]: prods[4]
  },
  [NT.decl]: {
    [tokens.DT]: prods[6]
  },
  [NT.vars]: {
    [tokens.SC]: prods[9],
    [tokens.ID]: prods[7],
    [tokens.CM]: prods[8]
  },
  [NT.vars_]: {
    [tokens.SC]: prods[10],
    [tokens.ID]: prods[10],
    [tokens.ASSI]: prods[11],
    [tokens.CM]: prods[10]
  },
  [NT.loop]: {
    [tokens.FOR]: prods[12]
  },
  [NT.init]: {
    [tokens.ID]: prods[13]
  },
  [NT.comp]: {
    [tokens.ID]: prods[14],
    [tokens.NUM]: prods[14]
  },
  [NT.relop]: {
    [tokens.LT]: prods[15],
    [tokens.GT]: prods[16],
    [tokens.LE]: prods[18],
    [tokens.GE]: prods[17],
    [tokens.NE]: prods[20],
    [tokens.EQ]: prods[19],
  },
  [NT.expr]: {
    [tokens.ID]: prods[21],
    [tokens.INCR]: prods[22],
    [tokens.DECR]: prods[22]
  },
  [NT.expr_]: {
    [tokens.ASSI]: prods[23],
    [tokens.INCR]: prods[24],
    [tokens.DECR]: prods[24]
  },
  [NT.simpleExp]: {
    [tokens.ID]: prods[25],
    [tokens.NUM]: prods[25]
  },
  [NT.simpleExp_]: {
    [tokens.SC]: prods[27],
    [tokens.ID]: prods[27],
    [tokens.CM]: prods[27],
    [tokens.PLUS]: prods[26],
    [tokens.MINUS]: prods[26],
    [tokens.DIV]: prods[26],
    [tokens.PROD]: prods[26],
    [tokens.MOD]: prods[26],
  },
  [NT.arithop]: {
    [tokens.PLUS]: prods[28],
    [tokens.MINUS]: prods[29],
    [tokens.PROD]: prods[31],
    [tokens.DIV]: prods[30],
    [tokens.MOD]: prods[32],
  },
  [NT.unop]: {
    [tokens.INCR]: prods[33],
    [tokens.DECR]: prods[34],
  },
  [NT.term]: {
    [tokens.ID]: prods[35],
    [tokens.NUM]: prods[36]
  }
}