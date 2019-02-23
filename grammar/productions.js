const tokens = require("./tokens");
const NT = require("./NT");
// NT === non terminal

function Production(head, body) {
  // head must be a NT
  // body must be an array of NT and tokens
  this.head = head;
  this.body = body;
  this.printable = body.reduce((acc, curr) => {
    return (acc + ` ${curr}`);
  }, `${head} ->`);
}

Production.prototype.print = function(){
  console.log(this.printable);
}

const prods = [new Production(NT.vars, [tokens.epsilon])];
prods.push(
  new Production(NT.s, [tokens.DT, tokens.MAIN, tokens.OB, tokens.CB, tokens.BEGIN, NT.stmt, tokens.END])
);
prods.push(
  new Production(NT.stmt, [NT.decl, NT.stmt])
);
prods.push(
  new Production(NT.stmt, [NT.loop, NT.stmt])
);
prods.push(
  new Production(NT.stmt, [NT.expr, tokens.SC, NT.stmt])
);
prods.push(
  new Production(NT.stmt, [tokens.epsilon])
);


prods.push(
  new Production(NT.decl, [tokens.DT, NT.vars, tokens.SC])
)
prods.push(
  new Production(NT.vars, [tokens.ID, NT.vars_])
);
prods.push(
  new Production(NT.vars, [tokens.CM, NT.vars])
);
prods.push(
  new Production(NT.vars, [tokens.epsilon])
);
prods.push(
  new Production(NT.vars_, [NT.vars])
);
prods.push(
  new Production(NT.vars_, [tokens.ASSI, NT.simpleExp, NT.vars])
);


prods.push(
  new Production(
    NT.loop,
    [tokens.FOR, tokens.OB, NT.init, tokens.SC, NT.comp, tokens.SC, NT.expr, tokens.CB, tokens.BEGIN, NT.stmt, tokens.END]
  )
)
prods.push(
  new Production(NT.init, [tokens.ID, tokens.ASSI, NT.simpleExp])
)
prods.push(
  new Production(NT.comp, [NT.term, NT.relop, NT.term])
);
prods.push(
  new Production(NT.relop, [tokens.LT])
);
prods.push(
  new Production(NT.relop, [tokens.GT])
);
prods.push(
  new Production(NT.relop, [tokens.GE])
);
prods.push(
  new Production(NT.relop, [tokens.LE])
);
prods.push(
  new Production(NT.relop, [tokens.EQ])
);
prods.push(
  new Production(NT.relop, [tokens.NE])
);

prods.push(
  new Production(NT.expr, [tokens.ID, NT.expr_])
);
prods.push(
  new Production(NT.expr, [NT.unop, tokens.ID])
);

prods.push(
  new Production(NT.expr_, [tokens.ASSI, NT.simpleExp])
);
prods.push(
  new Production(NT.expr_, [NT.unop])
);

prods.push(
  new Production(NT.simpleExp, [NT.term, NT.simpleExp_])
);
prods.push(
  new Production(NT.simpleExp_, [NT.arithop, NT.term, NT.simpleExp_])
);
prods.push(
  new Production(NT.simpleExp_, [tokens.epsilon])
);

prods.push(
  new Production(NT.arithop, [tokens.PLUS])
);
prods.push(
  new Production(NT.arithop, [tokens.MINUS])
);
prods.push(
  new Production(NT.arithop, [tokens.DIV])
);
prods.push(
  new Production(NT.arithop, [tokens.PROD])
);
prods.push(
  new Production(NT.arithop, [tokens.MOD])
);

prods.push(
  new Production(NT.unop, [tokens.INCR])
);
prods.push(
  new Production(NT.unop, [tokens.DECR])
);

prods.push(
  new Production(NT.term, [tokens.ID])
);
prods.push(
  new Production(NT.term, [tokens.NUM])
);


// for(let i=1;i<prods.length;++i)
//   process.stdout.write(`${i}. `), prods[i].print();

module.exports = prods;