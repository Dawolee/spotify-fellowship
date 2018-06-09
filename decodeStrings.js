var decodeString = function(str) {
  let stack = []
  let decodedStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ']') {
      stack.push(str[i])
    } else {
      let temp = ''
      while (stack[stack.length - 1] !== '[') {
        temp = stack.pop() + temp
      }
      stack.pop()
      let counter = ''
      while (stack.length > 0 && Number(stack[stack.length - 1])) {
        counter = stack.pop() + counter
      }
      let repeat = ''
      while (counter > 0) {
        repeat += temp
        counter--
      }
      stack.push(repeat)
    }
  }
  while (stack.length > 0) {
    decodedStr = stack.pop() + decodedStr
  }
  return decodedStr
}
