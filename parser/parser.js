const table = require("../grammar/table");
const NT = require("../grammar/NT");
const { epsilon } = require("../grammar/tokens");

module.exports = function(getNextToken) {
  const stack = [NT.s];
  let currToken = getNextToken();
  while (true) {
    // console.log(stack, currInput);
    if (stack.length === 0 && currToken === null) break;
    // console.log(stack, currToken);
    if (currToken === stack[stack.length - 1]) {
      stack.pop();
      currToken = getNextToken();
    } else {
      const prod = table[stack[stack.length - 1]][currToken];
      if (!prod) {
        console.log("Error!!");
        // console.log(stack, currInput);
        process.exit(1);
      }
      prod.print();
      stack.pop();
      for (let i = prod.body.length - 1; i >= 0; --i)
        if (prod.body[i] !== epsilon) stack.push(prod.body[i]);
    }
  }
};
