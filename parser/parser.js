const { table } = require("../grammar/table");
const NT = require("../grammar/NT");
const { epsilon } = require("../grammar/tokens");

const getEntry = (top, curr, str) => {

  return `${top}${" ".repeat(20 - top.length)}${curr}${" ".repeat(20 - curr.length)}${str}`;
}

module.exports = function(getNextToken) {
  const stack = ["$", NT.s];
  let currToken = getNextToken();
  let stackTop;
  console.log(getEntry("Stack top", "curr token", "Output"));
  console.log("-".repeat(80));
  let valid = true;

  while (true) {
    stackTop = stack[stack.length-1];
    
    // && stackTop === "$"
    if (currToken === "$" || currToken === null || stack.length < 0) {
      console.log(
        getEntry(stackTop, currToken, `Parsing done!`)
      );
      console.log("----------------------------");
      if(!valid || stackTop !== "$")
        console.log("Invalid input!");
      else
        console.log("Valid input!");
      console.log("----------------------------");      
      break;
    } 

    if(!table[stackTop]) {
      // top of the stack is a token(terminal)
      if(stackTop === currToken) {
        console.log(getEntry(stackTop, currToken, `Match ${stackTop}`));
        stack.pop();
        currToken = getNextToken();
      }else {
        valid = false;
        if(stack.length === 2) {
          console.log(
            getEntry(stackTop, currToken, `Skipping curr input!`)
          );
          currToken = getNextToken();
        }else {
          console.log(getEntry(stackTop, currToken, `Mismatch!Popping stack`));
          stack.pop();
        }
      }
    }else {
      // top of the stack is a non-terminal
      let prod = table[stackTop][currToken];
      if(prod === undefined) {
        valid = false;
        console.log(getEntry(stackTop, currToken, `no entry! skipping i/p`));
        currToken = getNextToken();
      }
      else if(prod === "sync") {
        valid = false;
        if(stack.length === 2) {
          console.log(getEntry(stackTop, currToken, `sync! skipping i/p`));
          currToken = getNextToken();
        }
        else {
          console.log(getEntry(stackTop, currToken, `sync! popping stack`));
          stack.pop();
        }
      }
      else {
        console.log(getEntry(stackTop, currToken, `o/p ${prod.printable}`));
        stack.pop();
        for (let i = prod.body.length - 1; i >= 0; --i)
          if (prod.body[i] !== epsilon) 
            stack.push(prod.body[i]);
      }
    }

  }
};
