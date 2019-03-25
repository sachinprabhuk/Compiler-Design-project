# LL(1) parser for C programs.
---
#### For Parsing your C code (say *code.c* in current directory)
    node index.js code.c
    
#### For Parsing default file(default.c)
    node index.js

### options
- tk - for logging *tokens*.
- pt - for logging *parse table*.
    
output of this program will be a set of productions, which are the **left most derivativation** for the given code.