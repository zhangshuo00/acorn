
import {parse} from "../acorn/src"
import {simple} from "../acorn-walk/src"

// const acorn = require("../acorn/src/index.js")
const code = "let a = 0"

const myParser = parse(code, {ecmaVersion: 2022})

simple(myParser, {
  Program(node) {
    // eslint-disable-next-line no-console
    console.log(node, "program")
  },
  Identifier(node) {
    // eslint-disable-next-line no-console
    console.log(node.name, "identifier")
  },
  Literal(node) {
    // eslint-disable-next-line no-console
    console.log(node.value, "literal")
  }
})
// eslint-disable-next-line no-console
console.log(myParser)
