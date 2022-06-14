
import {parse} from "../acorn/src"
import {full} from "../acorn-walk/src"

// const acorn = require("../acorn/src/index.js")
// const code = "let a = 0"
const functionCode = "function ast(){}"

const myParser = parse(functionCode, {ecmaVersion: 2022})

full(myParser, (node) => {
  if (node.type === "Identifier")
    node.name = "success"
})

// simple(myParser, {
//   Program(node) {
//     // eslint-disable-next-line no-console
//     console.log(node, "program")
//   },
//   Identifier(node) {
//     // eslint-disable-next-line no-console
//     console.log(node.name, "identifier")
//   },
//   Literal(node) {
//     // eslint-disable-next-line no-console
//     console.log(node.value, "literal")
//   }
// })
// eslint-disable-next-line no-console
console.log(myParser)
