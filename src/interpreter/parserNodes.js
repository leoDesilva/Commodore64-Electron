//TODO add in IF and FOR nodes

class ProgramNode {
    constructor(exprs = null) {
        this.type = "PROGRAM"
        this.exprs = exprs
    }
}

class NumberNode {
    constructor(tok) {
        this.type = "INT"
        this.tok = tok
    }
}

class StringNode {
    constructor(tok) {
        this.type = "STRING"
        this.tok = tok
    }
}

class VarAccessNode {
    constructor(var_name_tok) {
        this.type = "VAR_ACCESS"
        this.var_name_tok = var_name_tok
    }
}

class VarAssignNode {
    constructor(var_name_tok, value_node) {
        this.type = "VAR_ASSIGN"
        this.var_name_tok = var_name_tok;
        this.value_node = value_node;
    }
}

class BinOpNode {
    constructor(left_node, op_tok, right_node) {
        this.type = "BIN_OP"
        this.left_node = left_node;
        this.op_tok = op_tok;
        this.right_node = right_node;
    }
}

class UnaryOpNode {
    constructor(op_tok, node) {
        this.type = "UNARY_OP"
        this.op_tok = op_tok;
        this.node = node
    }
}

class FunctionCallNode {
    constructor(var_name_tok, parameters) {
        this.var_name_tok = var_name_tok;
        this.parameters = parameters;
    }
}

class IfNode {
  constructor(start, end, conditions){
    this.start = start
    this.end = end
    this.conditions = conditions
  }
}

//{
//  seperator = null 
//  comp = 
//}

class ConditionNode {
  constructor(prog){
    this.conditions = prog
  }
}
