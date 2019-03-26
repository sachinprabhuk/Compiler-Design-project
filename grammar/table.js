const prods = require("./productions");
const NT = require("./NT");
const tokens = require("./tokens");
const sync = "sync";
const tkarray = tokens.tokenArray;

module.exports = {
  table: {
    [NT.s]: {
      [tokens.DT]: prods[1],
      "$": sync
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
      [tokens.DT]: prods[6],
      [tokens.FOR]: sync,
      [tokens.ID]: sync,
      [tokens.INCR]: sync,
      [tokens.DECR]: sync,
      [tokens.END]: sync
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
      [tokens.FOR]: prods[12],
      [tokens.DT]: sync,
      [tokens.ID]: sync,
      [tokens.INCR]: sync,
      [tokens.DECR]: sync,
      [tokens.END]: sync
    },
    [NT.init]: {
      [tokens.ID]: prods[13],
      [tokens.SC]: sync
    },
    [NT.comp]: {
      [tokens.ID]: prods[14],
      [tokens.SC]: sync,
      [tokens.NUM]: prods[14]
    },
    [NT.relop]: {
      [tokens.LT]: prods[15],
      [tokens.GT]: prods[16],
      [tokens.LE]: prods[18],
      [tokens.GE]: prods[17],
      [tokens.NE]: prods[20],
      [tokens.EQ]: prods[19],
      [tokens.ID]: sync,
      [tokens.NUM]: sync
    },
    [NT.expr]: {
      [tokens.ID]: prods[21],
      [tokens.INCR]: prods[22],
      [tokens.DECR]: prods[22],
      [tokens.SC]: sync,
      [tokens.CB]: sync
    },
    [NT.expr_]: {
      [tokens.ASSI]: prods[23],
      [tokens.INCR]: prods[24],
      [tokens.DECR]: prods[24],
      [tokens.SC]: sync,
      [tokens.CB]: sync
    },
    [NT.simpleExp]: {
      [tokens.ID]: prods[25],
      [tokens.NUM]: prods[25],
      [tokens.SC]: sync,
      [tokens.CB]: sync,
      [tokens.CM]: sync
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
      [tokens.CB]: prods[27]
    },
    [NT.arithop]: {
      [tokens.PLUS]: prods[28],
      [tokens.MINUS]: prods[29],
      [tokens.PROD]: prods[31],
      [tokens.DIV]: prods[30],
      [tokens.MOD]: prods[32],
      [tokens.ID]: sync,
      [tokens.NUM]: sync
    },
    [NT.unop]: {
      [tokens.INCR]: prods[33],
      [tokens.DECR]: prods[34],
      [tokens.SC]: sync,
      [tokens.ID]: sync,
      [tokens.CB]: sync
    },
    [NT.term]: {
      [tokens.ID]: prods[35],
      [tokens.NUM]: prods[36],
      [tokens.CB]: sync,
      [tokens.SC]: sync,
      [tokens.CM]: sync,
      [tokens.LT]: sync,
      [tokens.GT]: sync,
      [tokens.LE]: sync,
      [tokens.GE]: sync,
      [tokens.NE]: sync,
      [tokens.EQ]: sync,
      [tokens.PLUS]: sync,
      [tokens.MINUS]: sync,
      [tokens.PROD]: sync,
      [tokens.DIV]: sync,
      [tokens.MOD]: sync
    }
  },
  getMaxProdLenIn: function(tk) {
    let maxLen = 0, prod;
    for(let nt in NT)
      if(this.table[nt][tk]) {
        prod = this.table[nt][tk];
        maxLen = (
          prod === sync ?
          Math.max(4, maxLen) :
          Math.max(maxLen, prod.printable.length)
        );
      }
    return Math.max(maxLen, tk.length);
  },
  getEntryAt: function(nt, tk) {
    let entry = this.table[nt][tk]
    return (
      entry ? (entry === sync ? sync : entry.printable) 
      : ""
    );
  },
  print: function() {
    console.log("Parsing table: ");
    let temp, len, maxLenObj = {}, ntMaxLen = 20;
    // printing table header.
    process.stdout.write(" ".repeat(ntMaxLen) + " | ");
    for(let {token} of tkarray) {
      maxLenObj[token] = this.getMaxProdLenIn(token);
      process.stdout.write(
        `${token}${" ".repeat(maxLenObj[token]-token.length)} | `
      );
    }

    // printing separator bw table head and body.
    console.log();
    process.stdout.write("-".repeat(ntMaxLen+4));
    for(let {token} of tkarray)
      process.stdout.write("-".repeat(maxLenObj[token]+3));
    console.log();

    // printing table body.
    for(let nt in NT) {
      process.stdout.write(
        `${nt}${" ".repeat(ntMaxLen - nt.length)} | `
      );
      for(let {token} of tkarray) {
        temp = this.getEntryAt(nt, token);
        len = temp.length;
        process.stdout.write(
          `${temp}${" ".repeat(maxLenObj[token]-len)} | `
        );
      }
      console.log();
    }

    // printing table end
    process.stdout.write("-".repeat(ntMaxLen+4));
    for(let {token} of tkarray)
      process.stdout.write("-".repeat(maxLenObj[token]+3));
    console.log();

  }
}